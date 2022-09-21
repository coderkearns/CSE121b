/* Lesson 4 */

/* DATA */

let person = {
    name: "Carter Kearns",
    photo: "./images/me.webp",
    favoriteFoods: ["Ice Cream", "Chocolate Lava Cake"],
    hobbies: ["Programming", "Reading", "Piano"],
    placesLived: [],
}

// I was unsure it you wanted me to add the places like this:
person.placesLived.push({
    place: "Texas",
    length: "9 years"
})

person.placesLived.push({
    place: "Utah",
    length: "8 years"
})

// If not, here's the other version in a comment:
/*
let person = {
    ...
    placesLived: [
        {
            place: "Texas",
            length: "9 years"
        },
        {
            place: "Utah",
            length: "8 years"
        }
    ]
}
*/

/* OUTPUT */

document.getElementById("name").innerText = person.name

document.getElementById("photo").setAttribute("src", person.photo)
document.getElementById("photo").setAttribute("alt", person.name)

const favFoodsUl = document.getElementById("favorite-foods")
for (let food of person.favoriteFoods) {
    let li = document.createElement("li")
    li.innerText = food
    favFoodsUl.appendChild(li)
}

const hobbiesUl = document.getElementById("hobbies")
for (let hobby of person.hobbies) {
    let li = document.createElement("li")
    li.innerText = hobby
    hobbiesUl.appendChild(li)
}

const placesLivedDl = document.getElementById("places-lived")
for (let place of person.placesLived) {
    let dt = document.createElement("dt")
    dt.innerText = place.place

    let dd = document.createElement("dd")
    dd.innerText = place.length

    placesLivedDl.appendChild(dt)
    placesLivedDl.appendChild(dd)
}
