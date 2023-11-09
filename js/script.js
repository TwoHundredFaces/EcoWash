const signInBtnLink = document.querySelector(".signInBtn-link");
const signUpBtnLink = document.querySelector(".signUpBtn-link");
const wrapper = document.querySelector(".wrapper");

// Aciona o evento animado no CSS do wrapper

signUpBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

signInBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});

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

let repeat = function () {
  setInterval(function () {
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
  }, 1999);
};
repeat();


// pagina equipe 

// const members = document.querySelectorAll('.member');

// members.forEach(member => {
//   member.addEventListener('click', () => {
//     const details = member.querySelector('.member-details');
//     details.style.display = details.style.display === 'block' ? 'none' : 'block';
//   });
// });