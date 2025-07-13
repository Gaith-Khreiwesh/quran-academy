import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Award, BookOpen, Users } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: 'الشيخ أحمد محمد الطيب',
      title: 'أستاذ القراءات والتجويد',
      specialization: ['تحفيظ القرآن', 'أحكام التجويد', 'القراءات العشر'],
      experience: '15 سنة',
      students: 500,
      rating: 4.9,
      certificates: ['إجازة في القراءات العشر', 'دكتوراه في علوم القرآن', 'إجازة من الأزهر الشريف'],
      description: 'حافظ لكتاب الله منذ الصغر، متخصص في تعليم القرآن الكريم وأحكام التجويد مع خبرة واسعة في التدريس',
      image: '/api/placeholder/150/150'
    },
    {
      id: 2,
      name: 'الشيخ محمد علي حسن',
      title: 'أستاذ التفسير والعلوم الشرعية',
      specialization: ['تفسير القرآن', 'علوم القرآن', 'الحديث الشريف'],
      experience: '12 سنة',
      students: 350,
      rating: 4.8,
      certificates: ['ماجستير في التفسير', 'إجازة في الحديث', 'دبلوم في علوم القرآن'],
      description: 'متخصص في تفسير القرآن الكريم وعلومه، يجمع بين العلم الشرعي والأسلوب التعليمي المتطور',
      image: '/api/placeholder/150/150'
    },
    {
      id: 3,
      name: 'الأستاذة فاطمة أحمد',
      title: 'معلمة القرآن للنساء والأطفال',
      specialization: ['تحفيظ القرآن للأطفال', 'التجويد للمبتدئات', 'التربية الإسلامية'],
      experience: '10 سنوات',
      students: 400,
      rating: 4.9,
      certificates: ['إجازة في القراءات', 'دبلوم في تعليم الأطفال', 'شهادة في التربية الإسلامية'],
      description: 'متخصصة في تعليم القرآن الكريم للنساء والأطفال بأساليب تربوية حديثة ومبتكرة',
      image: '/api/placeholder/150/150'
    },
    {
      id: 4,
      name: 'الدكتور عبدالله إبراهيم',
      title: 'أستاذ الدراسات القرآنية',
      specialization: ['الدراسات القرآنية', 'اللغة العربية', 'البلاغة القرآنية'],
      experience: '18 سنة',
      students: 300,
      rating: 4.7,
      certificates: ['دكتوراه في الدراسات القرآنية', 'أستاذ جامعي', 'باحث في علوم القرآن'],
      description: 'أستاذ جامعي متخصص في الدراسات القرآنية واللغة العربية، له مؤلفات عديدة في التفسير',
      image: '/api/placeholder/150/150'
    }
  ];

  return (
    <section id="teachers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-arabic text-primary">
            معلمونا المتميزون
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-arabic leading-relaxed">
            تعلم مع نخبة من أفضل المعلمين المؤهلين والحاصلين على إجازات معتمدة
            في تعليم القرآن الكريم وعلومه
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="card-hover overflow-hidden">
              <CardHeader className="text-center">
                {/* Teacher Image */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                
                <CardTitle className="text-2xl font-arabic">{teacher.name}</CardTitle>
                <CardDescription className="text-lg font-arabic text-primary font-medium">
                  {teacher.title}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground font-arabic leading-relaxed text-center">
                  {teacher.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary font-english">{teacher.experience}</div>
                    <div className="text-sm text-muted-foreground font-arabic">خبرة</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary font-english">{teacher.students}</div>
                    <div className="text-sm text-muted-foreground font-arabic">طالب</div>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-bold text-primary font-english">{teacher.rating}</span>
                  </div>
                </div>

                {/* Specializations */}
                <div>
                  <h4 className="font-arabic font-medium mb-3 text-center">التخصصات:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {teacher.specialization.map((spec, index) => (
                      <Badge key={index} variant="secondary" className="font-arabic">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Certificates */}
                <div>
                  <h4 className="font-arabic font-medium mb-3 flex items-center justify-center gap-2">
                    <Award className="h-4 w-4" />
                    الشهادات والإجازات:
                  </h4>
                  <ul className="space-y-2">
                    {teacher.certificates.map((cert, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground font-arabic">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Teachers Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-arabic">
            <BookOpen className="h-5 w-5" />
            عرض جميع المعلمين
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teachers;

