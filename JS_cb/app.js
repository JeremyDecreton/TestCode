const button = document.querySelector('button')

function toggle() {
    button.classList.toggle('altColor')
}

// **** Différents types de callbacks **** //

// -- ICI Juste un appel de fonction :

// toggle()

// -- ICI le callback JS nommé :

// button.addEventListener('click', toggle)

// -- ICI le callback JS anonyme :

// button.addEventListener('click', function() {
//     button.classList.toggle('altColor')
// })

// -- ICI une variante du callback JS anonyme :

// button.addEventListener('click', () => {
//     button.classList.toggle('altColor')
// })

// *** Sync and Async *** // F12 "Inspecter" + Log

function firstAction() {
    console.log('Je suis la première action')
}
function secondAction() {
    console.log('Je suis la seconde action')
}


// ** Sync ** //

// firstAction()
// secondAction()

// ** Async ** //

// firstAction()
// setTimeout(secondAction, 5000)








// ** Async lvl:1 ** //

//Action deux se lancera 3 sec après action une
function firstAction() {
    console.log('Je suis la première action')
    setTimeout(secondAction, 3000)
}

function secondAction() {
    console.log('Je suis la seconde action')
}

//Ici, la première action se lance au bout de 2 sec ce qui déclenchera le timeout inclut dans l'action une
//Ainsi la deuxième action se lancera au bout de 5 ( 2 + 3 ) secondes au total
// setTimeout(firstAction, 2000)


//  ** Async Lvl:2 ** //

function primeraAction(callback) {
    console.log('Yo soy la primera action')
    setTimeout(callback, 3000)
}

function secondaAction() {
    console.log('Yo soy la seconda action')
}

//Je tente d'ajouter un paramètre à la fonction first Action, ce qui du coup, appelle la fonction car en JS un appel se fait : "functionName ()" 

// setTimeout(primeraAction(secondaAction), 2000)

//Le setTimeout inclu dans la primeraAction a bien lieu, mais le setTimeout donné à la primera action juste au dessus de ce commentaire ne fonctionne pas.

//Comment refaire fonctionner ça ? 

function ersteHandlung(callback) {
    console.log('Ich bin die erste Handlung')

    setTimeout(callback, 3000)
}

function zweitHandlung() {
    console.log('Ich bin zweite Handlung')


}
//Je dois anonymiser ma fonction => appel de function : functionName() // Anonymyser une fonction : () => functionName()

// setTimeout( () => ersteHandlung(zweitHandlung), 2000)

// Si je veux aller plus loin, je peux même donner un paramètre dans ma deuxième fonction ce qui l'appellera tout en l'anonymysant pour la renvoyer à la suite de ma première fonction, et pourquoi pas ajouter un paramètre en plus dans la première fonction

function førsteHandling (callback, message) {
    console.log(message)
    setTimeout(callback, 3000)
}

function andreHandling(message) {
    console.log(message)

}
// setTimeout( () => førsteHandling( () => andreHandling(/* Message deuxième fonction */"Snakker du ikke norsk?"), /* Message Première fonction */  "Synd for deg!"), 2000)