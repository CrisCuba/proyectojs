
const form = document.getElementById("form");


form.addEventListener("submit", function(e) {
    e.preventDefault();
    let formData = new FormData(form);
    let objetoFormulario = convertirAObjeto(formData)
    insertRow(objetoFormulario);
    guardarDatosFormulario(objetoFormulario);
    form.reset();
})

function convertirAObjeto (datosFormulario) {
    let codigo= datosFormulario.get("codigo");
    let producto= datosFormulario.get("producto");
    let precio= datosFormulario.get("precio");
    let cantidad= datosFormulario.get("cantidad");
    return {"codigo":codigo,"producto":producto,"precio":precio,"cantidad":cantidad}
}

//Función para agregar las filas y celdas al formulario, tomando los datos del formulario en forma de objeto

function insertRow(objetoFormulario) {
    let infoTabla = document.getElementById("table");

    let nuevaFila = infoTabla.insertRow(-1);

    let nuevaCelda = nuevaFila.insertCell(0);
    nuevaCelda.textContent = objetoFormulario["codigo"];

    nuevaCelda = nuevaFila.insertCell(1);
    nuevaCelda.textContent = objetoFormulario["producto"];

    nuevaCelda = nuevaFila.insertCell(2);
    nuevaCelda.textContent = objetoFormulario["precio"];
    
    nuevaCelda = nuevaFila.insertCell(3);
    nuevaCelda.textContent = objetoFormulario["cantidad"];
    
    
    // Acá se implementa función para insertar botón de eliminar registro 

    let deleteCelda = nuevaFila.insertCell (4);
    let deleteBoton = document.createElement ("button");
    deleteCelda.appendChild(deleteBoton);
    deleteBoton.textContent = "X";
    
    //Se le da funcionalidad mediante evento click, accediendo al padre y eliminando las celdas

    deleteBoton.addEventListener ("click", (e) => {
        e.target.parentNode.parentNode.remove();
    })
}

//Guardado de datos del formulario en forma de objeto

function guardarDatosFormulario(objetoFormulario) {
    let arrayDeVentas = JSON.parse(localStorage.getItem("ventasGuardadas")) || [];
    arrayDeVentas.push(objetoFormulario);
    let ventasGuardadasJSON = JSON.stringify(arrayDeVentas);
    localStorage.setItem("ventasGuardadas", ventasGuardadasJSON);
}

