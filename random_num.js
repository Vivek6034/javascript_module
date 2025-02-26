// function cng1() {
//     document.getElementById("#stat1")
//     let num1 = Math.trunc(Math.random()*15+1)
//     document.write(num1).innerHtml.value

// }

const fun = ()=>{
    let st1 = document.querySelector("#stat1") 
    st1.innerHTML = Math.trunc(Math.random()*20+1)
}
const cng2 = () =>{
    let st2 = document.querySelector("#stat2") 
    st2.innerHTML = Math.trunc(Math.random()*20+1)
}
const cng3 = () =>{
    let st3 = document.querySelector("#stat3") 
    st3.innerHTML = Math.trunc(Math.random()*20+1)
}