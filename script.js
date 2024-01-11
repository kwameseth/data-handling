// variables declaration
let nameStore = [];

const inputForm = document.getElementById('input-form');
const inputFormBtn = document.getElementById('btn');
const divCount = document.querySelector('#divCount');


divCount.style.color = 'green';
inputForm.style.color = '#3666f5';
const maxCharacter = 15;
const showDetailsSection = document.getElementById('workers-data-list');


inputForm.addEventListener('keyup', function(){
    const showCounterOfText = maxCharacter - this.value.length;
    divCount.innerText = "Characters left: " + showCounterOfText;

    if(showCounterOfText < 0){
        styleFormAndBtn('#d3d3d3', true,'#d3d3d3', '#d3d3d3', 'none');
    }

    else if(showCounterOfText <= 3){
        styleFormAndBtn('red', false,'#3666f5', '#3666f5', '2px solid #B4BDFF');
    }

    else if(showCounterOfText <= 6){
        styleFormAndBtn('#977316', false,'#3666f5', '#3666f5', '2px solid #B4BDFF');
    }

    else {
        divCount.style.color = 'green';
        inputFormBtn.style.backgroundColor = '#3666f5';
        inputForm.style.color = '#3666f5';
    }
 
});

function styleFormAndBtn(textCountColor, disabedBool, backGroundColor, textColor, borderStatus){
    divCount.style.color = textCountColor;
    inputFormBtn.disabled = disabedBool;
    inputFormBtn.style.backgroundColor = backGroundColor;
    inputForm.style.color = textColor;
    inputForm.style.border = borderStatus;

}



function saveForm(){
    const id = '' + new Date().getTime();
    const inputFormInfo = inputForm.value;
    
    nameStore.push({
        SN: id,
        dataName: inputFormInfo
    });
    console.log(nameStore);

    renderDetails();
}

function renderDetails() {
    document.getElementById('workers-data-list').innerHTML = '';

    nameStore.forEach(function (nameSaved) {
        if(nameSaved.dataName == ""){
            renderDynamics('Nothing entered', 'clear', nameSaved.SN);

        } else {
           renderDynamics(nameSaved.dataName, 'delete', nameSaved.SN);
        }
    });   
}

function renderDynamics (storedData, btnName, btnID){
    const newDiv = document.createElement('div');
    newDiv.innerText = storedData;
    newDiv.style.marginTop = '10px';

    if(btnName == 'clear'){
        buttonRenderFeatures('#3666f5', btnName, btnID);
    }
    else {
        buttonRenderFeatures('red', btnName, btnID);
    }
    newDiv.appendChild(newBtn);
    showDetailsSection.appendChild(newDiv);
}

function buttonRenderFeatures(backGroundColor, btnInfo, id){
    newBtn = document.createElement('button');
    newBtn.innerText = btnInfo;
    newBtn.id = id;
    newBtn.style.marginLeft = '30px';
    newBtn.style.backgroundColor = backGroundColor;
    newBtn.style.color = '#fff';
    newBtn.style.border = 'none';
    newBtn.style.padding = '5px 20px';
    newBtn.style.borderRadius = '4px';
    newBtn.style.cursor = 'pointer';
    newBtn.style.fontSize = '13px';

    newBtn.onclick = btnDeleteOrClear;
    
}

function btnDeleteOrClear (e){
    const btnID = e.target //to get butoon details
    const btnIDNumber = btnID.id;


    nameStore = nameStore.filter((names) => {
        if(names.SN === btnIDNumber){
            return false;
        } else {
            return true;
        }
    });
    renderDetails();
    console.log(nameStore);
}







