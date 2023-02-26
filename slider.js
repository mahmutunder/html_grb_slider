
var num2=document.getElementById("num2");
var num3=document.getElementById("num3");

var vnum1=document.getElementById("vnum1");
var vnum2=document.getElementById("vnum2");
var vnum3=document.getElementById("vnum3");
var allback=document.getElementById("allback");

allback.addEventListener("input", function(){
     var num1=document.getElementById("num1").value;
     vnum1.innerHTML=num1;

     var nnum2=num2.value;
     vnum2.innerHTML=nnum2;

     var nnum3=num3.value;
     vnum3.innerHTML=nnum3;

     allback.style.backgroundColor="rgb("+num1+","+nnum2+","+nnum3+")";

     if(num1<=100 && nnum2<=100 && nnum3<=100){
         allback.style.color="white";
     }
     else{
         allback.style.color="black";
     }
     


})