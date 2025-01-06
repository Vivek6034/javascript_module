// Map-> fetch tha data of array 
// fillter-> fillter the data 

let ar = [ 1,2,3,4,5,6,7,8,10,12,23,]

let neww = ar.map((t)=> { return t*t })
let neww1 = ar.map((t)=> { return t>2 })

console.log(neww);
console.log(neww1);



let nar = ar.filter((w)=> { return w%2==0})

console.log(nar);



