let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let p = document.getElementById('p')
let p2 = document.getElementById('p2')
let input = document.getElementById('input')

let count = 0

function changeText() {
  let value = Number(input.value)   // 👈 convert HERE, every click

  count = count + value             // 👈 accumulate, don’t replace

  if (count > 10) {
    count = 10
  }

  p.textContent = count
  p2.textContent = value
}

btn.addEventListener('click', changeText)

function changeText2() {
  let value = Number(input.value)

  count = count - value

  if (count < 0) {
    count = 0
  }

  p.textContent = count
  p2.textContent = value
}

btn2.addEventListener('click', changeText2)

function restart() {
  count = 0
  p.textContent = count
  p2.textContent = ''
}

btn3.addEventListener('click', restart)
