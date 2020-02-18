function add () {
  const input = document.querySelector('input')
  if (input.value === '') { return }
  const target = document.querySelector('#lista')
  const element = document.createElement('p')

  element.textContent = input.value
  input.value = ''
  input.focus()

  target.appendChild(element)
}

document.querySelector('input').addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    add()
  }
})
