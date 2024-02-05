const flag = document.createElement('img')
document.body.appendChild(flag)

console.log("Je démarre")

//Établisement des valeurs

let randomIndex;
let cptGoodAnswer = 0;
let jokers = 3; 
let fautes = 0; 

//Établissements des fonctions 

function callAPI() {
    fetch('https://restcountries.com/v2/all')
//same thing as .then(function(response) {
.then(response => {
    return response.json()
}).then(json => {
    randomIndex = json[Math.floor(Math.random() * 250)]
    flag.src = randomIndex.flag
    console.log('Drapeau Chargé')
}).catch(error => {
    console.log('errors:'+ error.message)
})
}

function useJoker() {
    const messageElement = document.getElementById("cptJoker");;
    if (jokers > 0) {
        jokers--;
        console.log(jokers)
        if(jokers > 1) {
        messageElement.innerHTML =`Il vous reste ${jokers} jokers.`
        } else if (jokers == 1) {
        messageElement.innerHTML =`Il ne vous reste plus qu'un joker.`
        }
        console.log("Je lance le call")
        callAPI();
    } else {
        messageElement.innerHTML = "Vous n'avez plus de jokers !";
    }    
}

function disableButtons() {
    // Désactiver tous les boutons du jeu
    document.querySelectorAll("button:not(#retryButton)").forEach(button => {
        button.disabled = true;
    });
}

function enableButtons() {
    // Réactiver tous les boutons du jeu
    document.querySelectorAll("button").forEach(button => {
        button.disabled = false;
    });
}

// *-*-*-*-*-*-*-*-*-*-* Début du script *-*-*-*-*-*-*-*-*-*-*-*-*-*-*

callAPI();
const fetchPromise = fetch('https://restcountries.com/v2/all');
console.log(fetchPromise);

const button = document.querySelector('button')
document.getElementById("cptJoker").innerHTML = `Il vous reste ${jokers} jokers.`;

button.addEventListener('click', () => {
    console.log('Vous avez cliqué sur le  bouton Joker')
    useJoker();
})


function verifyInput(callback) {
    let userInput = document.getElementById("userInput").value.trim().toLowerCase();
    console.log("Requête récupérée et modifiée")
    console.log(userInput)
    console.log(randomIndex)
    var reponse = randomIndex.translations.fr.toLowerCase()
    if (userInput === reponse) {
        document.getElementById("result").innerText = 'Correct !'
        cptGoodAnswer++;
        if (cptGoodAnswer % 3 === 0 ) {
            jokers++;
            console.log("Joker ajouté")
        }
        document.getElementById("cpt").innerText = cptGoodAnswer;
        callback();
    } else {
        fautes++;
        updateHearts(fautes)
        console.log(fautes)
        if (fautes === 3) {
            document.getElementById("popup").style.display = "block"; 
            disableButtons();  
        } else {
        document.getElementById("result").innerText = "Faux ! La bonne réponse était " + randomIndex.translations.fr;
        callback();
        }
    }
    //reset le champ de réponse
    document.getElementById("userInput").value = "";
}

document.getElementById("retryButton").addEventListener("click", () => {
    //Réinitialisation des valeurs
    document.getElementById("popup").style.display = "none"; // Masquer la pop-up
    fautes = 0;
    console.log("Compteur de fautes réinitialisé")
    jokers = 3;
    updateHearts()
    document.getElementById("cptJoker").innerHTML = `Il vous reste ${jokers} jokers.`;
    console.log("Compteur de jokers réinitialisé")
    enableButtons();
    console.log("Bouttons réactivés")
    callAPI(); // Commencer un nouveau jeu
    console.log("Nouveau jeu, bonne chance")
})

const quickStart = document.getElementById("userInput");

quickStart.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        verifyInput(callAPI)
    }
});
// Mettre à jour les icônes de cœur en fonction du nombre de fautes
function updateHearts(fautes) {
    const hearts = document.querySelectorAll('.heart');
    for (let i = 0; i < hearts.length; i++) {
        if (i < fautes) {
            hearts[i].classList.remove('fa-solid', 'fa-heart', 'fa-bounce');
            hearts[i].classList.add('fa-regular', 'fa-heart');
            hearts[i].style.color = '#837272';
        } else {
            hearts[i].classList.remove('fa-regular', 'fa-heart');
            hearts[i].classList.add('fa-solid', 'fa-heart', 'fa-bounce');
            hearts[i].style.color = '#f86c5e';
        }
    }
}


console.log ('Fait!')