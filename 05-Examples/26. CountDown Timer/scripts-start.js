const timeDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')

let countdown;

function timer(secondes) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + secondes * 1000;
    showTimeLeft(secondes);
    showEndTime(then)

    countdown = setInterval(() => {

        const secondesLeft = Math.round((then - Date.now()) / 1000);
        if (secondesLeft < 0) {
            clearInterval(countdown);
            return
        };
        showTimeLeft(secondesLeft);
    }, 1000);
}

function showTimeLeft(secondes) {
    const minutes = Math.floor(secondes / 60);
    const remainedSecondes = secondes % 60;
    const display = `${minutes}:${remainedSecondes < 10 ? '0':''}${remainedSecondes}`
    document.title = display;
    timeDisplay.textContent = display;
    // console.log(display);
}

function showEndTime(timestamp) {
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    const endDisplay = `在 ${hours}:${minutes < 10 ? '0':''}${minutes} 停止`
    endTimeDisplay.textContent = endDisplay;
    // console.log(endDisplay);
}

function startTime() {
    const secondes = this.dataset.time;
    timer(secondes);
}

buttons.forEach(button => button.addEventListener('click', startTime));

function custom(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60)
}

document.customForm.addEventListener('submit', custom);