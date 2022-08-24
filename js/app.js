import isWebp from "./modules/isWebP.js"
isWebp()
/* ---------------------------------------------------------------------------------------------------------------------------- */

   const burger = document.querySelector('.header__menu-burger')
   const headerMenu = document.querySelector('.header__menu')
   const body = document.body

   burger.addEventListener('click', () => {
      window.scrollTo(0, 0)
      headerMenu.classList.toggle('active')
      body.classList.toggle('lock');
   })