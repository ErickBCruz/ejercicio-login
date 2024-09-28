function validarLogin(event) {
    event.preventDefault(); 


    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username === "admin" && password === "123") {
        alert("Inicio de sesión exitoso");

        window.location.href = "register.html";
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
}

function validarRegistro(event) {
    event.preventDefault(); 
    window.location.href = "ok.html";
}