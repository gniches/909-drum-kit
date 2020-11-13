function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return; //Impede a função de rodar tudo junto.
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');    
};

function removeTransition(event) {
    if (event.propertyName !== 'transform') return; //Passa direto se não for um transform
    this.classList.remove('playing'); //this faz referência a class .key abaixo
};

 const keys = document.querySelectorAll('.key');
 keys.forEach(key => key.addEventListener('transitionend', removeTransition));
 window.addEventListener('keydown', playSound );