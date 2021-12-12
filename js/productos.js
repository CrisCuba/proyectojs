let catalogo = [];
let productoJSON = [];

$(document).ready(function() {
    //cambios en el DOM
    obtenerJsonProductos();
    renderizarProductos()
});

function renderizarProductos() {
    for (const producto of productosJSON) {
        $(".milista").append(`<li class="col list-group">
        <h2 style= "margin-top: 50px">MARCA: ${producto.marca} </h2>
        <p> MODELO: ${producto.modelo}</p>
        <p> CODIGO: ${producto.codigo} </p>
        <h3><strong> $ ${producto.precio} </strong></h3>
        <button class='btn btn-danger' id='btn${producto.codigo}'>Eliminar</button>
        </li>`);
        //Evento para cada boton
        $(`#btn${producto.codigo}`).on('click', function() {
            borrarProducto(producto);
        });
    }
}

function borrarProducto(producto) {
    $('.milista li:last-child').last().remove();
}


const obtenerJsonProductos = () => {
    //GETJSON
    const URLJSON = "productos.json";
    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado == "success") {
            productosJSON = respuesta;
            console.log(productosJSON);
            renderizarProductos();
        }
    });
}

function guardarProductos(producto) {
    let productoGuardado = JSON.stringify(producto);
    localStorage.setItem("productoGuardado", productoGuardado);
}