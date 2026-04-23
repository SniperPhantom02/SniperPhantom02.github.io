// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// 1. THE SNIPER CURSOR (High-Precision Follow)
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    // Smoothly animate cursor to mouse position
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
    });
});

// Expand cursor when hovering over interactive elements
document.querySelectorAll('a, button, .achievement-card').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 3, backgroundColor: "rgba(197, 160, 89, 0.1)", duration: 0.3 });
    });
    elem.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, backgroundColor: "transparent", duration: 0.3 });
    });
});

// 2. HERO ENTRANCE (Apple-style Staggered Reveal)
const heroTl = gsap.timeline();
heroTl.to("#hero-sub", { opacity: 1, y: -20, duration: 1.2, ease: "power4.out", delay: 0.5 })
      .to("#hero-title", { opacity: 1, y: -20, duration: 1.2, ease: "power4.out" }, "-=0.8")
      .to("#hero-p", { opacity: 1, y: -20, duration: 1.2, ease: "power4.out" }, "-=1");

// 3. PARALLAX BACKGROUND (Transparent Image Move)
gsap.to("#bg-image", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1 // Smoothly links scroll position to animation
    },
    y: 300, // Background moves slower than content
    scale: 1.1
});

// 4. PROJECT CARDS (3D Tilt & Fade Reveal)
gsap.utils.toArray(".project-card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 60,
        rotationX: 15,
        transformOrigin: "center top",
        duration: 1.5,
        ease: "power3.out"
    });
});

// 5. CRICKET & ACHIEVEMENT EFFECTS (Dynamic Stagger)
gsap.from(".achievement-card", {
    scrollTrigger: {
        trigger: "#achievements",
        start: "top 75%"
    },
    opacity: 0,
    y: 40,
    stagger: 0.3, // Each card follows the other
    duration: 1.2,
    ease: "back.out(1.7)"
});

// 6. SPECIAL CRICKET HOVER EFFECT
const cricketCard = document.querySelector('.cricket-glow');
if (cricketCard) {
    cricketCard.addEventListener('mouseover', () => {
        // Creates a "stadium light" pulse effect
        gsap.to(cricketCard, { 
            scale: 1.2, 
            filter: "drop-shadow(0 0 20px #C5A059)", 
            duration: 0.4 
        });
    });
    cricketCard.addEventListener('mouseout', () => {
        gsap.to(cricketCard, { 
            scale: 1, 
            filter: "drop-shadow(0 0 0px #C5A059)", 
            duration: 0.4 
        });
    });
}
