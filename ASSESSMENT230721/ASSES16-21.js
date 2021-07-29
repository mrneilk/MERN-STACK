function calculate() {
    var op1=document.getElementById("op").value;
    var nu1=parseFloat(document.getElementById("num_1").value);
    var nu2=parseFloat(document.getElementById("num_2").value);
    if(op1=='+'){
        // var result=nu1+nu2;
        document.getElementById("result").innerHTML=nu1+nu2;
    }
    if(op1=='-'){
        document.getElementById("result").innerHTML=nu1-nu2;
    }
    if(op1=='*'){
        document.getElementById("result").innerHTML=nu1*nu2;
    }
    if(op1=='/'){
        document.getElementById("result").innerHTML=nu1/nu2;
    }
}
function calculate_si() {
    var p=parseFloat(document.getElementById("pri").value);
    var r=parseFloat(document.getElementById("roi").value);
    var t=parseFloat(document.getElementById("toi").value);
    if(isNaN(p) || isNaN(r) || isNaN(t)){
        alert("Please Enter only Numeric value");
        // return false;
    }
    else{
        var res2;
        res2=(p*r*t)/100;
        document.getElementById("r2").innerHTML="₹ "+res2;
    }
}
function calculate_circle() {
    var radius=parseFloat(document.getElementById("roc").value);
    if (isNaN(radius)) {
        alert("Enter Numeric Only");
        return false;
    }
    else{
        document.getElementById("ar").innerHTML=(22/7)*radius*radius;
        document.getElementById("cir").innerHTML=2*radius*(22/7);
    }
}
function calculate_Rect() {
    var lenght1=parseFloat(document.getElementById("len1").value);
    var breadth2=parseFloat(document.getElementById("bre1").value);
    if (isNaN(lenght1) || isNaN(breadth2)) {
        alert("Enter Numeric Only");
        return false;        
    }
    else{
        document.getElementById("pr").innerHTML=(2*lenght1)+(2*breadth2);
    }
}
function age_find() {
    var age=parseInt(document.getElementById("a1").value);
    if(age<18){
        alert("You are not Eligible to cast vote.");
    }
    else{
        alert("you are eligible to cast vote.")
    }
}
function calgrade(m=0) {
    
    if (m>85) {
        return "A";
    }
    else if(m>75 && m<85){
        return "B";
    }
    else if(m>65 && m<75){
        return "C";
    }
    else if(m>55 && m<65){
        return "D";
    }
    else if(m>50 && m<55){
        return "E";
    }
    else if(m<50){
        return "Fail";
    }
    else{
        return "Wrong input";
    }
    // switch(arguments){
    //     case (arguments>85): grade="A"; return grade; break;
    //     case (arguments>75 && arguments<85): grade="B"; return grade; break;
    //     case (arguments>65 && arguments<75): grade='C'; return grade; break;
    //     case (arguments>55 && arguments<65): grade='D'; return grade; break;
    //     case (arguments>50 && arguments<55): grade='E'; return grade; break;
    //     case (arguments<50): grade="Fail"; return grade; break;
    //     default: grade="wrong input"; return grade; break; 
    // }
}
function calculate_m() {
    var marks_phy=parseFloat(document.getElementById("phy").value);
    var marks_chem=parseFloat(document.getElementById("chem").value);
    var marks_maths=parseFloat(document.getElementById("maths").value);
    var marks_bio=parseFloat(document.getElementById("bio").value);
    var marks_cs=parseFloat(document.getElementById("cs").value);
    var tot_marks=marks_bio+marks_chem+marks_cs+marks_maths+marks_phy;
    var percentage=tot_marks/5;
    document.getElementById("tot_ma").innerHTML=tot_marks;
    document.getElementById("perce").innerHTML=percentage+"%";
    document.getElementById("m_phy").innerHTML=calgrade(marks_phy);
    document.getElementById("m_chem").innerHTML=calgrade(marks_chem);
    document.getElementById("m_maths").innerHTML=calgrade(marks_maths);
    document.getElementById("m_bio").innerHTML=calgrade(marks_bio);
    document.getElementById("m_cs").innerHTML=calgrade(marks_cs);
}