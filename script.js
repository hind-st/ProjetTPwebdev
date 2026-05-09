document.addEventListener("DOMContentLoaded", function () {
  const exploreBtn = document.getElementById("exploreBtn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
      alert(
        "🌌 Welcome, explorer! Visit our Gallery to see stunning stellar objects.",
      );
      window.location.href = "gallery.html";
    });
  }

  const quotes = [
    {
      text: "The cosmos is within us. We are made of star-stuff.",
      author: "Carl Sagan",
    },
    {
      text: "Somewhere, something incredible is waiting to be known.",
      author: "Carl Sagan",
    },
    {
      text: "The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, were made in the interiors of collapsing stars.",
      author: "Carl Sagan",
    },
    {
      text: "Look up at the stars and not down at your feet.",
      author: "Stephen Hawking",
    },
    {
      text: "The universe is a pretty big place. If it's just us, seems like an awful waste of space.",
      author: "Carl Sagan",
    },
    {
      text: "We are a way for the cosmos to know itself.",
      author: "Carl Sagan",
    },
  ];

  const quoteElement = document.getElementById("dailyQuote");
  const authorElement = document.querySelector(".quote-author");
  const newQuoteBtn = document.getElementById("newQuoteBtn");

  if (newQuoteBtn && quoteElement) {
    newQuoteBtn.addEventListener("click", function () {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const selectedQuote = quotes[randomIndex];
      quoteElement.textContent = `"${selectedQuote.text}"`;
      if (authorElement) {
        authorElement.textContent = `— ${selectedQuote.author}`;
      }
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const emailError = document.getElementById("emailError");
      const passwordError = document.getElementById("passwordError");
      const messageDiv = document.getElementById("loginMessage");

      let isValid = true;

      emailError.textContent = "";
      passwordError.textContent = "";
      messageDiv.textContent = "";
      messageDiv.className = "form-message";

      if (!email.value.trim()) {
        emailError.textContent = "Email is required";
        isValid = false;
      } else if (!email.value.includes("@") || !email.value.includes(".")) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
      }

      if (!password.value) {
        passwordError.textContent = "Password is required";
        isValid = false;
      } else if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
      }

      if (isValid) {
        messageDiv.textContent = "✅ Login successful! Redirecting...";
        messageDiv.style.color = "#90ee90";
        messageDiv.style.backgroundColor = "rgba(0,100,0,0.3)";

        setTimeout(function () {
          window.location.href = "index.html";
        }, 1500);
      } else {
        messageDiv.textContent = "❌ Please fix the errors above";
        messageDiv.style.color = "#ff6b6b";
        messageDiv.style.backgroundColor = "rgba(255,0,0,0.1)";
      }
    });
  }

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("regName");
      const email = document.getElementById("regEmail");
      const password = document.getElementById("regPassword");
      const confirm = document.getElementById("confirmPassword");

      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("regEmailError");
      const passwordError = document.getElementById("regPasswordError");
      const confirmError = document.getElementById("confirmError");
      const messageDiv = document.getElementById("registerMessage");

      let isValid = true;

      nameError.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";
      confirmError.textContent = "";
      messageDiv.textContent = "";
      messageDiv.className = "form-message";

      if (!name.value.trim()) {
        nameError.textContent = "Full name is required";
        isValid = false;
      } else if (name.value.trim().length < 2) {
        nameError.textContent = "Name must be at least 2 characters";
        isValid = false;
      }

      if (!email.value.trim()) {
        emailError.textContent = "Email is required";
        isValid = false;
      } else if (!email.value.includes("@") || !email.value.includes(".")) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
      }

      if (!password.value) {
        passwordError.textContent = "Password is required";
        isValid = false;
      } else if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
      }

      if (password.value !== confirm.value) {
        confirmError.textContent = "Passwords do not match";
        isValid = false;
      }

      if (isValid) {
        messageDiv.textContent =
          "✅ Registration successful! Redirecting to login...";
        messageDiv.style.color = "#90ee90";
        messageDiv.style.backgroundColor = "rgba(0,100,0,0.3)";

        setTimeout(function () {
          window.location.href = "login.html";
        }, 1500);
      } else {
        messageDiv.textContent = "❌ Please fix the errors above";
        messageDiv.style.color = "#ff6b6b";
        messageDiv.style.backgroundColor = "rgba(255,0,0,0.1)";
      }
    });
  }

  const modal = document.getElementById("imageModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalInfo = document.getElementById("modalInfo");
  const closeBtn = document.querySelector(".close-btn");

  const galleryItems = document.querySelectorAll(".gallery-item");

  if (galleryItems.length > 0 && modal) {
    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const name = item.getAttribute("data-name");
        const info = item.getAttribute("data-info");

        if (modalTitle && modalInfo) {
          modalTitle.textContent = name;
          modalInfo.textContent = info;
          modal.style.display = "block";
        }
      });
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      if (modal) modal.style.display = "none";
    });
  }

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  console.log("✨ Celestial Atlas loaded! Welcome to the stars ✨");
});
