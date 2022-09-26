var guestList = ["Ankur", "Aman", "Aakash", "Brijesh", "Dheeraj", "Shubh"];
console.log(guestList.length);
console.log(guestList[0]);
var guestName = prompt("What is your name?");
//includes gives true if it exist in array and false if it doesn't
if (guestList.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("Sorry,maybe next time.");
}
