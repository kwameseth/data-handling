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
        $('#workers-data-list').append("<div class='visi' style='display:flex; justify-content:space-between;'><span>You entered nothing!!</span><span id='btn-clear'><button  class='btn-clear' onclick='btnClear()' >Clear</button></span></div>");      
}
});

function btnClear () {
$('#workers-data-list .visi #btn-clear').click(function () { 
    // alert("about to clear you!");
    $(".visi").remove();
    // $('.visi ').remove();
});
}







