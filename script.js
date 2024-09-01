// Toggle navigation for mobile view
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// document.querySelector('.contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     const name = document.querySelector('input[name="name"]').value;
//     const email = document.querySelector('input[name="email"]').value;
//     const message = document.querySelector('textarea[name="message"]').value;

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "mohdyusufr@gmail.com",
//         Password : "B8B302F3BE06EC1EB8F9B93862A5F174A8FD",
//         // SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
//         To : 'mohdyusufr@gmail.com',   // them@website.com
//         From : email,
//         Subject : "User send mesaage on your portfolio.",   // This is the subject
//         Body : `Name of sender: ${name}. Email of sender: ${email}. Message of sender: ${message}.`  // This is email body.
//     }).then(
//       message => alert("Your message successfully submitted.") // this is message
//     ).catch(
//         error => alert("Failed to send message: " + error)
//     );
//     console.log(name, email, message);
// });

// const btn = document.querySelector(".btn-primary");
// btn.addEventListener("click", sendEmail);