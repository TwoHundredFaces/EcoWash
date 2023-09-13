document.getElementById("imagem").innerHTML = "<img src='imgs/logo.png'>";
document.getElementById("perfil").innerHTML = "<img src='imgs/Emerson.jpg'>";

let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.bx-menu');


sidebarBtn.addEventListener('click', () =>{
    sidebar.classList.toggle('close')
} );
