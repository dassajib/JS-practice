// get the click button
const postButton = document.getElementById("post-button").addEventListener("click", function () {
    // get the comment that was wrote
    const newComment = document.getElementById("new-comment");
    const showNewComment = newComment.value;
    // create a paragraph where the comment will be in.
    const createParagraph = document.createElement("p");
    createParagraph.innerText = newComment.value;
    // append the paragraphn in comment section
    const commentContainer = document.getElementById("comment-container");
    commentContainer.appendChild(createParagraph);
    // make the comment box null
    newComment.value = "";
})