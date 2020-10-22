window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio);
    return; // Impede a função de rodar tudo junto
    audio.play()
});

function playPad(event) {
    const audio = document.querySelector(`[data-key="${event.keyCode}"]`);
    if(!audio) return;
    playAudio();
}

function playAudio(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    audio.currentTime = 0;
    audio.play()
}





window.addEventListener('keydown', playPad)

//window.addEventListener('load', init());