document.querySelector("h1").innerHTML = "Good Bye";
//document.querySelector("h1").textContent = "Good Bye";-->
//We can change text inside it but it is not a html so we cant write html in it

var heading =
    document.firstElementChild.lastElementChild.lastElementChild
        .lastElementChild;
document.querySelector("a").getattribute("href");
document.querySelector("a").setattribute("href", "https://www.bing.com");
document.querySelector("h1").classList.add("huge"); //we also can use remove and toggle
//where toggle is to if added than remove and if removed then add class.

document.querySelector("#list li a").style.color = "blue";
document.querySelector("button").style.backgroundColor = "yellow";
document.getElementsByTagName("li")[2].style.color = "purple";
heading.innerHTML = "Ankur";
document.querySelector("#list .item"); //select first one list
document.querySelectorAll("#list .item"); //select all list
