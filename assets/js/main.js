let questOne = {
    question: "Couleur du cheval blanc d'Henri IV :",
    proposition: ["blanc", "rouge", "bleu", "vert"],
    reponse: "blanc"
}
let questTwo = {
    question: "Couleur de la mer rouge :",
    proposition: ["vert", "rouge", "noir", "bleu"],
    reponse: "bleu"
}
let questThree = {
    question: "Couleur du soleil :",
    proposition: ["blanc", "jaune", "rouge", "gris"],
    reponse: "jaune"
}
let questFour = {
    question: "Couleur d'une ferrari rouge :",
    proposition: ["vert", "noir", "rouge", "bleu"],
    reponse: "rouge"
}
let questFive = {
    question: "Couleur de l'herbe :",
    proposition: ["rouge", "noir", "bleu", "vert"],
    reponse: "vert"
}

let currentIndex = 0
let score = 0
let tab = [questOne, questTwo, questThree, questFour, questFive]
let questContainer = document.getElementById("quest")
let responseContainer = document.getElementById("reponse")
let scoreContainer = document.getElementById("score")
let resetButton = document.getElementById("reset")

function aleatoire(array) {
    array.sort(() => Math.random() - 0.5);
}

function displayQuestion() {
    aleatoire(tab)
    questContainer.textContent = tab[currentIndex].question
    displayResponse()


}
function displayResponse() {
    responseContainer.textContent = ""
    for (let i = 0; i < tab[currentIndex].proposition.length; i++) {
        let btn = document.createElement('div')
        btn.textContent = tab[currentIndex].proposition[i]
        responseContainer.appendChild(btn)
        btn.addEventListener("click", function () {
            reply(tab[currentIndex].proposition[i])
        })
    }
}

function reply(resp) {

    if (resp === tab[currentIndex].reponse) {
        score++
    } else {

    }
    if (currentIndex < tab.length - 1) {
        currentIndex++
        displayQuestion()
    } else {
        document.querySelector("#questContainer").classList.add("hidden")
        scoreContainer.classList.add("bigger")
        afficheScore()
    }
}

function afficheScore() {
    scoreContainer.textContent = "Votre score est de: " + score
    let butt = document.createElement('button')
    butt.textContent = "recommencer"
    resetButton.appendChild(butt)
    butt.addEventListener("click", function () {
        currentIndex = 0
        score = 0
        scoreContainer.textContent = ""
        resetButton.textContent = ""
        document.querySelector("#questContainer").classList.remove("hidden")
        scoreContainer.classList.remove("bigger")
        displayQuestion()
    })
}

displayQuestion()