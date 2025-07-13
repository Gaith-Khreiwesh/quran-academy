import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Eye, EyeOff, Shield, CheckCircle } from 'lucide-react';
import loginBackground from '../assets/login_background.png';

const Login = ({ onClose, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'student'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Real-time validation
  useEffect(() => {
    const errors = {};
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'البريد الإلكتروني غير صحيح';
    }
    if (formData.password && formData.password.length < 6) {
      errors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    }
    setValidationErrors(errors);
    setIsFormValid(formData.email && formData.password && Object.keys(errors).length === 0);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        onLogin(data.user);
        onClose();
      } else {
        setError(data.message || 'حدث خطأ أثناء تسجيل الدخول');
      }
    } catch (err) {
      console.error('Login error:', err);
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
    setError('');
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.4
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: 50,
      transition: { duration: 0.3 }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden w-full max-w-md mx-auto"
          style={{ 
            backgroundImage: `linear-gradient(135deg, rgba(46, 139, 87, 0.95), rgba(218, 165, 32, 0.85)), url(${loginBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          onClick={(e) => e.stopPropagation()}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Header */}
          <div className="relative p-8 text-white text-center">
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Shield size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2 font-arabic">مرحباً بعودتك</h2>
              <p className="text-white/90 text-sm">سجل الدخول للوصول إلى حسابك</p>
            </motion.div>
          </div>

          {/* Form */}
          <div className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* User Type */}
              <motion.div
                variants={inputVariants}
                whileFocus="focus"
                className="space-y-2"
              >
                <label className="block text-white/90 text-sm font-medium">نوع المستخدم</label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/15 border border-white/20 focus:border-white/40 focus:outline-none text-white placeholder-white/60 transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="student" className="bg-gray-800 text-white">طالب</option>
                    <option value="teacher" className="bg-gray-800 text-white">معلم</option>
                    <option value="admin" className="bg-gray-800 text-white">إداري</option>
                  </select>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={inputVariants}
                whileFocus="focus"
                className="space-y-2"
              >
                <label className="block text-white/90 text-sm font-medium">البريد الإلكتروني</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/15 border border-white/20 focus:border-white/40 focus:outline-none text-white placeholder-white/60 transition-all duration-300 backdrop-blur-sm"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                  {formData.email && !validationErrors.email && (
                    <CheckCircle size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-green-400" />
                  )}
                </div>
                {validationErrors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-300 text-xs"
                  >
                    {validationErrors.email}
                  </motion.p>
                )}
              </motion.div>

              {/* Password */}
              <motion.div
                variants={inputVariants}
                whileFocus="focus"
                className="space-y-2"
              >
                <label className="block text-white/90 text-sm font-medium">كلمة المرور</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-12 py-3 rounded-xl bg-white/15 border border-white/20 focus:border-white/40 focus:outline-none text-white placeholder-white/60 transition-all duration-300 backdrop-blur-sm"
                    placeholder="أدخل كلمة المرور"
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </motion.button>
                </div>
                {validationErrors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-300 text-xs"
                  >
                    {validationErrors.password}
                  </motion.p>
                )}
              </motion.div>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    className="bg-red-500/20 border border-red-400/30 rounded-xl p-3 text-red-200 text-sm text-center backdrop-blur-sm"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={!isFormValid || isLoading}
                className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg relative overflow-hidden"
                whileHover={{ scale: isFormValid ? 1.02 : 1 }}
                whileTap={{ scale: isFormValid ? 0.98 : 1 }}
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center"
                    >
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2"></div>
                      جاري تسجيل الدخول...
                    </motion.div>
                  ) : (
                    <motion.span
                      key="text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      تسجيل الدخول
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>

            {/* Footer Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-center space-y-3"
            >
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors block">
                نسيت كلمة المرور؟
              </a>
              <p className="text-white/70 text-sm">
                ليس لديك حساب؟{' '}
                <a href="#" className="text-white font-semibold hover:underline transition-colors">
                  سجل الآن
                </a>
              </p>
            </motion.div>

            {/* Demo Accounts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 p-4 bg-black/20 rounded-xl border border-white/10 backdrop-blur-sm"
            >
              <h4 className="text-white font-semibold text-sm mb-3 text-center">حسابات تجريبية</h4>
              <div className="space-y-2 text-xs text-white/80">
                <div className="flex justify-between">
                  <span>طالب:</span>
                  <span>student@example.com / password</span>
                </div>
                <div className="flex justify-between">
                  <span>معلم:</span>
                  <span>teacher@example.com / password</span>
                </div>
                <div className="flex justify-between">
                  <span>إداري:</span>
                  <span>admin@example.com / password</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;

