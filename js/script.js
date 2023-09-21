document.getElementById("imagem").innerHTML = "<img src='imgs/logo.png'>";
document.getElementById("perfil").innerHTML = "<img src='imgs/Emerson.jpg'>";

<<<<<<< HEAD
let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.bx-menu');

=======
// Criação das variáveis da sidebar e do botão abrir/fechar

let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.bx-menu');

// Aplicação da ação de abrir e fechar da sidebar
>>>>>>> 6e1458e6eec72bde307a0fd7eb9bab11342f6eac

sidebarBtn.addEventListener('click', () =>{
    sidebar.classList.toggle('close')
} );
