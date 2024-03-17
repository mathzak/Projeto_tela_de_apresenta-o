const users = [
    {
        imagem: "C:/Users/tchec/OneDrive/Documentos/Projetos/Imagens/joaoprofilephoto.jpg",
        nome: "João",
        email: "joao@email.com"
    },
    {
        imagem: "C:/Users/tchec/OneDrive/Documentos/Projetos/Imagens/anaprofilephoto.jpg",
        nome: "Ana",
        email: "ana@email.com"
    }
];

let currentUserIndex = 0;

function updateUser() {
    const currentUser = users[currentUserIndex];
    document.querySelector('.profile-img').src = currentUser.imagem;
    document.querySelector('.nome').textContent = currentUser.nome;
    document.querySelector('.email').textContent = currentUser.email;
}

document.querySelector('.ball').addEventListener('click', (e) => {
    e.target.classList.toggle('ball-move');
    document.body.classList.toggle('dark');

    currentUserIndex = (currentUserIndex + 1) % users.length;
    updateUser();
});

updateUser();
