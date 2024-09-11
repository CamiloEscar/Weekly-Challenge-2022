import { crud } from './crud.js';

// Inicializamos el CRUD con la API RESTful
crud.init('https://api.example.com/api/data', 'GET');

// Eventos para los botones de crear y actualizar
document.getElementById('create-btn').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    crud.create({ nombre: nombre });
});

// Evento para el botón de eliminar
document.querySelector('#listado li button').addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    crud.delete(id);
});