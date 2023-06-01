document.getElementById("username").addEventListener("blur", usname);
function usname(){
    var s1=document.getElementById("username").value;
    
        if(s1.length<3){
            document.getElementById("user_js").style.display="block";
            document.getElementById("username").style.border= "1px solid red";
        }
        else
        {
            document.getElementById("username").style.border= "2px solid green";
            document.getElementById("user_js").style.display="none";
        }
    
}
document.getElementById("email").addEventListener("blur",emailfun);
function emailfun(){
    var s2=document.getElementById("email").value;
    if(s2!==0&&s2.includes('@gmail.com')||s2.includes('@cartrade.com')||s2.includes('@outlook.com'))
    {
        document.getElementById("email").style.border= "2px solid green";
        document.getElementById("email_js").style.display="none";
    }
    else
    {
        document.getElementById("email_js").style.display="block";
        document.getElementById("email").style.border= "1px solid red";
    }
}
document.getElementById("password").addEventListener("blur",passwordfun);

function passwordfun(){
    var s3= document.getElementById("password").value;
    function validpassword(password)
    {
        var passkey = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[! @ # $ % ^ & * ( ) _ - = +]).+$/;
        return passkey.test(password);
    }
    var isvalid=validpassword(s3);
    if(s3.length>=8){
        if(isvalid==true)
        {
            document.getElementById("password").style.border= "2px solid green";
            document.getElementById("password_js").style.display="none"; 
        }
        else{
            document.getElementById("password").style.border= "2px solid red";
            document.getElementById("password_js").style.display="block";
        }
    }
    else{
        document.getElementById("password").style.border= "2px solid red";
        document.getElementById("password_js").style.display="block";
    }
}

document.getElementById("confirmpassword").addEventListener("blur", confirm_password);
function confirm_password(){
    var s5=document.getElementById("password").value
    var s4=document.getElementById("confirmpassword").value;
    if(s5==s4){
        document.getElementById("confirmpassword").style.border="2px solid green";
        document.getElementById("Confirm_pass").style.display="none";
    }
    else{
        document.getElementById("confirmpassword").style.border="2px solid red";
        document.getElementById("Confirm_pass").style.display="block";

    }
}

function show_P(){
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("togglePassword").setAttribute("class", "fa fa-eye-slash");
}


function hide_P(){
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("togglePassword").setAttribute("class", "fa fa-eye");
}

function ale(){
    alert("succesfully submitted");
}
