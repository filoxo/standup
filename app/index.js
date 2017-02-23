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
    const intervalSelect = document.querySelector('#intervalSelect')
    const countdown = document.querySelector('#countdown')
    const hasTimer = appState.current()
    function startTimer () {
        window.open()
        alert('stand up now?')
    }
    if (hasTimer) {
        intervalSelect.style.display = 'none'
        let referenceTime = new Date()
        function updateCountdown() {
            const elapsedTime = new Date() - referenceTime
            const mins = `0${Math.round(elapsedTime/60000)}`.slice(-2)
            const secs = `0${Math.round(elapsedTime/1000)}`.slice(-2)
            countdown.innerHTML = `${mins}:${secs}`
        }
        setInterval(updateCountdown, 1000)
    } else {
        intervalSelect.addEventListener('change', (e) => {
            const timerValue = parseInt(e.target.value, 10) * 60
            appState.update(timerValue)
            appTimer = setInterval(startTimer, timerValue * 1000)
        })
    }
    closeBtn.addEventListener('click', window.close)
});
