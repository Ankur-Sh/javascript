var names = "Ankur";
names = names.toUpperCase();
names = names.toLowerCase();

//Challenge to type name with first letter uppercase and lest lowercase using slice

var names = prompt("What is your name?");
var firstChar = names.slice(0, 1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = names.slice(1, names.length);
restOfName = restOfName.toLowerCase();
var capitalisedName = upperCaseFirstChar + restOfName;
alert("Hello, " + capitalisedName);
