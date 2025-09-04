document.querySelector("form").addEventListener("submit", function (e) {
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      e.preventDefault();
      return;
    }
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }
  
    alert("Form submitted successfully!");
  });
  