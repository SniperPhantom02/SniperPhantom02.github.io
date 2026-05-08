gsap.registerPlugin(ScrollTrigger);

/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {

    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08
    });

});

/* =========================
   HERO INTRO
========================= */

const heroTL = gsap.timeline();

heroTL
.from("#hero-sub", {
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power4.out"
})

.from("#hero-title", {
    opacity: 0,
    y: 120,
    duration: 1.4,
    ease: "power4.out"
}, "-=0.9")

.from("#hero-p", {
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power4.out"
}, "-=1");

/* =========================
   PARALLAX BACKGROUND
========================= */

gsap.to("#bg-image", {
    y: 250,
    scale: 1.15,
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
});

/* =========================
   SECTION REVEALS
========================= */

gsap.utils.toArray("section").forEach((section) => {

    gsap.from(section, {
        opacity: 0,
        y: 120,
        duration: 1.4,
        ease: "power3.out",

        scrollTrigger: {
            trigger: section,
            start: "top 82%",
            toggleActions: "play none none reverse"
        }
    });

});

/* =========================
   INTEL CARDS
========================= */

gsap.utils.toArray(".intel-card").forEach((card) => {

    gsap.from(card, {

        opacity: 0,
        y: 100,
        rotateX: 20,
        scale: 0.9,

        duration: 1.5,
        ease: "expo.out",

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        }

    });

    /* hover animation */

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) / 18;
        const moveY = (y - rect.height / 2) / 18;

        gsap.to(card, {
            rotateY: moveX,
            rotateX: -moveY,
            transformPerspective: 1000,
            duration: 0.4,
            ease: "power2.out"
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.6,
            ease: "power3.out"
        });

    });

});

/* =========================
   FLOATING TAGS
========================= */

gsap.utils.toArray(".intel-tag").forEach((tag, i) => {

    gsap.to(tag, {
        y: -10,
        duration: 2 + i * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

});

/* =========================
   ACHIEVEMENTS
========================= */

gsap.from(".achievement-card", {

    opacity: 0,
    x: 100,
    stagger: 0.2,
    duration: 1.2,

    scrollTrigger: {
        trigger: "#achievements",
        start: "top 80%"
    }

});

/* =========================
   NAVBAR FADE
========================= */

gsap.from("nav", {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});

/* =========================
   SMOOTH SCROLL LINKS
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });

        }

    });

});

/* =========================
   CONTACT MODAL
========================= */

function toggleContact() {

    const modal = document.getElementById("contact-modal");

    modal.classList.toggle("hidden");

}

/* =========================
   SCANLINE EFFECT
========================= */

const scanline = document.createElement("div");

scanline.style.position = "fixed";
scanline.style.top = "0";
scanline.style.left = "0";
scanline.style.width = "100%";
scanline.style.height = "2px";
scanline.style.background = "rgba(197,160,89,0.18)";
scanline.style.zIndex = "999";
scanline.style.pointerEvents = "none";
scanline.style.boxShadow = "0 0 20px rgba(197,160,89,0.4)";

document.body.appendChild(scanline);

gsap.to(scanline, {
    y: window.innerHeight,
    repeat: -1,
    duration: 4,
    ease: "none"
});

/* =========================
   RANDOM PARTICLES
========================= */

for(let i = 0; i < 25; i++){

    const particle = document.createElement("div");

    particle.style.position = "fixed";
    particle.style.width = "2px";
    particle.style.height = "2px";
    particle.style.borderRadius = "50%";
    particle.style.background = "rgba(197,160,89,0.5)";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.zIndex = "-1";

    document.body.appendChild(particle);

    gsap.to(particle, {

        y: -200,
        opacity: 0,
        duration: 4 + Math.random() * 4,
        repeat: -1,
        delay: Math.random() * 4,
        ease: "none"

    });

}
/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    gsap.to(".loader-progress", {

        width: "100%",
        duration: 1.8,
        ease: "power4.out",

        onComplete: () => {

            gsap.to("#loader", {

                opacity: 0,
                duration: 1,
                pointerEvents: "none",

                onComplete: () => {

                    document.getElementById("loader").remove();

                }

            });

        }

    });

});

/* =========================
   SCROLL PROGRESS
========================= */

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.body.scrollHeight - window.innerHeight;

    const progress =
        (scrollTop / docHeight) * 100;

    document.getElementById("scroll-progress")
        .style.width = progress + "%";

});

/* =========================
   TERMINAL TYPING EFFECT
========================= */

const terminalText = `
Initializing Quantum Systems...
Deploying STEAL-Net Modules...
Privacy Defense Layer Active...
Secure Communication Channel Established...
`;

let i = 0;

function typeTerminal(){

    if(i < terminalText.length){

        document.getElementById("typing-text")
            .innerHTML += terminalText.charAt(i);

        i++;

        setTimeout(typeTerminal, 35);

    }

}

typeTerminal();

/* =========================
   STATS COUNTER
========================= */

const statNumbers =
    document.querySelectorAll(".stat-number");

statNumbers.forEach((stat) => {

    const target =
        +stat.getAttribute("data-target");

    gsap.to(stat, {

        innerText: target,
        duration: 2,
        snap: { innerText: 1 },

        scrollTrigger: {

            trigger: stat,
            start: "top 90%"

        }

    });

});