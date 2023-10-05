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

// pagina equipe 

const members = document.querySelectorAll('.member');

members.forEach(member => {
  member.addEventListener('click', () => {
    const details = member.querySelector('.member-details');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
  });
});