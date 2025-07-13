import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Clock, Users, Star, BookOpen, Mic, Brain, Eye } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'تحفيظ القرآن الكريم',
      description: 'برنامج شامل لحفظ القرآن الكريم مع المراجعة المستمرة والمتابعة الدقيقة',
      instructor: 'الشيخ أحمد محمد',
      duration: '12 شهر',
      students: 150,
      rating: 4.9,
      price: 'مجاني',
      level: 'جميع المستويات',
      icon: BookOpen,
      color: 'bg-primary',
      features: ['حفظ متدرج', 'مراجعة يومية', 'اختبارات دورية', 'شهادة معتمدة']
    },
    {
      id: 2,
      title: 'أحكام التجويد',
      description: 'تعلم أحكام التجويد وقواعد التلاوة الصحيحة مع التطبيق العملي',
      instructor: 'الشيخ محمد علي',
      duration: '6 أشهر',
      students: 200,
      rating: 4.8,
      price: '150 ريال',
      level: 'مبتدئ',
      icon: Mic,
      color: 'bg-secondary',
      features: ['أحكام النون الساكنة', 'أحكام الميم الساكنة', 'المدود', 'الوقف والابتداء']
    },
    {
      id: 3,
      title: 'تفسير القرآن',
      description: 'فهم معاني القرآن الكريم وأسباب النزول والدروس المستفادة',
      instructor: 'الدكتور عبدالله أحمد',
      duration: '9 أشهر',
      students: 120,
      rating: 4.7,
      price: '200 ريال',
      level: 'متوسط',
      icon: Brain,
      color: 'bg-accent',
      features: ['تفسير السور', 'أسباب النزول', 'الدروس المستفادة', 'التطبيق العملي']
    },
    {
      id: 4,
      title: 'القراءات العشر',
      description: 'تعلم القراءات العشر المتواترة مع الإسناد الصحيح',
      instructor: 'الشيخ يوسف إبراهيم',
      duration: '18 شهر',
      students: 80,
      rating: 4.9,
      price: '300 ريال',
      level: 'متقدم',
      icon: Eye,
      color: 'bg-emerald-600',
      features: ['قراءة نافع', 'قراءة عاصم', 'قراءة حمزة', 'الإجازة المعتمدة']
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-arabic text-primary">
            دوراتنا التعليمية
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-arabic leading-relaxed">
            اختر من بين مجموعة متنوعة من الدورات المصممة خصيصاً لتناسب جميع المستويات
            والأعمار مع أفضل المعلمين المؤهلين
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <Card key={course.id} className="card-hover overflow-hidden">
                <CardHeader className="relative">
                  <div className={`${course.color} p-4 rounded-lg w-fit mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-arabic">{course.title}</CardTitle>
                  <CardDescription className="text-base font-arabic leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Course Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span className="font-arabic">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span className="font-english">{course.students}</span>
                      <span className="font-arabic">طالب</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-english">{course.rating}</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center justify-between">
                    <span className="font-arabic text-sm text-muted-foreground">المدرب:</span>
                    <span className="font-arabic font-medium">{course.instructor}</span>
                  </div>

                  {/* Level Badge */}
                  <div className="flex items-center justify-between">
                    <span className="font-arabic text-sm text-muted-foreground">المستوى:</span>
                    <Badge variant="secondary" className="font-arabic">{course.level}</Badge>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-arabic font-medium text-sm">ما ستتعلمه:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 font-arabic">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-6 border-t">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary font-english">{course.price}</div>
                    {course.price !== 'مجاني' && (
                      <div className="text-sm text-muted-foreground font-arabic">شهرياً</div>
                    )}
                  </div>
                  <Button className="font-arabic">
                    التسجيل في الدورة
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-arabic">
            عرض جميع الدورات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;

