// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = 'white';
    navLinks.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    navLinks.style.padding = '1rem';
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Contact form handling

    document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Simple validation
    if (!name || !email || !subject || !message) {
        e.preventDefault(); // stop submission only if invalid
    alert('Please fill in all fields');
    return;
    }

    // If everything is valid → form will continue to submit
});



// Testimonials auto-rotate (optional)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Initialize testimonials
if (testimonials.length > 0) {
    showTestimonial(0);
    setInterval(nextTestimonial, 5000); // Change every 5 seconds
}

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero h1');
const titleText = heroTitle.textContent;
heroTitle.textContent = '';

let charIndex = 0;
function typeTitle() {
    if (charIndex < titleText.length) {
        heroTitle.textContent += titleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeTitle, 100);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeTitle, 1000);
});

// Add particle background effect (optional enhancement)
function createParticles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(255,255,255,0.3);
                    border-radius: 50%;
                    pointer-events: none;
                    animation: float ${Math.random() * 6 + 4}s linear infinite;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation-delay: ${Math.random() * 6}s;
                `;
        hero.appendChild(particle);
    }
}

// Add floating animation for particles
const style = document.createElement('style');
style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) translateX(0px); }
                25% { transform: translateY(-20px) translateX(10px); }
                50% { transform: translateY(-10px) translateX(-10px); }
                75% { transform: translateY(-30px) translateX(5px); }
            }
        `;
document.head.appendChild(style);

// Initialize particles
createParticles();