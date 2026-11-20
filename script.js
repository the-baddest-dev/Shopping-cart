// alert('It is connected!')

cart = []

function addItem(){
  let userInput = document.getElementById('input').value
  let renameUserInuput = userInput.charAt(0).toUpperCase()+ userInput.slice(1).toLowerCase()
  
  let display = document.getElementById('displayArea')

  if (renameUserInuput.trim() == ''){
    alert('Input should not be empty!')
  } else if (!isNaN(renameUserInuput)){
    alert('Do not input numbers')
  }else{
    cart.push(renameUserInuput)
    console.log(renameUserInuput);
    document.getElementById('displayArea').innerHTML = ''
    document.getElementById('input').value = ''
    
    for (let index = 0; index < cart.length; index++) {
      display.innerHTML += `<p>${index+1}. ${cart[index]}</p>`
    }
  }
}

function deleteOne(){
  let display = document.getElementById('displayArea')

  if (display == ''){
    alert('There is nothing to delete!')
  } else{
    cart.pop(cart) 
    console.log(cart);

    display.innerHTML = ''
    for (let index = 0; index < cart.length; index++) {
      display.innerHTML += `<p>${index+1}. ${cart[index]}</p>`
      
    }
  }
}

function deleteAll(){
  let display = document.getElementById('displayArea')

  cart.splice(0,cart.length)
  console.log(cart);
  display.innerHTML = cart
}