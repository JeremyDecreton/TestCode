const flag = document.createElement('img')
document.body.appendChild(flag)

console.log("Je démarre")
var randomIndex = ''
function appelAPI() {
    fetch('https://restcountries.com/v2/all')
//same thing as .then(function(response) {
.then(response => {
    return response.json()
}).then(json => {
    var randomIndex = json[Math.floor(Math.random() * 250)]
    flag.src = randomIndex.flag

    console.log('Drapeau Chargé')
}).catch(error => {
    console.log('errors:'+ error.message)
})

}

appelAPI();

const button = document.querySelector('button')

button.addEventListener('click', () => {
    console.log('Vous avez cliqué sur le  bouton')
appelAPI();
    console.log ('Drapeau changé')
    console.log ('Réponse chargé')
})
console.log ('Fait!')

function verifyInput(cb) {
    let userInput = document.getElementById("userInput").value.trim().toLowerCase();
    console.log("Requête récupérée et modifiée")
    console.log(userInput)
    var reponse = randomIndex.translations.fr.toLowerCase()
    if (userInput === reponse) {
        document.getElementById("result").innerText = 'Correct !'
        cb();
    } else {
        document.getElementById("result").innerText = "Faux !";
        cb();
    }

}
