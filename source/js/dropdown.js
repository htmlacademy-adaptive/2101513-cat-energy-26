let navigation = document.querySelector('.main-nav');
let header = document.querySelector('.main-header__container');
let button = document.querySelector('.main-header__nav-toggle');

navigation.classList.remove('main-nav--nojs');
header.classList.remove('main-header__container--nojs');
button.classList.remove('main-header__nav-toggle--nojs');

button.onclick = function() {
  navigation.classList.toggle('main-nav--closed');
  this.classList.toggle('main-header__nav-toggle--closed');
  if (this.classList.contains('main-header__nav-toggle--closed')) {
    this.classList.remove('main-header__nav-toggle--opened');
  }
  else {
    this.classList.add('main-header__nav-toggle--opened');
  }
}
