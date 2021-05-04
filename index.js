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

const title = document.querySelector("#title");

/*
title.innerHTML = "Hi From JS";
title.style.color = "red";
document.title = "I own you now";
*/

function handleResize() {
    console.log("I have been resized")
}

window.addEventListener("resize", handleResize);