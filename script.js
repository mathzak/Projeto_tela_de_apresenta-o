// Função para exibir o modal
function showModal(type) {
    const modal = document.getElementById(`modal-${type}`);
    modal.classList.add("show-modal");
}

// Função para fechar o modal
function closeModal(type) {
    const modal = document.getElementById(`modal-${type}`);
    modal.classList.remove("show-modal");
}

// Array de usuários com informações de perfil
const users = [
    {
        imagem: "./Imagens/joaoprofilephoto.jpg",
        nome: "João",
        email: "joao@email.com"
    },
    {
        imagem: "./Imagens/anaprofilephoto.jpg",
        nome: "Ana",
        email: "ana@email.com"
    }
];

// Índice do usuário atualmente exibido
let currentUserIndex = 0;

// Função para atualizar as informações do usuário na página
function updateUser() {
    const currentUser = users[currentUserIndex];
    document.querySelector('.profile-img').src = currentUser.imagem;
    document.querySelector('.nome').textContent = currentUser.nome;
    document.querySelector('.email').textContent = currentUser.email;
}

// Event listener para o botão de mudança de perfil
document.querySelector('.ball').addEventListener('click', (event) => {
    const ball = event.currentTarget;
    ball.classList.toggle('ball-move');
    document.body.classList.toggle('body-user2');
    currentUserIndex = (currentUserIndex + 1) % users.length;
    updateUser();

    const isAnaProfile = (currentUserIndex === 1);
    document.body.classList.toggle('invert-colors', isAnaProfile);
});

// Função para abrir input de texto para alterar o nome ou email do usuário
function changeInfo(type) {
    let newInfo;
    if (type === 'name') {
        newInfo = prompt("Digite o novo nome:");
        if (newInfo && newInfo.trim() !== "") {
            users[currentUserIndex].nome = newInfo;
        }
    } else if (type === 'email') {
        newInfo = prompt("Digite o novo email:");
        if (newInfo && newInfo.trim() !== "") {
            users[currentUserIndex].email = newInfo;
        }
    }
    updateUser();
}

// Função para abrir input de texto para ajustar o tamanho da foto do usuário
function changePhotoSize() {
    let newSize = prompt("Digite o novo tamanho da foto (entre 100 e 320):");
    newSize = parseInt(newSize);

    if (!isNaN(newSize) && newSize >= 100 && newSize <= 320) {
        const profileImg = document.querySelector('.profile-img');
        profileImg.style.width = newSize + 'px';
        profileImg.style.height = 'auto';
    } else {
        alert("Por favor, insira um valor numérico entre 100 e 320.");
    }
}

// Chama a função para atualizar as informações do usuário ao carregar a página
updateUser();
