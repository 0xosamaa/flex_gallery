const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    if ([...panel.classList].includes('active')) {
      resetAll()
    } else {
      resetAll()
      panel.classList.add('active')
    }
  })

  panel.addEventListener('transitionend', (e) => {
    if (e.propertyName.includes('flex')) {
      panel.classList.toggle('trans')
    }
  })
})

function resetAll() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
