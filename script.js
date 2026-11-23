// alert('It is connected!')

let cart = [];

let display = document.getElementById("displayArea");
let userInput = document.getElementById("input").value;
let result = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

function addItem() {
  let userInput = document.getElementById("input").value;
  let result = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

  if (result.trim() == "") {
    alert("Input should not be empty!");
  } else {
    cart.push(result);
    document.getElementById("input").value = "";
    common();
  }
}

function deleteOne(){
  if(cart.length == 0){
    alert('There is nothing to delete!')
  } else{
    cart.pop(result)
    common()

    if(cart.length == 0){
      display.innerHTML = `<span>Your result will show here</span>`
    }
  }
}

function deleteAll(){
  if (cart.length == 0){
    alert('There is nothing to delete!')
  } else{
    // cart.splice(0, cart.length)
    cart.length = 0
    common()

    if (cart.length = 0){
      display.innerHTML = `<span>Your result will show here</span>`
    }
  }
}

function common() {
  document.getElementById("displayArea").innerHTML = "";
  for (let index = 0; index < cart.length; index++) {
    display.innerHTML += `<span class="d-flex flex-column gap-5">${index + 1}. ${cart[index]}</span> <button class="btn btn btn-primary" onclick="removeItem(${index})">Delete Item</button> <br> <br>`;
  }
}

function removeItem(i){
  cart.splice(i, 1)
  common()
}