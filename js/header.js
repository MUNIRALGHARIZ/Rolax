let menu_icon = document.querySelector('.fa-bars');
let menu = document.querySelector(' main .container .header .header-left nav');

// when user click on menu icon
menu_icon.addEventListener("click",_=>{
    menu_icon.classList.toggle('fa-xmark');
    menu.classList.toggle('active');
})