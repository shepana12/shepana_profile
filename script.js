

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("show");

});

const contactForm = document.getElementById("contactForm");


if (contactForm) {

  contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();



    if (!name || !email || !message) {

      alert("Please complete all fields.");

      return;

    }


    alert(`Thank you ${name}! Your message has been sent.`);


    contactForm.reset();

  });

}