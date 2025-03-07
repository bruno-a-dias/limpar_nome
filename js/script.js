document.addEventListener("DOMContentLoaded", function() {
    const whatsappButton = document.querySelector('footer a');
    
    // Animação do botão do WhatsApp
    whatsappButton.addEventListener('mouseover', function() {
        this.classList.add('animate__heartBeat');
    });
    
    whatsappButton.addEventListener('mouseout', function() {
        this.classList.remove('animate__heartBeat');
    });

    // Configuração do IntersectionObserver
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // Remove o observer após a animação
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});
