const btnMenu = document.querySelector('.button-menu');
const sitenav = document.querySelector('.mobile-menu');
const sHeader = document.querySelector('.header')

btnMenu.addEventListener('click', ()=> {
  if (!sitenav.classList.contains('open')) {
    sitenav.classList.add('open')
    btnMenu.innerHTML = `<img class="close" src="img/close.png" alt="menu-icon" width="40" height="40">`
  } else {
    sitenav.classList.remove('open')
    btnMenu.innerHTML = `<img class="menu" src="img/menu-icon.png" alt="menu-icon" width="40" height="40">`
  }
})