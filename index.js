let dino = document.querySelector('.dino')
let cactus = document.querySelector('.cactus')
let rekord = document.querySelector('.rekord')

function jump() {
    if (dispatchEvent.classList != 'jump') {
        dino.classList.add('jump')

        setInterval(() => {
            dino.classList.remove('jump')
        }, 500)
    }
}

const funcLive = setInterval(() => {
    let dinoTepaga = parseInt(
        window.getComputedStyle(dino).getPropertyValue('top')
    )
    let cactusChapga = parseInt(
        window.getComputedStyle(cactus).getPropertyValue('left')
    )

    if (cactusChapga > 0 && cactusChapga < 60 && dinoTepaga >= 150) {
        dino.style.animationPlayState = 'paused'
        cactus.style.animationPlayState = 'paused'

        alert('GAME OVER')
        window.location.replace('/home.html')
    }
})


document.addEventListener('click', () => {
    jump()
    rekord.innerHTML++
})

