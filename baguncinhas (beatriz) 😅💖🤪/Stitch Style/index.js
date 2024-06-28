const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider(){
  hideSlider()
  if(currentSlide == slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider(){
  hideSlider()
  if(currentSlide == 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

// barra de navegação
function searchbar(){
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase()
  let x = document.getElementsByClassName('search-box-input')

  for(i = 0; i < x.length; i++){
    if(!x[i].innerHTML.toLowerCase().includes(input)){
      x[i].style.display = "none"

    } else{
      x[i].style.display = "list-item"
    }
    
    }
  }
  
