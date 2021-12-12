let datosGuardados = JSON.parse(localStorage.getItem("datosGuardados"));

function renderizarCantidadClientes () {
    if (datosGuardados != ""){
        $("#cardClientes").append(`<p>${datosGuardados.id}</p>`);
    }
}

window.addEventListener("load", renderizarCantidadClientes);

