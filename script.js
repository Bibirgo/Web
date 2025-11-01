document.addEventListener('DOMContentLoaded', () => {
    const opciones = document.querySelectorAll('.opcion-btn');
    const confirmarBtn = document.getElementById('confirmar-btn');
    let opcionSeleccionada = null;

    // 1. Manejo de la selección de botones (CSS y funcionalidad)
    opciones.forEach(btn => {
        btn.addEventListener('click', function() {
            // Quita la clase 'seleccionado' de todos los botones
            opciones.forEach(b => b.classList.remove('seleccionado'));
            
            // Agrega la clase 'seleccionado' al botón clickeado
            this.classList.add('seleccionado');
            
            // Guarda la opción seleccionada y habilita el botón Confirmar
            opcionSeleccionada = this.getAttribute('data-opcion');
            confirmarBtn.disabled = false;
        });
    });

    // 2. Manejo del botón Confirmar (ejemplo de funcionalidad)
    confirmarBtn.addEventListener('click', () => {
        if (opcionSeleccionada) {
            alert(`Opción seleccionada: ${opcionSeleccionada}. Procediendo con la entrega.`);
        } else {
            alert('Error: No se ha seleccionado una opción de entrega.');
        }
    });

    // 3. Lógica Responsiva de JavaScript (opcional)
    function verificarResponsividad() {
        // La lógica principal está en CSS, pero puedes agregar aquí funcionalidades JS si fuera necesario.
    }

    verificarResponsividad();
    window.addEventListener('resize', verificarResponsividad);
});
