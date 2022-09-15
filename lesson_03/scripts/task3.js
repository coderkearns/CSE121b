/* Lesson 3 */

/* FUNCTIONS */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    const sum = add(
        +document.getElementById("addend1").value,
        +document.getElementById("addend2").value
    )
    document.getElementById("sum").value = sum
}

document.getElementById("addNumbers").addEventListener("click", addNumbers)

const subtract = function (number1, number2) { return number1 - number2 }

const subtractNumbers = function () {
    const difference = subtract(
        document.getElementById("minuend").value,
        document.getElementById("subtrahend").value
    )
    document.getElementById("difference").value = difference
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers)

const multiply = (number1, number2) => number1 * number2

const multiplyNumbers = () => {
    const product = multiply(
        document.getElementById("factor1").value,
        document.getElementById("factor2").value
    )
    document.getElementById("product").value = product
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers)

const divide = (number1, number2) => number1 / number2

const divideNumbers = () => {
    const quotient = divide(
        document.getElementById("dividend").value,
        document.getElementById("divisor").value
    )
    document.getElementById("quotient").value = quotient
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers)


/* BUILT-IN METHODS */
const date = new Date()
let year

year = date.getFullYear()

// document.getElementById("year").value = year
// There doesn't seem to be a *form* element of the page with the ID of "year", so i assumed you meant the <span> instead:
document.getElementById("year").textContent = year


/* ARRAY METHODS */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

document.getElementById("array").textContent = arr
document.getElementById("odds").textContent = arr.filter(i => i % 2 !== 0)
document.getElementById("evens").textContent = arr.filter(i => i % 2 === 0)
document.getElementById("sumOfArray").textContent = arr.reduce((sum, i) => sum + i, 0)
document.getElementById("multiplied").textContent = arr.map(i => i * 2)
document.getElementById("sumOfMultiplied").textContent = arr.map(i => i * 2).reduce((sum, i) => sum + i, 0)
