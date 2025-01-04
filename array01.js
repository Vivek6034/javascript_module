// let ar = []

// //let ar = parseInt(prompt("enter a number"))
// for(let a =0; a<10; a++){

//     ar[a]=parseInt(prompt("enter elements"))

// }
// let sum = 0
// for (let v of ar){
//     if(v%2!=0){
//         sum=sum+v
//     }
// }
// console.log(sum);

// //forinn  loop is used to print index of array
// //for of loop is used print element of array'

let ar =[1,2,'vivek','singh']

for (let k in ar){
    console.log(k);
}
ar.push("vks",501)
console.log(ar);

ar.pop()
console.log(ar)