// we can use more than one event in one id.if we need to exicute one specific event in an id then we can use stopImmidiatePropagation.and have to use event parameter.
document.getElementById("list-id-1").addEventListener("click", function (event) {
    console.log("1st item clicked1");
    event.stopImmediatePropagation();

    // if we need to use some event or one event for one id then we should use stop Propagation.
    event.stopPropagation();
})
document.getElementById("list-id-1").addEventListener("click", function () {
    console.log("1st item clicked2");
})
document.getElementById("list-id-1").addEventListener("click", function () {
    console.log("1st item clicked3");
})
document.getElementById("list-id-1").addEventListener("click", function () {
    console.log("1st item clicked4");
})



document.getElementById("ul-id").addEventListener("click", function () {
    console.log("ul item clicked");

})

document.getElementById("section-id").addEventListener("click", function () {
    console.log("SEction item clicked");
})

