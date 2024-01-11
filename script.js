// variables declaration
let nameStore = [];

const inputForm = document.getElementById('input-form');
const inputFormBtn = document.getElementById('btn');
const divCount = document.querySelector('#divCount');
divCount.style.color = 'green';
inputForm.style.color = '#3666f5';
const maxCharacter = 15;
// inputForm.maxLength = maxCharacter;

inputForm.addEventListener('keyup', function(){
    const showCounterOfText = maxCharacter - this.value.length;
    divCount.innerText = "Characters left: " + showCounterOfText;
    console.log(showCounterOfText);

    if(showCounterOfText < 0){
        styleFormAndBtn('#d3d3d3', true,'#d3d3d3', '#3666f5');
    }

    else if(showCounterOfText <= 3){
        styleFormAndBtn('red', false,'#3666f5', '#3666f5');
    }

    else if(showCounterOfText <= 6){
        styleFormAndBtn('#977316', false,'#3666f5', '#3666f5');
    }

    else {
        divCount.style.color = 'green';
        inputFormBtn.style.backgroundColor = '#3666f5';
        inputForm.style.color = '#3666f5';
    }
 
});

function styleFormAndBtn(textCountColor, disabedBool, backGroundColor, textColor){
    divCount.style.color = textCountColor;
    inputFormBtn.disabled = disabedBool;
    inputFormBtn.style.backgroundColor = backGroundColor;
    inputForm.style.color = textColor;

}

function saveForm(){
    let inputFormInfo = inputForm.value;
    nameStore.push(inputFormInfo);
    console.log(nameStore);
}





