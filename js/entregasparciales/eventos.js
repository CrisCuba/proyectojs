const botonAvatar = document.getElementsByName('avatar')[0];

botonAvatar.addEventListener('click', iniciarSesion);

let ingresoUsuario = '';
let ingresoContrasenia= '';
let listaUsuarios = '';

function iniciarSesion(){
    let ingresoUsuario = prompt ("Por favor ingrese su usuario: ");
    let ingresoContrasenia = prompt ("Por favor ingrese contraseña: ");

    if (ingresoUsuario == listaUsuarios && ingresoContrasenia == listaUsuarios){
    return true;
} else {
    return false;
}
}

function generarUsuarios (){
    let listaUsuarios = (localStorage.getItem('usuario', 'contrasenia'));
    
    if (listaUsuarios.length == null){
        listaUsuarios =
        [['gonzalezcuba', 'gonzalez123']]
    }
    return listaUsuarios;
}

function validarUsuarios (usuario, contrasenia){
    let listaUsuarios = generarUsuarios();
    let accesoUsuarios = false;
    
    for (let i = 0; i < listaUsuarios.length; i++){
        if (usuario == listaUsuarios[i][0] && contrasenia == listaUsuarios[i][1]){
            accesoUsuarios = true;
        }
    }
    return accesoUsuarios;
}

