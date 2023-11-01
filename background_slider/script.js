const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let slideActive = 0;

rightBtn.addEventListener("click", () => {
    slideActive++;
  
    if (slideActive > slides.length -1) {
      slideActive = 0;
    }
    setBgToBody()
    setActiveSlide()

  });

  leftBtn.addEventListener('click',()=>{
    slideActive--

    if(slideActive <0){
        slideActive=slides.length -1
    }
    setBgToBody()
    setActiveSlide()
  })

  setBgToBody()


function setBgToBody() {
  body.style.backgroundImage = slides[slideActive].style.backgroundImage;
}


function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[slideActive].classList.add("active");
}


