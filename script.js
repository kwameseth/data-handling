let inputForm = $('#input-form');
const inputFormBtn = $('#btn');
const nameStore = [];


inputFormBtn.on("click", function (){
    let inputFormValue = inputForm.val();
    nameStore.push(inputFormValue);
    console.log(nameStore);
   
    // $('ol').append("<li style='margin-left: 25px; font-size: 30px;'>" + inputFormValue + 
    // "<table><tr><td><td> <td></td> </tr></table><span style='margin-left: 250px;'><button id='btn'> Update </button><span> <span style='margin-left: 30px;'><button id='btn' onclick='toDelete()' class='btn-class'> Delete </button><span></li><br>");
 
    // $('ol').append("<span style='display: inline;'><li style='margin-left: 25px; font-size: 30px;'>" + inputFormValue + " <table><tr><td><button id='btn'> Update </button></td><td><button id='btn' onclick='toDelete()' class='btn-class'> Delete </button></td></tr></table></span></li>");
    $('ol').append("<span style='display: inline;'><li style='margin-left: 25px; font-size: 30px;'>" + inputFormValue + " <button id='btn'> Update </button><button id='btn' onclick='toDelete()' class='btn-class'> Delete </button></span></li>");




    // <span style='margin-left: 250px;'><span> <span style='margin-left: 30px;'><span></li><br>
    // <button> Update </button><button> Delete </button>
});

// function toDelete(){
//     let btnClass = document.querySelector(".btn-class");
//     btnClass.addEventListener('click',function(){
//         this.pop();
//     });

// }




