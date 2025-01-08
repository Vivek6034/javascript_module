 let student =[
    {
        roll :1,
        name : "Vivek",
        age : 24,
        city : "Bihar"
    },
    {
        roll :2,
        name : "Aashu",
        age : 22,
        city : "Bhopal"
    },
    {
        roll :3,
        name : "Aditya",
        age : 21,
        city : "Delhi"
    },
    {
        roll :4,
        name : "Abhishek",
        age : 20,
        city : "Indore"
    },
 ]

 let finaldata = student.map((e)=>`
   <tr>  
    <td> ${e.roll} </td>
    <td> ${e.name} </td>
    <td> ${e.age} </td>
    <td> ${e.city} </td>
</tr>
 `).join("")


 document.querySelector('#displaydata').innerHTML=finaldata