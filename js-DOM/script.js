const variable = document.getElementsByTagName("h1");
console.log(variable);

// Explore getElementById
const heading = document.getElementById("heading");
heading.style.textAlign = "center";
heading.style.color = "white";

// explore getElementsByTagName
const blogs = document.getElementsByTagName("article");
for (const blog of blogs) {
    console.log(blog.innerText);
}

// Explore getElementsByClassName
const blogTitles = document.getElementsByClassName("blogs");
for (const blog of blogTitles) {
    blog.style.border = "2px solid orange";
    blog.style.borderRadius = "40px";
}
