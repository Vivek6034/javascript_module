let head_element = document.createElement('h1')
head_element.textContent = "this is head from js"

let bd = document.body
bd.append(head_element)

let head1 = document.createElement('h2')
head1.textContent = "second element from js"
bd.append(head1)

head1.setAttribute('style','background-color:blue')
head_element.setAttribute('align','center' )
head1.setAttribute('align','center' )
// head1.setAttribute('style','color:green' )

bd.setAttribute('bgcolor', 'yellow')
// bd.removeAttribute('bgcolor')
let img = document.getElementById('image1')
img.setAttribute('src','/New folder/vksingh.jpg')
