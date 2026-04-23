/* =========================
   TEXT REVEAL (NAME)
========================= */
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
const nameEl = document.querySelector(".name");

if (nameEl) {
  const text = nameEl.innerText;
  nameEl.innerText = "";

  text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.innerText = char;
    span.style.opacity = "0";
    span.style.display = "inline-block";
    span.style.transform = "translateY(20px)";
    span.style.transition = "all 0.6s ease";

    nameEl.appendChild(span);

    setTimeout(() => {
      span.style.opacity = "1";
      span.style.transform = "translateY(0)";
    }, i * 50);
  });
}


/* =========================
   FADE-IN SECTIONS
========================= */

const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("show");
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));


/* =========================
   SKILL STAGGER + FLOAT
========================= */

const skillsSection = document.querySelector(".skills-section");

if (skillsSection) {
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const skills = entry.target.querySelectorAll(".skill");

      skills.forEach((skill, i) => {
        setTimeout(() => {
          skill.style.opacity = "1";
          skill.style.transform = "translateY(0)";
          addFloating(skill);
        }, i * 150);
      });

    });
  }, { threshold: 0.3 });

  skillObserver.observe(skillsSection);
}


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
