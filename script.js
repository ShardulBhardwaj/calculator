const zero = document.getElementById('zero')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const divide = document.getElementById('divide')
const multply = document.getElementById('multply')
const clear = document.getElementById('clear')
const AClear = document.getElementById('AClear')
const equal = document.getElementById('Equal')
const input = document.getElementById("inputField")

finalInput = ""
secondInput = ""
initalInput = ""
signPressed = false 


function error(){
  if (initalInput.length === 8) {
    input.value = "ERR"
    setTimeout(() => {
      input.value = ""
      initalInput = ""
    }, "1000")
  }
}

zero.addEventListener("click",function(){
  error()
  if (initalInput.length <= 8 - 1) {
    initalInput += '0'
    input.value += '0'
  }
})
one.addEventListener("click", function() {
  error()
  if (initalInput.length <= 8 - 1) {
    initalInput += '1'
    input.value += '1'
  }
})
two.addEventListener("click", function() {
  error()
  if (initalInput.length <= 8 - 1) {
    initalInput += '2'
    input.value += '2'
  }
})
three.addEventListener("click", function() {
  error()
  if (initalInput.length <= 8 - 1) {
    initalInput += '3'
    input.value += '3'
  }
})
four.addEventListener("click", function() {
  error()
  if (initalInput.length <= 8 - 1) {
    initalInput += '4'
    input.value += '4'
  }
})
five.addEventListener("click", function() {
  error()
  if (initalInput.length <= 8 - 1) {
    initalInput += '5'
    input.value += '5'
  }
})
six.addEventListener("click", function() {
  error()
  if (initalInput.length <= 8 - 1) {
    initalInput += '6'
    input.value += '6'
  }
})
seven.addEventListener("click", function() {
  error()
  if (initalInput.length <= 8 - 1) {
    initalInput += '7'
    input.value += '7'
  }
})
eight.addEventListener("click", function() {
  error()
  if (initalInput.length <= 8 - 1) {
    initalInput += '8'
    input.value += '8'
  }
})
nine.addEventListener("click", function() {
  error()
  if (initalInput.length <= 8 - 1) {
    initalInput += '9'
    input.value += '9'
  }
})


plus.addEventListener("click", function() {
  input.value = ""
  secondInput += initalInput + " +"
  input.value += "+"
  if (signPressed === true){
    secondInput.replace("")
  }
  signPressed = true
})
minus.addEventListener("click", function() {
  input.value = ""
  secondInput += initalInput + " -"  
  input.value += "-"
  signPressed = true
})
divide.addEventListener("click", function() {
  input.value = ""
  secondInput += initalInput + " /"  
  input.value += "/"
  signPressed = true
})
multply.addEventListener("click", function() {
  input.value = ""
  secondInput += initalInput + " *"  
  input.value += "x"
  signPressed = true
})
clear.addEventListener("click", function() {
  
  finalInput = ""
  input.value = ""
})
AClear.addEventListener("click", function() {
  
  input.value = ""
  initalInput = ""
})

