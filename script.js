// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Cambiar título al hacer hover
    const title = document.querySelector('.program-title');
    title.addEventListener('mouseover', function() {
        this.style.color = '#FF5F00';
    });
    title.addEventListener('mouseout', function() {
        this.style.color = '#003366';
    });

    // Añadir efecto de hover a los botones
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s';
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Función para cambiar el contenido de la descripción
    let originalDescription = document.querySelector('.program-description').innerHTML;
    document.querySelector('.program-description').addEventListener('click', function() {
        if (this.innerHTML === originalDescription) {
            this.innerHTML = "¡Haz clic para ver la descripción original!";
        } else {
            this.innerHTML = originalDescription;
        }
    });
});