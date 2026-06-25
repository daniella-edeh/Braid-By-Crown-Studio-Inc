/**
 * Braids By Crown Beauty Inc. - Core Luxury Execution Engine
 * Architecture Style: Vanilla Object-Oriented Component Lifecycle Encapsulation
 * Optimization Grade: Production / Hardware Accelerated Web Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Core Modules
    LuxuryAppCore.init();
});

const LuxuryAppCore = {
    init() {
        this.setupDOMReferences();
        this.runPageLoaderEngine();
        this.initCustomCursor();
        this.initStickyNavbarLogic();
        this.initMobileMenuSystem();
        this.initScrollProgressMetric();
        this.initIntersectionObserverReveals();
        this.initTypingEffectSimulator();
        this.initButtonRippleFramework();
        this.initInteractiveFormValidation();
        this.initSmoothScrollParallaxCurve();
    },

    setupDOMReferences() {
        this.dom = {
            loader: document.getElementById('pageLoader'),
            loaderBar: document.getElementById('loaderBar'),
            cursorDot: document.getElementById('cursorDot'),
            cursorOutline: document.getElementById('cursorOutline'),
            navbar: document.getElementById('navbar'),
            hamburger: document.getElementById('hamburgerToggle'),
            navMenu: document.getElementById('navMenu'),
            navLinks: document.querySelectorAll('.nav-link'),
            progressBar: document.getElementById('scrollProgressBar'),
            sections: document.querySelectorAll('section'),
            typingTarget: document.getElementById('typingEffect'),
            scrollDownBtn: document.getElementById('scrollDownBtn'),
            contactForm: document.getElementById('luxuryContactForm'),
            formFeedback: document.getElementById('formFeedback'),
            backToTop: document.getElementById('backToTopButton')
        };
    },

    /**
     * 1. CINEMATIC PAGE LOADER ENGINE
     * Implements an asynchronous artificial loading velocity mapping calculation
     */
    runPageLoaderEngine() {
        let currentProgress = 0;
        const loaderInterval = setInterval(() => {
            currentProgress += Math.floor(Math.random() * 15) + 5;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(loaderInterval);
                
                // Fade out page loader overlay elegantly
                setTimeout(() => {
                    this.dom.loader.style.opacity = '0';
                    this.dom.loader.style.transform = 'translateY(-100vh)';
                    // Re-trigger visual initialization steps
                    this.triggerHeroEntranceAnimations();
                }, 400);
            }
            this.dom.loaderBar.style.width = `${currentProgress}%`;
        }, 45);
    },

    triggerHeroEntranceAnimations() {
        const heroElements = document.querySelectorAll('#home .reveal-element');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('revealed');
            }, index * 200);
        });
    },

    /**
     * 2. CUSTOM GLASS CURSOR ENGINE
     * Manages high refresh-rate interactive structural tracking points
     */
    initCustomCursor() {
        // Enforce guard checking against touch-enabled tablets and mobile clients
        if (window.matchMedia('(pointer: coarse)').matches) return;

        this.dom.cursorDot.style.opacity = '1';
        this.dom.cursorOutline.style.opacity = '1';

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Direct mapping tracking position coordinates
            this.dom.cursorDot.style.left = `${posX}px`;
            this.dom.cursorDot.style.top = `${posY}px`;

            // Apple level smoothness delay structural interpolation curve using modern animations frame processing
            this.dom.cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 240, fill: "forwards" });
        });

        // Add visual link scaling amplification hooks on targeting interactive layers
        const interactiveTargets = document.querySelectorAll('a, button, select, input, textarea, .service-card');
        interactiveTargets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                this.dom.cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.6)';
                this.dom.cursorOutline.style.backgroundColor = 'rgba(212, 175, 55, 0.08)';
            });
            target.addEventListener('mouseleave', () => {
                this.dom.cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                this.dom.cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    },

    /**
     * 3. DYNAMIC STICKY NAVBAR ARCHITECTURE
     * Intercepts standard position vectors to append blur values dynamically
     */
    initStickyNavbarLogic() {
        const checkScroll = () => {
            if (window.scrollY > 50) {
                this.dom.navbar.classList.add('scrolled');
            } else {
                this.dom.navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', checkScroll);
        checkScroll(); // Initial evaluation run execution loop
    },

    /**
     * 4. MOBILE HAMBURGER LAYER TRANSLATION CONTROLLER
     */
    initMobileMenuSystem() {
        const toggleMenu = () => {
            const isOpen = this.dom.navMenu.classList.contains('open');
            this.dom.navMenu.classList.toggle('open');
            this.dom.hamburger.setAttribute('aria-expanded', !isOpen);
            document.body.classList.toggle('no-scroll', !isOpen);
            
            // Hamburger graphic cross transformation lines configuration
            const lines = this.dom.hamburger.querySelectorAll('.hamburger-line');
            if (!isOpen) {
                lines[0].style.transform = 'translateY(9px) rotate(45deg)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'translateY(-9px) rotate(-45deg)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.opacity = '1';
                lines[2].style.transform = 'none';
            }
        };

        this.dom.hamburger.addEventListener('click', toggleMenu);

        // Terminate sidebar overlay visibility upon dispatching anchor click link navigation requests
        this.dom.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.dom.navMenu.classList.contains('open')) toggleMenu();
            });
        });
    },

    /**
     * 5. HIGH-FIDELITY SCROLL MONITORING METRICS & BACK-TO-TOP REGULATORS
     */
    initScrollProgressMetric() {
        window.addEventListener('scroll', () => {
            const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalScrollHeight <= 0) return;
            
            const currentProgressRatio = (window.scrollY / totalScrollHeight) * 100;
            this.dom.progressBar.style.width = `${currentProgressRatio}%`;

            // Back to top button layout control visibility threshold evaluation mapping
            if (window.scrollY > 600) {
                this.dom.backToTop.classList.add('visible');
            } else {
                this.dom.backToTop.classList.remove('visible');
            }

            this.synchronizeActiveNavigationHighlights();
        });

        this.dom.backToTop.addEventListener('click', () => {
            this.executeSmoothScrollMatrix(0);
        });
    },

    synchronizeActiveNavigationHighlights() {
        let currentActiveSectionId = "";
        
        this.dom.sections.forEach(section => {
            const sectionTopOffset = section.offsetTop - 160;
            if (window.scrollY >= sectionTopOffset) {
                currentActiveSectionId = section.getAttribute('id');
            }
        });

        this.dom.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentActiveSectionId}`) {
                link.classList.add('active');
            }
        });
    },

    /**
     * 6. ADVANCED INTERSECTION OBSERVER STRUCTURAL ANIMATION PIPELINE
     * Automates layout transitions and coordinates statistical counters
     */
    initIntersectionObserverReveals() {
        const observerConfig = {
            root: null,
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // Conditionally spin analytical digits if structural target component matched
                    if (entry.target.classList.contains('about-text-column')) {
                        LuxuryAppCore.executeStatisticalCounters();
                    }
                    observer.unobserve(entry.target); // Kill tracking hook loop to prevent redundant computation
                }
            });
        }, observerConfig);

        const targetingElements = document.querySelectorAll('.reveal-element, .service-card');
        targetingElements.forEach(element => revealObserver.observe(element));
    },

    executeStatisticalCounters() {
        const statisticalCounters = document.querySelectorAll('.counter-number');
        statisticalCounters.forEach(counter => {
            if (counter.classList.contains('counted-active')) return;
            counter.classList.add('counted-active');

            const objectiveTarget = parseInt(counter.getAttribute('data-target'), 10);
            const valueSuffix = counter.getAttribute('data-suffix') || '';
            let baselineInit = 0;
            const stepVelocityIncrement = objectiveTarget / 40; 
            const executionTimerDuration = 35;

            const calculationTicker = setInterval(() => {
                baselineInit += stepVelocityIncrement;
                if (baselineInit >= objectiveTarget) {
                    counter.innerText = objectiveTarget + valueSuffix;
                    clearInterval(calculationTicker);
                } else {
                    counter.innerText = Math.floor(baselineInit) + valueSuffix;
                }
            }, executionTimerDuration);
        });
    },

    /**
     * 7. LUXURY CINEMATIC EDITORIAL TYPING ENGINE
     */
    initTypingEffectSimulator() {
        const structuralVocabulary = [
            "Beauty, Confidence, and Creativity Meet.",
            "Every Braid Reflects A Masterpiece.",
            "Your Identity Receives Its Absolute Crown."
        ];
        let structuralIndex = 0;
        let internalCharIndex = 0;
        let stateIsDeleting = false;
        let textProcessSpeed = 80;

        const processTypingCycle = () => {
            const explicitStringSource = structuralVocabulary[structuralIndex];
            
            if (stateIsDeleting) {
                this.dom.typingTarget.innerText = explicitStringSource.substring(0, internalCharIndex - 1);
                internalCharIndex--;
                textProcessSpeed = 40; // Accelerate reduction phase processing velocities
            } else {
                this.dom.typingTarget.innerText = explicitStringSource.substring(0, internalCharIndex + 1);
                internalCharIndex++;
                textProcessSpeed = 90;
            }

            if (!stateIsDeleting && internalCharIndex === explicitStringSource.length) {
                textProcessSpeed = 2200; // Static text suspension hold timeline duration
                stateIsDeleting = true;
            } else if (stateIsDeleting && internalCharIndex === 0) {
                stateIsDeleting = false;
                structuralIndex = (structuralIndex + 1) % structuralVocabulary.length;
                textProcessSpeed = 600; // Pause timeline buffer prior to processing new sequence arrays
            }

            setTimeout(processTypingCycle, textProcessSpeed);
        };

        if (this.dom.typingTarget) setTimeout(processTypingCycle, 1500);
    },

    /**
     * 8. MICRO-INTERACTION BUTTON RIPPLE INJECTOR
     */
    initButtonRippleFramework() {
        const rippleButtons = document.querySelectorAll('.ripple-btn');
        rippleButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                const boundaryRects = this.getBoundingClientRect();
                const coordinateX = e.clientX - boundaryRects.left;
                const coordinateY = e.clientY - boundaryRects.top;

                const rippleSpanElement = document.createElement('span');
                rippleSpanElement.classList.add('ripple-span');
                rippleSpanElement.style.left = `${coordinateX}px`;
                rippleSpanElement.style.top = `${coordinateY}px`;

                this.appendChild(rippleSpanElement);

                setTimeout(() => {
                    rippleSpanElement.remove();
                }, 750);
            });
        });
    },

    /**
     * 9. LUXURY CONCIERGE FORM INTERACTIVE VALUATOR
     */
    initInteractiveFormValidation() {
        if (!this.dom.contactForm) return;

        this.dom.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const clientName = document.getElementById('formName').value.trim();
            const clientPhone = document.getElementById('formPhone').value.trim();
            const selectionService = document.getElementById('formService').value;
            const explicitMessage = document.getElementById('formMessage').value.trim();
            const submitButton = document.getElementById('formSubmitBtn');

            // Structural parameter enforcement validation processing
            if (!clientName || !clientPhone || !selectionService || !explicitMessage) {
                this.displayFormFeedback("Please fill out all fields to transmit your inquiry.", "error");
                return;
            }

            // Artificial transmission loading visual state modification configuration
            submitButton.disabled = true;
            submitButton.querySelector('span').innerText = "Transmitting Details...";

            setTimeout(() => {
                this.displayFormFeedback("Thank you. Your request has been securely dispatched to our atelier. A coordinator will verify your booking shortly.", "success");
                this.dom.contactForm.reset();
                submitButton.disabled = false;
                submitButton.querySelector('span').innerText = "Transmit Inquiry";
            }, 1800);
        });
    },

    displayFormFeedback(messageText, severityState) {
        this.dom.formFeedback.innerText = messageText;
        this.dom.formFeedback.className = `form-feedback-msg ${severityState}`;
        
        setTimeout(() => {
            this.dom.formFeedback.innerText = "";
        }, 7000);
    },

    /**
     * 10. EASING SMOOTH ANCHOR INTERPOLATION MATRIX
     */
    initSmoothScrollParallaxCurve() {
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const sectionID = anchor.getAttribute('href');
                if (sectionID === '#') return;
                
                e.preventDefault();
                const destinationElement = document.querySelector(sectionID);
                
                if (destinationElement) {
                    const navbarOffsetAdjustment = 90;
                    const destinationYCoordinate = destinationElement.getBoundingClientRect().top + window.scrollY - navbarOffsetAdjustment;
                    this.executeSmoothScrollMatrix(destinationYCoordinate);
                }
            });
        });

        if (this.dom.scrollDownBtn) {
            this.dom.scrollDownBtn.addEventListener('click', () => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    this.executeSmoothScrollMatrix(aboutSection.offsetTop - 90);
                }
            });
        }
    },

    executeSmoothScrollMatrix(targetPosition) {
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
};
/* ==========================================================================
   MODAL-CONTROLLED INQUIRY ROUTER (ULTIMATE POPUP-BLOCKER BYPASS)
   ========================================================================== */
const luxuryForm = document.getElementById('luxuryContactForm');
const modal = document.getElementById('whatsappModal');
const modalBtn = document.getElementById('modalWhatsappBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Create a global variable to hold the link text safely
let dynamicWhatsappUrl = "";

if (luxuryForm && modal) {
    luxuryForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Keeps them directly on your website!

        // 1. Gather all the data they entered
        const nameInput   = luxuryForm.querySelector('input[type="text"]');
        const phoneInput  = luxuryForm.querySelector('input[type="tel"]');
        const styleSelect = document.getElementById('formService');
        const messageText = document.getElementById('formMessage');

        const name    = nameInput ? nameInput.value : "Not Provided";
        const phone   = phoneInput ? phoneInput.value : "Not Provided";
        const style   = styleSelect ? styleSelect.value : "Not Specified";
        const details = messageText ? messageText.value : "None";

        const businessPhone = "16477183961"; 

        // 2. Package the text beautifully
        const message = `Hello Crown Beauty ✨,%0A%0A` +
                        `I would like to submit a booking inquiry:%0A%0A` +
                        `👤 *Name:* ${encodeURIComponent(name)}%0A` +
                        `📞 *Phone:* ${encodeURIComponent(phone)}%0A` +
                        `💇‍♀️ *Style Selected:* ${encodeURIComponent(style)}%0A` +
                        `📝 *Custom Details:* ${encodeURIComponent(details)}`;

        // Save the URL to our global variable
        dynamicWhatsappUrl = `https://wa.me/${businessPhone}?text=${message}`;

        // 3. Directly force it into the button's href attribute
        modalBtn.href = dynamicWhatsappUrl;

        // 4. Reveal the pop-up modal card
        modal.style.display = 'flex';
    });
}

// FORCE CLICK: This stops Chrome from treating it like a spam popup!
if (modalBtn) {
    modalBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (dynamicWhatsappUrl !== "") {
            window.open(dynamicWhatsappUrl, '_blank');
        }
    });
}

// Close modal behavior if they want to edit their text
if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}
