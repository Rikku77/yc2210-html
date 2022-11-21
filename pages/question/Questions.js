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
        console.log(b);
        for (i=0; i<b.length; i++) {
            
            document.getElementById("vraag").innerHTML += b[i].text + "<br>";
          ;
            
            for(j=0; j<b[i].qanswers.length; j++) {
                
                document.getElementById("vraag").innerHTML += "<button class=\"ans-btn btn btn-danger\" onclick=abc("+b[i].qanswers[j].id+")>" + b[i].qanswers[j].text + "</button>";
            
            }
            document.getElementById("vraag").innerHTML += "<br>";
            
        }
    }
    )
        }
        

// window.onload = getQuestions1;
window.onload = getQuestions2;