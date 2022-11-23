window.onload = function() {
fillFooter();
fillHeader(); 

};

function fillFooter() {
document.getElementById("footerN").innerHTML = `

<button type="button" class="btn btn-outline-secondary">Call to action</button>`;

}

function abc(){
    var ExcludingMovies= document.getElementById("ExlMovies").value;
console.log(ExcludingMovies);
}
var valueNummer= abc();
// var ExcludeMovies = document.getElementById("ExlMovies");
function Result(){
    var ExcludingMovies= document.getElementById("ExlMovies").value;
console.log(ExcludingMovies);
    
    
    
    fetch("https://yc2210-pythonflaskapp.azurewebsites.net/filter_movies", 
{method:"POST",body:'{"rating":7,"min_age":14,"excl_genres":'+ExcludingMovies+',"incl_groups":[0,4,7]}'}).then(a => a.json())
.then(b => filmdata(b))}
function filmdata(data) {
    mijnData = document.getElementById("result");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.className = "film"
        div.innerHTML = '<img class="poster" src="'+data[i].poster+'">' + '<h2 class="filmtitel">' + data[i].title + '</h2>' + '<p class="filmplot">' +  data[i].plot + '</p>';
        mijnData.appendChild(div);
    }
}
