const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', () => {
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})


const badgesEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')

window.addEventListener(
  'scroll',
  // _.throttle(함수, 반복시간) : lodash cdn을 활용해 명령어를 사용할 수 있다.
  _.throttle(() => {
    console.log(window.scrollY)
    if (window.scrollY > 500) {
      // 뱃지 숨기기
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgesEl, .5, {
        opacity: 0,
        display: 'none'
      })
      // 버튼 보이기
      gsap.to(toTopEl, .5, {
        x: 0
      })

    } else {
      // 뱃지 보이기
      gsap.to(badgesEl, .5, {
        opacity: 1,
        display: 'block'
      })
      // 버튼 숨기기
      gsap.to(toTopEl, .5, {
        x: 100
      })
    }
  }, 300))
  // _.throttle(함수, 시간)

// WINDOW 상단으로 이동
toTopEl.addEventListener('click', () => {
  gsap.to(window, .7, {
    scrollTo: 0 //gsap ScrollToPlugin CDN이 있어야 실행되는 옵션
  });
})

const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach((fadeEl, index) => {
  // gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, .5, {
    delay: (index + 1) * .5,
    opacity: 1
  })
})


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드 가운데 보기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  },
})

// AWARDS
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})


const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false
promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add('hide')
  } else {
    // 보임처리
    promotionEl.classList.remove('hide')
  }
})

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한 반복
    yoyo: true, // 앞으로 재생 후 다시 뒤로 재생
    // ↓ ease:애니속성으로 다양한 값으로 변경가능=>[참조] https://greensock.com/docs/v2/Easing
    ease: Power1.easeInOut,
    delay: random(0, delay)
  })
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


//scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach((spyEl) => {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 보여질 위치(화면의 범위는 0 ~ 1사이로 분할됨)
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear() // getFullYear : 날짜에서 4자리 년도만 추출