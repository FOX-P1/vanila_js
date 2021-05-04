/*
const a = 221;
let b = a - 5;
a = 4;
console.log(b, a);
*/
/* String
const what = "Nicolas";
*/
/*
Boolean
const wat = true;
*/
/*
Numberconst wat = 666
*/
/*
Float
const wat = 55.1;
*/

/*
// const monday = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// console.log(monday, tue, wed, thu, fri);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true];

console.log(daysOfWeek);
*/

// const something = "Something";

/*
const sinInfo = {name: "SinMinGyu",
  age: 24,
  gender: "Male",
  isHandsome: false,
  favMovies: ["Along the gods", "LOTR", "Oldboy"],
  favFood: [
    {
        name: "Kimchi",
        fatty: false
    }, 
    {
        name: "Cheese burger",
        fatty: true
    }
  ]
};

console.log(sinInfo);

sinInfo.gender = "Female";

console.log(sinInfo.favFood[0]);
*/

/*
function sayHello(name, age) {
    console.log('Hello!', name, " you have ",
    age, "years of age.");
}

sayHello("MinGyu", 15);
*/

/*
function sayHello(name, age) {
    console.log('Hello!' + name + 'you have' + 
    age + "years old");
}

sayHello("MinGyu", 15);
*/

/*
function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
}

const greetMinGyu = sayHello("MinGyu", 24)

console.log(greetMinGyu)
*/

/*
const calculator = {
 plus: function(a, b){
     return a + b;
 }
}

const plus = calculator.plus(5, 5)
console.log(plus);
*/

/*
const title = document.getElementById("title");

title.innerHTML = "Hi From JS";
title.style.color = "red";
document.title = "I own you now";
*/

/*
const title = document.querySelector("#title");

function handleClick() {
    title.style.color = "yellow";
    console.log("I have been resized")
}

title.addEventListener("click", handleClick);
*/

 /*
if ('10' === 10) {
    console.log('hi');
} else if ("10" === "11") {
    console.log('lalalala');
} else {
    console.log("ho");
}
*/

/*
if (20 > 5 || "mingyu" === "minkyu") {
    console.log('yes');
} else {
    console.log("no");
}
*/

/*
const age = prompt("How old are you");

if (age > 18 && age < 21) {
    console.log("you can drink but you should not");
} else if (age > 20) {
    console.log("you ahead");
} else if (age < 18) {
    console.log("you are too young");
}
*/

/*
const title = document.querySelector("#title");

const BASE_COLOR = "yellow";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();

function handleOffline() {
    console.log("good bye!");
}

function handleOnline() {
    console.log("Welcome back!");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}

function init(){
    title.addEventListener("click", handleClick);
}
init();