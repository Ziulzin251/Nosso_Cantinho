let msg = document.getElementById("msg")

function randomMsg(number){
    return msgs[number]
}

document.body.addEventListener("click", () => {
    
    msg.innerHTML = randomMsg(Math.floor(Math.random() * 100))
})