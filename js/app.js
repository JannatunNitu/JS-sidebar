let home = document.querySelector('nav span')
home.addEventListener('click',slider)
let move = document.querySelector('.sidebar')
function slider(){
    move.classList.toggle('active')
}