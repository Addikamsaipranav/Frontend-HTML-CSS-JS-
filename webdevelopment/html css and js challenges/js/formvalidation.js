var form=document.getElementById("form");
var username=document.getElementById("username");
var password=document.getElementById("password");
var email=document.getElementById("email");
var password2=document.getElementById("password2");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
});
function checkInputs(){
     const usernamevalue= username.value.trim();
    const emailvalue=email.value.trim();
    const passwordvalue=password.value.trim();
    const password2value=password2.value.trim();

    if(usernamevalue == ""){
        setErrorFor(username,'USer name cannot be blank');
    }
    else{
         setSuccesFor(username);
    }

}
function setErrorFor(input,message){
    const formControl=input.parentElemtt;
    const small
    }

    