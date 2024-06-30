// ES5
var firstName = "shemeer";
console.log("first Name", firstName);
// Old version


// ES6
// let 
// const 

var fullName = "SHahmeer"
console.log(fullName);
var fullName = "Majeed"
console.log(fullName);
// Updation and Initialization are allow


// let 
let Nickname = "sherry";
console.log(Nickname);
// let Nickname = "Shahmeer"; | Error
// console.log(Nickname);
let gender;
gender = "male"
console.log(gender);
// Initializations is allow but updation is not allow


// const 
const realName = "Shehriyar Alam";
console.log(realName);
// const realName = "shehmrr" | Error
// console.log(realName);
// const age ;
// age = 23
// console.log(age); | Error
// Updations and Reinitialization are not allowed




// var => Updation and Initializations are allowed
// let => Initialization is allow but Updation is not allowed
// const =>  Updation and Initializations are not allowed


// Block Scope variable let and const
// global scope variable and functions scope variable var

// Examples
// if (true){
    
// }
// for (){
    
// }
// function(){
    
// }

// logics
//let Initialization 
// let age = 23;
// let stackName ;
// if (true){
//     stackName = "MERN Stack Development"
// }
// console.log("Stact Name", stackName);


// // Simple Functions 
// function foo (name){
//     console.log("foo", name);
// }
// foo("Shahmeer")

// // Arrow Function
// const github = name => {
//     console.log("foo arrow functions " );
// }
// foo("Sherry");
// // arrow function main parameter one ho to () ki need nh hai

// const linkedIn = (account, UserID) => {
//     console.log(`My linkedIn Account is ${account} and my User ID is ${UserID}`);
// }
// linkedIn("Hafiz Shehriyar Alam", "hshehriyaralam");
// // But agar parameter ek se zyada ho to () must hai 

// const add = (num1, num2 ) => {
//     console.log(num1 + num2);
// }
// add(20, 30)

// const sum = () => {
//     console.log("Hello SMIT");
// }
// sum()
// // arrow function main agr parameter na ho to parameter ke replacement main _ use bh kr sakte hain

// const sum2 = _ => {
//     console.log("Hello World");
// }
// sum2()

// function add() {
//     return 10 + 20;
// }
// let result = add()
// console.log(result);
// Simple Function main return value ko ek variable main declare kr ke call karenge 


// Arrow Function  main ek hi line main return value assign kr sakte hai without return keyword
// const add2 = (n1, n2) =>  n1 + n2
// console.log(add2(10, 20))



// const add3 = _ => 10 + 20
// console.log(add3());


// this
// console.log(this);




// const obj1 = {
//     firstName : "Shahmeer",
//     lastName : "Khan",
//     fullName : function () {
//         console.log(this);
//     }
    
// }
// obj1.fullName(this)

// const obj2 = {
//     firstName2 : "Hafiz",
//     lastName : "Shehriyar",
//     fullName : () => {
//         console.log(this)
//     }
// }
// obj2.fullName()

// this Simple Object main Block Scope Access karega 
// But arrow function main Global Scope Access karega


// Object | Array De-Structuring 
const stdObj = {
    name : "Jaffar",
    age : 23,

}
// const {age, name} = stdObj
// console.log(age);
console.log(name);

const stdArr = ["karachi", "Lahore", "Islamabad"];
const [city1, city2] = stdArr;
console.log(city1);

// const arr = ["karachi", "lahore", "Multan"]
// const [city1, city2] = arr
// console.log(city1)



console.log(stdObj.age);
var age = std.stdObj;
console.log(age);




/*
// ************************** Summary ************************
01) var ES5 Old varsion Keyword
02) let , const ES6 verson keyword
03) var updation and Inializations are allowed
04) let initalization allowed but updation is not allowed
05) const Updation and Inialization are not allowed
06) var global scope and Function Scope
07) let , const Block Scope 
08) learn Arrow Functions 
09) If in Arrow function paremeter is only one don't need Parenthesis ()
10) If in Arrow function paremeter is rather one must be used Parenthesis ()
11) If parameter is empty so allowed to be use UnderScore _ in arrow function 
12) If return method declare in Simple function so that  new variable declare for call the functions
13) Allowed to return value assigned in arrow function without return keyword in one line
14) "this" access Block scope in Simple functions 
15) "this" access Global scope in Arrow functions
16) Object |  Array  key to assign new variable is called Object | Array De-structuring
*/