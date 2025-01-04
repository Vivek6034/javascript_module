// //what is hoisting, ecma ,es6/7:

// let emp = {
//     emp_name : "Aditya",
//     emp_id : 201,
//     emp_age :22,
//     emp_designation : "Developer",
//     emp_account :{
//         emp_salary :15000,
//         emp_acname : "SBI",
//         emp_acbalance : "Rs 5/- only *"
//     }
// }
// console.log(emp.emp_account.emp_acbalance);
// console.log(emp);


let ob1 = {
    name : "vivek",
    demo : function(){
        alert("inside object")
    },
    friends : ["aditya","abhishek","shivam", "satyam"]
}
ob1.demo()
console.log(ob1.friends[1]);


let ob2 = {
    name : "cybrom",
    fun : function(){
        console.log(this.name);
        
    }
}
ob2.fun()

