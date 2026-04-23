/* =========================
   TEXT REVEAL (NAME)
========================= */
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
const nameEl = document.querySelector(".name");
gsap.registerPlugin(ScrollTrigger);

/* =========================
   HERO ANIMATION (NAME)
========================= */

gsap.from(".name", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".tagline", {
  y: 40,
  opacity: 0,
  delay: 0.3,
  duration: 1,
  ease: "power3.out"
});


/* =========================
   PARALLAX BACKGROUND
========================= */

gsap.to("body", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});


/* =========================
   SECTION REVEALS (SMOOTH)
========================= */

gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});


/* =========================
   SKILLS FLOAT + ENTRY
========================= */

gsap.utils.toArray(".skill").forEach((skill, i) => {

  // entry animation
  gsap.from(skill, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".skills-section",
      start: "top 80%"
    }
  });

  // floating animation
  gsap.to(skill, {
    y: "+=15",
    duration: 2 + Math.random(),
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

});


/* =========================
   STORY SCROLL EFFECT
========================= */

gsap.utils.toArray(".section").forEach((section) => {
  gsap.to(section, {
    opacity: 0.3,
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: "bottom center",
      scrub: true
    }
  });
});
/* =========================
   FLOATING ANIMATION
========================= */

function addFloating(el) {
  let floatY = 0;

  setInterval(() => {
    floatY += 0.5;

    el.style.transform = `
      translateY(${Math.sin(floatY) * 8}px)
    `;
  }, 30);
}


/* =========================
   PARALLAX BACKGROUND
========================= */

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.body.style.backgroundPositionY = `${scrollY * 0.3}px`;
});


/* =========================
   SECTION STORY TRANSITION
========================= */

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < trigger) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    } else {
      section.style.opacity = "0.3";
      section.style.transform = "translateY(40px)";
    }
  });
});
