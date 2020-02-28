const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const progressBar = player.querySelector(".progress__filled");
const progress = player.querySelector(".progress");

// 控制播放|暂停
function togglePlay() {
    const method = video.paused ? "play" : "pause";
    video[method]();
}
// 更新播放/暂停按钮图标
function updateButton() {
    const icon = this.paused ? "▶" : "▮▮";
    toggle.textContent = icon;
}
// 控制快进与后退
function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

// 控制声音和播放速度
function handleRangeUpdate() {
    console.log(this.value);
    video[this.name] = this.value;
}
// 进度条与播放时间同步
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// 进度条控制播放

function screb(e) {
    const screbTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = screbTime;
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
skipButtons.forEach(skipButton => skipButton.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

let mousedown = false;
progress.addEventListener("click", screb);
progress.addEventListener("mousemove", e => mousedown && screb(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));