let button = document.getElementById('button')
let h1 = document.getElementById('h1')

let isHello = true   // <-- THIS is the state

function changeText() {
  if (isHello) {
    h1.textContent = 'HELLO AGAIN'
    h1.style.color = 'red'
    isHello = false
  } else {
    h1.textContent = 'Hello World'
    h1.style.color = 'blue'
    isHello = true
  }
}

button.addEventListener('click', changeText)

