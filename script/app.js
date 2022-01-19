const displayNoneLogoWepPc = document.querySelector('.logo_web_pc');
const displayNoneLogoWepMovil = document.querySelector('.logo_web_movil');
const displayNoneNav_link= document.querySelector('.nav_link');
const menu_btn = document.querySelector("#menu-btn");

const  logo_control = ()=>{
    displayNoneLogoWepPc.style.display='none';
   // displayNoneNav_lin.style.display='none';
}

logo_control();

menu_btn.onclick=()=>{
    menu_btn.classList.toggle('fa-times');
    displayNoneNav_link.classList.toggle('active');
}

window.onscroll = ()=>{
    menu_btn.classList.remove('fa-times');
    displayNoneNav_link.classList.remove('active');
}