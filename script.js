document.addEventListener('DOMContentLoaded', () => {
    const bar = document.querySelector('.bar');
    const nav = document.querySelector('.nav-ul-links');
    
    bar.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    bar.addEventListener('dblclick', () => {
        nav.classList.remove('open');
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var emailSubject = document.getElementById('emailSubject').value;
    var message = document.getElementById('message').value;

    if (fullName === '' || email === '' || mobileNumber === '' || emailSubject === '' || message === '') {
        alert('Please fill in all required fields.');
        return;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    this.submit();
});