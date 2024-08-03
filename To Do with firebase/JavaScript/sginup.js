window.addEventListener("load", () => {
    if (localStorage.getItem("ToDo Collections")) {
      window.location.replace("../index.html");
    }
  });
  




import{
    auth,
    createUserWithEmailAndPassword,
    db,
    doc,
    setDoc,
}from "../JavaScript/firebas.js";


const signUpHnadler = async () => {
    try{
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");
        const fullName = document.querySelector("#fullName");
        const gendar = document.querySelector("#gendar");


        // db Object
        const userObjcet = {
            fullName : fullName.value,
            gendar : gendar.value,
            email : email.value,
        }
        // console.log("userObject", userObjcet);
        // Firstly user Signup 
        const response = await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );
        const uid = response.user.uid;
        const userResponse = await setDoc(doc(db,"ToDo Collections",uid),userObjcet)
        alert("user successfuly SignUp");
        window.location.href = "../Pages/login.html";
        console.log("userResponse", userResponse);
        console.log("response",response );

        console.log(uid, "UID");
    }catch(e){
        console.log(e.message);
        
    }
}
window.signUpHnadler = signUpHnadler