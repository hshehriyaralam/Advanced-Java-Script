window.addEventListener("load", () => {
    if (localStorage.getItem("User")) {
      window.location.replace("../index.html");
    }


  });
  


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
        );
        localStorage.setItem("User", response.user.uid);
        window.location.replace("../index.html")
        console.log("response",response);
    }catch(e){
      alert(e.message)
      // window.location.replace("../Pages/signUp.html")

    }
 }
 window.loginHandler = loginHandler