import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        //COMMENT
        "readMore": "Read more",
        "likes": "Likes",
        "update": "Update",
        "cancel": "Cancel",
        "reply": "Reply",
        "seeMoreComments": "See more comments...",
        "hideComments": "Hide comments...",
        "edit": "Edit",
        "remove": "Remove",
        "placeholder": "Add your comments...",
        "post": "Post",
        "contact": "Contact & Details",
        "username": "Username",
        "phone": "Phone",
        "email": "Email",
        "show": "Show",
        "hide": "Hide",

        //REGISTER

        "realestate": "Real Estate",
        "username": "User Name",




        "register": "Register",
        "already_have_account": "Already have an account?",
        "login_now": "Login Now" ?

          //LOGIN

          "email_help" : "We'll never share your email with anyone else.",

        "login": "Login",
        "no_account": "You don't have an account?",
        "register_now": "Register Now",


        //NAVBAR
        "realestate": "IMMOBILIER",
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
        //INFORMACION POST
        "details": "Post Details",
        "comments": "Comments",
        "likes": "Likes",
        "location": "Location",
        "email": "Email",
        "seller": "Seller",
        "allowComments": "Allow Comments",
        "views": "Views",
        "adDuration": "Ad Duration",
        "notSpecified": "Not Specified"


      }
    },

    fr: {
      translation: {
        //COMMENTS
        "readMore": "Lire plus",
        "likes": "Mentions j'aime",
        "update": "Mettre à jour",
        "cancel": "Annuler",
        "reply": "Répondre",
        "seeMoreComments": "Voir plus de commentaires...",
        "hideComments": "Masquer les commentaires...",
        "edit": "Modifier",
        "remove": "Supprimer",
        "placeholder": "Ajoutez votre commentaire...",
        "post": "Publier",
        "contact": "Contact & Coordonnées",
        "username": "Nom d'utilisateur",
        "phone": "Téléphone",
        "email": "E-mail",
        "show": "Afficher",
        "hide": "Masquer",



        //REGISTER
        "realestate": "IMMOBILIER",
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
        //INFORMACION POST
        "details": "Détails du Post",
        "comments": "Commentaires",
        "likes": "Mentions J'aime",
        "location": "Emplacement",
        "email": "E-mail",
        "seller": "Vendeur",
        "allowComments": "Autoriser les commentaires",
        "views": "Vues",
        "adDuration": "Durée de l'annonce",
        "notSpecified": "Non spécifié"

      }
    },
    ar: {
      translation: {
        //COMMENTS 
        "readMore": "اقرأ المزيد",
        "likes": "إعجابات",
        "update": "تحديث",
        "cancel": "إلغاء",
        "reply": "رد",
        "seeMoreComments": "عرض المزيد من التعليقات...",
        "hideComments": "إخفاء التعليقات...",
        "edit": "تعديل",
        "remove": "إزالة",
        "placeholder": "أضف تعليقك...",
        "post": "نشر",
        "contact": "الاتصال والتفاصيل",
        "username": "اسم المستخدم",
        "phone": "الهاتف",
        "email": "البريد الإلكتروني",
        "show": "عرض",
        "hide": "إخفاء",


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

        //INFORMACION  POST 
        "details": "تفاصيل المنشور",
        "comments": "التعليقات",
        "likes": "الإعجابات",
        "location": "الموقع",
        "email": "البريد الإلكتروني",
        "seller": "البائع",
        "allowComments": "السماح بالتعليقات",
        "views": "المشاهدات",
        "adDuration": "مدة الإعلان",
        "notSpecified": "غير محدد",

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