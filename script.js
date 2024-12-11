document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  document.getElementById("imeError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("porukaError").textContent = "";

  const ime = document.getElementById("ime").value.trim();
  if (ime === "") {
    document.getElementById("imeError").textContent = "Ime je obavezno!";
    valid = false;
  }

  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email je obavezan!";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Unesite validan email!";
    valid = false;
  }

  const poruka = document.getElementById("poruka").value.trim();
  if (poruka === "") {
    document.getElementById("porukaError").textContent = "Poruka je obavezna!";
    valid = false;
  }

  if (valid) {
    alert("Forma je uspešno poslata!");
  }
});
