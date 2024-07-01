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

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  searchbar();
});

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)



// barra de navegação
function searchbar() {
  console.log("teste");
  let input = document.getElementById('searchbar').value.trim().toLowerCase();
  const pages = ['top', 'acessorio', 'ajuda', 'biquini', 'linhas', 'produtos', 'short', 'sobrenos', 'Top'];
  let paginaEncontrada = false; 

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].includes(input)) {
      console.log("Página encontrada:", pages[i]);
      window.location.href = pages[i] + '.html';
      paginaEncontrada = true; 
      break; 
    }
  }

  
  if (!paginaEncontrada) {
    window.location.href = 'erro404.html';
  }

  return false;
}