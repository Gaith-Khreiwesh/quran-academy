import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Check for saved user session
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleRegister = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // If user is logged in, show appropriate dashboard
  if (user) {
    if (user.type === 'student') {
      return <StudentDashboard user={user} onLogout={handleLogout} />;
    } else if (user.type === 'teacher') {
      return <TeacherDashboard user={user} onLogout={handleLogout} />;
    }
  }

  return (
    <div className="min-h-screen">
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />
      <main>
        <Hero onRegisterClick={() => setShowRegister(true)} />
        <Courses />
        <Teachers />
      </main>
      <Footer />

      {/* Login Modal */}
      {showLogin && (
        <Login 
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}

      {/* Register Modal */}
      {showRegister && (
        <Register 
          onClose={() => setShowRegister(false)}
          onRegister={handleRegister}
        />
      )}
    </div>
  );
}

export default App;

