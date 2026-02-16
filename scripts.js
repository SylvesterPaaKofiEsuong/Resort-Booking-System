/**
 * Resort De Code - Interactive Effects Controller
 * Jägerhof-Style Scroll & Parallax JavaScript
 */

// ==========================================
// Initialize when DOM is ready
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initMobileMenu();
    initBookingDialog();
    initHeroEffects();
    initScrollReveal();
    initParallax();
    initSmoothScroll();
    initStickyNav();
    initExpandSection();
});

// ==========================================
// Preloader Animation
// ==========================================

function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    // Wait for page load, then slide up after 1.5 seconds
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hide');

            // Remove from DOM after animation completes
            setTimeout(() => {
                preloader.remove();
            }, 1500);
        }, 2000);
    });
}

// ==========================================
// Mobile Menu Toggle
// ==========================================

function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');

    if (!menuBtn || !closeBtn || !mobileMenu) return;

    function openMenu() {
        mobileMenu.classList.add('active');
        document.body.classList.add('mobile-menu-open');
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('mobile-menu-open');
    }

    // Open menu on hamburger click
    menuBtn.addEventListener('click', openMenu);

    // Close menu on X button click
    closeBtn.addEventListener('click', closeMenu);

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeMenu, 300);
        });
    });
}

// ==========================================
// Sticky Navigation on Scroll
// ==========================================

function initStickyNav() {
    const nav = document.getElementById('main-nav');
    const hero = document.getElementById('hero');

    if (!nav || !hero) return;

    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const heroBottom = hero.offsetHeight;

        // Add/remove scrolled class based on position
        if (currentScrollY > heroBottom - 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
            nav.classList.remove('nav-hidden');
        }

        // Show/hide nav based on scroll direction (only after hero)
        if (currentScrollY > heroBottom) {
            if (currentScrollY > lastScrollY) {
                // Scrolling down - hide nav
                nav.classList.add('nav-hidden');
            } else {
                // Scrolling up - show nav
                nav.classList.remove('nav-hidden');
            }
        }

        lastScrollY = currentScrollY;
    });
}

// ==========================================
// Hero Two-State Transition (Jägerhof Style)
// ==========================================

function initHeroEffects() {
    const hero = document.querySelector('.hero');
    const heroDefault = document.querySelector('.hero-default');
    const heroHoverContent = document.querySelector('.hero-hover-content');
    const sectionLinks = document.querySelectorAll('.hero-section-link');
    const heroBgs = document.querySelectorAll('.hero-bg');

    if (!hero || !sectionLinks.length) return;

    let isActive = false;
    let activeTimeout = null;

    // Handle hover on section links
    sectionLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const target = link.dataset.target;

            // Clear any pending deactivation
            if (activeTimeout) {
                clearTimeout(activeTimeout);
                activeTimeout = null;
            }

            // Activate hero state
            if (!isActive) {
                hero.classList.add('hero-active');
                isActive = true;
            }

            // Remove active from all links and backgrounds
            sectionLinks.forEach(l => l.classList.remove('active'));
            heroBgs.forEach(bg => bg.classList.remove('active'));

            // Add active to current link and corresponding background
            link.classList.add('active');
            const targetBg = document.querySelector(`.hero-bg-${target}`);
            if (targetBg) {
                targetBg.classList.add('active');
            }
        });
    });

    // Get the nav links container
    const navLinksContainer = document.querySelector('.hero-nav-links');

    // Handle mouse leave from nav links area - switch back immediately
    if (navLinksContainer) {
        navLinksContainer.addEventListener('mouseleave', () => {
            hero.classList.remove('hero-active');
            sectionLinks.forEach(l => l.classList.remove('active'));
            heroBgs.forEach(bg => bg.classList.remove('active'));
            isActive = false;
        });
    }

    // Touch support for mobile
    let touchActive = false;

    hero.addEventListener('touchstart', (e) => {
        const target = e.target.closest('.hero-section-link');

        if (target) {
            e.preventDefault();
            const section = target.dataset.target;

            if (!touchActive) {
                hero.classList.add('hero-active');
                touchActive = true;
            }

            sectionLinks.forEach(l => l.classList.remove('active'));
            heroBgs.forEach(bg => bg.classList.remove('active'));

            target.classList.add('active');
            const targetBg = document.querySelector(`.hero-bg-${section}`);
            if (targetBg) {
                targetBg.classList.add('active');
            }
        } else if (!e.target.closest('.hero-nav-links') && !e.target.closest('.season-btn')) {
            // Tapped outside nav links - toggle back to default
            if (touchActive) {
                hero.classList.remove('hero-active');
                sectionLinks.forEach(l => l.classList.remove('active'));
                heroBgs.forEach(bg => bg.classList.remove('active'));
                touchActive = false;
            }
        }
    }, { passive: false });
}

// ==========================================
// Season Toggle (Summer/Winter)
// Booking Dialog
// ==========================================

function initBookingDialog() {
    const openBtn = document.getElementById('open-booking-dialog');
    const closeBtn = document.getElementById('close-booking-dialog');
    const dialog = document.getElementById('booking-dialog');
    const backdrop = dialog?.querySelector('.booking-dialog-backdrop');
    const form = document.getElementById('booking-form');

    if (!openBtn || !closeBtn || !dialog) return;

    function openDialog() {
        dialog.classList.remove('hidden');
        dialog.classList.add('active');
        document.body.classList.add('booking-dialog-open');
    }

    function closeDialog() {
        dialog.classList.remove('active');
        document.body.classList.remove('booking-dialog-open');
        setTimeout(() => {
            dialog.classList.add('hidden');
        }, 300);
    }

    // Open dialog on button click
    openBtn.addEventListener('click', openDialog);

    // Close on X button click
    closeBtn.addEventListener('click', closeDialog);

    // Close on backdrop click
    backdrop?.addEventListener('click', closeDialog);

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dialog.classList.contains('active')) {
            closeDialog();
        }
    });

    // Handle form submission
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your server
        alert('Booking request submitted! We will check availability and get back to you soon.');
        closeDialog();
        form.reset();
    });
}

// ==========================================
// Scroll Reveal (Intersection Observer)
// ==========================================

function initScrollReveal() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add revealed class
                if (prefersReducedMotion) {
                    entry.target.classList.add('revealed');
                } else {
                    // Get delay from data attribute
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, parseInt(delay));
                }

                // Optionally unobserve to prevent re-animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-reveal attribute
    const revealElements = document.querySelectorAll('[data-scroll-reveal]');
    revealElements.forEach(el => {
        // Skip hero text elements (they have their own animation)
        if (!el.classList.contains('hero-text-main') &&
            !el.classList.contains('hero-text-script')) {
            observer.observe(el);
        }
    });
}

// ==========================================
// Parallax Scrolling
// ==========================================

function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length === 0) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    function updateParallax() {
        const scrollY = window.scrollY;

        parallaxElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const speed = parseFloat(el.dataset.parallaxSpeed) || 0.5;

            // Only apply parallax when element is in viewport
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
                // Calculate offset relative to element position
                const elementTop = rect.top + scrollY;
                const relativeScroll = scrollY - elementTop + window.innerHeight;
                const yOffset = relativeScroll * speed;

                // Check if element is an img or a div with background-image
                if (el.tagName === 'IMG') {
                    el.style.transform = `translateY(${yOffset}px)`;
                } else {
                    // For divs with background-image, adjust background-position
                    el.style.backgroundPositionY = `${yOffset}px`;
                }
            }
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });

    // Initial call
    updateParallax();
}


// ==========================================
// Smooth Scroll for Anchor Links
// ==========================================

function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// Navigation Scroll Effect
// ==========================================

(function initNavScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        // Add background blur after scrolling past hero
        if (currentScroll > window.innerHeight * 0.8) {
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.background = 'rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.backdropFilter = 'none';
            nav.style.background = 'transparent';
        }

        // Hide nav on scroll down, show on scroll up
        if (currentScroll > lastScroll && currentScroll > 200) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // Add transition for smooth hide/show
    nav.style.transition = 'transform 0.3s ease, background 0.3s ease, backdrop-filter 0.3s ease';
})();

// ==========================================
// Image Lazy Loading Enhancement
// ==========================================

(function initLazyImages() {
    const images = document.querySelectorAll('img');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                // If using data-src for lazy loading
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }

                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
})();

// ==========================================
// Video Autoplay Fallback
// ==========================================

(function initVideoFallback() {
    const video = document.querySelector('.hero-video');
    if (!video) return;

    // Try to play video
    const playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // Autoplay was prevented, show fallback image
            console.log('Video autoplay prevented, showing fallback');
            video.style.display = 'none';

            // Show hero images as fallback
            const heroImages = document.querySelector('.hero-images');
            if (heroImages) {
                heroImages.style.opacity = '1';
            }
        });
    }
})();

// ==========================================
// Cursor Effect (Optional Enhancement)
// ==========================================

(function initCursorEffect() {
    // Only on desktop
    if (window.innerWidth < 1024) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #D17A4D;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: transform 0.15s ease, opacity 0.15s ease;
        mix-blend-mode: difference;
        opacity: 0;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    // Smooth cursor following
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Enlarge cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-hover-trigger]');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            cursor.style.background = 'rgba(209, 122, 77, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'transparent';
        });
    });
})();

// ==========================================
// Performance: Debounce utility
// ==========================================

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

// ==========================================
// Handle window resize
// ==========================================

window.addEventListener('resize', debounce(() => {
    // Reinitialize parallax for responsive changes
    const isMobile = window.innerWidth < 768;
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    parallaxElements.forEach(el => {
        if (isMobile) {
            el.style.transform = 'none';
        }
    });
}, 250));

// ==========================================
// Scroll Expansion Section (Sustainability)
// ==========================================

function initExpandSection() {
    const section = document.querySelector('.expand-section');
    const imageWrapper = document.querySelector('[data-expand-image]');
    const content = document.querySelector('[data-expand-content]');

    if (!section || !imageWrapper || !content) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        imageWrapper.style.clipPath = 'inset(0% 0% 0% 0% round 0px)';
        content.classList.add('visible');
        return;
    }

    let ticking = false;

    function updateExpansion() {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how far the section has entered the viewport
        // When sectionTop = windowHeight, section is just entering (progress = 0)
        // When sectionTop = 0, section top is at top of viewport (progress increases)
        // Progress should go from 0 to 1 over the scroll range

        const startPoint = windowHeight; // Section just entering viewport
        const endPoint = -rect.height + windowHeight; // Section almost fully scrolled past

        // Calculate progress: 0 when just entering, 1 when fully scrolled
        let progress = 0;
        if (rect.top <= startPoint) {
            const scrolled = startPoint - rect.top;
            const totalDistance = startPoint - endPoint;
            progress = Math.min(1, Math.max(0, scrolled / totalDistance));
        }


        // Interpolate clip-path inset values
        // Start: inset(20% 8% 55% 8% round 30px) - small rounded image at bottom  
        // End: inset(0% 0% 0% 0% round 0px) - full viewport, no rounding
        const insetTop = 20 - (progress * 20);  // 20% → 0%
        const insetRight = 8 - (progress * 8);   // 8% → 0%
        const insetBottom = 55 - (progress * 55); // 55% → 0%
        const insetLeft = 8 - (progress * 8);    // 8% → 0%
        const radius = 30 - (progress * 30);     // 30px → 0px

        imageWrapper.style.clipPath = `inset(${insetTop}% ${insetRight}% ${insetBottom}% ${insetLeft}% round ${radius}px)`;

        // Show content when image is mostly expanded (at 75% scroll progress)
        if (progress >= 0.75) {
            content.classList.add('visible');
        } else {
            content.classList.remove('visible');
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateExpansion);
            ticking = true;
        }
    }, { passive: true });

    // Initial call
    updateExpansion();
}

console.log('🏔️ Resort De Code - Effects initialized');
