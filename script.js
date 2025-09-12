document.addEventListener('DOMContentLoaded', function() {
    let currentJob = 0;
    const jobs = ["UX/UI Designer", "Frontend Developer"];
    const typingWrapper = document.getElementById('typingWrapper');

    // ----- Typing Effect -----
    if (typingWrapper) {
        function changeJob() {
            currentJob = (currentJob + 1) % jobs.length;
            const translateY = -currentJob * 3; // 3rem = 48px
            typingWrapper.style.transform = `translateY(${translateY}rem)`;
        }
        setInterval(changeJob, 3000);
    }

    // ----- Smooth Scroll -----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ----- Hover Effects -----
    const profileContainer = document.querySelector('.profile-container');
    if (profileContainer) {
        profileContainer.addEventListener('mouseenter', () => profileContainer.style.transform = 'scale(1.02)');
        profileContainer.addEventListener('mouseleave', () => profileContainer.style.transform = 'scale(1)');
    }

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-5px) scale(1.02)');
        card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
        });
    });

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => btn.style.transform = 'scale(0.98)');
        btn.addEventListener('mouseup', () => btn.style.transform = 'scale(1)');
        btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
    });

    // ----- Fade-in on Scroll -----
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const sections = document.querySelectorAll('.education-section, .skills-section, .projects-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // ----- Floating & Parallax Circles -----
    const bgCircles = document.querySelectorAll('.bg-circle');
    bgCircles.forEach((circle, index) => {
        const duration = 4000 + (index * 1000);
        const amplitude = 20 + (index * 10);
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * amplitude;
            const randomY = (Math.random() - 0.5) * amplitude;
            circle.style.transform += ` translate(${randomX}px, ${randomY}px)`;
        }, duration);
    });

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        bgCircles.forEach((el, idx) => {
            const speed = 0.5 + (idx * 0.1);
            el.style.transform = `translateY(${-scrolled * speed}px)`;
        });
    });

    // ----- Lazy Load Images -----
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                obs.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));

    // ----- Dynamic Day/Night Brightness -----
    function updateTheme() {
        const hour = new Date().getHours();
        document.body.style.filter = (hour >= 18 || hour < 6) ? 'brightness(0.95)' : 'brightness(1)';
    }
    updateTheme();
    setInterval(updateTheme, 60000);

    // ----- Loader & Initial Animations -----
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }
        const heroText = document.querySelector('.hero-text');
        const profileSection = document.querySelector('.profile-section');
        if (heroText) heroText.style.animation = 'fadeInUp 1s ease forwards';
        if (profileSection) profileSection.style.animation = 'fadeInRight 1s ease 0.3s forwards';
    });

    // ----- Inject Keyframes for Loader & Animations -----
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(30px); }
            to   { opacity: 1; transform: translateX(0); }
        }
        .loader {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: #f7faff;  /* updated background to blue-white */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        .loader::before {
            content: '';
            width: 50px; height: 50px;
            border: 3px solid #2563eb;   /* primary blue */
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

    // ----- Debounced scroll logging (example) -----
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            const later = () => { clearTimeout(timeout); func(...args); };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    window.addEventListener('scroll', debounce(() => {
        console.log('Scroll event triggered');
    }, 16));
});
