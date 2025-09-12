document.addEventListener("DOMContentLoaded", function () {
  let currentJob = 0;
  const jobs = ["UX/UI Designer", "Frontend Developer"];
  const typingWrapper = document.getElementById("typingWrapper");

  if (typingWrapper) {
    function changeJob() {
      currentJob = (currentJob + 1) % jobs.length;
      const translateY = -currentJob * 2.5; // 2.5rem = 40px
      typingWrapper.style.transform = `translateY(${translateY}rem)`;
    }

    // Change job every 3 seconds
    setInterval(changeJob, 3000);
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add scroll effect to profile image
  const profileContainer = document.querySelector(".profile-container");
  if (profileContainer) {
    profileContainer.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.02)";
    });

    profileContainer.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }

  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe sections for fade-in effect
  const sections = document.querySelectorAll(
    ".education-section, .skills-section, .projects-section"
  );
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  // Add hover effects to skill cards
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Add hover effects to project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
      this.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.3)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
    });
  });

  // Add click effect to buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mousedown", function () {
      this.style.transform = "scale(0.98)";
    });

    button.addEventListener("mouseup", function () {
      this.style.transform = "scale(1)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Add floating animation to decorative circles
  const bgCircles = document.querySelectorAll(".bg-circle");
  bgCircles.forEach((circle, index) => {
    const duration = 4000 + index * 1000; // Different duration for each circle
    const amplitude = 20 + index * 10; // Different amplitude for each circle

    setInterval(() => {
      const randomX = (Math.random() - 0.5) * amplitude;
      const randomY = (Math.random() - 0.5) * amplitude;
      circle.style.transform += ` translate(${randomX}px, ${randomY}px)`;
    }, duration);
  });

  // Add parallax effect to background elements
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".bg-circle");

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });

  // Add typewriter effect to name (optional enhancement)
  function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = "";

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  // Lazy loading for images
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));

  // Add dynamic theme detection
  function updateTheme() {
    const hour = new Date().getHours();
    const body = document.body;

    if (hour >= 18 || hour < 6) {
      // Evening/Night mode - slightly darker
      body.style.filter = "brightness(0.95)";
    } else {
      // Day mode - normal brightness
      body.style.filter = "brightness(1)";
    }
  }

  updateTheme();
  setInterval(updateTheme, 60000); // Check every minute

  // Add loading animation
  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }

    // Animate elements on load
    const heroText = document.querySelector(".hero-text");
    const profileSection = document.querySelector(".profile-section");

    if (heroText) {
      heroText.style.animation = "fadeInUp 1s ease forwards";
    }

    if (profileSection) {
      profileSection.style.animation = "fadeInRight 1s ease 0.3s forwards";
    }
  });

  // Add CSS animations via JavaScript
  const style = document.createElement("style");
  style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fef7ed;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        
        .loader::before {
            content: '';
            width: 50px;
            height: 50px;
            border: 3px solid #0d9488;
            border-top: 3px solid transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
  document.head.appendChild(style);

  // Performance optimization: Debounce scroll events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Apply debouncing to scroll events
  const debouncedScroll = debounce(() => {
    // Any scroll-based animations here
    console.log("Scroll event triggered");
  }, 16); // ~60fps

  window.addEventListener("scroll", debouncedScroll);

  console.log("Portfolio website loaded successfully!");
});
