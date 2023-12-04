// Slider
let slides = document.querySelectorAll(".slide");

slides = Array.from(slides).filter((slide) => slide.innerHTML.trim() !== "");

let btns = document.querySelectorAll(".btn");
let currentSlide = 0;

let manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
  currentSlide = manual;
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
  });
});

slides[currentSlide].classList.add("active");
btns[currentSlide].classList.add("active");

let autoNav = function () {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
    btns[currentSlide].classList.add("active");
};

// Adicione a chamada da função autoNav() para iniciar o slideshow
autoNav();

// Ative a navegação automática
setInterval(autoNav, 2000); // Altere o intervalo conforme necessário