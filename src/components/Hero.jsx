import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { BookOpen, Users, Award, Clock } from 'lucide-react';

const Hero = ({ onRegisterClick }) => {
  const stats = [
    { icon: Users, label: 'طالب مسجل', value: '5000+' },
    { icon: BookOpen, label: 'دورة متاحة', value: '50+' },
    { icon: Award, label: 'شهادة معتمدة', value: '1000+' },
    { icon: Clock, label: 'ساعة تدريس', value: '10000+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center islamic-pattern">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-arabic leading-tight">
            وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 font-arabic opacity-90 leading-relaxed">
            تعلم القرآن الكريم وأحكام التجويد مع أفضل المعلمين المؤهلين
            <br />
            في بيئة تعليمية متطورة وتفاعلية
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-3" onClick={onRegisterClick}>
              ابدأ التعلم الآن
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              تصفح الدورات
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
                  <Icon className="h-8 w-8 mx-auto mb-3 text-secondary" />
                  <div className="text-2xl font-bold mb-1 font-english">{stat.value}</div>
                  <div className="text-sm opacity-90 font-arabic">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;

