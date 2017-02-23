'use strict';

const interval = 'inverval'
let appTimer = null
const appState = {
    current: () => JSON.parse(localStorage.getItem(interval)),
    update: (value) => {
        localStorage.setItem(interval, JSON.stringify(value))
    },
    clear: () => {
        localStorage.removeItem(interval)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.querySelector('#closeBtn')
    const countdown = document.querySelector('#countdown')
    const hasTimer = appState.current()
    function startTimer () {
        window.open()
        alert('stand up now?')
    }
    if (hasTimer) {
        let referenceTime = new Date()
        function updateCountdown() {
            const elapsedTime = new Date() - referenceTime
            const mins = `0${Math.round(elapsedTime/60000)}`.slice(-2)
            const secs = `0${Math.round(elapsedTime/1000)}`.slice(-2)
            countdown.innerHTML = `${mins}:${secs}`
        }
        setInterval(updateCountdown, 1000)
    } else {
    }
    closeBtn.addEventListener('click', window.close)
});
