people={
"amrita":{"age":30,
"geneder":"female"
},

"sana":{"age":18,
"gender":"female"
}
}; 
  function fill(){

  a=document.getElementById("1");
a.value="amrita";
b=document.getElementById("2");
b.value=people.amrita.age;
c=document.getElementById("3");
c.value=people.amrita.gender;

d=document.getElementById("4");
d.value="sana";
e=document.getElementById("5");
e.value=people.sana.age;
f=document.getElementById("6");
f.value=people.sana.gender;
}
 
