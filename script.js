let btn_menu = document.getElementById('menu-opene');
let nav = document.getElementById('nav');

btn_menu.addEventListener('click',(evt)=>{
    if(nav.style.display == ""||nav.style.display == "none"){
        nav.style.display="block";
    }else{
        nav.style.display="";
    }
    // let el = evt.target.nextElementSibling;
    // if(el.style.display == ""||el.style.display == "none"){
        // el.style.display="block";
    // }else{
        // el.style.display="none";
        // 
    // }
})

// let tempo = setInterval(displaymudar,1000);
// 
// function displaymudar(){
    // if(window.innerWidth >= 800){
        // nav.style.display="block";
    // }
    //  
    // 
// }