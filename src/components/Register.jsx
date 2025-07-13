import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Mail, Lock, User, Phone } from 'lucide-react';
import loginBackground from '../assets/login_background.png';

const Register = ({ onClose, onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'student',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // التحقق من تطابق كلمات المرور
    if (formData.password !== formData.confirmPassword) {
      setError('كلمات المرور غير متطابقة');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          userType: formData.userType,
          phone: formData.phone
        }),
      });

      const data = await response.json();

      if (data.success) {
        onRegister(data.user);
        onClose();
      } else {
        setError(data.message || 'حدث خطأ أثناء إنشاء الحساب');
      }
    } catch (err) {
      console.error('Register error:', err);
      setError('تعذر الاتصال بالخادم. تأكد من تشغيل الواجهة الخلفية.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
    >
      <div
        className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden w-full max-w-lg mx-auto max-h-[90vh] overflow-y-auto"
        style={{ backgroundImage: `url(${loginBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/60 dark:from-gray-900/80 dark:to-gray-800/60"></div>
        
        <div className="relative p-8 md:p-10 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-10"
            aria-label="إغلاق"
          >
            <X size={24} />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-2 font-arabic">انضم إلينا</h2>
            <p className="text-lg opacity-90">أنشئ حسابك الجديد</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 opacity-90" htmlFor="name">
                الاسم الكامل
              </label>
              <div className="relative">
                <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-200 transition-all duration-300"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 opacity-90" htmlFor="email">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-200 transition-all duration-300"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 opacity-90" htmlFor="phone">
                رقم الهاتف (اختياري)
              </label>
              <div className="relative">
                <Phone size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-200 transition-all duration-300"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 opacity-90" htmlFor="userType">
                نوع المستخدم
              </label>
              <div className="relative">
                <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-200 transition-all duration-300"
                >
                  <option value="student" className="bg-gray-800 text-white">طالب</option>
                  <option value="teacher" className="bg-gray-800 text-white">معلم</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 opacity-90" htmlFor="password">
                كلمة المرور
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-200 transition-all duration-300"
                  placeholder="أدخل كلمة المرور"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 opacity-90" htmlFor="confirmPassword">
                تأكيد كلمة المرور
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-200 transition-all duration-300"
                  placeholder="أعد إدخال كلمة المرور"
                />
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-200 text-sm text-center bg-red-500/20 p-3 rounded-lg border border-red-300/30"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
            >
              {isLoading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب جديد'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white opacity-90 text-sm">
              لديك حساب بالفعل؟{' '}
              <a href="#" className="font-bold hover:underline transition-colors"
                 onClick={() => { onClose(); /* Trigger login modal here if needed */ }}>
                سجل الدخول
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;

