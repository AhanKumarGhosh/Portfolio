alert("hello world");
console.log("JS file is loaded correctly!");
// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none'; // Hides preloader after the content has loaded
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('active'); // Toggles menu visibility when hamburger icon is clicked
});

// Smooth Scroll for Menu Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('a, button, .project-card').forEach(element => {
    element.addEventListener('mouseover', () => {
        cursor.classList.add('active');
    });

    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
});

// Portfolio Item Preview on Hover (Optional custom functionality)
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1200, // Duration of the animations in milliseconds
    easing: 'ease-in-out',
    once: true // Animation will only happen once per scroll
});

// Form Submission - Interactive Contact Form
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting to the server

    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;

    // Placeholder for sending the form data (AJAX request)
    console.log(Message sent by ${name}, Email: ${email}, Message: ${message});

    // Show success message (you can customize this)
    alert("Thank you for your message!");

    // Optionally reset the form
    contactForm.reset();
});

// Background Video (optional functionality to stop/start the video)
const bgVideo = document.getElementById('bg-video');

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        bgVideo.pause(); // Pauses video when the user is not viewing the page
    } else {
        bgVideo.play(); // Plays video when the user comes back to the page
    }
});

