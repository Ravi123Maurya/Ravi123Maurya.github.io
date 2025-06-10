document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .tech-item, .project-card, .skill-card, .social-link, .contact-item, input, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
    
    // Navbar scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.progress-bar');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const elementPosition = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                const width = bar.parentElement.getAttribute('data-width') || bar.style.width;
                bar.style.width = width;
            }
        });
    }
    
    window.addEventListener('scroll', animateSkillBars);
    window.addEventListener('load', animateSkillBars);
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                alert("Thank you for your message! I will get back to you soon.");
                contactForm.reset();
            } else {
                alert("Oops! Something went wrong.");
            }
        });
    });
}
    
    // Parallax effect for blur circles
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const blurCircle1 = document.querySelector('.blur-circle-1');
        const blurCircle2 = document.querySelector('.blur-circle-2');
        
        if (blurCircle1) {
            blurCircle1.style.transform = `translate(${-scrollPosition * 0.1}px, ${-scrollPosition * 0.1}px)`;
        }
        
        if (blurCircle2) {
            blurCircle2.style.transform = `translate(${scrollPosition * 0.1}px, ${scrollPosition * 0.1}px)`;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', function() {
      cursor.classList.add('clicking');
      setTimeout(() => cursor.classList.remove('clicking'), 300);
    });
    
    // Hide cursor when it leaves the window
    document.addEventListener('mouseleave', function() {
      cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', function() {
      cursor.style.opacity = '1';
    });
  });


///////// Easter Egg Game -------------------------

/**
 * Konami Code Easter Egg
 * 
 * How to use:
 * 1. Add this script to your project
 * 2. When someone enters the Konami Code (↑ ↑ ↓ ↓ ← → ← → B A), a surprise appears!
 */ 

// The famous Konami Code sequence
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'];
let konamiPosition = 0;

// Listen for keydown events
document.addEventListener('keydown', function(e) {
// Get the key that was pressed
const key = e.key.toLowerCase();

// Check if the key matches the next key in the Konami sequence
const requiredKey = konamiCode[konamiPosition].toLowerCase();

if (key === requiredKey) {
// Move to the next key in the sequence
konamiPosition++;

// If the entire sequence is completed
if (konamiPosition === konamiCode.length) {
// Reset the counter
konamiPosition = 0;

// Trigger the Easter egg!
activateEasterEgg();
}
} else {
// Reset if the wrong key is pressed
konamiPosition = 0;
}
});

// The fun stuff happens here!
function activateEasterEgg() {
// Create container for the easter egg
const eggContainer = document.createElement('div');
eggContainer.id = 'konamiEasterEgg';
eggContainer.style.position = 'fixed';
eggContainer.style.top = '0';
eggContainer.style.left = '0';
eggContainer.style.width = '100%';
eggContainer.style.height = '100%';
eggContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
eggContainer.style.zIndex = '10000';
eggContainer.style.display = 'flex';
eggContainer.style.flexDirection = 'column';
eggContainer.style.justifyContent = 'center';
eggContainer.style.alignItems = 'center';
eggContainer.style.color = 'white';
eggContainer.style.fontFamily = 'Arial, sans-serif';
eggContainer.style.fontSize = '24px';

// Add content
eggContainer.innerHTML = `
<h1 style="color: #ff9900; font-size: 48px; margin-bottom: 20px;">You found the secret!</h1>
<div id="gameCanvas" style="width: 400px; height: 300px; background-color: #111; position: relative; overflow: hidden; margin-bottom: 20px;">
<div id="player" style="width: 20px; height: 20px; background-color: #ff9900; position: absolute; bottom: 0; left: 50%;"></div>
</div>
<p>Use left/right arrows to move and space to jump!</p>
<button id="closeEasterEgg" style="margin-top: 20px; padding: 10px 20px; background-color: #ff9900; color: black; border: none; cursor: pointer;">Close</button>
`;

document.body.appendChild(eggContainer);

// Set up the mini-game
const player = document.getElementById('player');
let position = 50;
let jumping = false;
let jumpHeight = 0;

// Game controls
document.addEventListener('keydown', function(e) {
if (!document.getElementById('konamiEasterEgg')) return;

if (e.key === 'ArrowLeft') {
position = Math.max(0, position - 5);
player.style.left = position + '%';
} else if (e.key === 'ArrowRight') {
position = Math.min(95, position + 5);
player.style.left = position + '%';
} else if (e.key === ' ' && !jumping) {
jumping = true;
jump();
}
});

// Jump animation
function jump() {
const jumpInterval = setInterval(() => {
if (jumpHeight < 10 && jumping) {
jumpHeight++;
player.style.bottom = jumpHeight * 10 + 'px';
} else {
jumping = false;
if (jumpHeight > 0) {
jumpHeight--;
player.style.bottom = jumpHeight * 10 + 'px';
} else {
clearInterval(jumpInterval);
}
}
}, 30);
}

// Close button functionality
document.getElementById('closeEasterEgg').addEventListener('click', function() {
document.body.removeChild(eggContainer);
});
}

console.log('Easter egg loaded! Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A');
