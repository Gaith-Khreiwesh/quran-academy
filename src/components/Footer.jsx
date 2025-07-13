import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'الدورات', href: '#courses' },
    { name: 'المعلمون', href: '#teachers' },
    { name: 'المقالات', href: '#articles' },
    { name: 'من نحن', href: '#about' },
    { name: 'اتصل بنا', href: '#contact' }
  ];

  const courses = [
    { name: 'تحفيظ القرآن الكريم', href: '#' },
    { name: 'أحكام التجويد', href: '#' },
    { name: 'تفسير القرآن', href: '#' },
    { name: 'القراءات العشر', href: '#' },
    { name: 'التربية الإسلامية', href: '#' },
    { name: 'اللغة العربية', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-arabic">
              اشترك في نشرتنا الإخبارية
            </h3>
            <p className="text-primary-foreground/80 mb-8 font-arabic">
              احصل على آخر الأخبار والدورات الجديدة والمقالات المفيدة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="bg-white text-foreground border-0 font-arabic"
              />
              <Button variant="secondary" className="font-arabic">
                اشتراك
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <img src={logo} alt="أكاديمية القرآن الكريم" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold font-arabic">أكاديمية القرآن الكريم</h3>
                <p className="text-sm text-primary-foreground/80 font-english">Quran Academy</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 font-arabic leading-relaxed">
              أكاديمية متخصصة في تعليم القرآن الكريم والتجويد والتفسير مع أفضل المعلمين المؤهلين
              في بيئة تعليمية متطورة وتفاعلية.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-arabic">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors font-arabic"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-arabic">الدورات</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <a
                    href={course.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors font-arabic"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-arabic">تواصل معنا</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80 font-arabic">
                  الرياض، المملكة العربية السعودية
                </span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80 font-english" dir="ltr">
                  +966 50 123 4567
                </span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80 font-english" dir="ltr">
                  info@quranacademy.sa
                </span>
              </div>
            </div>

            {/* Prayer Times Widget */}
            <div className="mt-8 p-4 bg-primary-foreground/10 rounded-lg">
              <h5 className="font-bold mb-3 font-arabic">مواقيت الصلاة</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between font-arabic">
                  <span>الفجر</span>
                  <span className="font-english">05:30</span>
                </div>
                <div className="flex justify-between font-arabic">
                  <span>الظهر</span>
                  <span className="font-english">12:15</span>
                </div>
                <div className="flex justify-between font-arabic">
                  <span>العصر</span>
                  <span className="font-english">15:45</span>
                </div>
                <div className="flex justify-between font-arabic">
                  <span>المغرب</span>
                  <span className="font-english">18:20</span>
                </div>
                <div className="flex justify-between font-arabic">
                  <span>العشاء</span>
                  <span className="font-english">19:50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 font-arabic mb-4 md:mb-0">
              © 2024 أكاديمية القرآن الكريم. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 space-x-reverse">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors font-arabic">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors font-arabic">
                شروط الاستخدام
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors font-arabic">
                الدعم الفني
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

