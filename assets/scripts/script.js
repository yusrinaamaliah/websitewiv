$(window).ready(()=>{$("#loading").fadeOut(1e3),$("body").css("overflow","auto")});var a=0;$(window).scroll(function(){$(window).scrollTop()>$("#main").offset().top+200?($("#scrollTopBtn").fadeIn(500),$("#scrollTopBtn").css("display","flex")):$("#scrollTopBtn").fadeOut(500);var t=$("#counter-box").offset().top-window.innerHeight;0==a&&$(window).scrollTop()>t&&($(".counter").each(function(){var t=$(this),o=t.attr("data-number");$({countNum:t.text()}).animate({countNum:o},{duration:850,easing:"swing",step:function(){t.text(Math.ceil(this.countNum).toLocaleString("en"))},complete:function(){t.text(Math.ceil(this.countNum).toLocaleString("en"))}})}),a=1)}),$("#scrollTopBtn").click(()=>{$("html,body").animate({scrollTop:0},2)});let toggleMenu=document.getElementById("toggleMenu"),LinksList=document.getElementById("LinksList");toggleMenu.addEventListener("click",()=>{toggleMenu.classList.toggle("open"),LinksList.classList.toggle("open")}),$(function(){$(".owl-carousel").owlCarousel({margin:20,responsive:{0:{items:1,dots:!0,loop:!0},600:{items:2,dots:!0,loop:!0},1e3:{items:4,dots:!0,loop:!0}}})}),AOS.init();
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

