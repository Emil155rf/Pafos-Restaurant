const swiperContainer = document.querySelector('.swiper-container')
const swiperWrapper = document.querySelector('.swiper-wrapper')
const swiperSlides = document.querySelectorAll('.swiper-slide')
const prevButton = document.querySelector('.swiper-button-prev')
const nextButton = document.querySelector('.swiper-button-next')
const counter = document.querySelector('.swiper-counter')
const link_2 = document.querySelector('.link-2')
const light = document.querySelector('.header-light')
const dark = document.querySelector('.header-dark')
const moon = document.querySelector('.bi-moon')
const openBurger = document.querySelector('.bi-list')
const closeBurger = document.querySelector('.bi-x-square')
const burger = document.querySelector('.burger')
const lang = document.querySelector('.header-lang')
const close = document.querySelector('.bi-x-square')






let currentSlideIndex = 0
const slideWidth = swiperSlides[0].offsetWidth

function showSlide(index) {
  swiperSlides.forEach((slide, i) => {
    slide.classList.remove('active')
    if (i === index) {
      slide.classList.add('active')
    }
  })


}



prevButton.addEventListener('click', () => {
  if (currentSlideIndex != 0) {
    currentSlideIndex = (currentSlideIndex - 1 + swiperSlides.length) % swiperSlides.length
    showSlide(currentSlideIndex)
    swiperWrapper.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`
  }
})

nextButton.addEventListener('click', () => {
  if (currentSlideIndex < swiperSlides.length - 1) {
    currentSlideIndex = (currentSlideIndex + 1) % swiperSlides.length
    showSlide(currentSlideIndex)
    swiperWrapper.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`
  }
})

showSlide(0)


SmoothScroll({
  animationTime: 800,
  stepSize: 75,


  accelerationDelta: 30,
  accelerationMax: 2,

  keyboardSupport: true,
  arrowScroll: 50,

  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  touchpadSupport: true,
})



let prevScrollpos = window.pageYOffset
window.onscroll = function scrollMain() {
  let currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos || currentScrollPos < 300) {
    document.querySelector('.swiper-header').style.top = "0"
  } else {
    document.querySelector('.swiper-header').style.top = "-35px"
  }
  prevScrollpos = currentScrollPos

}



document.querySelector('.header-dark').addEventListener('click', () => {
  let currentTheme = document.body.className
  if (currentTheme === 'light-theme' || currentTheme === '') {
    document.body.className = 'dark-theme'
    moon.className = 'bi-brightness-high'

  } else {
    document.body.className = 'light-theme'
    moon.className = 'bi-moon'
  }
})






function showBurger() {
  openBurger.addEventListener('click', () => {
    burger.style.visibility = 'visible'
    openBurger.style.visibility = 'hidden'
    closeBurger.style.visibility = 'visible'



  })
  closeBurger.addEventListener('click', () => {
    burger.style.visibility = 'hidden'
    closeBurger.style.visibility = 'hidden'
    openBurger.style.visibility = 'visible'

  })



}


showBurger()



const russianWords = {
  '1': 'Перейти на сайт ресторана',
  '2': 'Перейти на сайт ресторана',
  '3': 'Москва',
  '4': 'Ресторан Pafos',
  '5': 'ПАФОС - это новый формат любимых греческих курортов с их атмосферой и аутентичными блюдами',
  '6': 'Здесь на двух этажах расположились сразу два проекта: брассери и большой греческий ресторан, в которых лаконично маневрирует неспешность островной жизни Средиземноморья и празднество, без которого невозможно представить курорты Греции.',
  '7': 'Адрес ресторана:',
  '8': 'Москва, Тверской бульвар, 27, стр.1',
  '9': 'Время работы:',
  '10': 'Воскресенье - Четверг С 9:00 ДО 00:00',
  '11': 'Пятница - Суббота С 9:00 ДО 02:00',
  '12': 'Все права защищены',
  '13': 'Политика конфиденциальности',
  '14': 'О Alba group',
  '15': 'Москва',
  '16': 'Пафос',
  '17': 'ЮГ 22',
  '18': 'Lou Lou',
  '19': 'Жар-Птица',
  '20': 'Хорошая девочка',
  '21': 'Eshak',
  '22': 'Санкт-Петербург',
  '23': 'Lou Lou',
  '24': 'Lou Lou Secret Bar',
  '25': 'Казань',
  '26': 'More&more',
  '27': 'Eshak',
  '28': 'Хорошая девочка',
  '29': 'Кейтеринг',
  '30': 'Программа лояльности',
  '31': 'Новости',
  '32': 'Доставка',
  '33': 'Вакансии',
  '34': 'Контакты',

}





const englishWords = {
  '1': 'Restaurants website',
  '2': 'Restaurants website',
  '3': 'Moscow',
  '4': 'Restaurant Pafos',
  '5': 'PAFOS - is a new format of favorite Greek resorts with their atmosphere and authentic dishes',
  '6': 'Here, on two floors, there are two projects at once: a brasserie and a large Greek restaurant, in which the leisurely pace of Mediterranean island life and the festivity, without which it is impossible to imagine the resorts of Greece, are succinctly maneuvered.',
  '7': 'Restaurant address:',
  '8': 'Moscow, Tverskaya Boulevard, 27, p. 1',
  '9': 'Working hours:',
  '10': 'Sunday - Thursday From 9:00 TO 00:00',
  '11': ' Friday - Saturday From 9:00 TO 02:00',
  '12': 'All rights reserved',
  '13': 'Privacy policy',
  '14': 'About Alba group',
  '15': 'Moscow',
  '16': 'Pafos',
  '17': 'South 22',
  '18': 'Lou Lou',
  '19': 'Jar-Ptica',
  '20': 'Horoshaya Devochka',
  '21': 'Eshak',
  '22': 'St. Petersburg',
  '23': 'Lou Lou',
  '24': 'Lou Lou Secret Bar',
  '25': 'Kazan',
  '26': 'More&more',
  '27': 'Eshak',
  '28': 'Horoshaya Devochka',
  '29': 'Catering',
  '30': 'Loyalty program',
  '31': 'News',
  '32': 'Delivery',
  '33': 'Job',
  '34': 'Contacts',


}


let currentLanguage = 'russian'


function translateWebsite() {

  if (currentLanguage === "russian") {
    currentLanguage = "english";
  } else {
    currentLanguage = "russian";
  }



  const elementsToTranslate = document.querySelectorAll("[data-translate]");


  elementsToTranslate.forEach(element => {
    let wordToTranslate = element.dataset.translate;
    let translatedWord = (currentLanguage === "russian" || currentLanguage === '') ? russianWords[wordToTranslate] : englishWords[wordToTranslate];
    element.textContent = translatedWord;
  });


  document.querySelector(".english").textContent = (currentLanguage === "russian") ? "Eng" : "Рус";

}

document.querySelector('.english').addEventListener("click", translateWebsite);

