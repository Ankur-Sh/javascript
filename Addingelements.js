var output = [];
var count = 1;
function fizzBuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            console.log("FizzBuzz");
        } else if (count % 3 === 0) {
            console.log("Fizz");
        } else if (count % 5 === 0) {
            console.log("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}
