window.onload = fillHeader;

// function getQuestions1 () {
//     one.onreadystatechange = function() { //4
//         if(this.readyState == 4) {
//             let antw = JSON.parse(this.responseText);
//             document.getElementById("vraag").innerHTML = "blabla";
//         }
//     }
//     one.open("GET","https://yc2210netflixjavabackend.azurewebsites.net/Question", true); //2
//     one.send(); //3
// }

function getQuestions2 () {
fetch("https://yc2210netflixjavabackend.azurewebsites.net/Question")
    .then(a => a.json())
    .then(b => {
        vragenindex = localStorage.getItem("NetflixAndGrillVragenIndex");
        toonEnkeleVraag(vragenindex, b);
        console.log(b);
        for (i=0; i<b.length; i++) {
            document.getElementById("vraag").innerHTML += b[i].text + "<br>";
            for(j=0; j<b[i].qanswers.length; j++) {
               document.getElementById("vraag").innerHTML += "<button class=\"ans-btn btn btn-danger\" onclick=collectAnswer("+b[i].qanswers[j].id+")>" + b[i].qanswers[j].text + "</button>";
            }
            document.getElementById("vraag").innerHTML += "<br>";
        } 
    })
}

function noodKnop() {
    localStorage.setItem("NetflixAndGrillVragenIndex", 0);
    var antwoordRij = [];
    antwoordRij = JSON.stringify(antwoordRij);
    localStorage.setItem("NetflixAndGrillAntwoordRij", antwoordRij);
}

function toonEnkeleVraag(index, vragen) {
    document.getElementById("question-box").innerHTML += vragen[index].text + "<br>";
    for(j=0; j<vragen[index].qanswers.length; j++) {
       document.getElementById("question-box").innerHTML += "<button class=\"ans-btn btn btn-danger\" onclick=collectAnswer("+vragen[index].qanswers[j].id+")>" + vragen[index].qanswers[j].text + "</button>";
    }
}

function collectAnswer(qans) {
    var antwoordRij = localStorage.getItem("NetflixAndGrillAntwoordRij");
    antwoordRij = JSON.parse(antwoordRij);
    antwoordRij.push(qans);
    console.log(antwoordRij);
    console.log(localStorage.getItem("NetflixAndGrillVragenIndex"));
    var teller = localStorage.getItem("NetflixAndGrillVragenIndex");
    teller++;
    localStorage.setItem("NetflixAndGrillVragenIndex", teller);
    console.log(localStorage.getItem("NetflixAndGrillVragenIndex"));
    localStorage.setItem("NetflixAndGrillAntwoordRij", JSON.stringify(antwoordRij));
    window.location = window.location;
}

console.log(localStorage.getItem("NetflixAndGrillVragenIndex"));
console.log(localStorage.getItem("NetflixAndGrillAntwoordRij"));

// window.onload = getQuestions1;
window.onload = getQuestions2;