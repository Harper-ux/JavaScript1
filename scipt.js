// display alert for good afternoon 
//window.alert("Good Afternoon")
//declare the variable to hold the div element
let container = document.getElementById("container");
//getElementID is the method to locate the element
//container is an HTML element it is a div in 
// set the content of element 

container.innerHTML = "<p>This is the container place </p>";

//change the color to red
container.style.color = "red";

//add the new element p into the page
document.write("<p> This is a new paragraph </p>");

//declare a variable to hold the header
let header = document.getElementsByTagName("h1")[0];

let footer =  document.getElementsByTagName("h1")[1];

//declare a variable to hold button element 
let btnClickMe = document.getElementById("btnClickMe");

btnClickMe.onclick = function (){
        //window.alert("Hello")
    header.style.color = "red";

    footer.style.color = "blue";

    container.style.visibility = "hidden";
}

//handle the mouse over event the header 
header.onmouseover = function (){
    header.style.color="red";
}
header.onmouseout = function (){
    header.style.color="black";
}