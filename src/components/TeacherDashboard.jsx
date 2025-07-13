import React, { useState, useEffect } from 'react';

const TeacherDashboard = ({ user, onLogout }) => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Mock data for teacher's courses
    setCourses([
      {
        id: 1,
        title: 'تحفيظ القرآن الكريم',
        students: 150,
        nextClass: '2025-07-15 10:00',
        totalLessons: 30,
        completedLessons: 19
      },
      {
        id: 4,
        title: 'القراءات العشر',
        students: 80,
        nextClass: '2025-07-16 16:00',
        totalLessons: 40,
        completedLessons: 25
      }
    ]);

    setStudents([
      { id: 1, name: 'أحمد محمد', course: 'تحفيظ القرآن الكريم', progress: 65, lastActivity: '2025-07-13' },
      { id: 2, name: 'فاطمة علي', course: 'تحفيظ القرآن الكريم', progress: 80, lastActivity: '2025-07-13' },
      { id: 3, name: 'محمد حسن', course: 'القراءات العشر', progress: 45, lastActivity: '2025-07-12' },
      { id: 4, name: 'عائشة أحمد', course: 'القراءات العشر', progress: 70, lastActivity: '2025-07-13' }
    ]);

    setSchedule([
      { day: 'الأحد', time: '10:00', course: 'تحفيظ القرآن الكريم', students: 25 },
      { day: 'الثلاثاء', time: '16:00', course: 'القراءات العشر', students: 15 },
      { day: 'الخميس', time: '10:00', course: 'تحفيظ القرآن الكريم', students: 30 }
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
                <p className="text-sm text-gray-600 dark:text-gray-400">لوحة تحكم المعلم</p>
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
            {/* Statistics Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                إحصائيات عامة
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{courses.length}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">الدورات</div>
                </div>
                <div className="text-center p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">230</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">إجمالي الطلاب</div>
                </div>
                <div className="text-center p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">44</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">الدروس المكتملة</div>
                </div>
                <div className="text-center p-4 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">4.9</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">التقييم</div>
                </div>
              </div>
            </div>

            {/* My Courses */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                دوراتي
              </h2>
              <div className="space-y-4">
                {courses.map(course => (
                  <div key={course.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{course.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{course.students} طالب مسجل</p>
                      </div>
                      <span className="bg-primary text-white px-2 py-1 rounded text-sm">
                        {Math.round((course.completedLessons / course.totalLessons) * 100)}%
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                        <span>تقدم المنهج</span>
                        <span>{course.completedLessons}/{course.totalLessons} دروس</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(course.completedLessons / course.totalLessons) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        الدرس القادم: {new Date(course.nextClass).toLocaleString('ar-SA')}
                      </span>
                      <div className="space-x-2 space-x-reverse">
                        <button className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary-dark transition-colors">
                          إدارة الدورة
                        </button>
                        <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors">
                          بدء الدرس
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Students */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                الطلاب الحاليون
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-right py-2">الطالب</th>
                      <th className="text-right py-2">الدورة</th>
                      <th className="text-right py-2">التقدم</th>
                      <th className="text-right py-2">آخر نشاط</th>
                      <th className="text-right py-2">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(student => (
                      <tr key={student.id} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 font-medium text-gray-900 dark:text-white">{student.name}</td>
                        <td className="py-3 text-gray-600 dark:text-gray-400">{student.course}</td>
                        <td className="py-3">
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full"
                                style={{ width: `${student.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{student.progress}%</span>
                          </div>
                        </td>
                        <td className="py-3 text-gray-600 dark:text-gray-400">{student.lastActivity}</td>
                        <td className="py-3">
                          <button className="text-primary hover:text-primary-dark text-sm">
                            عرض التفاصيل
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                  <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                    <div className="flex justify-between items-start mb-1">
                      <div className="font-medium text-gray-900 dark:text-white">{item.day}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{item.time}</div>
                    </div>
                    <div className="text-sm text-primary font-medium">{item.course}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{item.students} طالب</div>
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
                  📝 إنشاء درس جديد
                </button>
                <button className="w-full text-right p-3 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  📊 تقارير الطلاب
                </button>
                <button className="w-full text-right p-3 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  💬 الرسائل
                </button>
                <button className="w-full text-right p-3 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  ⚙️ إعدادات الدورة
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;

