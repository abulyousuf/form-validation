// Exercise 1: create a form and add validation

// Create a form that has these fields, with these validation requirements:

// a text input
//          required field
//          maximum length of 20 characters

// number input
//          that has a range of -10 to 10
//          is not required

// another text input that doesn't let you type the letter "T"

// a checkbox that is required (must be checked)

// an optional checkbox (checkbox 2)

// a text input that must have a value if checkbox 2 is selected

// Only submit if all the conditions are met.
// All the validation should be in JS (no HTML5 attributes!)
// The user should see an error message if the conditions are not met.


const maxLengthReq = document.querySelector("#max-length-req");
const numberRange = document.querySelector("#number-range");
const notLetterT = document.querySelector("#not-letter-t");
const form = document.querySelector("#form");

const checkLength = (event) => {
    if (event.target.value.length > 20) {
        const errorMessage1 = document.querySelector("#error-message1");
        errorMessage1.innerText = "Exceeds Maximum Length!";
    } else {
        const errorMessage1 = document.querySelector("#error-message1");
        errorMessage1.innerText = "";
    }
};

const checkRange = (event) => {
    if (event.target.value < -10 || event.target.value > 10) {
        const errorMessage2 = document.querySelector("#error-message2");
        errorMessage2.innerText = "Not in range!";
    } else {
        const errorMessage2 = document.querySelector("#error-message2");
        errorMessage2.innerText = "";
    }
};

const checkNotLetterT = (event) => {
    if (event.target.value.toLowerCase().includes("t")) {
        const errorMessage3 = document.querySelector("#error-message3");
        errorMessage3.innerText = "Letter T is not accepted!";
    } else {
        const errorMessage3 = document.querySelector("#error-message3");
        errorMessage3.innerText = "";
    }
}

maxLengthReq.addEventListener("keyup", checkLength);

numberRange.addEventListener("keyup", checkRange);

notLetterT.addEventListener("keyup", checkNotLetterT);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (maxLengthReq.value === "" || maxLengthReq.value.length > 20) {
        const errorMessage1 = document.querySelector("#error-message1");
        errorMessage1.innerText = "Empty or it exceeds Maximum Length!";
    }

    if (event.target.value < -10 || event.target.value > 10) {
        const errorMessage2 = document.querySelector("#error-message2");
        errorMessage2.innerText = "Not in range!";
    }

    const reqCheckbox = document.querySelector("#req-checkbox");

    if (reqCheckbox.checked === false) {
        const errorMessage4 = document.querySelector("#error-message4");
        errorMessage4.innerText = "Must be checked!";
    } else {
        const errorMessage4 = document.querySelector("#error-message4");
        errorMessage4.innerText = "";
    }

    const optCheckbox = document.querySelector(("#opt-checkbox"));

    if (optCheckbox.checked === true) {
        const reqForOptCheckbox = document.querySelector("#req-for-opt-checkbox");

        if (reqForOptCheckbox.value === "") {
            const errorMessage5 = document.querySelector("#error-message5");
            errorMessage5.innerText = "Can't be empty!";
        } else {
            const errorMessage5 = document.querySelector("#error-message5");
            errorMessage5.innerText = "";
        }
    } else {
        const errorMessage5 = document.querySelector("#error-message5");
        errorMessage5.innerText = "";
    }
});
