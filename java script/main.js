
var userEmailSignInput = document.querySelector('#emailSign');
var userPasswordSignInput = document.querySelector('#passwordSign');
var userDataSigned = [];
    userDataSigned = JSON.parse(localStorage.getItem('userData'));

 

var btnLogin = document.querySelector("button");
btnLogin.addEventListener('click', userLogin);

function userLogin(){
    if(userEmailSignInput.value=="" || userPasswordSignInput.value==""){
        document.querySelector('.message').innerHTML =`<p class="text-center text-warning">All inputs is required</p>`
    }
    else{
        checkUser()
    }

    // var signedUsers ={
    //     email: userEmailSignInput.value,
    //     password: userPasswordSignInput.value
    // };
    // userSigned.push(signedUsers);
    // clearData();
    // console.log(userSigned);
    // localStorage.setItem('userSigned',JSON.stringify(userSigned))
}


function checkUser(){
    for(var i=0; i< userDataSigned.length; i++){
        if(userEmailSignInput.value == userDataSigned[i].email && userPasswordSignInput.value ==userDataSigned[i].password ){
            var userWelcome = userDataSigned[i].name;

            localStorage.setItem('userName', userWelcome)

            location.href ='home/index.html'

            
        }
    }
}

function clearData(){
    userEmailSignInput.value ="";
    userPasswordSignInput.value = "";
}