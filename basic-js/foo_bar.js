for (i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("foooBaar");
    }
    else if (i % 3 == 0) {
        console.log("fooo");
    }
    else if (i % 5 == 0) {
        console.log("baar");
    }
    else {
        console.log(i);
    }
}