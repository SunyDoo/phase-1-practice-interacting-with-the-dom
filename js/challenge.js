let second = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const likes = document.querySelector('ul.likes')
const commentButton = document.getElementById('submit')
commentInput = document.getElementById('comment-input')
commentList = document.getElementById('list') 
const likeList = {}

let interval = setInterval(incrementTimer, 1000)
function incrementTimer(){
    second.innerText = parseInt(second.innerText) + 1
}
function decrementCounter(){
    second.innerText = parseInt(second.innerText) - 1
  }

minus.addEventListener ('click', decrementCounter)
plus.addEventListener ('click', incrementTimer)
heart.addEventListener ('click', liker)
function liker(){
    if (second.innerText in likeList){
        likeList[second.innerText] +=1
    }
    else {
        likeList[second.innerText] = 1
    }
    let list = `<li>${second.innerText} was liked ${likeList[second.innerText]} times</li>`
    likes.innerHTML += list
}

pause.addEventListener('click', pauseTime) 
function pauseTime(){
    if (pause.innerText == 'pause'){  
    clearInterval(interval)
    pause.innerText = 'resume'
    }
    else if (pause.innerText == 'resume'){  
        interval = setInterval(incrementTimer, 1000)
        pause.innerText = 'pause'
    }
}
   
commentButton.addEventListener('click', leaveComment)
function leaveComment(event){
    event.preventDefault()
    const form = document.getElementById('comment-form')
    const li = document.createElement("li")
    li.innerText = commentInput.value
    commentList.append(li)
    form.reset()
}
 