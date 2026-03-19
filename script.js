// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close menu when link is clicked
document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));

// Testimonial Carousel
const testimonials = document.querySelectorAll('.testimonial-item');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
});

// Simple Scroll Animation Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});

// Auto-play carousel
setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}, 5000);