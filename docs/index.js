gsap.registerPlugin(ScrollTrigger);

/* CURSOR */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2
  });
});

/* HERO ENTRY */
gsap.from(".name", {
  y: 80,
  opacity: 0,
  duration: 1
});

/* TEXT MORPH */
const texts = ["CSE Student", "Builder", "Problem Solver"];
let i = 0;

setInterval(() => {
  const el = document.querySelector(".tagline");
  el.innerText = texts[i];
  i = (i + 1) % texts.length;
}, 2000);

/* STICKY SCROLL TEXT */
gsap.to(".sticky-content", {
  scale: 1.5,
  scrollTrigger: {
    trigger: ".sticky-section",
    start: "top center",
    end: "bottom center",
    scrub: true
  }
});

/* SKILL FLOAT */
gsap.utils.toArray(".skill").forEach((skill) => {
  gsap.to(skill, {
    y: 15,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut"
  });
});
