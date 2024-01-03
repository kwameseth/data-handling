let inputForm = $('#input-form');

const inputFormBtn = $('#btn');
const nameStore = [];
console.log(inputFormBtn);


inputFormBtn.on("click", function (){
    let inputFormValue = inputForm.val();
    nameStore.push(inputFormValue);
    console.log(nameStore);
    $('#workers-data-list').append("<div style='display:flex; justify-content:space-between;'><span>"+inputFormValue+"</span><span><button>Update</button><button>Delete</button></span></div>");

});





