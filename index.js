const navSlide = clickBurger();

function clickBurger(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.frame');

    burger.addEventListener('click',() =>{
        
        nav.classList.toggle('frame-actives');
        const nav_native= document.querySelector('frame-actives');
        nav_native.getElementsByClassName.transform = "translateX(0%)";
       
    } );

}

