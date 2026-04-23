gsap.registerPlugin(ScrollTrigger);

// 1. Sniper Cursor Logic
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
});

// 2. Hero Entrance Animation
const tl = gsap.timeline();
tl.to("#hero-sub", { opacity: 1, y: -20, duration: 1.2, ease: "power4.out", delay: 0.5 })
  .to("#hero-title", { opacity: 1, y: -20, duration: 1.2, ease: "power4.out" }, "-=0.8")
  .to("#hero-p", { opacity: 1, y: -20, duration: 1.2, ease: "power4.out" }, "-=1");

// 3. Parallax Background Logic
gsap.to("#bg-image", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    },
    y: 300,
    scale: 1.1
});

// 4. Project Card Reveals
gsap.utils.toArray(".project-card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },
        opacity: 0,
        y: 50,
        rotateX: 15,
        duration: 1.5,
        ease: "power3.out"
    });
});

// 5. Achievement Fade-in
gsap.from(".achievement-card", {
    scrollTrigger: {
        trigger: "#achievements",
        start: "top 75%"
    },
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 1.2,
    ease: "back.out(1.7)"
});
