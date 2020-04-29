// let listItems = document.getElementsByTagName("li");

// // for (let listItem of listItems) {
// //   listItems.addEventListener("click", function () {
// //     console.log(true);
// //   });
// // }

// $("li").on("click", () => console.log(true));

// let currentElement;
// let button = document.getElementById("my-button");
// let myList = document.getElementById("my-list");

// button.onclick = () => {
//   if (currentElement === undefined) {
//     currentElement = myList.firstChild;
//   } else {
//     currentElement = currentElement.nextSibling;
//   }
//   currentElement.classList.add("red");
// };

// let currentElement;
// $("#my-button").on("click", () => {
//   if (!currentElement === undefined) {
//     currentElement = $("#my-list li:first-child");
//     console.log(currentElement);
//   } else {
//     currentElement = currentElement.next();
//   }
//   currentElement.addClass("red");
// });

// $("#my-button").on("click", () => {
//   let circle = $(".circle");
//   let width = circle.width();
//   let height = circle.height();

//   if (width < window.innerWidth / 2) {
//     circle.css({
//       width: width * 2,
//       height: width * 2,
//     });
//   } else {
//     alert("The circle is too big!");
//   }
// });
// $("#my-button").on("click", () => {
//   //   $("p").toggle(1000);
//   //   $("p").hide(1000).show(1000);

// });
