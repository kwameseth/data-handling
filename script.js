// variables declaration
let nameStore = [];

const inputForm = document.getElementById('input-form');
console.log(inputForm);
const inputFormBtn = document.getElementById('btn');
const divCount = document.querySelector('#divCount');

const inputFormAge = document.getElementById('input-form-age');
const inputFormGenders = document.querySelectorAll("input[name='gender']");



divCount.style.color = 'green';
inputForm.style.color = '#3666f5';
const maxCharacter = 15;
const showDetailsSection = document.getElementById('workers-data-list');


let  inputFormGenderSelect = () => {
    let selectedGender =  document.querySelector("input[name='gender']:checked").value;
    // console.log(selectedGender);
     return selectedGender;
 }
 
inputFormGenders.forEach(inputFormGender => {
    inputFormGender.addEventListener("change", inputFormGenderSelect);
});

inputFormAge.addEventListener("keyup", function() {
    this.value = this.value.replace(/[^0-9]+/);
});

// function capitalize(genderName){
//     let capitalizeWord = genderName.slice(0,1).toUpperCase() + genderName.slice(1, genderName.length).toLowerCase();
//     console.log(capitalizeWord);  
//     return capitalizeWord;
// }

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
    this.value = this.value.replace(/[^a-zA-Z ]+/,'');
});

function styleFormAndBtn(textCountColor, disabedBool, backGroundColor, textColor, borderStatus){
    divCount.style.color = textCountColor;
    inputFormBtn.disabled = disabedBool;
    inputFormAge.disabled = disabedBool;
    // inputFormGender.disabled= disabedBool;
    inputFormBtn.style.backgroundColor = backGroundColor;
    inputForm.style.color = textColor;
    inputForm.style.border = borderStatus;

}


function saveForm(){
    const id = '' + new Date().getTime();
    const inputFormInfo = inputForm.value;
    const inputFormAgeInfo = inputFormAge.value;

    if(inputFormAgeInfo >= 60){
        nameStore.push({
            SN: id,
            dataName: inputFormInfo,
            age: inputFormAgeInfo,
            gender: inputFormGenderSelect(),
            status: "Retired",
        });

    } else {
        nameStore.push({
            SN: id,
            dataName: inputFormInfo,
            age: inputFormAgeInfo,
            gender: inputFormGenderSelect(),
            status: "Active",
        });
    }
    console.log(nameStore);
    inputForm.value = "";
    inputFormAge.value = "";
  
    renderDetails();
}


function renderDetails() {
    document.getElementById('workers-data-list').innerHTML = '';

    nameStore.forEach(function (nameSaved) {
        if(nameSaved.dataName == "" && nameSaved.age == ""){
            renderDynamics('Nothing entered', "Wrong Input", nameSaved.gender, 'Clear','Classical Ghost', nameSaved.SN);
            // theStatus("unknown");
        } else if (nameSaved.age == "" || nameSaved.age < 1){
            renderDynamics(nameSaved.dataName, "Wrong Input", nameSaved.gender, 'Clear','Age data not clear', nameSaved.SN);
            // theStatus("unknown");
        }
         else if (nameSaved.dataName == ""){
            renderDynamics('Nothing entered', nameSaved.age, nameSaved.gender, 'Clear','Ghost', nameSaved.SN);
            // console.log(nameSaved.status);
            // theStatus(nameSaved.status);
        }
        else {
           renderDynamics(nameSaved.dataName, nameSaved.age, nameSaved.gender, 'Delete', nameSaved.status, nameSaved.SN);
        //    console.log(nameSaved.status);
        //    theStatus(nameSaved.status);
        }
    }); 
    
}

// function theStatus(stat){
//     if(stat == "Retired"){
//         stat.style.color = 'pink';
//        } else {
//         stat.style.color = 'pink';
//        }
// }

function renderDynamics (storedDataName,storedDataAge,storedDataGender, btnName, storedStatus, btnID){
    const newDiv = document.createElement('div');
    newDiv.innerHTML = "<span >Full Name: "+storedDataName + "</span><br> <span> Age: " +storedDataAge+" </span><br> <span>Gender: "+ storedDataGender+"</span><br> <span id='status'>Status: " +storedStatus+ "</sapn> <br>";
    newDiv.style.marginTop = '15px';

    // const innerStatus = document.getElementById('status');
    // console.log(innerStatus);
    // let innerStatusText= innerStatus.value;

    // theStatus(innerStatusText);

    if(btnName == 'Clear'){
        buttonRenderFeatures('#3666f5', btnName, btnID);
    }
    else {
        buttonRenderFeatures('red', btnName, btnID);
        let updateBtnElement = document.createElement('button');
        updateBtnElement.innerText = "Update";
        updateBtnElement.id = btnID;
        updateBtnElement.style.backgroundColor = 'green';
        updateBtnElement.style.marginRight = '10px';
        updateBtnElement.style.color = '#fff';
        updateBtnElement.style.border = 'none';
        updateBtnElement.style.padding = '5px 20px';
        updateBtnElement.style.borderRadius = '4px';
        updateBtnElement.style.cursor = 'pointer';
        updateBtnElement.style.fontSize = '13px';
        updateBtnElement.onclick = btnUpdate;
        newDiv.appendChild(updateBtnElement);
    }
    
    newDiv.appendChild(newBtn);
    
    showDetailsSection.appendChild(newDiv);
}

function buttonRenderFeatures(backGroundColor, btnInfo, id){
    newBtn = document.createElement('button');
    newBtn.innerText = btnInfo;
    newBtn.id = id;
    newBtn.style.marginTop = '10px';
    newBtn.style.backgroundColor = backGroundColor;
    newBtn.style.color = '#fff';
    newBtn.style.border = 'none';
    newBtn.style.padding = '5px 20px';
    newBtn.style.borderRadius = '4px';
    newBtn.style.cursor = 'pointer';
    newBtn.style.fontSize = '13px';
    newBtn.onclick = btnDeleteOrClear;
    
}

// update button function
function btnUpdate(e){
    let updateID = e.target.id;
    let nameStoreUpdate = [];

  nameStoreUpdate = nameStore.find((dataSaved) => {
        return  dataSaved.SN === updateID;
    });
    // console.log(nameStoreUpdate);
    inputForm.value = nameStoreUpdate.dataName; 
    inputFormAge.value = nameStoreUpdate.age; 

    nameStore = nameStore.filter((removeItemToUpdate) => {
        if(removeItemToUpdate.SN === updateID){
            return false;
        }
        else {
            return true;
        }
    })
    // console.log(nameStore);

    renderDetails();
    if(nameStore.length === 0){
        const emELement = document.createElement('em');
        emELement.innerText = "Update in progress..!";
        emELement.style.color = 'green';
        showDetailsSection.appendChild(emELement);
    }
}


// delete button function
function btnDeleteOrClear (e){
    const btnID = e.target //to get button details
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
    if(nameStore.length === 0){
        const emELement = document.createElement('em');
        emELement.innerText = "All data deleted successfully!";
        emELement.style.color = 'green';
        showDetailsSection.appendChild(emELement);
    }
}







