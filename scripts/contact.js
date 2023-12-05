// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

//define some constants

//this will allow the deletion of the child elements, or in other words, the form
const MAIN = document.getElementsByTagName("main")[0]; //there will only ever be one main

const sayThanks = () => {
    //delete all of main's children

    //get an iterable of main's child nodes
    let mainChildren = MAIN.childNodes;

    //remove each child
    while (mainChildren.length > 0) {
        mainChildren[0].remove();
    }

    //create a p tag with the needed styling
    let newElement = document.createElement("p");
    newElement.innerHTML = "Thank you for your message";
    newElement.classList.add("large-text");

    MAIN.appendChild(newElement);
};

//get the url, and if there is a ? attached to the end, then we know the button was clicked
const CURR_URL = location.href;

//the url will be checked once at the beginning of the page being loaded
//if the path contains a ? then we know that the user has clicked the submit button.
if (CURR_URL.endsWith("?")) {
    sayThanks();
}