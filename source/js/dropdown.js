let nav = document.querySelector('.main-header__nav');
let button = document.querySelector('.main-header__nav-toggle');

button.onclick = function() {
  nav.classList.toggle('main-nav--close');
}
