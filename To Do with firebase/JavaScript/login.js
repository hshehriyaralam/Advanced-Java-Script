import { auth, signInWithEmailAndPassword } from "../JavaScript/firebas.js";

 let loginHandler = async () => {
    // console.log("Login");
    try{
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");
        // console.log("email", email.value , "pass", password.value);
        const response = await signInWithEmailAndPassword(
            auth,
            email.value,
            password.value,
        )
        window.location.replace("./index.html")
        console.log("response",response);
    }catch(e){
        alert(e.message)
    }
 }
 window.loginHandler = loginHandler