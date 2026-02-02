let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let input = document.getElementById('input')
let p1 = document.getElementById('p1')

let count = 0

function add() {
  let value = Number(input.value)

  count = count + value

  if (count > 20) {
    count = 20
  }

  p1.textContent = count
}

button1.addEventListener('click', add)

function sub() {
  let value = Number(input.value)

  count = count - value

  if (count < 0) {
    count = 0
  }

  p1.textContent = count
}

button2.addEventListener('click', sub)

function reset() {
  count = 0
  p1.textContent = count
}

button3.addEventListener('click', reset)

