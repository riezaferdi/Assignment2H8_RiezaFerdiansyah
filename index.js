const fullName = document.getElementById('fullName');
const jobRole = document.getElementById('jobRole');
const availTime = document.getElementById('availTime');
const ageUser = document.getElementById('ageUser');
const jobArea = document.getElementById('jobArea');
const yearsExp = document.getElementById('yearsExp');
const emailUser = document.getElementById('emailUser');
const submitForm = document.getElementById('submitForm');

function changeData (formOne, formTwo, formThree, formFour, formFive, formSix, formSeven) {
    fullName.innerHTML = formOne
    jobRole.innerHTML = formTwo
    availTime.innerHTML = formThree
    ageUser.innerHTML = formFour
    jobArea.innerHTML = formFive
    yearsExp.innerHTML = formSix
    emailUser.innerHTML = formSeven
}

document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    // get data from form
    let formOne = document.getElementById('formName').value;
    let formTwo = document.getElementById('formRole').value;
    let formThree = document.getElementById('formAvail').value;
    let formFour = document.getElementById('formAge').value;
    let formFive = document.getElementById('formArea').value;
    let formSix = document.getElementById('formYearsExp').value;
    let formSeven = document.getElementById('formEmail').value;
    // send data to server
    changeData(formOne, formTwo, formThree, formFour, formFive, formSix, formSeven);
    // remove form
    submitForm.remove();
});