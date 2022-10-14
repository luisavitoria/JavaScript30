
window.addEventListener('keydown', playSound)

function playSound(event) {
    const audio = document.querySelector(`audio[data-js="${event.keyCode}"]`)
    const key = document.querySelector(`div[data-js="${event.keyCode}"]`)

    if(!key) return

    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}


// REMOVE ANIMATION
const keys = Array.from(document.querySelectorAll('.key'))

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
})

function removeTransition(event) {
    if(event.propertyName !== "transform") return
    event.target.classList.remove('playing')
}

