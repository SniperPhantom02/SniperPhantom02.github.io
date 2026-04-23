/* =========================
   FADE-IN ON SCROLL
========================= */

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


/* =========================
   SKILLS STAGGER ANIMATION
========================= */

const skillsSection = document.querySelector(".skills-section");

if (skillsSection) {
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const skillElements = entry.target.querySelectorAll(".skill");

      skillElements.forEach((skill, index) => {
        setTimeout(() => {
          skill.style.opacity = "1";
          skill.style.transform = "translateY(0)";
        }, index * 150);
      });

    });
  }, { threshold: 0.3 });

  skillObserver.observe(skillsSection);
}
