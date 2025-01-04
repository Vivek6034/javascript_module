let employee = [
    {
        emp_id : 124,
        emp_name : " ajay",
        emp_designation : "technical trainer"
    },
    {
        emp_id : 126,
        emp_name : " aditya",
        emp_designation : "technical trainer"
    },
    {
        emp_id : 125,
        emp_name : " shivam",
        emp_designation : "technical trainer"
    }

]
let ob8 = {
    emp_id : 128,
    emp_name : " vivek",
    emp_designation : "technical trainer"
}
console.log(employee);


employee.push(ob8);
console.log(employee);

employee.pop();
console.log(employee);

employee.unshift(1);
console.log(employee);

employee.shift();
console.log(employee);



let sl = employee.slice(0,1);
console.log(sl);

let js = employee.splice(185,"singh")
console.log(js);


