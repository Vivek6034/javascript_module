async function retrive_data() {
  let data = await  fetch("http://localhost:3000/student")
  let final_data = await data.json()
  let tdata = final_data.map((e)=>`

   <tr>
     <td>${e.ID} </td>
     <td>${e.name} </td>
     <td>${e.contact} </td>
     <td>${e.city} </td>
     <td> <button onclick ="mydelete('${e.id}')">delete</button></td>

    </tr>
    
  `)
    document.querySelector('#displaydata').innerHTML=tdata
}
retrive_data()
function mydelete(id){
  fetch(`http://localhost:3000/student${id}`,{
    method:"  DELETE"
  })
  .then(final_data=>alert("deleted.....!!!!"))
}

//find meme genrtor api