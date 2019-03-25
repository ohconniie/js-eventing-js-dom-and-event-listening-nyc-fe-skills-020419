// Problem: we want to react to clicks on the <main> tag

const main = document.getElementById('main')

// addEventListener has 2 options, 
// 1. is the event that we care about
// 2. is the fucntionat that is supposed to run when that event happens

function onClick(event) {
  console.log(event)
}
  
function onKeyDown(event) {
  console.log(event)
}

  main.addEventListener('click', onClick)
  document.addEventListener('keydown', onKeyDown)
  