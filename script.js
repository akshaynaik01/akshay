// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Handle form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (name && email && message) {
            alert(`Thank you ${name}! I'll respond to ${email} soon.`);
            this.reset();
        }
    });
}

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Animate skill items on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    });
});

// CTA button click handler
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', function() {
        const projectsSection = document.querySelector('#projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'none' ? 'block' : 'none';
}

// Log when page is fully loaded
window.addEventListener('load', () => {
    console.log('Portfolio website loaded successfully!');
});

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toggleMobileMenu };
}
