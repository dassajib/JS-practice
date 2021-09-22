
// var number = 1;
// while (number <= 15) {
//     console.log(number);
//     number++;
//     if (number == 9) {
//         break;
//     }
// }


var arrayBox = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];


for (i = 0; i < arrayBox.length; i++) {
    var show = arrayBox[i];
    console.log(show);

    if (show >= 100) {
        break;
    }
}