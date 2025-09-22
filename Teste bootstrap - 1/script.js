// ✅ URLs CORRIGIDAS PARA PLACE PUPPY (y:HEIGHT/x:WIDTH)
const animais = [
    { nome: "Luna e lua", tipo: "coelhinhas", imagem: "https://3.bp.blogspot.com/-cr7KZlujMTg/U8fEj9VKgxI/AAAAAAACB8I/Z4J4a6bndc0/s1600/media-95662-338678.jpg" },
    { nome: "Mingau", tipo: "Gatinho", imagem: "https://images.pexels.com/photos/16945586/pexels-photo-16945586.jpeg?cs=srgb&dl=pexels-carlostorres-16945586.jpg&fm=jpg" },
    { nome: "Pipo", tipo: "porquinho da índia", imagem: "https://img.freepik.com/premium-photo/humorous-image-cute-guinea-pig-wearing-scientist-attire-with-round-glasses_268722-8031.jpg" },
    { nome: "Bolinha", tipo: "Hamster", imagem: "https://png.pngtree.com/thumb_back/fw800/background/20230518/pngtree-this-photo-shows-a-hamster-standing-behind-a-wooden-board-image_2524532.jpg" },
    { nome: "Toby", tipo: "Cachorrinho", imagem: "https://img.freepik.com/fotos-gratis/retrato-de-um-cachorrinho-fofo-sobre-um-fundo-de-folhas-de-outono_384344-5248.jpg" }
];

function carregarGaleria() {
    const galeriaContainer = document.getElementById('galeria-container');

    animais.forEach(animal => {
        const card = document.createElement('div');
        card.classList.add('card-animal');

        card.innerHTML = `
            <img src="${animal.imagem}" alt="${animal.nome}" 
                 onerror="this.src='https://place-puppy.com/puppy/y:120/x:220'; this.alt='Imagem indisponível'">
            <h3>${animal.nome}</h3>
            <p>${animal.tipo}</p>
        `;

        galeriaContainer.appendChild(card);
    });
}

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

if (totalSlides > 0) {
    document.querySelector('.next')?.addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    });

    document.querySelector('.prev')?.addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    });
}

document.getElementById('form-contato')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve. 🐶');
    this.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    carregarGaleria();
});