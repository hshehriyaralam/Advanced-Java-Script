// // import {app, collection, addDoc, db, updateDoc, deleteDoc, doc, getDocs, } from "./firebase.js"

// // // console.log(app,  "app");
// // // console.log(collection , "collections");
// // // console.log(addDoc, "Doc");


// //  async function formSubmit(){
// //     // console.log("FormSubmit()");
// //     try {
// //         const docRef = await addDoc(collection(db, "users"), {
// //             firstName: "Shehriyar",
// //             lastName : "ALam",
// //             born : 2004,
// //         })
// //         console.log("DOcument", docRef.id);
// //     }catch (error){
// //         console.log("error", error.message);
// //     }
    
// // }
// // // formSubmit();

// // const editForm = async () => {
// //     try {
// //         const userCollection = doc(db, "users", "HlTMgaMuEVdqZqj8kfKs")
// //         await updateDoc(userCollection, {
// //             firstName: "Shahmeer",
// //             lastName : "Majeed",
// //             born : 2010,
// //         })
// //         console.log("update", updateDoc);
// //     }catch(error) {
// //         console.log("error edit Form", error.message);
// //     }
// // }
// // // editForm()



// // window.addEventListener("load", async () => {
// //     try{
// //         const querySnapshot = await get
// //     }catch(error){
// //         console.log("error", error.message);
// //     }
// // })

// // New
// // import { collection, addDoc, db } from "./firebase.js";



// // let formSubmit = async () => {
// //     console.log("formSubmitt()");
// //     const obj = {
// //         userName : "Jaffar"
// //     }
    
//     // const stdCollection = collection(db, "std");
//     // addDoc(
//     //     stdCollection,
//     //      obj,
//     //     console.log("Document add")
//     // )
    
//     // 
//     // Data Set : function create karenge then obj banainge , usme Jo Data Save krana wo add karainge ... uske bd ek variable ksisi bh (stdCollection) nam se banainge usme collection assigne karenge with parenthesis () , parenthesis m (db , Data Tittle) db and Data tittle add karenge , addDoc with ( jo variable banaya tha , then Obj jisme  data hai)
    
//     // But suppose koi error hua to ... just becuase ham try catch use karenge error handle ke lye
    
// //     try{
// //         const stdCollection =  addDoc (collection(db, "std"), obj )
// //     }catch(error){
// //         console.log("erroe", error.message);
// //     }
    
// // }

// // error ko handle krne ke lye try catch use karenge .... agar koi erroe ha to catch ke  method se message main show kr dega 
// // window.formSubmit = formSubmit




// import { collection, addDoc, db, doc, updateDoc, getDocs, deleteDoc } from "./firebase.js";



// let  formSubmit = async () => {
//     console.log("formSubmit");
//     const obj = {
//         stdName : "Shehriyar",
//         ID : 212561,
//         Mentor : "Jaffar"
//     }
//     // let stdCollection = collection (db, "Student Data")
//     // addDoc(
//     //     stdCollection,
//     //     obj,
//     //     console.log("Data Add")
//     // )
//     //   const stdCollection = collection(db, "std");
//     // addDoc(
//     //     stdCollection,
//     //      obj,
//     //     console.log("Document add")
//     // )

//     // avoid error
//     try{
//         const  stuentCollecion =  await addDoc(collection(db, "Student Data"), obj)
//         console.log(stuentCollecion.id);
//     }
//     catch(error){
//         console.log("error", error.message);
//     }
// }
// // Edit : doc, updateDoc
// // let editForm = async () => {
// //     console.log("editform");
// //     try{
// //     const updateStudentCollection = doc(db, "Student Data", "V0tRMmziusJvQyxUkpcq")
// //         await updateDoc (updateStudentCollection, {
// //         stdName : "Shehriyar ALam",
// //         ID : 398606,
// //         Mentor : "Jaffar Aman"
// //         })
// //         console.log("formEdit");
// //     }catch(error){
// //         console.log("error", error.message);
// //     }
// // }







// // Update Data : doc, updateDoc
// let editForm = async () => {
//     try{
//         const upadeStudentCollection = doc(db, "Student Data", "zk2qdhziU4x1SnHxTfX0" )
//         await updateDoc(upadeStudentCollection, {
//             stdName : "Shehriyar ALam",
//             ID : 398606,
//             Mentor : "Jaffar aman"
        
//         },
//         // console.log(upadeStudentCollection)
//     )
//     }catch(error){
//         console.log(error, error.message);
        
//     }
// }

// // Upadate Data : pehle form try catch add kya ek variable banaya usme doc with (db, Data tittle, DataId) await laga kr updateDoc( variable assign krenge jo banaya tHa , phr isi main Update assign krdo ya likh do)


// // Get Data : getDocs 
// let getData = async () => {
//  try {
//     const getStudentData = await getDocs(collection(db, "Student Data"))
//  getStudentData.forEach((doc)=> {
//     console.log("DOc", doc.data(), doc.id)
//  })
// } catch(error){
//     console.log("error", error.message);
// }
// }


// let DeleteData = async () => {
//     console.log("Delete Data");
//     try{
//         await deleteDoc(doc(db, "Student Data", "npgtHn0ZQDIlHVLrSp3Z"))
//     }catch(e){
//         console.log(e.message);
//     }
// }









// window.formSubmit = formSubmit;
// window.editForm = editForm;
// window.getData = getData;
// window.DeleteData = DeleteData;



import { collection, addDoc, db, getDoc, doc } from "./firebase.js";

let formSubmit = async  () => {
    console.log("hello");
    const std = {
        std1 : "Sherry",
        std2 : "Mohsin"
    }

    // const stdCollection = collection(db, "Student Data")
    // addDoc(stdCollection, std)
    try{
        const stdCollection = await addDoc(collection(db, "Student Data"), std)
    }catch(error){
        console.log("error", error.message);
    }
}

let getData = async () => {
    try{
        const querySnapshot = await getDoc(collection(db, "Student Data"))
        querySnapshot.forEach((doc) => {
            console.log("doc", doc.data());
        })
    }catch(e){
        console.log("eroor", e.message);
    }
}
window.formSubmit = formSubmit
window.getData = getData