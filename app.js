
function createItemElement (text) {
  const containerElement = document.createElement('div')
  const textElement = document.createElement('p')
  const removeElement = document.createElement('div')

  containerElement.classList.add('toDo')
  textElement.textContent = text
  removeElement.textContent = '✖'
  removeElement.addEventListener('click', (e) => {
    containerElement.parentNode.removeChild(containerElement)
  })
  removeElement.classList.add('remove')

  containerElement.appendChild(textElement)
  containerElement.appendChild(removeElement)
  return containerElement
}

function add () {
  const input = document.querySelector('input')
  if (input.value === '') { return }
  const target = document.querySelector('#lista')
  target.appendChild(createItemElement(input.value))
  input.value = ''
  input.focus()
}

document.querySelector('input').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    add()
  }
})

// Uncomment this to debug
// const input = document.querySelector('input')
// input.value = 'test'
// add()
