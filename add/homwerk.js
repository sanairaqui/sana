function add(a,b){
c=a+b;
return c;
}
function showResult(){
d=document.getElementById("1");
e=document.getElementById("2");
f=add(Number(d.value),Number(e.value));
v=document.getElementById("output");
v.innerHTML=f
}


function multiply(x,y){
z=x*y
return z;
}
function showMultiply(){
g=document.getElementById("3");
h=document.getElementById("4");
i=multiply(Number(g.value),Number(h.value));
var p=document.getElementById("34");
 p.innerHTML=i

}