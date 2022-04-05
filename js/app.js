const toggler = document.querySelectorAll("#toggle-btn");
const sideNav = document.querySelector(".side-nav")
const toggleIcon = document.querySelector(".toggle-icon")

toggler.forEach((item) =>
item.addEventListener("click", function (){
    sideNav.classList.toggle("side-nav-active")
    toggleIcon.classList.toggle("icon-primary")
})
)

  let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("slider-container");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "flex";
            dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }

         let slideManual = 1;
        showSlide(slideManual);

        function plusSlides(n) {
            showSlides(slideManual += n);
        }

        function currentSlide(n) {
            showSlide(slideManual= n);
        }

        function showSlide(n) {
            let i;
            let slide = document.getElementsByClassName("slider-container");
            let dots = document.getElementsByClassName("dot");
            if (n > slide.length) { slideManual = 1 }
            if (n < 1) { slideManual = slide.length }
            for (i = 0; i < slide.length; i++) {
                slide[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slide[slideManual - 1].style.display = "flex";
            dots[slideManual - 1].className += " active";
        }