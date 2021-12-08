import { navigation } from './navigation.js';
import { footer } from './footer.js';
import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

let currentPage = '';
const body = document.getElementsByTagName('body')[0];
const main = document.createElement('main');

function runHomePage() {
  currentPage = 'home';
  body.innerHTML = '';
  body.prepend(footer());
  main.innerHTML = home();
  body.prepend(main);
  body.prepend(navigation('home'));
  handleLinks();
}

function runMenuPage() {
  currentPage = 'menu';
  body.innerHTML = '';
  body.prepend(footer());
  main.innerHTML = menu();
  body.prepend(main);
  body.prepend(navigation('menu'));
  handleLinks();
}

function runContactPage() {
  currentPage = 'contact';
  body.innerHTML = '';
  body.prepend(footer());
  main.innerHTML = contact();
  body.prepend(main);
  body.prepend(navigation('contact'));
  handleLinks();
  const form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    alert('form submitted!');
  });
}

function handleLinks() {
  const homeLink = document.querySelector('#home');
  const menuLink = document.querySelector('#menu');
  const contactLink = document.querySelector('#contact');
  homeLink.addEventListener('click', function (e) {
    if (currentPage == 'home') return;
    e.preventDefault();
    runHomePage('home');
  });
  menuLink.addEventListener('click', function (e) {
    if (currentPage == 'menu') return;
    e.preventDefault();
    runMenuPage('menu');
  });
  contactLink.addEventListener('click', function (e) {
    if (currentPage == 'contact') return;
    e.preventDefault();
    runContactPage('contact');
  });
}

runHomePage();
