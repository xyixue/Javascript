// 1.按下按键的时候，播放对应的声音
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
}



// console.log([key]);

// 2. 按下按键的时候，改变按键的显示效果


//  3. 回到最初的状态
// setTimeout(() => {
//     key.classList.remove('playing')
// }, 70);

function removePlaying(e) {
    if (e.propertyName !== 'transform') return;
    // console.log(this);
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => {
    key.addEventListener('transitionend', removePlaying)
})

window.addEventListener('keydown', playSound)