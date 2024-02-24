const home = document.getElementById('home');
const portfolio = document.getElementById('portfolio');
const about = document.getElementById('about');
const testimonial = document.getElementById('testimonial');
const contact = document.getElementById('contact');
const services = document.getElementById('services');
const mainWindow = document.querySelectorAll('.main-window');
const mainWindow0 = document.querySelector('.main-window--0');
const mainWindow1 = document.querySelector('.main-window--1');
const mainWindow2 = document.querySelector('.main-window--2');
const mainWindow3 = document.querySelector('.main-window--3');
const mainWindow4 = document.querySelector('.main-window--4');
const mainWindow5 = document.querySelector('.main-window--5');
const links = document.querySelectorAll('.links');
function remove() {
  mainWindow.forEach((w) => {
    w.classList.add('hidden');
  });
}
portfolio.addEventListener('click', () => {
  remove();
  removeBorder();
  mainWindow1.classList.remove('hidden');
  portfolio.style.borderBottom = '2px solid #000';
});
home.addEventListener('click', () => {
  remove();
  removeBorder();
  mainWindow0.classList.remove('hidden');
  home.style.borderBottom = '2px solid #000';
});
about.addEventListener('click', () => {
  remove();
  removeBorder();
  mainWindow3.classList.remove('hidden');
  about.style.borderBottom = '2px solid #000';
});
services.addEventListener('click', () => {
  remove();
  removeBorder();
  mainWindow2.classList.remove('hidden');
  services.style.borderBottom = '2px solid #000';
});
testimonial.addEventListener('click', () => {
  remove();
  removeBorder();
  mainWindow4.classList.remove('hidden');
  testimonial.style.borderBottom = '2px solid #000';
});
contact.addEventListener('click', () => {
  remove();
  removeBorder();
  mainWindow5.classList.remove('hidden');
  contact.style.borderBottom = '2px solid #000';
});

function removeBorder() {
  links.forEach((link) => {
    link.style.borderBottom = 'none';
  });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slides');
  var dots = document.getElementsByClassName('slide-thumbnail');
  var captionText = document.getElementById('caption');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  console.log(slideIndex);

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    // slides[i].style.display = "inline";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  // slides[slideIndex-1].style.display = "inline";
  dots[slideIndex - 1].className += ' active';
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
