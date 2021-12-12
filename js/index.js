const usuarioRegistro = [{
    username: 'gonzalezcuba',
    password: '123456',
    nombre: 'Gonzalez Cuba'
}, ];

let delay = alertify.get('notifier','delay');


function obtenerUsuario(username) {
    const usuario = usuarioRegistro.find(userReg => userReg.username == username);
    return usuario;
}

function validacionUsuario(usuarioIngresado, password) {

    if (usuarioIngresado.password == password) {
        return true;
    } else {
        return false;
    }
}

$("#form").submit((event) => {

    event.preventDefault();

    const hijos = $(event.target).children();
    const username = hijos[0].value;
    const password = hijos[1].value;
    let mensajeError = "";
    let colorMensaje = "";

    const usuarioRegistro = obtenerUsuario(username);
    if (usuarioRegistro && validacionUsuario(usuarioRegistro, password)) {

        const credenciales = {
            username,
            password
        };
        localStorage.setItem("credenciales", JSON.stringify(credenciales));

        alertify.set('notifier','delay', 5);
        alertify.success('Bienvenido gonzalezcuba', alertify.get, delay);
        window.location.href = "dashboard.html";
    } else {
        mensajeError = "El usuario o contraseña introducidos son inválidos";
        colorMensaje = "red";
    }
    $("#mensajeError").prop("style", "color: " + colorMensaje);
});