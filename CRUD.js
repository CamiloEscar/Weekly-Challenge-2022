class CRUD {
    constructor(apiUrl, method) {
        this.apiUrl = apiUrl;
        this.method = method;
        this.data = [];
    }

    init(url, method) {
        // Inicializamos la solicitud para leer los datos
        fetch(`${url}?_sort=id`)
            .then((response) => response.json())
            .then((data) => {
                this.data = data;
                // Actualizamos el listado con los datos iniciales
                this.updateList();
            })
            .catch((error) => console.error(error));
    }

    create(data) {
        // Enviamos una solicitud POST para crear un nuevo registro
        fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                // Actualizamos el listado con los datos nuevos
                this.updateList();
            })
            .catch((error) => console.error(error));
    }

    read(id) {
        // Enviamos una solicitud GET para leer un registro específico
        fetch(`${this.apiUrl}/${id}`)
            .then((response) => response.json())
            .then((data) => {
                // Actualizamos el formulario con los datos del registro
                this.updateForm(data);
            })
            .catch((error) => console.error(error));
    }

    update(id, data) {
        // Enviamos una solicitud PUT para actualizar un registro específico
        fetch(`${this.apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                // Actualizamos el listado con los datos actualizados
                this.updateList();
            })
            .catch((error) => console.error(error));
    }

    delete(id) {
        // Enviamos una solicitud DELETE para eliminar un registro específico
        fetch(`${this.apiUrl}/${id}`, { method: 'DELETE' })
            .then((response) => response.json())
            .then((data) => {
                // Actualizamos el listado sin el registro eliminado
                this.updateList();
            })
            .catch((error) => console.error(error));
    }

    updateList() {
        // Actualizamos el listado con los datos actuales
        const lista = document.getElementById('listado');
        lista.innerHTML = '';
        this.data.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item.nombre;
            const btn = document.createElement('button');
            btn.dataset.id = item.id;
            btn.textContent = 'Eliminar';
            li.appendChild(btn);
            lista.appendChild(li);
        });
    }

    updateForm(data) {
        // Actualizamos el formulario con los datos del registro
        const form = document.getElementById('crud-form');
        form.nombre.value = data.nombre;
    }
}

export { CRUD };