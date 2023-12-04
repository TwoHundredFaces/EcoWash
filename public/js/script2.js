document.getElementById("imagem").innerHTML = "<img src='../imgs/logo.png'>";
document.getElementById("perfil").innerHTML = "<img src='../imgs/Emerson.jpg'>";

// Criação das variáveis da sidebar e do botão abrir/fechar

let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.bx-menu');

// Aplicação da ação de abrir e fechar da sidebar

sidebarBtn.addEventListener('click', () =>{
    sidebar.classList.toggle('close')
});