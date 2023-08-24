let dark_icon = document.querySelector('.fa-moon');
let body = document.querySelector('body');
let swiper_section = document.querySelector('#sw-sec');
let footer = document.querySelector('#footer');
let body_bgc = JSON.stringify(localStorage.getItem('bodybgc'));



// when user click on dark icon
dark_icon.addEventListener("click",_=>{
    dark_icon.classList.toggle('fa-sun');
    if(dark_icon.classList.contains('fa-sun')){
        body.style.backgroundColor = "#000000";
        localStorage.setItem('bodybgc','#000000')
        swiper_section.style.backgroundColor = "#000000";
        footer.style.backgroundColor = "#000000";
    }else{
        body.style.backgroundColor = "unset"
        swiper_section.style.backgroundColor = "unset";
        swiper_section.style.backgroundColor = "unset";
        footer.style.backgroundColor = "azure";
    }
})