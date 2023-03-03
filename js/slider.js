
const slider = document.querySelector('.slider_js');
const wrapperSlider = slider.querySelector('.slider-wrapper_js');
const innerSlider = wrapperSlider.querySelector('.slider-inner_js');
const buttonNext = slider.querySelector('.button-next_js');
const buttonBack = slider.querySelector('.button-back_js');
const slides = [...document.querySelectorAll('.slider-slide_js')];
const slidesCount = slides.length;
let slideWidth = wrapperSlider.offsetWidth;
let activeSlideIndex = 0;
let animationDuration = 600;
let timerID;

let itemsWidth = [];

const getWidth = () => {
  slides.forEach((item) =>  {
    let result = item.offsetWidth
    itemsWidth.push(result);
})
return itemsWidth;
} 

getWidth()

let itemWidth = itemsWidth[0];


const timerLogic = () => {
  clearTimeout(timerID);
  innerSlider.style.transition = `transform ${animationDuration}ms`;
  timerID = setTimeout(() => {
    innerSlider.style.transition = '';
  }, animationDuration);
};

const initSlide = (index) => {
  const gap = 20;
  let width = itemWidth + gap;
  let mar = index * width;
  innerSlider.style.transform = `translateX(${mar * (-1)}px)`;
  timerLogic();
}

const setActiveSlide = (whereTo) => {
  if (activeSlideIndex < 0 || activeSlideIndex > slidesCount) return;
  switch (whereTo) {
    case "next":
      if (activeSlideIndex < slidesCount) {
        activeSlideIndex = activeSlideIndex + 1;
        initSlide(activeSlideIndex);
        buttonBack.removeAttribute("disabled");
      }
      if (activeSlideIndex === slidesCount - 1) {
        buttonNext.setAttribute("disabled", "disabled");
      }
      break;
    case "back":
      if (activeSlideIndex !== 0) {
        activeSlideIndex = activeSlideIndex - 1;
        initSlide(activeSlideIndex);
        buttonNext.removeAttribute("disabled");
      }
      if (activeSlideIndex === 0) {
        buttonBack.setAttribute("disabled", "disabled");
      }
      break;
  }
};

buttonBack.addEventListener("click", () => setActiveSlide("back"));
buttonNext.addEventListener("click", () => setActiveSlide("next"));

window.addEventListener('load', () => {
  initSlide(activeSlideIndex);
  if (activeSlideIndex === slidesCount - 1) {
    buttonNext.setAttribute("disabled", "disabled");
  }
  if (activeSlideIndex === 0) {
    buttonBack.setAttribute("disabled", "disabled");
  }
});

window.addEventListener('resize', () => {
  setActiveSlide(activeSlideIndex);
});