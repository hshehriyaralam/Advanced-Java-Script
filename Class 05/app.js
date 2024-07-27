//  *) Spread Methods



// let arr1 = ["karachi", "Lahore"];
// let arr2 = ["Islamabad", "Multan"];
// console.log(...arr1, ...arr2);
// Array ki Copys ke lye
// Same work in Objects

// *)
// Rest Parameters
// let Func1 = (username, userEmail, ...rest ) => {
//     console.log(userEmail, username, rest);
// }
// Func1("hshehriyaralam", "shehriyar@mail.com", 23, "pakistan", "Blood C" );
// // Extra Arguemnt ko As a Array Store kr dega Rest Parameters






// *) Includes method
// let User1 = "Shahmeer Khan ";
// console.log(User1.includes("Khan"));
// // Strings ki value check kr lenge string main value hai ya nh 

// // String JS main as a array behave karega 
// let arr3 = ["Karachi", "Pakistan"];
// let arr4 = ["Karachi Pakistan"]; // Error || values seprate access Hoga
// console.log(arr3.includes("Karachi"));



// *) Start with
// String match krne ke lye 
// match Sequence se hOga 
// let str5 = "Node Enviroment";
// // console.log(str5.startsWith("Noed"));  always read Sequence wise
// console.log(str5.startsWith("Node"));


// *) End with 
// same work as a Start WIth
// But Read last Sequence
// let str6 = "Shehriyar ALam";
// // console.log(str6.endsWith("ma")); false read End sequence
// console.log(str6.endsWith("lam"));



// *) Modulas Export/ Import
// default import
// import UserAge  from "./newapp.js"



/*  *************************************** Summary *********************************
01) Rest Parameters use Extra Arguemnt store in one array
02) Includes methods => chech strings and array values
03) Includes method Syntaxt => str2 = str1.include("Sherry")
04) Includes Method Return Only Boolean value
05) Strings Behave as a array in Java SCript
06) StartWith => String value match with Sequence
07) StartWith => checking in strings start values
08) EndWith => work as a startWith
09) But EndWith match in last with Sequence 
*/