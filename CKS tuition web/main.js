
  // Toggle mobile navigation menu
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

  // Auto-close menu when a nav link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });

  // Optional: Add scroll behavior for smooth navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

const btn = document.querySelector(".btn-popup");
const form = document.querySelector(".studentform");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

// Show form
btn.addEventListener("click", () => {
  form.style.display = "block";
  overlay.style.display = "block";
});

// Hide form when clicking X
closeBtn.addEventListener("click", () => {
  form.style.display = "none";
  overlay.style.display = "none";
});

// Hide form when clicking outside (overlay)
overlay.addEventListener("click", () => {
  form.style.display = "none";
  overlay.style.display = "none";
});

// Make multiple select clickable without Ctrl key
const select = document.getElementById("subjectSelect");

select.addEventListener("mousedown", function (e) {
  e.preventDefault(); // stop default selection
  const option = e.target;

  // Only act if an <option> was clicked
  if (option.tagName === "OPTION") {
    option.selected = !option.selected; // toggle selection
  }
});



// WhatsApp Submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector('input[placeholder="Enter Your Name"]').value;
  const dob = form.querySelector('input[type="date"]').value;
  const standard = form.querySelector('input[placeholder="Your Grade"]').value;
  const school = form.querySelector('input[placeholder="Enter School Name"]').value;
  const board = form.querySelector("select").value;
  const gender = form.querySelector('input[name="gender"]:checked')?.value || "Not specified";

  // Message text
  const message = `Hello! 👋%0A
I want to register for *CKS Tuition*.%0A
Here are my details:%0A
👤 Name: ${name}%0A
🎂 DOB: ${dob}%0A
⚧ Gender: ${gender}%0A
🏫 School: ${school}%0A
🎓 Standard: ${standard}%0A
📘 Board: ${board}`;

  const phone = "916382987874"; // Replace with your WhatsApp number (no + or spaces)
  const whatsappURL = `https://wa.me/${phone}?text=${message}`;

  // Open WhatsApp chat
  window.open(whatsappURL, "_blank");
});

