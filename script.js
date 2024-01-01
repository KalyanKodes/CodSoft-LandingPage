const sideBarContainer = document.querySelector('.header-nav-items');
const hamburgerSymbol = document.querySelector('.fa-bars');
const crossSymbol = document.querySelector('.fa-circle-xmark');


const symbols = [hamburgerSymbol , crossSymbol];


symbols.forEach((symbol)=>{
    symbol.addEventListener('click' , ()=>{
        sideBarContainer.classList.toggle('show')
    })
})

