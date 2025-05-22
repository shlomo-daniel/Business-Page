document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slides");
  const rightButton = document.getElementById("slide-right");
  const leftButton = document.getElementById("slide-left");
  const slideDots = document.querySelectorAll(".slide-dot");

  let currentIndex = 0;

  rightButton.addEventListener("click", () => {
    slides.forEach((slide) => slide.classList.remove("active-slide"));
    slideDots.forEach((dot) => dot.classList.remove("active-dot"));

    if (currentIndex >= slides.length - 1) {
      currentIndex = 0;
      slides[currentIndex].classList.add("active-slide");
      slideDots[currentIndex].classList.add("active-dot");
      return;
    }

    currentIndex++;
    slides[currentIndex].classList.add("active-slide");
    slideDots[currentIndex].classList.add("active-dot");
  });

  leftButton.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active-slide");
    });
    slideDots.forEach((dot) => {
      dot.classList.remove("active-dot");
    });

    if (currentIndex <= 0) {
      currentIndex = 2;
      slides[currentIndex].classList.add("active-slide");
      slideDots[currentIndex].classList.add("active-dot");
      return;
    }

    currentIndex--;
    slides[currentIndex].classList.add("active-slide");
    slideDots[currentIndex].classList.add("active-dot");
  });
});
