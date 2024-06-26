const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;
let autoSlideInterval; 

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlider, 4500); 
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

btnNext.addEventListener('click', () => {
  nextSlider();
  stopAutoSlide(); 
});

btnPrev.addEventListener('click', () => {
  prevSlider();
  stopAutoSlide(); 
});


startAutoSlide();


btnNext.addEventListener('mouseover', stopAutoSlide);
btnPrev.addEventListener('mouseover', stopAutoSlide);


btnNext.addEventListener('mouseout', startAutoSlide);
btnPrev.addEventListener('mouseout', startAutoSlide);

