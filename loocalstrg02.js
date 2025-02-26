let person_ob = {
    name : " Vivek",

    age : "25",
    dob:"18/07/2004"
}
localStorage.setItem("userdata", JSON.stringify(person_ob))
let data = JSON.parse (localStorage.getItem("userdata"))
console.log(data  );

console.log(data.name);
