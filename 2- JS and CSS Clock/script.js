const hourHand = document.querySelector('[data-js="hour-hand"]')
const minHand = document.querySelector('[data-js="min-hand"]')
const secHand = document.querySelector('[data-js="sec-hand"]')

function setDate() {
    const now = new Date()
    
    const seconds = now.getSeconds()
    const secondsDegrees = (seconds * 360/60) + 90// 360 degrees per second
    secHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes()
    const minutesDegrees = (minutes * 360/60) + (seconds * 360/(60*60)) + 90 //6 deg per min + 360 degrees per 3600 sec
    minHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getHours()
    const hoursDegrees = (hours * 360/12) + (seconds * 360/(12*60*60)) + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`

}

setDate()
setInterval(setDate, 1000)