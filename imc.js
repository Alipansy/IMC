const form = document.querySelector('#formulaire')
const submit = document.querySelector('#submit')
formulaire.addEventListener('submit', function(e) {
    e.preventDefault()
//    console.log(document.getElementById("size").value);
//    console.log(document.getElementById("weight").value);
})

const size = document.getElementById("size").value
const weight = document.getElementById("weight").value

let result = 0
let taille = size/100
result = weight/(taille*taille)
console.log(result);

function showErrorMessage(message, place){
    const span = document.createElement('span')
        span.innerHTML = message
        span.classList.add('error')
        place.append(span)
}


