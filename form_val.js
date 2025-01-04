function validate(){
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value 
    let contact = document.querySelector('#contact').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let cpassword = document.querySelector('#cpassword').value

    if (name==''){
        alert("please fill your name")
        document.querySelector('#name').focus()
        return false
    }
    else if(age==''){
        alert("please fill your age")
        document.querySelector('#age').focus()
        return false
    }
    else if(isNaN(age)){
        alert("Age should be in numbers")
        document.querySelector("#age").focus()
        return false
    }
    else if(contact==''){
        alert("pleassse fill your conatct")
        document.querySelector('#contact').focus()
        return false
    }
    else if (isNaN(contact)){
        alert("contact should be numbers")
        document.querySelector('#contact').focus()
        return false
    }
    else if(contact.length>10 ||  contact.length<10){
        alert("contact should be 10 digit")
        document.querySelector('#contact').focus()
        return false
    }
    else if(email==''){
        alert("please enter your email")
        document.querySelector('#email').focus()
        return false
    }
    else if(!(email.includes('@'))){
        alert("please include  @ in email")
        document.querySelector('#email').focus()
        return false
    }
    else if(password==''){
        alert("please fill your password")
        document.querySelector('#password').focus()
        return false
    }
    else if(!(password.match(/[~!@#$%^<>{}]/))){
        alert("please enter atleast one special character")
        document.querySelector('#password').focus()
        return false
    }
    else if(cpassword==''){
        alert("please confirm your password")
        document.querySelector('#cpassword').focus()
        return false
    }
    else if (password!=cpassword){
        alert("passwor doesn'nt match")
        document.querySelector("#cpassword").focus()
        return false
    }

}