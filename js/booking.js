const findTableBtn = document.querySelector("#find-table");
const yourDetalBtn = document.querySelector("#your-detals");
const form1 = document.querySelector(".form-1");
const form2 = document.querySelector(".form-2");


yourDetalBtn.addEventListener("click", function(){
    form2.classList.add("form-active")
    yourDetalBtn.classList.add("book-nav-active")
    findTableBtn.classList.remove("book-nav-active")
    form1.classList.remove("form-active")
})
findTableBtn.addEventListener("click", function(){
    form2.classList.remove("form-active")
    yourDetalBtn.classList.remove("book-nav-active")
    findTableBtn.classList.add("book-nav-active")
    form1.classList.add("form-active")
})