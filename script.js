const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['black', 'skyblue', 'yellow', 'red', 'pink', 'purple', 'green']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
    body.style.transitionDuration = ".7s";
}
