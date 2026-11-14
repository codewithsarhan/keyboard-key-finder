document.addEventListener('keydown' , (event) => {

let keyboardKey = document.querySelector('.keyboardKey');

keyboardKey.textContent = event.key;


})