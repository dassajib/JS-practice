// We can use event handelar by call function.

function makeColor() {
    document.body.style.backgroundColor = "Red";
}


// We, can use event handelar by picking html id and calling by JS function.
const makeBlue = document.getElementById("make-blue-color");

// if i use to write "()" to call function,then it would be give output even skiping onclick.So, here just use the function name. 
makeBlue.onclick = makeBlueColor;


function makeBlueColor() {
    document.body.style.backgroundColor = "blue";
}

// event handle by using anonymus function
const makeGreen = document.getElementById("make-green-color");
makeGreen.onclick = function () {
    document.body.style.backgroundColor = "green";
}

// Handle by eventListener
const makeWhite = document.getElementById("make-white-color");
makeWhite.addEventListener("click", makeWhiteColor);

function makeWhiteColor() {
    document.body.style.backgroundColor = "white";
}


// an another way to handle by eventLisyener 
const makeLightBlue = document.getElementById("make-light-blue");
makeLightBlue.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
})


// shortcut way
document.getElementById("make-hotpink-color").addEventListener("click", function () {
    document.body.style.backgroundColor = "hotpink";
})

// ------------------------------------------------------------------------------



// Best way to use eventHandeler
function showParagraph() {
    const paragraph = document.getElementById("paragraphId");
    paragraph.innerText = "Hey, Sajib Das WHat's UP!"
}


// An another best way to use directly event handeler
document.getElementById("update-name").addEventListener("click", function () {
    const nameField = document.getElementById("text-field");
    const showText = document.getElementById("show-text");
    showText.innerText = nameField.value;
    nameField.value = "";

})
