function validarLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores ingresados
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar si el nombre de usuario y la contraseña son correctos
    if (username === "admin" && password === "123") {
        alert("Inicio de sesión exitoso");
        // Redirigir a otra página o hacer cualquier acción deseada
        window.location.href = "ok.html"; // Redirige a otra página
    } else {
        // Mostrar mensaje de error si las credenciales no coinciden
        alert("Nombre de usuario o contraseña incorrectos");
    }
}