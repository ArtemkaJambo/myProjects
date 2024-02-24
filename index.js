let intervalTimer;
let seconds = 0
let minutes = 0
let hours = 0

function updateTimer() {
  seconds++
  if (seconds >= 60) {
    seconds = 0
    minutes++
  }
  if (minutes >= 60) {
    minutes = 0
    hours++
  }

  const formattedTimer = 
  (hours < 10 ? '0' + hours : hours) + ':' +
  (minutes < 10 ? '0' + minutes : minutes) + ':' +
  (seconds < 10 ? '0' + seconds : seconds)
  document.getElementById('timer').textContent = formattedTimer
}
document.getElementById('startBtn').addEventListener('click',function() {
  clearInterval(intervalTimer)
  intervalTimer = setInterval(updateTimer,1000)
})
document.getElementById('stopBtn').addEventListener('click',function() {
  clearInterval(intervalTimer)
})
document.getElementById('clearBtn').addEventListener('click',function() {
  clearInterval(intervalTimer)
  hours = minutes = seconds = 0
  document.getElementById('timer').textContent = '00:00:00'
})