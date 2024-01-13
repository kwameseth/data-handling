// variables declaration
let nameStore = [];

const inputForm = document.getElementById('input-form');
const inputFormBtn = document.getElementById('btn');
const divCount = document.querySelector('#divCount');

const inputFormAge = document.getElementById('input-form-age');
// const inputFormGenderMale = document.getElementById('input-form-gender-male');
// const inputFormGenderFemale = document.getElementById('input-form-gender-female');
const inputFormGenders = document.querySelectorAll("input[name='gender']");

console.log(inputFormGenders);
// inputFormBtn.disabled = false;
divCount.style.color = 'green';
inputForm.style.color = '#3666f5';
const maxCharacter = 15;
const showDetailsSection = document.getElementById('workers-data-list');


let  inputFormGenderSelect = () => {
    let selectedGender =  document.querySelector("input[name='gender']").value;
     console.log(selectedGender);
 }

inputFormGenders.forEach(inputFormGender => {
    inputFormGender.addEventListener("change", inputFormGenderSelect);
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

// inputFormGender.addEventListener("keyup", function(){
      
//     if(this.value[0] !== "m" || this.value[0] !== "M" ){
//         inputFormBtn.disabled = true;
//         inputFormBtn.style.backgroundColor = "gray";
//         console.log(this.value[0]);
//     }

//     else {
//         inputFormBtn.disabled = false;
//         inputFormBtn.style.backgroundColor = '#3666f5';
//     }
//     inputFormGender.disabled = false;
//     console.log(this.value[0]);
// })


function saveForm(){
    const id = '' + new Date().getTime();
    const inputFormInfo = inputForm.value;
    const inputFormAgeInfo = inputFormAge.value;

  


    // const inputFormGenderMaleInfo = inputFormGenderMale.value;
    // console.log(inputFormGenderMaleInfo)
    
    // const inputFormGenderFemaleInfo = inputFormGenderFemale.value;
    // console.log(inputFormGenderFemaleInfo)
    
    // if ( inputFormGenderFemaleInfo == "Male"){
    //     nameStore.push({
    //         SN: id,
    //         dataName: inputFormInfo,
    //         age: inputFormAgeInfo,
    //         gender: inputFormGenderFemaleInfo,
    //     });
    // }
   
        nameStore.push({
            SN: id,
            dataName: inputFormInfo,
            age: inputFormAgeInfo,
            gender: selectedGender,
        });
        

    
    console.log(nameStore);

    renderDetails();
}


function renderDetails() {
    document.getElementById('workers-data-list').innerHTML = '';

    nameStore.forEach(function (nameSaved) {
        if(nameSaved.dataName == "" && nameSaved.age == ""){
            renderDynamics('Nothing entered', "Wrong Input", nameSaved.gender, 'clear', nameSaved.SN);
        } else if (nameSaved.age == ""){
            renderDynamics(nameSaved.dataName, "Wrong Input", nameSaved.gender, 'clear', nameSaved.SN);
        }
         else if (nameSaved.gender !== "Male" || nameSaved.gender  !== "Female"){
            renderDynamics(nameSaved.dataName, nameSaved.age, "Wrong Input, case sensitive: " +nameSaved.gender, 'clear', nameSaved.SN);
        }
        else {
           renderDynamics(nameSaved.dataName, nameSaved.age, nameSaved.gender, 'delete', nameSaved.SN);
        }


        // switch (nameSaved) {
        //     case nameSaved.dataName == "" && nameSaved.age == "":
        //         renderDynamics('Nothing entered', "Wrong Input", nameSaved.gender, 'clear', nameSaved.SN);
        //         break;
        //     case nameSaved.age == "":
        //         renderDynamics(nameSaved.dataName, "Wrong Input", nameSaved.gender, 'clear', nameSaved.SN);
        //         break;
        //     case nameSaved.gender !== "Male":
        //         renderDynamics(nameSaved.dataName, nameSaved.age, "Wrong Input, case sensitive: " +nameSaved.gender, 'clear', nameSaved.SN);
        //         break;
        //     case nameSaved.gender !== "male":
        //         renderDynamics(nameSaved.dataName, nameSaved.age, "Wrong Input, case sensitive: " +nameSaved.gender, 'clear', nameSaved.SN);
        //         break;
        //     case nameSaved.gender !== "Female":
        //         renderDynamics(nameSaved.dataName, nameSaved.age, "Wrong Input, case sensitive: " +nameSaved.gender, 'clear', nameSaved.SN);
        //         break;
        //     case nameSaved.gender !== "female":
        //         renderDynamics(nameSaved.dataName, nameSaved.age, "Wrong Input, case sensitive: " +nameSaved.gender, 'clear', nameSaved.SN);
        //         break;
        //     default:
        //         renderDynamics(nameSaved.dataName, nameSaved.age, nameSaved.gender, 'delete', nameSaved.SN);
        //         break;
        // }


    });   
}

function renderDynamics (storedDataName,storedDataAge,storedDataGender, btnName, btnID){
    const newDiv = document.createElement('div');
    // newDiv.innerText = "Full Name: "+storedDataName + "    Age: " +storedDataAge + "    Gender: "+ storedDataGender;
    newDiv.innerHTML = "<span >Full Name: "+storedDataName + "</span><br> <span> Age: " +storedDataAge+" </span><br> <span>Gender: "+ storedDataGender+"</span><br>";
    newDiv.style.marginTop = '15px';

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
    if(nameStore.length === 0){
        const emELement = document.createElement('em');
        emELement.innerText = "All data deleted successfully!";
        emELement.style.color = 'green';
        showDetailsSection.appendChild(emELement);
    }
}







