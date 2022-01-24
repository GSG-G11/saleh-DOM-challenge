/*
Write a function which, if the 'h2' element  has the class "header",
it will be removed; otherwise the class "header" is added.
*/
const toggleClass = () => {
    let h2_items = document.getElementsByTagName('h2');
    for (const key in h2_items) {
        if (h2_items[key].classList.contains('header')) {
            h2_items[key].classList.remove("header");
        }
        else {
            h2_items[key].classList.add("header");
        }
    }
};
// toggleClass(); //uncomment me to test

/*
Select the section with an id of 'container' without using querySelector,
and style the font with 'blue' color
*/

const styleContainer = () => {
    let container = document.getElementById("container").style.color="blue";
    console.log(container);
};
// styleContainer(); //uncomment me to test

// Select the 'nav' with a class of "firstNav" and style the font with 'italic' fontStyle.

const styleItalic = () => {
    let nav = document.getElementsByClassName("firstNav");
    nav[0].style.fontStyle="italic";
};
// styleItalic(); //uncomment me to test

/*
Select a list item with a class of 'contact', but only the list item inside of the 'secondList' nav,
and style it with background color 'yellow'
*/

const backgroundList = () => {
    let list = document.getElementsByClassName('contact');
    list[1].style.backgroundColor="yellow";
};
backgroundList(); //uncomment me to test

// Create a new 'li' element , give it the text 'project' and append it to the 'firstList' .
const newList = () => {
    let nav = document.getElementsByClassName("firstNav");
    nav[0].innerHTML+=`<li> project </li>`
};
newList(); //uncomment me to test

// Loop over all of the 'li' elements inside the 'secondList' and give them a background color of "brown".
const brownColor = () => {
    var list = document.querySelectorAll('ol li');
    list.forEach(element => {
        element.style.backgroundColor="brown";
        
    });
    
    
};
brownColor(); //uncomment me to test

/*
Write a function which returns the value in the `firstName` text input
*/
const getFirstNameValue = () => {
    let input = document.querySelector('[name=firstName]');
    // alert(input.value);
    // return input.value;
};
getFirstNameValue(); //uncomment me to test

/*
Write a function which takes a string, `inputName`, and returns the value in the input which
has `inputName` as the name attribute
*/
// in this exercise you shuld replase "inputName" with "lastName"
const getValue = (inputName) => {
    let input = document.querySelector('[name=lastName]');
    input.value = inputName;

};
getValue("put an argument here "); //uncomment me to test

/*
Write a function, `generateUl`, which takes an array of strings, and returns a
`ul` htmlElement containing `li` elements for each array element. Each `li'
should contain the value of the array element.
*/
const generateUl = (array) => {
    let container = document.getElementById('container');
    let ul=document.createElement('ul');
    container.appendChild(ul);
    array.forEach(element => {
        let li=document.createElement('li');
        li.innerText=element;
        ul.appendChild(li);
   
    });
};
generateUl(["put", "an" ,"argument", "here" ]); //uncomment me to test

// Remove the 'div' with a class of 'footer'.
const removeFooter = () => {
    let footer = document.getElementsByClassName('footer');
    footer[0].remove();
};
removeFooter(); //uncomment me to test
