import { collection,
     addDoc,
      db,
      getDocs,
      doc, 
      deleteDoc,
      updateDoc
     }
      from "../JavaScript/firebas.js";




const todoCollection = collection(db, "ToDo Collections"); 

let todoParent = document.querySelector(".parent")
console.log("todoparent", todoParent);

// add Data Start
let addTodo = async () => {
    try{
        const toDoInput = document.getElementById("input");
        console.log("input", toDoInput.value);

        
        const result = await addDoc(todoCollection,{
            value:toDoInput.value
        })
        toDoInput.value = "";
        getToDo()
        console.log("result", result.id);
    }catch(e){
        console.log("error", e.message);
    }
    
}

// add Data Done 

// // Get Data Start
let getToDo = async () => {
    
    try{
        const querySnapshot = await getDocs(todoCollection)
        let arr1 = []
        //         // 1st way 
        // //         querySnapshot.forEach((doc)=>{
            // //             const getDataObj = {
                // //                 id : doc.id,
                // //                 ...doc.data() 
                // //             }
                // //             arr1.push(getDataObj)
                // //             console.log(getDataObj);
                
                // //         })
                // //         for (var getDataObj  of arr1){
                    // //             todoParent.innerHTML    += `  <div class="card ms-3 mt-4  border-bottom  border-2 bg-transparent "style="width: 90%;">
                    // //         <div class="card-body border-none ms-2 d-flex ">
                    // //           <p class="paragraph text-white flex-nowrap" > ${getDataObj.value}
                    // //           </p>
                    // //           <div class="container-fluid d-flex flex-nowrap parent" style="width: 40%;">
                    // //             <button class=" edit">EDIT</button>
                    // //             <button class=" remove">REMOVE</button>
                    // //           </div>
                    // //         </div>
                    // //       </div>`
                    // //  }
                    todoParent.innerHTML = ""
                    querySnapshot.forEach((doc) => {
                        const getDataObj = {
                            id : doc.id,
                            ...doc.data()
    }
    arr1.push(getDataObj);
    // console.log("data", getDataObj.value);
    todoParent.innerHTML += `<div class="card ms-3 mt-4  border-bottom   bg-transparent "style="width: 90%;">
    <div class="card-body  bg-transparent d-flex p-2" style="width: 100%;"> 
    <div class=" bg-transparent  ms-1" style="width: 65%; ">
    <p class="paragraph text-white flex-nowrap p-2" >${getDataObj.value}  </p>
    </div>
    <div class="bg-transparent  ms-4 p-3" style="width: 30%;">
    <button class="edit" id="${getDataObj.id}" onclick="editTodo(this)">EDIT</button>
    <button class="remove" id="${getDataObj.id}" onclick="deleteTodo(this)">REMOVE</button>
    </div>
    </div>
    </div>`
})
}catch(error){
    console.error(error.message);
}
}

let deleteTodo = async (ele) => {
    // console.log("delete todo", ele.id);
    try{
        await deleteDoc(doc(db, "ToDo Collections", ele.id))
        getToDo()

    }catch(error){
        console.log("error", error.message);
    }
}

let editTodo = async (ele) => {
    try{
        console.log("ele", ele.id);
        const editValue = prompt("Enter Edit values");
        await updateDoc(doc(db, "ToDo Collections", ele.id),{
            value:editValue,
        });
        getToDo()
        console.log("edit", editValue);
    }catch(erro){
        console.log("error", erro.message);
    }
}
window.addEventListener("load", getToDo)
window.addTodo = addTodo
window.deleteTodo = deleteTodo
window.editTodo = editTodo