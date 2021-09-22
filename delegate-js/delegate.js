// const items = document.getElementsByClassName("item");
// for (const item of items) {
//     item.addEventListener("click", function (event) {
//         // simple way to delete
//         // document.getElementById("ul-id").removeChild(item);

//         // an another way to remove.and we have to pass a parameter called event.
//         event.target.parentNode.removeChild(event.target);

//     })

// }
// --------------------------------------------------------------------------------




// Smart way to add and delegate
document.getElementById("add-item").addEventListener("click", function () {
    const newLi = document.createElement("li");
    newLi.innerText = "New item";
    newLi.classList.add("item");
    const parent = document.getElementById("ul-container");
    parent.appendChild(newLi);
})

document.getElementById("ul-container").addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
})
