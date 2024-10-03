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
  const currentTheme = document.body.className
  if (currentTheme === 'light-theme') {
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





