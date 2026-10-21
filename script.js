//Contabilidad administrativa

window.MostrarPestana = function (id, botonSeleccionado) {
    // Ocultar todos los paneles
    const paneles = document.querySelectorAll(".panel-pestana");

    paneles.forEach(function (panel) {
        panel.hidden = true;
    });

    // Quitar el estilo activo de todos los botones
    const botones = document.querySelectorAll(".boton-pestana");

    botones.forEach(function (boton) {
        boton.classList.remove("activo");
    });

    // Mostrar el panel seleccionado
    const panelSeleccionado = document.getElementById(id);

    if (panelSeleccionado) {
        panelSeleccionado.hidden = false;
        botonSeleccionado.classList.add("activo");
    }
};

//Interruptor Vida Universitaria

document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("boton-evento");
    const aniversario = document.getElementById("texto-aniversario");
    const convencion = document.getElementById("texto-convencion");
    const tituloEvento = document.getElementById("titulo-evento"); // <--- Añadido

    if (!boton || !aniversario || !convencion) {
        return;
    }

    boton.addEventListener("click", function () {
        const estaEnConvencion = boton.getAttribute("aria-checked") !== "true";

        const cuerpo = document.body;
        cuerpo.classList.toggle("tema-convencion", estaEnConvencion);
        cuerpo.classList.toggle("tema-aniversario", !estaEnConvencion);

        boton.classList.toggle("encendido", estaEnConvencion);
        aniversario.classList.toggle("activa", !estaEnConvencion);
        convencion.classList.toggle("activa", estaEnConvencion);

        // <--- Cambiar el texto del banner dinámicamente
        if (tituloEvento) {
            tituloEvento.textContent = estaEnConvencion 
                ? "Convención de Sistemas" 
                : "Aniversario UMG";
        }

        boton.setAttribute("aria-checked", String(estaEnConvencion));
        boton.setAttribute(
            "aria-label",
            estaEnConvencion ? "Cambiar a Aniversario" : "Cambiar a Convención"
        );
    });
});


const botones = document.querySelectorAll(".evidencia");
const modales = document.querySelectorAll(".modal:not(.fade)");

// ABRIR LAS VENTANAS EMERGENTES
botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        // Obtener el ID del modal correspondiente
        const idModal = boton.dataset.modal;
        const modal = document.getElementById(idModal);

        // Comprobar que el modal existe
        if (modal) {
            modal.classList.add("activo");
            modal.setAttribute("aria-hidden", "false");

            // Enfocar el botón de cerrar
            modal.querySelector(".cerrar").focus();

            // Evitar que la página se desplace detrás del modal
            document.body.classList.add("modal-abierto");
        }

    });

});


//Proceso de Creacion

// FUNCIÓN PARA CERRAR UN MODAL
function cerrarModal(modal) {

    modal.classList.remove("activo");
    modal.setAttribute("aria-hidden", "true");

    // Permitir el desplazamiento si no hay otros modales abiertos
    const hayModalAbierto =
        document.querySelector(".modal.activo");

    if (!hayModalAbierto) {
        document.body.classList.remove("modal-abierto");
    }

}

modales.forEach(function(modal) {

    const botonCerrar = modal.querySelector(".cerrar");

    botonCerrar.addEventListener("click", function() {
        cerrarModal(modal);
    });

    // Cerrar al tocar fuera de la ventana
    modal.addEventListener("click", function(evento) {

        if (evento.target === modal) {
            cerrarModal(modal);
        }

    });

});
