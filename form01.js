function val(){
    let name = document.querySelector('#name').value
    let contact = document.querySelector('#contact').value
    
    if (name==''){
        alert("pleasse fill your name")
        document.querySelector('#name').focus()
        return false
    }
    else if(contact=='' ){
        alert("plaese fill your contact ")
        document.querySelector('#contact').focus()
        return false
    }

}