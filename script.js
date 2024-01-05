let inputForm = $('#input-form');


const inputFormBtn = $('#btn');
let nameStore = [];





inputFormBtn.on("click", function (){
    let inputFormValue = inputForm.val();
   
    // $('#workers-data-list').show();
    
    if(inputFormValue.length > 0){
        nameStore.push(inputFormValue);
        console.log(nameStore);
        $('#workers-data-list').append("<div style='display:flex; justify-content:space-between;'><span>"+inputFormValue+"</span><span><button  class='btn-update' style='margin-right:10px;'>Update</button><button class='btn-delete'>Delete</button></span></div><br>");
    } else {
        let statcNotice = "You entered nothing!!";
        $('#workers-data-list').append("<div onclick='this.remove()' class='visi' style='display:flex; justify-content:space-between;'><span>"+statcNotice+"</span><span id='btn-clear'><button  class='btn-clear' >Clear</button></span></div>");      
    }
});

// function btnClear () {
//     let clearBtn = $('#workers-data-list .visi #btn-clear');
//     let line = $(".visi")
//         clearBtn.text("Clear All");
//         clearBtn.click(function () { 
//             this.remove();
//         }); 
// }







