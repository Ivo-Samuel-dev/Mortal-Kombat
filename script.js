const audio = document.getElementById('background-audio');
const toggleButton = document.getElementById('toggle-audio');

// Controle de estado do áudio
let isPlaying = false;

toggleButton.addEventListener('click', () => {
    if (isPlaying) {
        // Pausa o áudio
        audio.pause();
        toggleButton.textContent = 'Ativar som';
    } else {
        // Toca o áudio
        audio.play().catch(error => {
            console.log('Erro ao reproduzir o áudio:', error);
        });
        toggleButton.textContent = 'Desativar som';
    }
    // Alterna o estado
    isPlaying = !isPlaying;
});


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide(index) {
    // Garantir que o índice esteja no intervalo correto
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // Esconder todas as imagens e mostrar apenas a imagem atual
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'block' : 'none';
    });
}

function mudarSlide(n) {
    mostrarSlide(slideIndex + n);
}

// Mostrar o primeiro slide inicial
mostrarSlide(slideIndex);

let personagens = document.querySelectorAll('.show-person');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseover', () => {
        let escolha = document.querySelector('.personagem-01');
        escolha.style.opacity = '1';
    });

    personagem.addEventListener('mouseout', () => {
        let escolha = document.querySelector('.personagem-01');
        escolha.style.opacity = '0';
    });

    personagem.addEventListener('click', () => {
        tocarAudio();
    });
});

function tocarAudio() {
    let audio = document.getElementById('audio');
    if (audio) {
        audio.currentTime = 0; // Reinicia o som se já estiver tocando
        audio.play();          // Toca o som
    }
}
