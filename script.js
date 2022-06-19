const ul = document.querySelector('nav ul')
const fixed = document.querySelector('.main')
const menuBtn = document.querySelector('.menu-btn')
const menuNav = document.querySelector('nav')

function menuShow() {
  if (ul.classList.contains('open')) {
    ul.classList.toggle('open')
    fixed.classList.toggle('open')
    menuNav.classList.toggle('open')
  } else {
    ul.classList.toggle('open')
    fixed.classList.toggle('open')
    menuNav.classList.toggle('open')
  }
}
