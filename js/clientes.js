class Cliente {
    constructor (id, nombre, cuit, email) {
        this.id = id;
        this.nombre = nombre;
        this.cuit = cuit;
        this.email = email;
    }

    mostrarCliente() {

        const resultado =`
            <tr>
                <th scope="row">${this.id}</th>
                <td>${this.nombre}</td>
                <td>${this.cuit}</td>
                <td>${this.email}</td>
            </tr>
        `;
        return resultado;
    }

}

for (const cliente of clientes) {
    const nuevoCliente = new Cliente(cliente.id, cliente.nombre, cliente.cuit, cliente.email);
    document.getElementById("altaCliente").appendChild(nuevoCliente.mostrarCliente());
}

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let tomarDato = new Dato(form);

    tomarDato.get()
})