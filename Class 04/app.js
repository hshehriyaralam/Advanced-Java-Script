//  const myPromis = new Promise((resolve, reject) => {
//     const isCivic = true;
//     if (isCivic){
//         resolve("Marriage jas been fixed");
//     }
//     else{
//         reject("Mehnat kr bhai");
//     }
//  })
// //  .then ((resolve) => {
// //     console.log(resolve,"Naseeb Wala ");
// //  })
// //  .catch((reject) => {
// //     console.log(reject,"Pasie Jama kr ");
// //  })
// //  console.log(myPromis);


// fetch("https://api.escuelajs.co/api/v1/products/");
 /*
 let, const
 arrow function
 array or object, => destructure 
 spread method,
 this
 array methods
 find, findIndex,  filter, map, forEach,
 async , wait concept
 promises => promise key


 async await
 */

//  const loginRequest = async () => {
//     console.log();
//     console.log();
//     console.log();
//     console.log();
//     await apicalling();
//     console.log();
//  }
// const fetchData = async () => {
//     const response =   await fetch("https://fakestoreapi.com/products/").then)
//     console.log(response);
// }
// fetchData()



// // Try Catch => Exception handling , Error Handling 
// try{
//     console.log(kjdgigiludgwq)
// }catch(error){
//     console.log(error , "error");
// }


// Class 04;
// By Default Java Script Syncronous


// Example asyncromous 
// console.log("1");
// setTimeout(()=>{
//     console.log("2");
// },3000)
// console.log("3");


// Promise 
// three srages
// 1) Pending stage
// 2) Resolve stage
// 3) Reject Stage 


// const myPromis = new Promise((resolve, reject) => {
//     const isCivic = true;
//     if(isCivic){
//         resolve("marriage has been fixed");
//     } else{
//         reject("No")
//     }
// })

// console.log(myPromis);

// const myPromise = new Promise((resolve, reject) => {

//         const isCivic = false;
//         if (isCivic) {
//             // resolve("Hunza trip done")
//             resolve({
//                 mission : "successfully",
//                 msg : "Hunza trip done"
//             })
//         } else {
//             reject("phophu agayi thi ghr")
//         }
    
//     });
//     console.log(myPromise);
    
// *) If promises fulfiled using JS function "then";
 // *) IF promise reject using JS function "Catch"
 // *) "then" and catch call back function in JS


//  const marriageConditions = new Promise((resolve, reject) => {
//     GirlFatherDemands = true
//     if(GirlFatherDemands){
//         resolve("Papa Man gai");
//     }else{
//         reject("Abba nh manenge");
//     }
//  });
// marriageConditions
// .then((result) => {
//     console.log(result, "result");
// })
// .catch((error) => {
//     console.log(error, "error");
// })
// console.log(marriageConditions);


// Examples 
// const classAssigment = new Promise (function must(resolve, reject){
//     const AssigmentDone = true;
//     if(AssigmentDone){
//         resolve("Please hava a seat")
//     }else{
//         reject("get out")
//     }
// })
// // console.log(classAssigment);
// classAssigment
// .then(function result(result){
//     console.log( result,"Agar Assigment hai to");
// })
// .catch (function Error(error){
//     console.log(error,"agar assigment nh hai to");
// })


// fetch method  return promise 
// fetch("https://api.escuelajs.co/api/v1/products/")
// fetch("https://fakestoreapi.com/products")
// .then((data) => data.json())
// .then(result => {
//     // console.log("result",result);
//     renderUI(result)
// })
// .catch(error => {
//     console.log("error", error);
// })


// const renderUI = (item) => {
//     const parent = document.getElementById("parent");
//     for (var product of item){
//         // console.log("products", product);
//         parent.innerHTML += ` <div class="col-md-3"> 
//            <div class="card" style="width: 100%">
//   <img src="${product.images}" style="width: 100%; height: 300px; "class="card-img-top" alt="...">
//   <div class="card-body" >
//     <h5 class="card-title">${product.title}</h5>
//     <p class="card-text">${product.description.slice(0,100)}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// </div>`
     
//     }

// }

// Async Functions 
// async function test(){
//     return "Async Functions"
// }

// console.log(test());

// Async Functions as a work Promise 


// then and catch use 
// let test2 = async() => "then method use "
// test2().then((result)=> {
//     console.log(result, "Successfully");
// })
// .catch ((error) => {
// console.log("Try Again");
// })
// console.log(test2());

// console.log(test2());

// aync function as a work Primise function but Catch method isn't run

// await method
// await method syncronous ko asyncronous main convert karega 
// await mehod ham async function main de sakte hain


// let test3 = async() => {
//     console.log("line 1");
//     console.log("line 2");
//   await console.log("line 3");
//     console.log("line 4");
// }
// test3();
// console.log("line 5");
// console.log("line 6");
// console.log("line 7");



// await use without async function
// let test4 = ()=> {
//     console.log("Message 2");
//     console.log("Message 3");
//      await console.log("Message 4"); || Error
//     console.log("Message 5");
// }
// test4();
// console.log("Message 6");
// console.log("Message 7");









