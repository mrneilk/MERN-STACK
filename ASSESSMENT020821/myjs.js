function checkfun() {
    var n=prompt("Enter a number","number");
    if (n%2==0) {
        alert("it is even");
    }
    else{
        alert("it is odd");
    }
}
function getinput() {
    var p=prompt("enter principal","p");
    var r=prompt("enter rate","in %");
    var t=prompt("enter time","t");
    alert("S.I.= "+p*r*t/100);
}
function Add() {

    var nu1=parseFloat(document.getElementById("num_1").value);
    var nu2=parseFloat(document.getElementById("num_2").value);
        document.getElementById("result").innerHTML=nu1+nu2;
}
function Sub() {
    var nu1=parseFloat(document.getElementById("num_1").value);
    var nu2=parseFloat(document.getElementById("num_2").value);
        document.getElementById("result").innerHTML=nu1-nu2;
}
function Mul() {
    var nu1=parseFloat(document.getElementById("num_1").value);
    var nu2=parseFloat(document.getElementById("num_2").value);
        document.getElementById("result").innerHTML=nu1*nu2;
}
function Div() {
    var nu1=parseFloat(document.getElementById("num_1").value);
    var nu2=parseFloat(document.getElementById("num_2").value);
        document.getElementById("result").innerHTML=nu1/nu2;
}
function funcmul() {
    $("#paratable").empty();
    var number = parseInt(document.getElementById("num_op").value);
    for (let index = 1; index <= 10; index++) {
        $("#paratable").append(index*number+"<br>")
        
    }
}

