import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 中文翻譯資源
const zhTW = {
  translation: {
    // 導航
    nav: {
      home: '首頁',
      about: '關於藥線灸',
      aboutMaster: '關於劉先生',
      onlineCourses: '線上課程',
      offlineCourses: '線下課程',
      shop: '藥線商城',
      appointment: '預約面診',
      reviews: '用戶評價',
      faq: '常見問題',
      contact: '聯絡我們',
      member: '會員中心'
    },
    // 通用
    common: {
      learnMore: '了解更多',
      bookNow: '立即預約',
      register: '立即報名',
      buyNow: '立即購買',
      submit: '提交',
      cancel: '取消',
      save: '保存',
      edit: '編輯',
      delete: '刪除',
      confirm: '確認',
      loading: '載入中...',
      success: '成功',
      error: '錯誤',
      phone: '電話',
      email: '電子郵箱',
      address: '地址',
      name: '姓名',
      age: '年齡',
      gender: '性別',
      male: '男',
      female: '女'
    },
    // 首頁
    home: {
      title: '劉一飊藥線灸',
      subtitle: '珠海非物質文化遺產',
      slogan: '第十二代傳承人 · 傳承千年智慧 · 守護健康人生',
      heroTitle: '劉一飊藥線灸',
      heroSubtitle: '第十二代傳承人 · 傳承千年智慧 · 守護健康人生',
      whyChooseUs: '為什麼選擇我們',
      whyChooseUsDesc: '劉一飊先生作為珠海非物質文化遺產藥線灸的第十二代傳承人，致力於傳承和發揚這一古老的中醫療法'
    },
    // 關於藥線灸
    about: {
      title: '關於藥線灸',
      subtitle: '了解這項古老而神奇的中醫療法',
      description: '藥線灸是一種獨特的中醫外治療法，結合了中藥和灸療的優勢...'
    },
    // 關於劉先生
    aboutMaster: {
      title: '關於劉一飊先生',
      subtitle: '珠海非物質文化遺產藥線灸第十二代傳承人',
      description: '劉一飊先生是珠海非物質文化遺產藥線灸的第十二代傳承人...'
    },
    // 課程
    courses: {
      online: '線上課程',
      offline: '線下課程',
      basic: '基礎課程',
      intermediate: '進階課程',
      advanced: '高級課程',
      duration: '課程時長',
      lessons: '課時',
      students: '學員',
      certificate: '證書',
      price: '價格'
    },
    // 商城
    shop: {
      title: '藥線商城',
      subtitle: '精選優質藥線和專業工具',
      category: '分類',
      allProducts: '全部商品',
      addToCart: '加入購物車',
      buyNow: '立即購買',
      stock: '庫存',
      outOfStock: '缺貨',
      rating: '評分',
      reviews: '評價'
    },
    // 預約
    appointment: {
      title: '預約面診',
      subtitle: '由劉一飊先生親自診療',
      selectDate: '選擇日期',
      selectTime: '選擇時間',
      patientInfo: '患者信息',
      symptoms: '症狀描述',
      bookAppointment: '預約面診'
    },
    // 用戶評價
    reviews: {
      title: '用戶評價與成功案例',
      subtitle: '真實的患者反饋和成功治療案例',
      featuredReviews: '精選患者見證',
      caseStudies: '成功治療案例',
      allReviews: '所有用戶評價',
      rating: '評分',
      treatmentType: '治療類型',
      treatmentDuration: '治療週期'
    },
    // 會員中心
    member: {
      title: '會員中心',
      profile: '個人資料',
      courses: '我的課程',
      orders: '訂單記錄',
      appointments: '預約記錄',
      points: '積分記錄',
      benefits: '會員權益',
      membershipLevel: '會員等級',
      pointsBalance: '積分餘額',
      joinDate: '加入日期'
    },
    // 常見問題
    faq: {
      title: '常見問題解答',
      subtitle: '這裡整理了用戶最常問的問題和詳細解答',
      aboutTreatment: '關於藥線灸',
      aboutCourses: '關於課程',
      aboutAppointment: '關於預約',
      aboutPayment: '關於付款'
    },
    // 聯絡我們
    contact: {
      title: '聯絡我們',
      subtitle: '我們隨時準備為您提供幫助和支持',
      contactMethods: '聯繫方式',
      sendMessage: '發送消息',
      officeInfo: '診所信息',
      workingHours: '營業時間',
      location: '位置地圖'
    }
  }
};

// 英文翻譯資源
const enUS = {
  translation: {
    // 導航
    nav: {
      home: 'Home',
      about: 'About Yaoxianjiu',
      aboutMaster: 'About Master Liu',
      onlineCourses: 'Online Courses',
      offlineCourses: 'Offline Courses',
      shop: 'Shop',
      appointment: 'Appointment',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact',
      member: 'Member Center'
    },
    // 通用
    common: {
      learnMore: 'Learn More',
      bookNow: 'Book Now',
      register: 'Register Now',
      buyNow: 'Buy Now',
      submit: 'Submit',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      confirm: 'Confirm',
      loading: 'Loading...',
      success: 'Success',
      error: 'Error',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      name: 'Name',
      age: 'Age',
      gender: 'Gender',
      male: 'Male',
      female: 'Female'
    },
    // 首頁
    home: {
      title: 'Liu Yibiao Yaoxianjiu',
      subtitle: 'Zhuhai Intangible Cultural Heritage',
      slogan: '12th Generation Inheritor · Inheriting Millennium Wisdom · Protecting Healthy Life',
      heroTitle: 'Liu Yibiao Yaoxianjiu',
      heroSubtitle: '12th Generation Inheritor · Inheriting Millennium Wisdom · Protecting Healthy Life',
      whyChooseUs: 'Why Choose Us',
      whyChooseUsDesc: 'Master Liu Yibiao, as the 12th generation inheritor of Zhuhai Intangible Cultural Heritage Yaoxianjiu, is dedicated to inheriting and promoting this ancient TCM therapy'
    },
    // 關於藥線灸
    about: {
      title: 'About Yaoxianjiu',
      subtitle: 'Learn about this ancient and magical TCM therapy',
      description: 'Yaoxianjiu is a unique external TCM therapy that combines the advantages of Chinese medicine and moxibustion...'
    },
    // 關於劉先生
    aboutMaster: {
      title: 'About Master Liu Yibiao',
      subtitle: '12th Generation Inheritor of Zhuhai Intangible Cultural Heritage Yaoxianjiu',
      description: 'Master Liu Yibiao is the 12th generation inheritor of Zhuhai Intangible Cultural Heritage Yaoxianjiu...'
    },
    // 課程
    courses: {
      online: 'Online Courses',
      offline: 'Offline Courses',
      basic: 'Basic Course',
      intermediate: 'Intermediate Course',
      advanced: 'Advanced Course',
      duration: 'Duration',
      lessons: 'Lessons',
      students: 'Students',
      certificate: 'Certificate',
      price: 'Price'
    },
    // 商城
    shop: {
      title: 'Yaoxian Shop',
      subtitle: 'Selected high-quality medicinal threads and professional tools',
      category: 'Category',
      allProducts: 'All Products',
      addToCart: 'Add to Cart',
      buyNow: 'Buy Now',
      stock: 'Stock',
      outOfStock: 'Out of Stock',
      rating: 'Rating',
      reviews: 'Reviews'
    },
    // 預約
    appointment: {
      title: 'Book Appointment',
      subtitle: 'Personal consultation with Master Liu Yibiao',
      selectDate: 'Select Date',
      selectTime: 'Select Time',
      patientInfo: 'Patient Information',
      symptoms: 'Symptoms Description',
      bookAppointment: 'Book Appointment'
    },
    // 用戶評價
    reviews: {
      title: 'User Reviews & Success Cases',
      subtitle: 'Real patient feedback and successful treatment cases',
      featuredReviews: 'Featured Patient Testimonials',
      caseStudies: 'Successful Treatment Cases',
      allReviews: 'All User Reviews',
      rating: 'Rating',
      treatmentType: 'Treatment Type',
      treatmentDuration: 'Treatment Duration'
    },
    // 會員中心
    member: {
      title: 'Member Center',
      profile: 'Profile',
      courses: 'My Courses',
      orders: 'Order History',
      appointments: 'Appointment History',
      points: 'Points History',
      benefits: 'Member Benefits',
      membershipLevel: 'Membership Level',
      pointsBalance: 'Points Balance',
      joinDate: 'Join Date'
    },
    // 常見問題
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Here are the most frequently asked questions and detailed answers',
      aboutTreatment: 'About Yaoxianjiu',
      aboutCourses: 'About Courses',
      aboutAppointment: 'About Appointment',
      aboutPayment: 'About Payment'
    },
    // 聯絡我們
    contact: {
      title: 'Contact Us',
      subtitle: 'We are always ready to provide help and support',
      contactMethods: 'Contact Methods',
      sendMessage: 'Send Message',
      officeInfo: 'Clinic Information',
      workingHours: 'Working Hours',
      location: 'Location Map'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'zh-TW': zhTW,
      'en-US': enUS
    },
    fallbackLng: 'zh-TW',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;

