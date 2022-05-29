const toggler = document.querySelector("#toggle-btn");
const closeBtn = document.querySelector("#toggle-close-btn");
const sideNav = document.querySelector(".side-nav")
const toggleIcon = document.querySelector(".toggle-icon")
const bottomNav = document.querySelector(".bottom-nav")
const clickAnyToClose = document.querySelectorAll(".to-close")


toggler.addEventListener("click", function(){
    sideNav.classList.toggle("side-nav-active")
    toggleIcon.classList.toggle("icon-primary")
    bottomNav.classList.toggle("bottom-nav-fixed")
    document.body.classList.toggle("scroll-stop")
    
})

closeBtn.addEventListener("click", function(){
    sideNav.classList.remove("side-nav-active")
    toggleIcon.classList.remove("icon-primary")
    bottomNav.classList.remove("bottom-nav-fixed")
    document.body.classList.remove("scroll-stop")
})

clickAnyToClose.forEach((item) =>
item.addEventListener("click", function (){
    sideNav.classList.remove("side-nav-active")
    bottomNav.classList.remove("bottom-nav-fixed")
    toggleIcon.classList.remove("icon-primary")
    document.body.classList.remove("scroll-stop")
})
)