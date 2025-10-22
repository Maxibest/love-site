// Animation de cœurs flottants
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Animation de particules
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.animationDelay = Math.random() * 0.5 + 's';
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 2000);
}

// Effet de clic sur les boutons
document.addEventListener('DOMContentLoaded', function() {
    const btnYes = document.querySelector('.btn-yes');
    const btnNo = document.querySelector('.btn-no');
    
    // Animation de cœurs au survol du bouton "Yes"
    btnYes.addEventListener('mouseenter', function() {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createFloatingHeart();
            }, i * 100);
        }
    });
    
    // Effet de particules au clic
    btnYes.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                createParticle(x + (Math.random() - 0.5) * 100, y + (Math.random() - 0.5) * 100);
            }, i * 50);
        }
        
    });
    
    // Effet de fuite du bouton "No" au survol
    btnNo.addEventListener('mouseenter', function() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const btnRect = this.getBoundingClientRect();
        
        // Calculer les positions possibles dans le conteneur
        const maxX = containerRect.width - btnRect.width;
        const maxY = containerRect.height - btnRect.height;
        
        // Position aléatoire dans le conteneur
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        // Animation fluide vers la nouvelle position
        this.style.position = 'absolute';
        this.style.left = randomX + 'px';
        this.style.top = randomY + 'px';
        this.style.transition = 'all 0.5s ease';
        
        // Effet de rotation pour plus de fun
        this.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
    });
    
    // Effet pour le bouton "No" au clic
    btnNo.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        // Animation de "fuite" du bouton
        this.style.transform = 'translateX(' + (Math.random() - 0.5) * 200 + 'px)';
        this.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
            this.style.transform = 'translateX(0)';
        }, 300);
    });
    
    // Créer des cœurs flottants périodiquement
    setInterval(createFloatingHeart, 3000);
    
    // Effet de particules aléatoires
    setInterval(() => {
        if (Math.random() < 0.3) {
            createParticle(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
        }
    }, 2000);
});

// Effet de parallaxe sur l'image
document.addEventListener('mousemove', function(e) {
    const img = document.querySelector('.container-image img');
    if (img) {
        const x = (e.clientX / window.innerWidth) * 20 - 10;
        const y = (e.clientY / window.innerHeight) * 20 - 10;
        img.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    }
});
