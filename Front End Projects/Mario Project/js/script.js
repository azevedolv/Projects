const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');
const score = document.querySelector('.score');
const audioStart = new Audio('./audio/audio_theme.mp3')
const audioGameOver = new Audio('./audio/audio_gameover.mp3')
let points = 0

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500)
}

const loop = setInterval(() => {
    audioStart.play();
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", '')


    if (pipePosition <= 85 && marioPosition < 81 && pipePosition > 0) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/mario-dead.png';
        mario.style.marginLeft = '12px';
        mario.style.width = '85px';

        gameOver.style.display = 'block'

        
        let endScore = +score.textContent

        const beforeHigherScore = localStorage.getItem('score')
        
        if(!beforeHigherScore){
            localStorage.setItem('score', endScore)
        }
        
        if(+score.textContent > +beforeHigherScore){
            localStorage.setItem('score', endScore)

        }
        
        const higherScore = localStorage.getItem('score')
        

        const bestScore = +higherScore + 1
        document.getElementById("higher-score").innerHTML=`<strong>Higher:${bestScore}</strong>`;
        audioStart.pause();
        audioGameOver.play();

        clearInterval(loop)
    }

    points++;
    score.innerHTML = `${points}`;
}, 10)
document.addEventListener('keydown', jump)