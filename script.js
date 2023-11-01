let btn_menu = document.getElementById('menu-opene');
let nav = document.getElementById('nav');

btn_menu.addEventListener('click',(evt)=>{
    if(nav.style.display == ""||nav.style.display == "none"){
        nav.style.display="block";
    }else{
        nav.style.display="";
    }
