// //add(), remove(), contains(),
// console.log(list)

// let listItem3 = document.getElementById('four');
// listItem3.setAttribute('id', 'new-id');
// console.log(listItem3.getAttribute('id'));
// listItem3.removeAttribute('id';

// /*
// Methods to get multiple elements
// querySelectorAll('query')
// getElementsByTagName('tag-name')
// getElementsByClassName('class-name')
// */

// function toggleClass() {
//     // let redItems = document.getElementsByClassName('hot');
//     let redItems = document.getElementsByTagName('li');
//     console.log(redItems);
//     for (let i = 0; i < redItems.length; i++) {
//        let listItem = redItems[i];
//        if (listItem.classList.contains('hot')) {
//         listItem.classList.remove('hot');
//         listItem.classList.add('bold');
//        }
//     }
// }

// function addItem(){
//     let value = prompt('Type a grocery name');
//     let listItem = document.createElement('li');
//     listItem.innerText = value;
//     listItem.classList.add('hot');
//     let ul = document.getElementsByTagName('ul')[0];
//     // appendChild(element)
//     ul.appendChild(listItem);
//     // let input = document.getElementById('grocery-name');
//     // let inputValue = input.getAttribute('value');
//     // console.log(inputValue);
// }
// // 1. We need to get a value of the input
// // 2. We need to create a new li item
// // 3. We need to append this element to the ul

// function deleteItem() {
//     // 1. We need to get the unordered list item
//     // 2. We need to get the last list item in the list
//     // 3. We want to delete that last element
//     let ul = document.getElementsByTagName('ul')[0];
//     // lastChild - returns the last element inside
//     // firstChild - returns the first element inside
//     let lastChild = ul.lastChild;
//     // removeChild() - removes a specific element inside a parent element
//     ul.removeChild(lastChild);
// }

// let currentElement;

// function goNext () {
//     // 1. Get te unordered list element
//     // 2. Get the next element after current one
//     // 3. Add a class to the next element
//     let ul = document.getElementsByTagName('ul'[0]);

//     if (!currentElement) {
//         console.log(currentElement);
//        currentElement = ul.firstChild;
//     } else {
//        // nextSibling - returns the next element
//        //
//        currentElement = currentElement.nextSibling;
//     }
//     currentElement.classList.add('hot');
// }

// function goBack() {
//     if (!currentElement) {
//         currentElement = ul.lastChild;
//     }
//     // if (!currentElement) {
//     //     currentElement = ul.firstChild
//     // } else {
//     //     currentElement = currentElement.nextSibling
//     // }
//     currentElement.classList.add('hot');
// }

// Create an HTML page that will contain text and a button. Clicking the button should hide the text.
// Clicking it again should display the text.

// function hideOrDisplay() {
//   let x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

//Create an HTML page with a progress bar and a button. Clicking the button should fill the progress
// bar by 5%. To create a progress bar you can use <progress> tag

// function load() {
//   let file = document.getElementById("file");
//   let value = +file.getAttribute("value");
//   file.setAttribute("value", value + 5);
// }

let button = document.getElementById("button");
button.addEventListener("click", function () {
  console.log(100);
});

function buttonClicked() {
  console.log(100);
}

// window.addEventListener("resize", function () {
//   console.log(window.innerWidth);
// });

// addEventListener - method that accepts two arguments: event name and callback function
// here buttonClicked function is a callback on click event
button.addEventListener("click", buttonClicked);
button.removeEventListener("click", buttonClicked);

// Another approach of how to add events
button.onclick = function () {
  console.log("hello");
};
button.onclick = null;

// UI events
// scroll - fires when user scrolls page
// resize - fires when window is resized
// error - fires when there is an error in javascript
// load - fires when document is loaded

// Mouse event
// click - fires when we click on an element
// mouseover (hover) - fires when hovering an element
// mouseout - fires when mouse goes out of an element
// mousedown, mouseup, mousemove

// Form events
// input - fires on every key press in the input
// submit - fires when form is submitted
// change - fires when checkbox is clicked, something is selected, radio buttons
// cut, copy, select, paste
