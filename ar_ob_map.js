let student =[{
    id :101,
    name : "vivek",
    age :  23,
    city : "Bihar",
},
{
    id :121,
    name : "aashu",
    age :  33,
    city : "Bihar",

},
{
    id :101,
    name : "ashutosh",
    age :  15,
    city : "Bihar",
}

]
 let st = student.map((e)=>{return e.id})
console.log(st);



let st_fillter = student.filter((e)=> {return e.age>20})
console.log(st_fillter);
