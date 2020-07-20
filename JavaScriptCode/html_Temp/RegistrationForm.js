function formValidation() {
    uid = document.RegistrationForm.userid;
    passid = document.RegistrationForm.passid;
    uname = document.RegistrationForm.username;
    userAddress = document.RegistrationForm.address;
    userCountry =document.RegistrationForm.country;
    uzip = document.RegistrationForm.zip;
    userEmail = document.RegistrationForm.email;
    umsex = document.RegistrationForm.msex;
    ufsex = document.RegistrationForm.fsex;

    if(userid_validation(uid,5,12)){
        if(passid_validation(passid,7,12)){
            if(allLetter(uname)){
                if(alphanumeric(userAddress)){
                    if (contryselect(userCountry)){
                        if (allnumeric(uzip)){
                            if (ValidateEmail(userEmail)){
                                if (validsex(umsex,ufsex)){

                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return false;

}
//----------------------------------------------------------1
function userid_validation(uid, mx, my) {
    UserIdLength = uid.value.length;
    if (UserIdLength == 0 || UserIdLength >=my || UserIdLength<mx){
       alert("User Id should no be empty / length be between" + mx +" to "+my);
       uid.focus();
       return false;
    }
    return true;
}

//----------------------------------------------------------2
function passid_validationf(passid,mx,my) {

      PassLength = passid.value.length;
    if (PassLength== 0 || PassLength >=my || PassLength <mx){
       alert("User password should no be empty / length be between" + mx +" to "+my);
       passid.focus();
       return false;
    }
    return true;

}
//----------------------------------------------------------------------3

function allLetter(uname) {
    //letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        //alert("ur email is valid ");
        return true;
    } else {
        alert("You must have alphabet characters only");
        uname.focus();
        return false;
    }
}

//-------------------------------------------------------------------------4

function alphanumeric(userAddress) {
    //letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    letters = /^[0-9A-Za-z]+$/;
    if (userAddress.value.match(letters)) {
        //alert("ur email is valid ");
        return true;
    } else {
        alert("You must have alphabet  alpha numeric characters only");
        userAddress.focus();
        return false;
    }
}

//--------------------------------------------------------------5
function contryselect(userCountry){
    if (userCountry.value == "Default"){
        alert("Select your country from the list.");
        userCountry.focus();
        return false;
    }
    else {
        return true;
    }
}

//---------------------------------------------------------------------6

function allnumeric(uzip) {

    letters = /^[0-9]+$/;
    if (uzip.value.match(letters)) {
        //alert("ur email is valid ");
        return true;
    } else {
        alert("Zip code must be numeric characters only");
        uzip.focus();
        return false;
    }
}
//------------------------------------------------------------------------7
function ValidateEmail(userEmail){
     letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (userEmail.value.match(letters)) {
        //alert("ur email is valid ");
        return true;
    } else {
        alert("You must have input valid email.");
        userEmail.focus();
        return false;
    }
}

//--------------------------------------------------------8
function validsex(umsex,ufsex){
x = 0;
if(umsex.checked()){
    x++;
}
if(ufsex.checked()){
    x++;
}
if(x==0){
   alert("Select Male/Female");
   return false;
}

else {
    alert('Form Successfully Submitted');
    window.location.reload();
    return  true;
}

}
