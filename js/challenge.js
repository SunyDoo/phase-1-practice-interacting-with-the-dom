let second = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const likes = document.querySelector('ul.likes')
console.log(likes)
let interval = setInterval(incrementTimer, 1000)
function incrementTimer(){
    second.innerText = parseInt(second.innerText) + 1
}
function decrementCounter(){
    second.innerText = parseInt(second.innerText) - 1
  }
minus.addEventListener ('click', decrementCounter)
plus.addEventListener ('click', incrementTimer)
// heart.addEventListener ('click', )


pause.addEventListener('click', pauseTime) 
function pauseTime(){
    if (pause.innerText = 'pause'){  
    clearInterval(interval)
    pause.innerText = 'resume'
    }
    else if (pause.innerText = 'resume'){  
        interval = setInterval(incrementTimer, 1000)
        pause.innerText = 'pause'
    }
}
    

 