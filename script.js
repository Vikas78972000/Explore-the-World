// Booking Form Submission (Basic Alert Message)
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevents the default form submission
    alert("Your booking request has been submitted. We will get back to you soon!");
});

// Contact Form Submission (Basic Alert Message)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevents the default form submission
    alert("Your message has been sent. We will respond shortly!");
});
