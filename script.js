let icon = document.querySelector(".icon")
let joke = document.querySelector(".joke")
let button = document.querySelector("button")
let counter = 0

let arrEm = ["&#128523", "&#128525", "&#128540", "&#128512"]


let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = () => {
 fetch(url)
    .then(data => data.json())
    .then(item => joke.textContent = item.joke)
    icon.innerHTML = arrEm[counter % 4]
    counter++
}
getJoke();

button.addEventListener("click", getJoke)
