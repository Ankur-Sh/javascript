var names = ["Ankur", "Aman", "Aakash", "Brijesh", "Dheeraj", "Shubh"];

function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Mat.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to buy lunch today!";
}
