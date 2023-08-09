console.log("JavaScript is linked!");
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');
let scrollTop = document.querySelector('.scroll-top');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 250){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

    if(window.scrollY > 250){
        scrollTop.style.display = 'initial';
    }else{
        scrollTop.style.display = 'none';
    }

}

var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop:true,
});

// let countDate = new Date('August 30, 2023 00:00:00').getTime();

// function countDown() {
//     let now = new Date().getTime();

//     let gap = countDate - now;

//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     const d = Math.floor(gap / day);
//     const h = Math.floor((gap % day) / hour);
//     const m = Math.floor((gap % hour) / minute);
//     const s = Math.floor((gap % minute) / second);

//     document.getElementById('day').innerText = d;
//     document.getElementById('hour').innerText = h;
//     document.getElementById('minute').innerText = m;
//     document.getElementById('second').innerText = s;
// }

// setInterval(function() {
//     countDown();
// }, 1000);
