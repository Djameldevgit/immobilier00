import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        

        //REGISTER

        "realestate": "Real Estate",
        "username": "User Name",
        
    
        
        
        "register": "Register",
        "already_have_account": "Already have an account?",
        "login_now": "Login Now" ?

          //LOGIN
        
        "email_help": "We'll never share your email with anyone else.",
       
        "login": "Login",
        "no_account": "You don't have an account?",
        "register_now": "Register Now",


        //NAVBAR
   
        "post": "Publish a post",
        "usermanagement": "User management",
        "complaints": "complaints",
        "activityusers": "Activity users",
        "searchusers": "Search users",
        "lastusers": "Last users",
        "userroles": "User roles",
        "pendingposts": "Pending posts",
        "light_mode": "Light mode",
        "dark_mode": "Dark mode",

        "profile": "Profile",
        "logout": "Logout",

        //COMMENT
        "remove": "Remove",
        "see_more_comments": "See more comments...",
        "hide_comments": "Hide comments...",
 
      }
    },

    fr: {
      translation: {

        "relativeTime": {
          "past": "il y a {{count}} minutes",
          "s": "il y a un moment",
          "m": "il y a une minute",
          "mm": "il y a {{count}} minutes",
          "h": "il y a une heure",
          "hh": "il y a {{count}} heures",

        },
        //REGISTER
      
        "username": "Nom d'utilisateur",
        "email": "Adresse e-mail",
     
        "register": "S'inscrire",
        "already_have_account": "Vous avez déjà un compte?",
        "login_now": "Connectez-vous maintenant",


        //LOGIN
        
        "email_help": "Nous ne partagerons jamais votre e-mail avec qui que ce soit.",
     
        "login": "Se connecter",
        "no_account": "Vous n'avez pas de compte?",
        "register_now": "Inscrivez-vous maintenant",

        //REMOVE
        "remove": "Supprimer",
        "see_more_comments": "Voir plus de commentaires...",
        
        "hide_content": "Masquer le contenu",
        "read_more": "Lire la suite",
        "likes": "likes",
        "update": "mettre à jour",
        "cancel": "annuler",
        "reply": "répondre",
 
        "Dark mode": "Mode sombre",
        "Light mode": "Mode éclairé",
   
      }
    },
    ar: {
      translation: {
        //REGISTER
        "realestate": "العقارات",
        "username": "اسم المستخدم",
        "email": "البريد الإلكتروني",
     
        "confirm_password": "تأكيد كلمة المرور",
   
        "hide": "إخفاء",
        "register": "تسجيل",
        "already_have_account": "لديك حساب بالفعل؟",
        "login_now": "تسجيل الدخول الآن",
        //COMMENT 

        "remove": "إزالة",
        "see_more_comments": "عرض المزيد من التعليقات...",
       

        "read_more": "اقرأ المزيد",
    
        "update": "تحديث",
        "cancel": "إلغاء",
        "reply": "الرد",
        "likes": "الإعجابات",

 
   
        
        "email_help": "لن نشارك بريدك الإلكتروني مع أي شخص آخر.",
        "password": "كلمة المرور",
        "show": "عرض",
     
        "login": "تسجيل الدخول",
        "no_account": "ليس لديك حساب؟",
        "register_now": "سجل الآن",
       
        "post": "نشر إعلان",
        "usermanagement": "إدارة المستخدمين",
        "complaints": "الشكاوى",
        "activityusers": "نشاط المستخدمين",
        "searchusers": "البحث عن المستخدمين",
        "lastusers": "آخر المستخدمين",
        "userroles": "أدوار المستخدمين",
        "pendingposts": "المشاركات المعلقة",
        "light_mode": "وضع الإضاءة",
        "dark_mode": "الوضع الداكن",
        "Profile": "الملف الشخصي",
        "Logout": "تسجيل الخروج",
  
      }
    },




  },


  fallbackLng: "fr",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;