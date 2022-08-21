let navigation = document.querySelector('.main-nav');
let button = document.querySelector('.main-header__nav-toggle');

button.onclick = function() {
  navigation.classList.toggle('main-nav--close');
}
