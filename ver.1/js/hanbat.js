const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

const section1 = document.querySelector('.box1');
const section2 = document.querySelector('.box2');
const section3 = document.querySelector('.box3');
const section4 = document.querySelector('.box4');

btn1.addEventListener('click', () => {
    scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

btn2.addEventListener('click', () => {
    scrollTo({
        top: 961,
        behavior: "smooth"
    });
});

btn3.addEventListener('click', () => {
    scrollTo({
        top: 1922,
        behavior: "smooth"
    });
});

btn4.addEventListener('click', () => {
    scrollTo({
        top: 2886,
        behavior: "smooth"
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i]
            .className
            .replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 6000);
}