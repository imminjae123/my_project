// 1. variable
// const a = 2;
// const b = 2;

// let myName = "minjae";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "minjaeim";

// console.log("your new name is " + myName);

// 2. boolean

// const amIFat = null;
// let something;
// console.log(amIFat);
// console.log(something, amIFat);

// 3. array

// const mon="mon";
// const tue="tue";
// const wed="wed";
// const thu="thu";
// const fri="fri";
// const sat="sat";
// const sun="sun";


// const daysOfWeek = [mon, tue, wed, thu, fri, sat];

// const nonsense = [1,2,"Hello", false, null, true, undefined,"minjae"];

// Get item from array
// console.log(daysOfWeek[4], nonsense);

// add one more day to the array
// daysOfWeek.push(sun);
// console.log(daysOfWeek);

// const toBuy = ["potato", "tomato", "pizza"];
// toBuy.push("Kimbab");
// console.log(toBuy[2]);


// 4. Object

// const player = {
//     name:"minjae",
//     points: 10,
//     fat : true,
// };

// console.log(player);
// player.fat = false;
// player.lastname = "potato";
// player.points = player.points + 15;
// console.log(player);

// console.log(player["name"]);

// 5. Function

// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// console.log("Hello");
// sayHello("minjae", 27);
// sayHello("lynn", 30);
// sayHello("tanaka", 29);

// function plus(firstNumber, secondNumber) {
//     console.log(a + b);
// }

// function divide(a, b) {
//     console.log(a / b);
// }

// plus(8, 60);
// divide(98, 20);

// 6. Function 2

// const player = {
//     name:"minjae",
//     age: 27,
//     sayHello: function(otherPersonName) {
//         console.log("Hello " + otherPersonName + " nice to meet you");
//     },
// };

// console.log(player.name);
// player.sayHello("lynn");

// console.log(player.name, console);

// player.sexy = "soon";
// console.log(player);

// 7. Function 3

// const calculator = {
//     add: function(a, b) {
//         console.log(a + b);
//     },
//     minus: function(a, b) {
//         console.log(a - b);
//     },
//     divide: function(a, b) {
//         console.log(a / b);
//     },
//     times: function(a, b) {
//         console.log(a * b);
//     },
//     power: function(a, b) {
//         console.log(a ** b);
//     },

// }

// calculator.add(5, 3);
// calculator.minus(5, 3);
// calculator.divide(5, 3);
// calculator.times(5, 3);
// calculator.power(5, 3);

// 8. return

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     // return ageOfForeigner + 2;
//     ageOfForeigner + 2;
//     return "Hello";
// }

// const krAge = calculateKrAge(96);

// console.log(krAge);

// const calculator = {
//     add: function(a, b) {
//         return a + b;
//     },
//     minus: function(a, b) {
//         return a - b;
//     },
//     divide: function(a, b) {
//         return a / b;
//     },
//     times: function(a, b) {
//         return a * b;
//     },
//     power: function(a, b) {
//         return a ** b;
//     },

// }

// const addResult = calculator.add(2, 3);
// const minusResult = calculator.minus(addResult, 10);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, addResult);
// const powerResult = calculator.power(divideResult, minusResult);

// console.log(addResult);
// console.log(minusResult);
// console.log(divideResult);
// console.log(timesResult);
// console.log(powerResult);

// 9. conditionals

// const age = parseInt(prompt("How old are you?"));

// console.log(isNaN(age));

// if(isNaN(age) || age < 0) {
//     console.log("Please write a real positive number.");
// } else if(age < 18) {
//     console.log("You are too young.");
// } else if(age >= 18 && age <= 50) {
//     console.log("You can drink!");
// } else if(age > 50 && age <= 80){
//     console.log("You should exercise.");
// } else if(age === 100) {
//     console.log("Wow! You are wise");
// } else if(age > 80) {
//     console.log("You can do whatever you want.");
// } 

// 10. document object

// document.title = "Hello! from JS";

// const title = document.getElementById("title");

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");

// hellos.innerText = "Got you!";

// console.log(hellos);

// const title = document.querySelectorAll(".hello h1");

// console.log(title);

// 11. event

// const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(h1);

// function handleTitleClick() {
//     console.log("Title was clicked!");
//     h1.style.color = "blue";
// }

// function handleMouseEnter() {
//     h1.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//     h1.innerText = "Mouse is Gone!";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("SOS NO Wifi");
// }

// function handleWindowOnline() {
//     alert("ALL Goooooood!");
// }


// h1.addEventListener("click", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// 12. event 2

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);