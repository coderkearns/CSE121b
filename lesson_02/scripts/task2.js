/* Lesson 2 */

/* VARIABLES */
const name = "Carter Kearns"
const year = 2022
const img = "./images/me.webp"

document.querySelector("#name").textContent = name
document.querySelector("#year").textContent = year
document.querySelector("header > img").setAttribute("src", img)


/* ARRAYS */
const favFoods = ["Chocolate lava cake", "Ice cream"] // Don't judge me, I like sweets

document.querySelector("#food").innerText = favFoods

const otherFavFood = "Teriyaki Glazed Salmon" // *Slightly* healthier
favFoods.push(otherFavFood)

document.querySelector("#food").innerText = favFoods

favFoods.shift()

document.querySelector("#food").innerText = favFoods

favFoods.pop()

document.querySelector("#food").innerText = favFoods
