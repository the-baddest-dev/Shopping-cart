// alert('It is connected!')

cart = []

function addItem(){
  let userInput = document.getElementById('input').value
  let display = document.getElementById('displayArea')

  if (userInput.trim() == ''){
    alert('Input should not be empty!')
  } else{
    cart.push(userInput)
    console.log(userInput);
    document.getElementById('displayArea').innerHTML = ''
    
    for (let index = 0; index < cart.length; index++) {
      display.innerHTML += `<p>${index+1}. ${cart[index]}</p>`
      document.getElementById('input').value = ''
    }
  }
}