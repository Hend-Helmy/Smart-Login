document.querySelector('#userName').innerHTML = localStorage.getItem("userName")

document.querySelector("#logout").addEventListener("click", function(){
    // location.href = '../../signin/index.html'
    localStorage.removeItem("userName")
})