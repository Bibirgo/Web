document.addEventListener('DOMContentLoaded', () => {
    const opciones = document.querySelectorAll('.opcion-btn');
    const confirmarBtn = document.getElementById('confirmar-btn');
    let opcionSeleccionada = null;

    // 1. Manejo de la selección de botones
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
            alert(`Opción seleccionada: ${opcionSeleccionada}. Procediendo...`);
            // Aquí iría la lógica para avanzar a la siguiente página o procesar el pedido
        } else {
            alert('Por favor, selecciona una opción de entrega.');
        }
    });

    // 3. Lógica Responsiva de JavaScript (ejemplo: ajustar el tamaño de fuente si fuera necesario, aunque CSS es la forma preferida)
    // En este caso, el diseño ya es responsivo principalmente con CSS. 
    // Si quisieras cambiar clases CSS o la estructura del DOM en base al tamaño de la ventana (algo más avanzado), usarías:
    function verificarResponsividad() {
        if (window.innerWidth < 480) {
            // Ejemplo de lógica específica para móvil
            // console.log("Modo móvil activo");
        } else {
            // console.log("Modo escritorio activo");
        }
    }

    // Ejecuta al cargar y al cambiar el tamaño de la ventana
    verificarResponsividad();
    window.addEventListener('resize', verificarResponsividad);
});