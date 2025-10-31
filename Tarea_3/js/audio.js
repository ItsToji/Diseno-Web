const boton = document.getElementById('btnAudio');
const audio = document.getElementById('miAudio');

boton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        boton.textContent = '⏸️ Pausar';
    } else {
        audio.pause();
        boton.textContent = '▶️ Reproducir';
    }
});