
var cipher = document.getElementById("cipher");
var decipher = document.getElementById("decipher");

var key = document.getElementById("key").value;
var message = document.getElementById("message").value;
var result = document.getElementById("result");
var copyBtn = document.getElementById('copy-content');
var deleteBtn = document.getElementById('delete-content');

deleteBtn.addEventListener('click', () => {
    message.value = '';
    result.value = '';
});

copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(result.value);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
});

cipher.addEventListener("click",ciphering)
function ciphering(){

    var key = document.getElementById("key").value.trim();
    var message = document.getElementById("message").value.trim();
    
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
