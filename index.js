function playAudioW() {
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
}

function playAudioA() {
    var audio = new Audio('./sounds/tom-2.mp3');
    audio.play();
}

function playAudioS() {
    var audio = new Audio('./sounds/tom-3.mp3');
    audio.play();
}

function playAudioD() {
    var audio = new Audio('./sounds/tom-4.mp3');
    audio.play();
}

function playAudioJ() {
    var audio = new Audio('./sounds/snare.mp3');
    audio.play();
}

function playAudioK() {
    var audio = new Audio('./sounds/crash.mp3');
    audio.play();
}

function playAudioL() {
    var audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();
}

function playSound(key) {
    switch (key) {
        case 'w':
            playAudioW();
            break;
        case 'a':
            playAudioA();
            break;
        case 's':
            playAudioS();
            break;
        case 'd':
            playAudioD();
            break;
        case 'j':
            playAudioJ();
            break;
        case 'k':
            playAudioK();
            break;
        case 'l':
            playAudioL();
            break;
    }
}

function animate(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var key = this.textContent;
        playSound(key);
        animate(key);
    });
}

document.addEventListener("keydown", function (event) {
    playSound(event.key);
    animate(event.key);
})