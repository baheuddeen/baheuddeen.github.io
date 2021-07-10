
var cipher = document.getElementById("cipher");
var decipher = document.getElementById("decipher");

var key = document.getElementById("key").value;
var message = document.getElementById("message").value;
var result = document.getElementById("result");


cipher.addEventListener("click",ciphering)
function ciphering(){

    var key = document.getElementById("key").value;
    var message = document.getElementById("message").value;
    
    if (validation()){   

    result.textContent=""
    for(var i=0;i<message.length;i++){
        result.textContent +=String.fromCharCode(message[i].charCodeAt()+parseInt(key[i%key.length])+1);
    }

}
else{
    result.textContent = "please Enter valid Key and Message";
}

}

decipher.addEventListener("click",deciphering)
function deciphering(){
    var key = document.getElementById("key").value;
    var message = document.getElementById("message").value;

    if (validation()){   

    result.textContent="";
    for(var i=0;i<message.length;i++){
    
        result.textContent +=String.fromCharCode(message[i].charCodeAt()-parseInt(key[i%key.length])-1); 
    
    }
}
else{
    result.textContent = "please Enter valid Key and Message";
}
    
}

function validation(){
    var key = document.getElementById("key").value;
    var message = document.getElementById("message").value;
    var validMessage = document.getElementById("validMessage");
    var validKey =document.getElementById("validKey")


  

    if (key == "" ){
        validKey.textContent = "Key field is Required";
        return false;
    }
    if (isNaN(key)){
        validKey.textContent = "Key must be a sequance of numbers";
        return false;

    }
    if (message == "" ){
        validMessage.textContent = "Message field is Required";
        return false;
    }

    else{
        validMessage.textContent =""
        validKey.textContent=""

        return true;
    }
}
