
var togle_btn = document.getElementById("togle-menu");
var close_btn = document.getElementById("close-menu");
var togle_menu = document.getElementById("popup-menu");


togle_btn.addEventListener("click",function(){
    console.log("CHANGED");
    togle_menu.style.display = 'flex';
})

close_btn.addEventListener("click",()=>{
    console.log("CHANGED");
    togle_menu.style.display = 'none';
})