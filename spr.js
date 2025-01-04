//spread tag ; it is used to merge two array in new array ;;

let ar1 = [1,2,3]
let ar2 = [4,5,6]
let ar3 = [...ar1 , ...ar2]

console.log(ar3);



let ar4 = [1,2,3,4,5,6,7]
console.log(ar4);


let del = ar4.slice(1,5)
console.log(del);

console.log(ar4);


//splice:- used to delete elememt from array , also used to addon element;

let ar5 = [1,2,3,4,5,6,7]
console.log(ar5);

ar5.splice(1,4 , "vivek" , "singh")
console.log(ar5);


 