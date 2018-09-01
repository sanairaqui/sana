function add(x,y){
z=x+y
return z;
}

function showResult(){

a=document.getElementById("123");
b=document.getElementById("456");
c=add(Number(a.value),Number(b.value));
alert(c);
}