let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function moveSlide(direction) {
    slides[currentIndex].classList.remove("active");

    currentIndex += direction;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    slides[currentIndex].classList.add("active");
}

function closeofferbanner(){
    const banner =document.getElementById("offerbanner").style.display="none"
}

function opennavbar(){
    document.getElementById("sidenav").style.right="0";
}

function closenavbar(){
    document.getElementById("sidenav").style.right="-30%"
}