import React, { useState, useEffect } from 'react';

const StudentDashboard = ({ user, onLogout }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [progress, setProgress] = useState({});
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Mock data for enrolled courses
    setEnrolledCourses([
      {
        id: 1,
        title: 'تحفيظ القرآن الكريم',
        instructor: 'الشيخ أحمد محمد الطيب',
        progress: 65,
        nextClass: '2025-07-15 10:00',
        totalLessons: 30,
        completedLessons: 19
      },
      {
        id: 2,
        title: 'أحكام التجويد',
        instructor: 'الشيخ محمد علي حسن',
        progress: 40,
        nextClass: '2025-07-16 14:00',
        totalLessons: 20,
        completedLessons: 8
      }
    ]);

    setSchedule([
      { day: 'الأحد', time: '10:00', course: 'تحفيظ القرآن الكريم' },
      { day: 'الثلاثاء', time: '14:00', course: 'أحكام التجويد' },
      { day: 'الخميس', time: '16:00', course: 'تحفيظ القرآن الكريم' }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  مرحباً، {user.name}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">لوحة تحكم الطالب</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              تسجيل الخروج
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                نظرة عامة على التقدم
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{enrolledCourses.length}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">الدورات المسجلة</div>
                </div>
                <div className="text-center p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">27</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">الدروس المكتملة</div>
                </div>
                <div className="text-center p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">معدل الحضور</div>
                </div>
              </div>
            </div>

            {/* Enrolled Courses */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                الدورات المسجلة
              </h2>
              <div className="space-y-4">
                {enrolledCourses.map(course => (
                  <div key={course.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{course.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">المدرب: {course.instructor}</p>
                      </div>
                      <span className="bg-primary text-white px-2 py-1 rounded text-sm">
                        {course.progress}%
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                        <span>التقدم</span>
                        <span>{course.completedLessons}/{course.totalLessons} دروس</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        الدرس القادم: {new Date(course.nextClass).toLocaleString('ar-SA')}
                      </span>
                      <button className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary-dark transition-colors">
                        دخول الدرس
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Schedule */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                الجدول الأسبوعي
              </h3>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{item.day}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{item.time}</div>
                    </div>
                    <div className="text-sm text-primary font-medium">{item.course}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                إجراءات سريعة
              </h3>
              <div className="space-y-2">
                <button className="w-full text-right p-3 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  📚 تصفح الدورات الجديدة
                </button>
                <button className="w-full text-right p-3 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  📝 تحميل الشهادات
                </button>
                <button className="w-full text-right p-3 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  💬 التواصل مع المعلم
                </button>
                <button className="w-full text-right p-3 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  ⚙️ إعدادات الحساب
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

