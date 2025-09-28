# أكاديمية القرآن الكريم - Quran Academy

موقع أكاديمية تعليم القرآن الكريم متكامل مع تصميم إسلامي أصيل وميزات متطورة.

## الميزات الرئيسية

### التصميم والواجهة
- ✅ تصميم إسلامي أصيل مع لوحة ألوان هادئة
- ✅ واجهة متجاوبة تعمل على جميع الأجهزة
- ✅ دعم الوضع الليلي والنهاري
- ✅ خطوط عربية جميلة (أميري)
- ✅ رسوم متحركة سلسة

### الوظائف الأساسية
- ✅ نظام تسجيل الدخول والتسجيل
- ✅ عرض الدورات مع تفاصيل شاملة
- ✅ ملفات تعريفية للمعلمين
- ✅ لوحة تحكم الطالب
- ✅ لوحة تحكم المعلم
- ✅ نظام إدارة المحتوى

### التقنيات المستخدمة

#### الواجهة الأمامية (Frontend)
- React 18
- Tailwind CSS
- Shadcn/UI Components
- Lucide Icons
- Vite

#### الخلفية (Backend)
- Python Flask
- SQLAlchemy
- SQLite Database
- Flask-CORS

## التثبيت والتشغيل

### متطلبات النظام
- Node.js 18+
- Python 3.8+
- npm أو pnpm

### تشغيل الواجهة الأمامية
```bash
cd quran-academy
pnpm install
pnpm run dev
```

### تشغيل الخلفية
```bash
cd quran-academy-backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# أو
venv\Scripts\activate     # Windows
pip install -r requirements.txt
python src/main.py
```

## الاستخدام

1. شغل الخلفية على المنفذ 5000
2. شغل الواجهة الأمامية على المنفذ 5173
3. افتح المتصفح على http://localhost:5173

### حسابات تجريبية
- **طالب**: أي بريد إلكتروني + كلمة مرور
- **معلم**: أي بريد إلكتروني + كلمة مرور + اختيار "معلم"

## هيكل المشروع

```
quran-academy/
├── src/
│   ├── components/          # مكونات React
│   │   ├── ui/             # مكونات واجهة المستخدم
│   │   ├── Header.jsx      # رأس الصفحة
│   │   ├── Hero.jsx        # القسم الرئيسي
│   │   ├── Courses.jsx     # قسم الدورات
│   │   ├── Teachers.jsx    # قسم المعلمين
│   │   ├── Footer.jsx      # تذييل الصفحة
│   │   ├── Login.jsx       # نموذج تسجيل الدخول
│   │   ├── Register.jsx    # نموذج التسجيل
│   │   ├── StudentDashboard.jsx  # لوحة تحكم الطالب
│   │   └── TeacherDashboard.jsx  # لوحة تحكم المعلم
│   ├── assets/             # الصور والملفات
│   ├── App.jsx            # المكون الرئيسي
│   └── main.jsx           # نقطة الدخول

quran-academy-backend/
├── src/
│   ├── models/            # نماذج قاعدة البيانات
│   ├── routes/            # مسارات API
│   ├── database/          # ملفات قاعدة البيانات
│   └── main.py           # الخادم الرئيسي
```

## المساهمة

هذا المشروع مفتوح المصدر. يمكنك المساهمة عبر:
1. Fork المشروع
2. إنشاء فرع جديد للميزة
3. Commit التغييرات
4. Push للفرع
5. إنشاء Pull Request

## الترخيص

هذا المشروع مرخص تحت رخصة MIT.


4567

---

تم تطوير هذا المشروع بواسطة  Gaith Khraiwesh

