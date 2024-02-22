const home = document.getElementById('home');
const portfolio = document.getElementById('portfolio');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const mainWindow = document.querySelectorAll('.main-window');
const mainWindow0 = document.querySelector('.main-window--0');
const mainWindow1 = document.querySelector('.main-window--1');
const mainWindow2 = document.querySelector('.main-window--2');
const mainWindow3 = document.querySelector('.main-window--3');
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
  mainWindow2.classList.remove('hidden');
  about.style.borderBottom = '2px solid #000';
});
contact.addEventListener('click', () => {
  remove();
  removeBorder();
  mainWindow3.classList.remove('hidden');
  contact.style.borderBottom = '2px solid #000';
});

function removeBorder() {
  links.forEach((link) => {
    link.style.borderBottom = 'none';
  });
}
