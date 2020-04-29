//request user's age

// let age = prompt("How old are you?");
// if (age <= 2) {
//   alert("You are an infant");
// } else if (age <= 11) {
//   alert("You are a child");
// } else if (age <= 18) {
//   alert("You are a teen");
// } else if (age <= 60) {
//   alert("You are an adult");
// } else if (age > 60) {
//   alert("You are a senior citizen");
// }

//request a number
// let number = prompt("A number between 0 and 9?");
// if (number == 1) {
//   console.log("!");
// } else if (number == 2) {
//   console.log("@");
// } else if (number == 3) {
//   console.log("#");
// } else if (number == 4) {
//   console.log("€");
// } else if (number == 5) {
//   console.log("%");
// } else if (number == 6) {
//   console.log("&");
// }

//switch
let month = prompt("Name the number of a month");
switch (month) {
  case "1":
    document.write("January");
    break;
  case "2":
    document.write("February");
    break;
  case "3":
    document.write("March");
    break;
  case "4":
    document.write("April");
    break;
  case "5":
    document.write("May");
    break;
  case "6":
    document.write("June");
    break;
  case "7":
    document.write("July");
    break;
  case "8":
    document.write("August");
    break;
  case "9":
    document.write("September");
    break;
  case "10":
    document.write("October");
    break;
  case "11":
    document.write("November");
    break;
  case "12":
    document.write("December");
}

//while
let number = prompt("A number?");
let extent = prompt("An extent?");

// // Factorial
// // 4 -> 1 * 2 * 3 * 4 = 24
// let number = +prompt("Type a number");

// let result = 1;
// for (let i = 1; i <= number; i++) {
//   result = result * i;
// }
// console.log(result);

// Classwork

// let student = {
//   name: "Jane Rayy",
//   class: "VI",
//   age: 12,
// };
// for (let key in student) {
//   console.log(key);
// }

// Mole
// Servings: 2
// Ingredients: cumin, cocoa, cinnamon

// let recipe = {
//   title: "Mole",
//   servings: 2,
//   ingredients: "cumin, cocoa, cinnamon",
// };

// document.write(`<h1>${recipe.title}</h1>`);
// document.write(`<p> Servings: ${recipe.servings}</p>`);
// document.write(`<p> Ingredients: ${recipe.ingredients}</p>`);

// {
//     Alex: 'name',
//     Doe: 'lastname',
//     '25': 'age'
//  };

// function invertObject(object) {
//   let result = {};
//   for (let key in object) {
//     result[object[key]] = key;
//   }
//   return result;
// }

// let person = {
//   name: "Alex",
//   lastname: "Doe",
//   age: 25,
// };

// console.log(invertObject(person));

// Suppose we have this array: people = ["Alex", "Mary", "Devon", "James"]; Do the following
// manipulations with the array: 1) Remove “James” from the array; 2) Remove “Alex” from the array;
// 3) Add your name to the beginning of the array; 4) Add “Jane” to the end of the array; 5) Using
// for-loop, write all names of the changed array to the webpage using document.write() .

// let people = ["Alex", "Mary", "Devon", "James"];
// people.pop();
// people.shift();
// people.unshift("Lo");
// people.push("Jane");

// for (let i = 0; i < people.length; i++) {
//   document.write(people[i]);
// }

// let reverse = ["a", "b", 3, "c", [], 10];

// function changeOrder(array) {
//   let newArray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }
// console.log(changeOrder(reverse));

let myLibrary = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    isRead: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    isRead: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    isRead: false,
  },
];

for (let key of myLibrary) {
  if (key.isRead === true) {
    document.write(`<p>I already read ${key.title} by </p>`);
  }
}
