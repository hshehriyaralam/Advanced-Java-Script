// let
// var 
// const 

let name = "shahmeer";
// declaration   =    initialization 

name = "sherry"
// Reinitalize 

let fullName ; 
// Only declare 


// var foo = "foo"
// var foo = "foo2"



// let foo = "foo1";
// let foo = "foo2";
// Updation not allowed in let keyword
// foo = "foo2"
// console.log(foo);
// but reinitalize is allowed



// const increase = "Petrol";
// // const increase = "CNG"
// increase = "CNG";
// console.log(increase);
// Updation and Initalization are not allowed 




// var => function Scop 
// let, const => Block Scope


var firstName = "Atlas Honda Limited"; 
function foo(){
    firstName = "Honda Power"
    console.log(firstName);
}
console.log(firstName);
foo ()


let LastName = "Code Apha";
function Software(){
    LastName = "Soft Code"
    console.log(LastName);
}

console.log(LastName);
Software()





// Arrow Function
const arrw = () => {
    console.log("Arrow function")
}
arrw()


// // By Default arguement
const foo5 = (num1, num2=20) => {
    console.log("num1 & num2", num1, num2 );
}
foo5(50, 30);



const foo6 = org => {
    console.log("Hello worrld");
}
foo6(40);


// // Use underScore _ as a empty parameter
const legPiece = _ => {
    console.log("UnderSore Method");
}
legPiece()



// this 



function foo(){
    console.log(this);
}
foo ()


// const obj1 = {
//     foo: function () {
//         console.log(this);
//     }
// }
// obj1.foo()


const obj = {
    firstName : "jaffar",
    foo: () => {
        console.log(this);
    }
}

obj.foo()


//this get block scope in  Normal function 
// this get Global Scope in Arrow functions

de-structuring
const stdSMIT  = {
    std1 : "Ubaid",
    std2 : "Sherry",
    std3 : "Wasiq"
}
console.log(stdSMIT.std1);
stdSMIT.std1 = "Mujahid"
console.log(stdSMIT.std1);


const {std1} = stdSMIT;
console.log(std1);

// Array de-Structuring
const arr1 = ["Pakistan", "India", "Bangladesh"];
const [ terror, peace,simple] = arr1;
console.log(peace);


// Ternary Opt = > ``
//Spread opt => (... Three Dots)


const arr3 = ["Mumbai", "Delhi", "Ahmedabad"];
const arr4 = [" Lahore", "karachi", "Islamabad"];


const arr51 = [arr3 + " " +arr4]
console.log(arr51);

// ES5 => concate method
const arr5 = arr3.concat(arr4);
console.log(arr5);

// ES6 => spread method (...Three dots)
const arr6 = [... arr3, ...arr4]
console.log(arr6);


const userData = {
    user1 : "Naveed",
    user2 : "Nabeel",
    user3 : "Umar"
}


const UserData2 = {
    user4: "Mahdim",
    user5 : "Ahmad",
    user6 : "Talha",
}


const combinedData = {...userData, ... UserData2}
console.log(combinedData);

const obj1 = {
    firstName : "jaffar"
}
const obj2 = {
    lastName : "aman"
}
const obj3 = {...obj1, ...obj2}
console.log(obj3);

// But key name different 

// Array methhods => find, map, forEach, findIndex, filter 

// const value = arr.find  ( function () {})     Syntax
const arrey =  ["lahore", "karachi", "sakhhar", "Hydrabad"];
const value = arrey.find( (value, index, array) => {
    console.log(value, index, );
    if(value === "lahore"){
        console.log("Welcome to LAhore");
        return value
        // return true
    }else{
        console.log("Please Check");
    }
})

/*
// ************************** Summary ******************************
01) variable declaration and Initializations => let Firstname = "shehriyar"
02) variable declaaration => let firstName =
03) Initialization "Shehriyar"
04) var Global Scope and function Scope
06) "this" get block scope in  Normal function 
07) "this" get Global scope in  Arrow  function 
08)  Ternary Operator   => `` 
09) Spread Operator => (... Three Dots) ES6
10) Concate method => arr1.conacte(arr2) ES5
*/




