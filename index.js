const fiveMinutes = document.getElementById('fiveMinutes')

let intervalTimer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isTimerRunning = false;
let activeStartbtn = false;
let reverseInterval; 

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

document.getElementById('startBtn').addEventListener('click', function() {
    // clearInterval(intervalTimer)
    // intervalTimer = setInterval(updateTimer, 1000)

    if (!isTimerRunning && !activeStartbtn) {
      clearInterval(intervalTimer);
      intervalTimer = setInterval(updateTimer, 1000);
      activeStartbtn = true;
  }
})
document.getElementById('stopBtn').addEventListener('click',function() {
  clearInterval(intervalTimer)
})
document.getElementById('clearBtn').addEventListener('click',function() {
  clearInterval(intervalTimer)
  hours = minutes = seconds = 0
  document.getElementById('timer').textContent = '00:00:00' 
  isTimerRunning = false; // Добавляем эту строку для установки флага isTimerRunning в false
  activeStartbtn = false; 
})

function reverseBtn() {
    if (seconds > 0 || minutes > 0 || hours > 0) {
      seconds--;
  
      if (seconds < 0) {
        seconds = 59;
        minutes--;
  
        if (minutes < 0) {
          minutes = 59;
          hours--;
  
          if (hours < 0) {
            // Timer finished
            clearInterval(reverseInterval);
            document.getElementById('reverseTimerDisplay').textContent = '00:00:00';
            document.getElementById('reverseTimerDisplay').textContent = 'Time is over';
            return;
          }
        }
      }
  
      const formattedTimer = 
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);
      document.getElementById('reverseTimerDisplay').textContent = formattedTimer;
    } else {
      // Timer finished
      clearInterval(reverseInterval);
      document.getElementById('reverseTimerDisplay').textContent = '00:00:00';
      document.getElementById('reverseTimerDisplay').textContent = 'Time is over';
    }
}

document.getElementById('startReverseBtn').addEventListener('click', function() {
  if (!isTimerRunning && !activeStartbtn) {
    const inputTime = document.getElementById('reverseTimeInput').value;
    const timeArray = inputTime.split(':').map(num => parseInt(num, 10));
    hours = timeArray[0] || 0;
    minutes = timeArray[1] || 0;
    seconds = timeArray[2] || 0;

    clearInterval(reverseInterval);
    reverseInterval = setInterval(reverseBtn, 1000);
    activeStartbtn = true;
  }
});
document.getElementById('reverseBtn').addEventListener('click',function() {
  document.getElementById('normalTimer').classList.add('hidden');
  document.getElementById('reverseTimer').classList.remove('hidden');
  clearInterval(intervalTimer)
  hours = minutes = seconds = 0
  document.getElementById('timer').textContent = '00:00:00'  
  isTimerRunning = false; // Добавляем эту строку для установки флага isTimerRunning в false
  activeStartbtn = false;
  
})
document.getElementById('backBtn').addEventListener('click',function() {
  document.getElementById('reverseTimer').classList.add('hidden');
  document.getElementById('normalTimer').classList.remove('hidden');
})

