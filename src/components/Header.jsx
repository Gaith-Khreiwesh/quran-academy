import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Globe, ChevronDown, User, LogOut } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ darkMode, toggleDarkMode, onLoginClick, onRegisterClick, user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '#home', icon: '🏠' },
    { name: 'الدورات', href: '#courses', icon: '📚' },
    { name: 'المعلمون', href: '#teachers', icon: '👨‍🏫' },
    { name: 'المقالات', href: '#articles', icon: '📝' },
    { name: 'اتصل بنا', href: '#contact', icon: '📞' }
  ];

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    }
  };

  const menuVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    },
    open: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 rtl:space-x-reverse"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg lg:text-xl">ق</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white font-arabic">
                أكاديمية القرآن الكريم
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Quran Academy</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 font-medium group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <motion.div 
              className="relative hidden sm:block"
              whileHover={{ scale: 1.05 }}
            >
              <button
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="flex items-center space-x-1 rtl:space-x-reverse px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Globe size={16} />
                <span className="text-sm font-medium">{language === 'ar' ? 'العربية' : 'English'}</span>
                <ChevronDown size={14} />
              </button>
            </motion.div>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                  >
                    <Sun size={18} className="text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                  >
                    <Moon size={18} className="text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* User Menu or Auth Buttons */}
            {user ? (
              <div className="relative">
                <motion.button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 rtl:space-x-reverse p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {user.name}
                  </span>
                  <ChevronDown size={14} className="text-gray-500" />
                </motion.button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2"
                    >
                      <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                      </div>
                      <button
                        onClick={() => {
                          setIsUserMenuOpen(false);
                          // Navigate to dashboard
                        }}
                        className="w-full text-right px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 rtl:space-x-reverse"
                      >
                        <User size={16} />
                        <span>لوحة التحكم</span>
                      </button>
                      <button
                        onClick={() => {
                          setIsUserMenuOpen(false);
                          onLogout();
                        }}
                        className="w-full text-right px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center space-x-2 rtl:space-x-reverse"
                      >
                        <LogOut size={16} />
                        <span>تسجيل الخروج</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden lg:flex items-center space-x-3 rtl:space-x-reverse">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="ghost" 
                    onClick={onLoginClick}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/10"
                  >
                    تسجيل الدخول
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={onRegisterClick}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg"
                  >
                    التسجيل المجاني
                  </Button>
                </motion.div>
              </div>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-xl mt-2 border border-gray-200/20 dark:border-gray-700/20">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors rounded-lg mx-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                ))}
                
                {!user && (
                  <div className="px-2 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                    <Button 
                      variant="ghost" 
                      onClick={() => {
                        setIsMenuOpen(false);
                        onLoginClick();
                      }}
                      className="w-full justify-start text-gray-700 dark:text-gray-300"
                    >
                      تسجيل الدخول
                    </Button>
                    <Button 
                      onClick={() => {
                        setIsMenuOpen(false);
                        onRegisterClick();
                      }}
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white"
                    >
                      التسجيل المجاني
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

