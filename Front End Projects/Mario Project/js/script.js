const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');


const jump = () =>{
mario.classList.add('jump');

setTimeout(()=>{

mario.classList.remove('jump');

}, 500)
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", '')

    if(pipePosition <= 85 && marioPosition < 81 && pipePosition > 0 ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src= './img/mario-dead.png';
        mario.style.marginLeft = '12px';
        mario.style.width = '85px';

        gameOver.style.display = 'block'

        clearInterval(loop)
    }

}, 10)
document.addEventListener('keydown', jump)