let inputForm = $('#input-form');


const inputFormBtn = $('#btn');
const nameStore = [];





inputFormBtn.on("click", function (){
    let inputFormValue = inputForm.val();
   
    // $('#workers-data-list').show();
    
    if(inputFormValue.length > 0){
        nameStore.push(inputFormValue);
        console.log(nameStore);
        $('#workers-data-list').append("<div class='delete-update' style='display:flex; justify-content:space-between; margin-bottom:10px'><span>"+inputFormValue+"</span><span><button  class='btn-update' style='margin-right:10px;'>Update</button><button class='btn-delete'  onclick='deleteMe(this)'>Delete</button></span></div>");
    } else {
        let statcNotice = "You entered nothing!!";
        $('#workers-data-list').append("<div onclick='this.remove()' class='visi' style='display:flex; justify-content:space-between;'><span>"+statcNotice+"</span><span id='btn-clear'><button  class='btn-clear' >Clear</button></span></div>");      
    }
});

itemInNameStore();

function itemInNameStore () {
    for(i = 0; i  < nameStore.length; i++){
        console.log("The index of "+nameStore[i]+ " item is "+ i);
    }
}



// function deleteMe (btnstate) {
//     let deleteBtns = document.querySelector(".delete-update");
//     deleteBtns.parentNode.removeChild(deleteBtns);
//     if(nameStore.length > 0){
//         for(let i = 0; i < nameStore.length; i++){
//            const indexOfNameStore = nameStore.indexOf(...nameStore[i]);
//            console.log("index to be removed: " +indexOfNameStore);
//            const valueOfNameStore = nameStore.slice(indexOfNameStore, nameStore[indexOfNameStore]);
//             console.log(nameStore);
//         }
//     }
// }





