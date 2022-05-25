const ditWrap = document.querySelector(".diet-optino-wrap");
const ditIcon = document.querySelector(".diet-option-icon");
const ditDropDown = document.querySelector(".diet-dropdown");


ditWrap.addEventListener("click", function(){
    ditDropDown.classList.toggle("active-drop-down")
    ditIcon.classList.toggle("chevron-up")
})
