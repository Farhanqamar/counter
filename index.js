let mini =document.getElementById("count-el")
// let min = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1;
    mini.innerText = count
}

function restor() {
    count = 0;
    mini.innerText = count
    
}
