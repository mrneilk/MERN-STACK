function printodd(){
    $("#resultfinal").empty();
    var m=$("#m_val").val();
    var n=$("#n_val").val();
   for (let index = m; index <= n; index++){
       if (index%2!=0) {
           $("#resultfinal").append(index+"<br>");
       }
      
   }
}
function printeven(){
    $("#resultfinal").empty();
    var m=$("#m_val").val();
    var n=$("#n_val").val();
   for (let index = m; index <= n; index++){
       if (index%2==0) {
        $("#resultfinal").append(index+"<br>");
       }
      
   }
}
function printall(){
    $("#resultfinal").empty();
    var m=$("#m_val").val();
    var n=$("#n_val").val();
   for (let index = m; index <= n; index++){
    $("#resultfinal").append(index+"<br>");
      
   }
}
function printtwofive(){
    $("#resultfinal").empty();
    var m=$("#m_val").val();
    var n=$("#n_val").val();
   for (let index = m; index <= n; index++){
       if (index%2==0 && index%5==0) {
        $("#resultfinal").append(index+"<br>");
       }
      
   }
}
