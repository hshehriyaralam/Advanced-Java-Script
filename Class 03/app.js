// Arrays Methods
// Find, FindIndex, filter, map, forEach,

// var arr = ["karachi", "lahore", "islamabad", "Peshawar"];

// const findCity = arr.find((value, index) => {
//     console.log("Example", value,index);
//     // return false
//     // agar return main true value mil jayegi to value and Index Number se ruk jaiga;
//     if (value == "queta"){
//         console.log("value is match lahore");
//         return true
//     }
//     // agar find main Condition remove kare to undefined ayega 
// });
// console.log(findCity);
// console.log(arr);


// find only true value apne pass consume kr lega 
// ek hi value return karega
// find main 2osre if main undefined aayega 


// find Index
// let arr = [
//     {name: "Shehriyar"},
//     {name : "lahore"},
//     {name : "Islamabad"},
// ]

// const findINdex = arr.findIndex((value, index) => {
//     console.log("value", value.name, index);
//     // return true
//     if(value.name == "questta"){
//         return true
//     }
//     // agar findIndex main condition remove kare to -1 ayega
// })
// console.log(findINdex);


// Map method
// let arrNumber = [2, 4, 6, 8, 10];
// let temArr = [];
// for (var i = 0; i < arrNumber.length; i++) {
//     temArr.push(arrNumber[i] * 2);
// }
// console.log(arrNumber);
// console.log(temArr);


// let arrMAp = [2,4,6,8,10];
// let temArrMap = arrMAp.map((value, index) => {
//     // console.log(value);
//     return value == 8;

// })
// console.log(temArrMap);
// console.log("arr", arrMAp);


// Filter array
// let filterArr = [2, 4, 6, 8, 10, 12, 14];
// let filterArr2 = filterArr.filter((value, index) => {
//     console.log(value, index);
//     // if(value == 8){
//     //     return value
//     // }
//     return value * 2;
//     // if (value % 2 == 0) { //  not Working
//     //     return value * 2;
//     // }
// })

// console.log(filterArr2);

// For Each
// var arr = [1, 11, 13, 14, 16, 35, 78, 98]
// var EachArr = [];
// var value = arr.forEach((value, index) => {
//     // console.log(value, index);
//     // arr[index] = value * 2;
//     if(value % 2 === 0){
//         EachArr.push(value)
//     }
// })
// console.log("arr", arr);
// console.log("value",value);
// console.log("Each array",EachArr);


// Promises





/*
******************************** Summary *****************************
01) array method => Find, FindIndex,map,filter , for Each
02) "find" Only provide values
03) "find" assume only true values
04) "find" return only one value It's If true one value in "find" so not assume other values
05) "find" false value Undefined
06) If remove Condions in "find" return undefiend
07) "FindIndex" False values -1
08) "findIndex" rteurn only Index Number
09) "map" return a array
10) "map" as a work of loop
11) "map" assume all values and return true Or False 
12) "Filter" same as a map But filter return only true values not with false values
13) "Filter" return a array same as map14) "ForEach" 

*/