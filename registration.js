const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let url = form.action;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    let res = fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: jsonData
    })
    console.log("submitted")
})

