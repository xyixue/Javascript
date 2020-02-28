const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setData() {
    const now = new Date();
    //秒
    const seconds = now.getSeconds();
    let secondsDeg = seconds * 6 + 90;
    // console.log([secondHand]);
    secondHand.style.transform = `rotate(${secondsDeg}deg)`
        // console.log(seconds);
        // 分钟
    const minutes = now.getMinutes();
    let minsDeg = (minutes * 6) + (seconds / 60) * 6 + 90
    minHand.style.transform = `rotate(${minsDeg}deg)`
        // console.log(minsDeg);
        // 小时
    const hour = now.getHours();
    let hourDeg = (hour * 30) + (minutes / 60) * 30 + (seconds / 3600) * 30 + 90
    hourHand.style.transform = `rotate(${hourDeg}deg)`
        // console.log(hourDeg);
}

setInterval(setData, 1000);

setData();