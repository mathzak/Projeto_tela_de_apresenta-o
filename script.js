// Função para exibir o modal
function showModal(type) {
    // Obtém o modal pelo ID
    var modal = document.getElementById("modal-" + type);
    // Adiciona a classe 'show-modal' para exibir o modal
    modal.classList.add("show-modal");
}

// Função para fechar o modal
function closeModal(type) {
    // Obtém o modal pelo ID
    var modal = document.getElementById("modal-" + type);
    // Remove a classe 'show-modal' para ocultar o modal
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
    // Obtém o usuário atual
    const currentUser = users[currentUserIndex];
    // Atualiza a imagem, nome e email do perfil na página
    document.querySelector('.profile-img').src = currentUser.imagem;
    document.querySelector('.nome').textContent = currentUser.nome;
    document.querySelector('.email').textContent = currentUser.email;
}

// Event listener para o botão de mudança de perfil
document.querySelector('.ball').addEventListener('click', (e) => {
    // Alterna a classe 'ball-move' para a animação do botão
    e.target.classList.toggle('ball-move');
    // Alterna a classe 'dark' para mudar o tema da página
    document.body.classList.toggle('ana');

    // Atualiza o índice do usuário para o próximo da lista
    currentUserIndex = (currentUserIndex + 1) % users.length;
    // Atualiza as informações do usuário na página
    updateUser();

    // Verifica se o perfil atual é o da Ana
    if (currentUserIndex === 1) {
        // Adiciona a classe 'invert-colors' para inverter as cores
        document.body.classList.add('invert-colors');
    } else {
        // Remove a classe 'invert-colors' se o perfil não for o da Ana
        document.body.classList.remove('invert-colors');
    }
});

// Chama a função para atualizar as informações do usuário ao carregar a página
updateUser();
