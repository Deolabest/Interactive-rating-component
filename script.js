const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".thanks")
const submitButton = document.getElementById("submit")
const returnButton = document.getElementById("return")
const userRating = document.getElementById("user-rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

returnButton.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        userRating.innerHTML = rate.innerHTML
    })
})
