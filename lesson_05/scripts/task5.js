/* Lesson 5 */

/* IF/ELSE IF */
let date = new Date()
let dayOfWeek = date.getDay()
let message

if (dayOfWeek > 0 && dayOfWeek < 6) {
    // It's a weekday
    message = "Hang in there!"
} else {
    // It's a weekend
    message = "Woohoo!  It is the weekend!"
}

/* SWITCH, CASE, BREAK */
let message2

switch (dayOfWeek) {
    case 0:
        message2 = "Sunday"
        break
    case 1:
        message2 = "Monday"
        break
    case 2:
        message2 = "Tuesday"
        break
    case 3:
        message2 = "Wednesday"
        break
    case 4:
        message2 = "Thursday"
        break
    case 5:
        message2 = "Friday"
        break
    case 6:
        message2 = "Saturday"
        break
}


/* OUTPUT */
document.getElementById("message1").textContent = message
document.getElementById("message2").textContent = message2

/* FETCH */
let temples = []

let filterFn = (temple) => true // This is for the STRETCH activity

function output(templesArr) {
    document.getElementById("temples").replaceChildren(...templesArr/* For the STRETCH activity { */.filter(filterFn)/* } */.map(temple => {
        const article = document.createElement("article")

        const name = document.createElement("h3")
        name.textContent = temple.templeName
        article.appendChild(name)

        const location = document.createElement("h4")
        location.textContent = temple.location
        article.appendChild(location)

        const dedicated = document.createElement("h4")
        dedicated.textContent = temple.dedicated
        article.appendChild(dedicated)

        const img = document.createElement("img")
        img.setAttribute("src", temple.imageUrl)
        img.setAttribute("alt", temple.templeName)
        article.appendChild(img)

        return article
    }))
}

function getTemples() {
    fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json")
        .then(res => res.json())
        .then(t => {
            temples = t
            output(temples)
        })
}

getTemples()

function reset() {
    document.getElementById("temples").querySelectorAll("article").forEach(el => el.remove())
}

function sortBy() {
    reset()
    if (document.getElementById("sortBy").value === "templeNameAscending") {
        temples.sort((a, b) => a.templeName > b.templeName ? 1 : -1)
    } else {
        temples.sort((a, b) => a.templeName > b.templeName ? -1 : 1)
    }
    output(temples)
}

document.getElementById("sortBy").addEventListener("change", sortBy)

/* STRETCH */
function filterBy() {
    switch (document.getElementById("filterBy").value) {
        case "all":
            filterFn = (temple) => true
            break
        case "after2000":
            filterFn = (temple) => (new Date(temple.dedicated) > new Date("1 January 2000"))
            break
        case "before2000":
            filterFn = (temple) => (new Date(temple.dedicated) < new Date("1 January 2000"))
            break
    }
    output(temples)
}

document.getElementById("filterBy").addEventListener("change", filterBy)
