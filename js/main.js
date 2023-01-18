const navbarBtn = document.querySelector('.navbar-toggler');
const mobileMenu = document.querySelector('.mobile-menu');
navbarBtn.addEventListener('click', () => {
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
  }
});