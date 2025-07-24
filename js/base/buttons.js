let buttonIndex = document.querySelector("[--index]")
let buttonDays = document.querySelector("[--days]")
let buttonLetter = document.querySelector("[--letter]")

buttonIndex.addEventListener("click", () => {
    document.querySelectorAll('section').forEach(tag => {
        tag.style.opacity = 0
    })

    document.getElementById("welcome").style.opacity = 1
})

buttonDays.addEventListener("click", () => {
    document.querySelectorAll('section').forEach(tag => {
        tag.style.opacity = 0
    })

    document.getElementById("days").style.opacity = 1
})

buttonLetter.addEventListener("click", () => {
    document.querySelectorAll('section').forEach(tag => {
        tag.style.opacity = 0
    })

    document.getElementById("letter").style.opacity = 1
})