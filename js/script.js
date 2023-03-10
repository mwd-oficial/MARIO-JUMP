const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const sclouds = document.getElementById('sclouds')
const gameOver = document.getElementById('game-over')
const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {

        mario.classList.remove('jump')
        
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px','')
    const scloudsPosition = +window.getComputedStyle(sclouds).right.replace('px','')
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        gameOver.style.display = 'flex'
        
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        clouds.style.animation = 'none'
        clouds.style.right = `${cloudsPosition}px`

        sclouds.style.animation = 'none'
        sclouds.style.right = `${scloudsPosition}px`

        mario.src = 'imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }
}, 10);

document.addEventListener('keydown', jump)
document.addEventListener('click', jump)