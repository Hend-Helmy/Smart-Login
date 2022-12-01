var userNameInput = document.querySelector('#userName');
var userEmailInput = document.querySelector('#email');
var userPasswordInput = document.querySelector('#pass');
var userData = [];


var btnEvent = document.querySelector('button');
btnEvent.addEventListener('click', addUsers )


if(localStorage.getItem('userData') != null){
    userData = JSON.parse(localStorage.getItem('userData'));

}
console.log(userData)

function addUsers(){
    if(userNameInput.value=="" || userEmailInput.value=="" || userPasswordInput.valu==""){
        document.querySelector('.message').innerHTML =`<p class="text-center text-warning">All inputs is required</p>`
    }
    else{
        var userInputs = {
            name: userNameInput.value,
            email: userEmailInput.value,
            password: userPasswordInput.value
        }
        userData.push(userInputs);
        clearData()
        // console.log(userData);
        location.href ='../index.html' 
        localStorage.setItem('userData', JSON.stringify(userData))

    }
    

}

function clearData(){
    userNameInput.value ="";
    userEmailInput.value ="";
    userPasswordInput.value = "";
}