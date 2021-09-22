// if else conditon help us to do compare

var time = 23;

if (time >= 6 && time < 12) {
    console.log("Good Morning, Sajib");
}
else if (time > 12 && time < 15) {
    console.log("Good noon, Sajib");
}
else if (time > 15 && time >= 18) {
    console.log("Good afternoon, Sajib");
}
else if (time > 18 && time < 10) {
    console.log("Good evening, Sajib");
}
else {
    console.log("Good night, Sajib");
}

// we can use nested loop.

var aPlus = 80;
var a = 70;
var aMinus = 60;
var bPlus = 50;
var b = 40;
var handWriting = true;
var achiveNumber = 53;

if (achiveNumber > aPlus) {
    if (handWriting == true) {
        console.log("sabas valo mark peyecho ar hater lekhao valo");
    }
    else {
        console.log("sabas valo mark peyecho");
    }
}
else if (achiveNumber > a && achiveNumber < aPlus) {
    if (handWriting == true) {
        console.log("valo mark peyecho ar hat er lekha o valo");
    }
    else {
        console.log("valo mark peyecho");
    }
}
else if (achiveNumber > aMinus && achiveNumber < a) {
    if (handWriting == true) {
        console.log("aro valo korte hoobe kintu hat er lekha valo");
    }
    else {
        console.log("aro valo korte hoobe");
    }
}
else if (achiveNumber > bPlus && achiveNumber < aMinus) {
    if (handWriting == true) {
        console.log("tomake last sujog dichhi kintu hat er lekha valo ache");
    }
    else {
        console.log("tomake last sujog dichhi");
    }
}
else if (achiveNumber > b && achiveNumber < bPlus) {
    if (handWriting == true) {
        console.log("bashar number dao akhon");
    }
    else {
        console.log("Amio erokom chilam, let's chill together");
    }
}
else {
    console.log("toke ber kore dilam");
}