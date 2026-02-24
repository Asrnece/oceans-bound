/* ============================================================
   OceansBound — Minimal JavaScript
   Navbar scroll effect, hamburger toggle, grid fade on scroll
   ============================================================ */

(function () {
    'use strict';

    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const scrollIndicator = document.querySelector('.hero__scroll-indicator');

    // Depth atmosphere elements
    const oceanRays = document.getElementById('oceanRays');
    const particlesContainer = document.getElementById('particlesContainer');

    // ---- Navbar: frosted glass on scroll ----
    let ticking = false;

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(function () {
                const scrollY = window.scrollY;

                // Toggle scrolled class
                if (scrollY > 40) {
                    navbar.classList.add('navbar--scrolled');
                } else {
                    navbar.classList.remove('navbar--scrolled');
                }

                // ---- Ocean Depth Effects ----
                const maxScroll = document.body.scrollHeight - window.innerHeight;
                const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

                // 1. Fade out rays (visible 0% - 40% scroll)
                if (oceanRays) {
                    const raysOpacity = Math.max(1 - (scrollProgress * 2.5), 0);
                    oceanRays.style.opacity = raysOpacity;
                }

                // 2. Enable particles (visible earlier on scroll)
                if (particlesContainer) {
                    if (scrollProgress > 0.1 && particlesContainer.children.length === 0) {
                        createParticles(15);
                    } else if (scrollProgress <= 0.1 && particlesContainer.children.length > 0) {
                        particlesContainer.innerHTML = ''; // Remove when near surface
                    }
                }



                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // ---- Hamburger menu toggle ----
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function () {
            const isOpen = navMenu.classList.toggle('navbar__nav--open');
            hamburgerBtn.classList.toggle('navbar__hamburger--open', isOpen);
            hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
        });

        // Close menu on link click
        navMenu.querySelectorAll('.navbar__link').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('navbar__nav--open');
                hamburgerBtn.classList.remove('navbar__hamburger--open');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu on outside click
        document.addEventListener('click', function (e) {
            if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                navMenu.classList.remove('navbar__nav--open');
                hamburgerBtn.classList.remove('navbar__hamburger--open');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ---- Scroll indicator: smooth scroll to intro ----
    if (scrollIndicator) {
        scrollIndicator.style.cursor = 'pointer';
        scrollIndicator.addEventListener('click', function () {
            const target = document.getElementById('about-summary');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    // ---- Timeline: scroll reveal ----
    var revealItems = document.querySelectorAll('[data-reveal]');

    if (revealItems.length && 'IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    // Stagger based on item index
                    var index = Array.prototype.indexOf.call(revealItems, entry.target);
                    setTimeout(function () {
                        entry.target.classList.add('is-visible');
                    }, index * 150);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealItems.forEach(function (item) {
            revealObserver.observe(item);
        });
    } else {
        // Fallback: show all items immediately
        revealItems.forEach(function (item) {
            item.classList.add('is-visible');
        });
    }

    // ---- Particle Generator ----
    function createParticles(count) {
        if (!particlesContainer) return;

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            // Randomize properties
            const left = Math.random() * 100;
            const size = Math.random() * 3 + 2; // 2px - 5px
            const duration = Math.random() * 20 + 10; // 10s - 30s
            // Create much shorter delay so particles appear quickly
            const delay = Math.random() * 2; // 0s - 2s
            const drift = (Math.random() - 0.5) * 100; // -50px to 50px
            const opacity = Math.random() * 0.4 + 0.1; // 0.1 - 0.5

            particle.style.left = `${left}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.setProperty('--duration', `${duration}s`);
            particle.style.setProperty('--drift', `${drift}px`);
            particle.style.setProperty('--max-opacity', opacity);

            particlesContainer.appendChild(particle);
        }
    }
})();
