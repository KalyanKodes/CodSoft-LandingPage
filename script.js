const sideBarContainer = document.querySelector('.header-nav-items');
const hamburgerSymbol = document.querySelector('.fa-bars');
const crossSymbol = document.querySelector('.fa-circle-xmark');

hamburgerSymbol.addEventListener('click' , ()=>{
    sideBarContainer.classList.toggle('show')
})

crossSymbol.addEventListener('click' , ()=>{
    sideBarContainer.classList.toggle('show')
})