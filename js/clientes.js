const form = document.getElementById("form");


form.addEventListener("submit", function(e) {
    e.preventDefault();
    let formData = new FormData(form);

insertRow(formData);

function insertRow(datosFormulario) {
    let infoTabla = document.getElementById("table");

    let nuevaFila = infoTabla.insertRow(-1);

    let nuevaCelda = nuevaFila.insertCell(0);
    nuevaCelda.textContent = datosFormulario.get("id");

    nuevaCelda = nuevaFila.insertCell(1);
    nuevaCelda.textContent = datosFormulario.get("name");

    nuevaCelda = nuevaFila.insertCell(2);
    nuevaCelda.textContent = datosFormulario.get("cuit");

    nuevaCelda = nuevaFila.insertCell(3);
    nuevaCelda.textContent = datosFormulario.get("mail");
}
});
