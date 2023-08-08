const buttonMenu = document.querySelector('.button_menu')
const menuMobile = document.querySelector('.menu_hb')
let isMenuOpen = false

buttonMenu.addEventListener('click', function (){

    isMenuOpen ? menuMobile.classList.add('invisible')  :
    menuMobile.classList.remove('invisible')

    isMenuOpen ? buttonMenu.children[0].setAttribute('src', '../img/menu.png') : 
    buttonMenu.children[0].setAttribute('src', '../img/close.png')

    isMenuOpen = !isMenuOpen
 })