function animalCounting(miles) {
    var animalDensityForFirst10 = 15;
    var animalDensityForFirst20 = 30;
    if (miles <= 10) {
        var totalAnimal = miles * animalDensityForFirst10;
        return totalAnimal;
    }
    else if (miles <= 20) {
        var firstDense = 10 * animalDensityForFirst10;
        var restMiles = miles - 10;
        var secondDense = restMiles * animalDensityForFirst20;
        var totalAnimal = firstDense + secondDense;
        return totalAnimal;
    }
}

var animal = animalCounting(20);
console.log(animal);