function showModal(type) {
    var modal = document.getElementById("modal-" + type);
    modal.classList.add("show-modal");
}

function closeModal(type) {
    var modal = document.getElementById("modal-" + type);
    modal.classList.remove("show-modal");
}

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

    if (currentUserIndex === 1) {
        document.body.classList.add('invert-colors');
    } else {
        document.body.classList.remove('invert-colors');
    }
});

updateUser();
