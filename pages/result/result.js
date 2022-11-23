window.onload = fillHeader;

function Result(){fetch("https://yc2210-pythonflaskapp.azurewebsites.net/filter_movies", 
{method:"POST",body:'{"rating":7,"min_age":14,"excl_genres":[9],"incl_groups":[0,4,7]}'}).then(a => a.json())
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

function Result2(){fetch("https://yc2210-pythonflaskapp.azurewebsites.net/drie_recepten/", 
{method:"POST",headers: {
    'Content-type': 'application/json'},body:'{}'
}).then(a => a.json())
.then(b => receptdata(b))}

function receptdata(data) {
    mijnData = document.getElementById("recept");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.className = "recepten"
        div.innerHTML = '<img class="img" src="'+data[i].img+'">' + '<h2 class="titel_x">' + data[i].titel_x + '</h2>' + '<p class="bereiding">' + data[i].bereidings_stappen + '</p>';
        mijnData.appendChild(div);
    }
}
function start_load() {Result();Result2()}

//var test1 = Result()
//var titel1 = test1[0]["title"]

//console.log(titel1)




