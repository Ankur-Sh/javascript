function getMilk(money, costPerBottle) {
    console.log("move right");
    console.log("move left");

    console.log(
        "buy " + calcBottles(money, costPerBottle) + " bottles of milk"
    );
    console.log("move right");
    console.log("move left");
    console.log("enter house");

    return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
}
console.log("Hello master,here is your" + getMilk(10, 3) + "change.");
