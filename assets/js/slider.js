document.addEventListener('DOMContentLoaded', function() {
    // Configuración del slider
    const sliderImages = [
        'assets/img/slider/slider1.jfif',
        'assets/img/slider/slider2.jfif',
        'assets/img/slider/slider3.jfif',
        'assets/img/slider/slider4.jfif'
    ];
    
    const sliderContainer = document.querySelector('.slider');
    let currentIndex = 0;
    
    // Crear elementos iniciales del slider
    function initSlider() {
        // Añadir todas las imágenes al slider
        sliderImages.forEach((imgSrc, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.style.backgroundImage = `url(${imgSrc})`;
            
            // La primera imagen está activa
            if (index === 0) {
                slide.classList.add('active');
            }
            
            sliderContainer.appendChild(slide);
        });
        
        // Iniciar el slider automático
        setInterval(nextSlide, 5000);
    }
    
    // Función para avanzar al siguiente slide
    function nextSlide() {
        const slides = document.querySelectorAll('.slide');
        
        // Remover clase active del slide actual
        slides[currentIndex].classList.remove('active');
        
        // Actualizar índice al siguiente slide
        currentIndex = (currentIndex + 1) % slides.length;
        
        // Añadir clase active al nuevo slide
        slides[currentIndex].classList.add('active');
    }
    
    // Inicializar slider
    if (sliderContainer) {
        initSlider();
    }
});