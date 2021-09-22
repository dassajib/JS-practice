// for delete
document.getElementById("delete-button").addEventListener("click", function () {
    document.getElementById("delete-info").style.display = "none";
})

// for focus
document.getElementById("input").addEventListener("focus", function () {
    document.body.style.backgroundColor = "red";
})

// for blur
document.getElementById("input").addEventListener("blur", function () {
    document.body.style.backgroundColor = "white";
})

// for keyup
document.getElementById("input").addEventListener("keyup", function (event) {
    const deleteButton = document.getElementById("delete-button");
    if (event.target.value == "Delete") {
        deleteButton.removeAttribute("disabled");
    }
    else {
        deleteButton.setAttribute("disabled", true);
    }
})

// for change
document.getElementById("input").addEventListener("change", function (event) {
    const deleteButton = document.getElementById("delete-button");
    if (event.target.value == "Delete") {
        deleteButton.removeAttribute("disabled");
    }
    else {
        deleteButton.setAttribute("disabled");
    }
})

