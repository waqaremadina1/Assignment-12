// --------------------------------------------------------------------------------------------------

let originalString = "I love my country paskistan. <br> I like my city faisalabad. <br> I love my homeland."

let cities = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Quetta"]

// --------------------------------------------------------------------------------------------------

// Lowercase 
const lowercase = () => {
    let lowercase = originalString.toLowerCase()
    document.getElementById("output").innerHTML = lowercase
}

// --------------------------------------------------------------------------------------------------

// Uppercase 
const uppercase = () => {
    let uppercase = originalString.toUpperCase()
    document.getElementById("output").innerHTML = uppercase
}

// --------------------------------------------------------------------------------------------------

// Capitalize 
const capitalize = () => {
    let capitalize = `<span class='text-capitalize'> ${originalString} </span>`
    document.getElementById("output").innerHTML = capitalize
}

// --------------------------------------------------------------------------------------------------

// Better Formatting 
const betterFormatting = () => {
    let word = document.getElementById("inputField").value
    if (word.length < 3) {
        alert("please enter your word correctly.")
        return
    }
    let wordFirstLetter = word.charAt(0).toUpperCase();
    let wordAllLetters = word.slice(1).toLowerCase();
    let betterFormatting = `${wordFirstLetter}${wordAllLetters}`
    document.getElementById('output').innerHTML = betterFormatting
}

// --------------------------------------------------------------------------------------------------

// Print All Cities 
const printCities = () => {
    document.getElementById("output").innerHTML = ""
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += `${i + 1}) ${cities[i]} <br>`
    }
}

// --------------------------------------------------------------------------------------------------

// Add City In List 
const addCity = () => {
    let city = document.getElementById("inputField").value;
    if (!city) {
        alert("Please add your city name correctly.")
        return;
    }
    let newCityFirstLetter = city.charAt(0).toUpperCase();
    let newCityAllLetters = city.slice(1).toLowerCase();
    let newCityInCapitalize = `${newCityFirstLetter}${newCityAllLetters}`

    let isCityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (newCityInCapitalize === cities[i])
            isCityFound = true;
        document.getElementById("output").innerHTML = `<span class='text-danger'>&quot;${newCityInCapitalize}&quot;</span> is already in cities list`
    }

    if (isCityFound === false) {
        cities.push(newCityInCapitalize)
        document.getElementById("output").innerHTML = `<span class='text-success'>&quot;${newCityInCapitalize}&quot;</span> has been successfully added into the list`
        const printCities = () => {
            document.getElementById("output").innerHTML = ""
            for (let i = 0; i < cities.length; i++) {
                document.getElementById("output").innerHTML += `${i + 1}) ${cities[i]}`
            }
        }
    }

}

// --------------------------------------------------------------------------------------------------

// Check City In List 
const checkCity = () => {
    let checkCity = document.getElementById("inputField").value;
    if (!checkCity) {
        alert("Please enter your city name correctly.")
        return;
    }
    let checkCityFirstLetter = checkCity.charAt(0).toUpperCase();
    let checkCityAllLetters = checkCity.slice(1).toLowerCase();
    let checkCityInCapitalize = `${checkCityFirstLetter}${checkCityAllLetters}`
    let isCheckCityFound = false;
    for (let i = 0; i < cities.length; i++) {
        if (checkCityInCapitalize === cities[i]) {
            isCheckCityFound = true;
            document.getElementById("output").innerHTML = `<span class='text-success fw-bold'>&quot;${checkCityInCapitalize}&quot;</span> is already in cities list`
        }
    }
    if (isCheckCityFound === false) {
        document.getElementById("output").innerHTML = `Sorry we couldn't found your city <span class='text-danger fw-bold'>${checkCityInCapitalize}</span> in the list`
    }
}

// --------------------------------------------------------------------------------------------------

// Find Word In Text 
const findWord = () => {
    let word = document.getElementById("inputField").value;
    if (!word) {
        alert("Please enter correct word.")
        return;
    }
    word = word.toLowerCase();
    let newOriginalString = originalString.toLowerCase()
    let findWord = newOriginalString.indexOf(word)
    if (findWord !== -1) {
        document.getElementById("output").innerHTML = `The word you entered is found at index: ${findWord}`
    } else {
        document.getElementById("output").innerHTML = `The word you entered is not found`
    }
}

// --------------------------------------------------------------------------------------------------

// Replace Word 
const replaceWord = () => {
    let currentWord = document.getElementById("inputField").value;
    if (!currentWord) {
        alert("Please enter a word correctly.")
        return;
    }
    let newWord = prompt("Please enter new word.")
    if (!newWord) {
        alert("Please enter a new word correctly.")
        return;
    }
    currentWord = currentWord.toLowerCase();
    newWord = newWord.toLowerCase();
    let newOriginalString = originalString.toLowerCase()
    currentWord = new RegExp(currentWord, "g")
    let replaceWord = newOriginalString.replace(currentWord, newWord)
    document.getElementById("output").innerHTML = replaceWord ;

}

// --------------------------------------------------------------------------------------------------


// Clear Output Box 
const clearOutput = () => {
    document.getElementById("output").innerHTML = ""
}

// --------------------------------------------------------------------------------------------------

// Clear Input Field 
const clearInput=()=>{
    document.getElementById("inputField").value = ""
}

// --------------------------------------------------------------------------------------------------