// const loginForm = document.getElementById("login-form");
// registerForm.addEventListener("submit", function(e) {
//     e.preventDefault();
//     let form = e.currentTarget;
//     let url = form.action;
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());
//     const jsonData = JSON.stringify(data);
//     console.log(jsonData);
//     let res = fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: jsonData
//     })
//     console.log("submitted")
// })

function inloggen(){
    let inlogOBJ = {};
    inlogOBJ.email=document.getElementById("email").value;
    inlogOBJ.password=document.getElementById("password").value;
    inlogOBJ=JSON.stringify(inlogOBJ);

    fetch("https://yc2210netflixjavabackend.azurewebsites.net/Login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: inlogOBJ
    })
    
}

