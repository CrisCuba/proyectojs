const form = document.getElementById("form");


form.addEventListener("submit", function(e) {
    e.preventDefault();
    let formData = new FormData(form);
    let objetoFormulario = convertirAObjeto(formData);
    insertRow(objetoFormulario);
    guardarDatosFormulario(objetoFormulario);
    form.reset();
})

function convertirAObjeto (datosFormulario) {
    let id= datosFormulario.get("id");
    let name= datosFormulario.get("name");
    let cuit= datosFormulario.get("cuit");
    let mail= datosFormulario.get("mail");
    return {"id":id,"name":name,"cuit":cuit,"mail":mail}
}

function insertRow(objetoFormulario) {
    let infoTabla = document.getElementById("table");
    
    let nuevaFila = infoTabla.insertRow(-1);
    
    let nuevaCelda = nuevaFila.insertCell(0);
    nuevaCelda.textContent = objetoFormulario["id"];
    
    nuevaCelda = nuevaFila.insertCell(1);
    nuevaCelda.textContent = objetoFormulario["name"];
    
    nuevaCelda = nuevaFila.insertCell(2);
    nuevaCelda.textContent = objetoFormulario["cuit"];
    
    nuevaCelda = nuevaFila.insertCell(3);
    nuevaCelda.textContent = objetoFormulario["mail"];
    
    
    let deleteCelda = nuevaFila.insertCell (4);
    let deleteBoton = document.createElement ("button");
    deleteCelda.appendChild(deleteBoton);
    deleteBoton.textContent = "X";
    
    
    deleteBoton.addEventListener ("click", (e) => {
        e.target.parentNode.parentNode.remove();
    })
}

function guardarDatosFormulario(objetoFormulario) {
    let arrayDeDatos = JSON.parse(localStorage.getItem("datosGuardados")) || [];
    arrayDeDatos.push(objetoFormulario);
    let datosGuardadosJSON = JSON.stringify(arrayDeDatos);
    localStorage.setItem("datosGuardados", datosGuardadosJSON);
}


