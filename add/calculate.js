function subtract(p,q){

var r=p-q
return r;
}



function add(x,y){
z=x+y
return z;


}
function showResult(){
p=document.getElementById("1");
q=document.getElementById("2");
r=add(Number(p.value),Number(q.value));
s=document.getElementById("3");
s.value=r
 



t=subtract(Number(p.value),Number(q.value));
u=document.getElementById("4");
u.value=t
}



function multiply(a,b){
c=a*b;
return c;
}
function showMultiply(){
d=document.getElementById("3");
e=document.getElementById("4");
f=multiply(Number(d.value),Number(e.value));
g=document.getElementById("34");
g.innerHTML=f
}




