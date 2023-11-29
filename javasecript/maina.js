const languages = ["ar" , "en"]
const translations = {
heading:{
  h2:{
    ar:"معلومات عنا",
    en:"about us"
  },
  paragrah:{
    ar:"تتخصص شركتنا في تصميم وتنفيذ وتطوير البنيه التحتيه للشيكه باعلي معايير الامان زنسعي دائما لتحقيق اقصي مستويات الحمايع لعملائنا من خلال تقديم الخدمات التاليه",
    en:"Our company specializes in designing, implementing and developing network infrastructure with the highest security standards. We always strive to achieve maximum levels"
  }
},
ar_btn:{
  ar:"العربية",
  en:"Arabic"
},
en_btn:{
  ar:"الانجليزية",
  en:"English"
}
}

const translationshandler = new SaberTranslate(translations,languages)
translationshandler.setLanguage("ar")

const langBtns=document.querySelectorAll(".lang-btn")
langBtns.forEach(btn =>{
  btn.addEventListener("click" ,() => translationshandler.setLanguage(btn.dataset.lang))
})

