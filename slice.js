var names = "Ankur";
names.slice(0, 1);
//We get "A"->Slice give characters between 0 to 1 position

//OR when we need a paragraph limits 140 characters we use

var tweet = prompt("Compose your tweet:");
alert(tweet.slice(0, 140));

//Or thw same code can be written as
alert(prompt("Compose your tweet:").slice(0, 140));
