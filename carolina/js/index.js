// Obtener el modal y el botón de cierre
var modal = document.getElementById("myModal");
var closeModalButton = document.getElementsByClassName("close")[0];
var openModalButton = document.getElementById("openModalButton");

// Función para abrir el modal
function openModal() {
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none";
}

// Evento de clic para abrir el modal
openModalButton.onclick = openModal;

// Evento de clic para cerrar el modal cuando se hace clic en el botón de cierre
closeModalButton.onclick = closeModal;

// Evento de clic para cerrar el modal cuando se hace clic fuera del mismo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
