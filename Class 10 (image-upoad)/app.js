import { 
  getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    setDoc,
    getDoc,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
 } from "./firbase.js"; 



 const imageUpload = (element) => {
  // console.log("Upload image", element.files[0] );
  const file = element.files[0];

    // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType : "image/jpeg",
  }
    // Upload file and metadata to the object 'images/mountains.jpg'
    const stoargeRef = ref(storage, "image/" + file.name);
    // console.log("storageRef" , stoargeRef);
    // console.log("metaData", metadata);
    const Uploadtask = uploadBytesResumable(stoargeRef, file, metadata)
    // console.log("Upload TAsk", Uploadtask);
    
     // Listen for state changes, errors, and completion of the upload.
     Uploadtask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = Math.round( (snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        console.log("upload is " + progress + "% done");
        switch (snapshot.state){
          case  "pauesd":
                 console.log("upload is paused");
                 break;
          case "runing":
            console.log("Upload is running");
            break;
        }
     },
     (error) => {
      console.log("error", error);
     },
     () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(Uploadtask.snapshot.ref)
      .then((downloadURl)=>{
        // "userUpdates"
      })
     }
    )
    
    
  
 }

 window.imageUpload = imageUpload