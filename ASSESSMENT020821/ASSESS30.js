function checkdata() {
    var name_ofcan = document.getElementById("name1").value;
    var name_of_fat = document.getElementById("name2").value;
    var name_of_mot = document.getElementById("name3").value;
    var mobile = document.getElementById("mobilen").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var letters = /^[A-Za-z ]+$/;
    if (!(name_ofcan.match(letters) && (name_of_fat.match(letters)) && (name_of_mot.match(letters)))) {
        alert("enter correct names");
        return false;
    }
    else if(isNaN(mobile)){
        alert("enter only numeric in mobile no.");
        return false;
    }
    else if(pass1!=pass2){
        alert("enter same password in both field");
        return false;
    }
    else if(pass1.length<6){
        alert("Password should of more than 6 characters");
        return false;
    }
   
}
