const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const terminal = document.getElementById("terminal-container");
const input = document.getElementById("command-input");
const output = document.getElementById("terminal-output");

const keySound = document.getElementById("keySound");
const enterSound = document.getElementById("enterSound");
const glitchSound = document.getElementById("glitchSound");
const glitchOverlay = document.getElementById("glitch-overlay");

/* =========================
   ENTER SYSTEM
========================= */
enterBtn.addEventListener("click", () => {
  enterSound && enterSound.play();

  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    terminal.classList.remove("hidden");
    input.focus();
  }, 800);
});

/* =========================
   KEYBOARD SOUND
========================= */
input.addEventListener("keydown", () => {
  if (Math.random() > 0.7 && keySound) {
    keySound.currentTime = 0;
    keySound.play();
  }
});

/* =========================
   TYPEWRITER EFFECT
========================= */
function typeText(text, speed = 20) {
  return new Promise(resolve => {
    let i = 0;
    const line = document.createElement("div");
    output.appendChild(line);

    function typing() {
      if (i < text.length) {
        line.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      } else {
        resolve();
      }
    }

    typing();
  });
}

/* =========================
   DELAY
========================= */
function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

/* =========================
   GLITCH EFFECT
========================= */
function triggerGlitch() {
  if (!glitchOverlay || !glitchSound) return;

  glitchOverlay.classList.add("glitch-active");
  glitchSound.currentTime = 0;
  glitchSound.play();

  setTimeout(() => {
    glitchOverlay.classList.remove("glitch-active");
  }, 300);
}

/* =========================
   SKILL BAR
========================= */
function createSkillBar(name, percent) {
  const container = document.createElement("div");
  container.style.margin = "10px 0";

  const label = document.createElement("div");
  label.innerText = name;

  const bar = document.createElement("div");
  bar.style.height = "6px";
  bar.style.background = "rgba(255,255,255,0.1)";
  bar.style.marginTop = "4px";
  bar.style.borderRadius = "5px";
  bar.style.overflow = "hidden";

  const fill = document.createElement("div");
  fill.style.height = "100%";
  fill.style.width = "0%";
  fill.style.background = "#00ff9f";
  fill.style.transition = "width 1s ease";

  bar.appendChild(fill);
  container.appendChild(label);
  container.appendChild(bar);
  output.appendChild(container);

  setTimeout(() => {
    fill.style.width = percent + "%";
  }, 100);
}

/* =========================
   PROJECT CARD
========================= */
function createProjectCard(title, desc) {
  const card = document.createElement("div");
  card.style.border = "1px solid rgba(0,255,159,0.3)";
  card.style.padding = "10px";
  card.style.margin = "10px 0";
  card.style.borderRadius = "6px";
  card.style.background = "rgba(0,0,0,0.4)";
  card.style.animation = "fadeIn 1s ease";

  const t = document.createElement("div");
  t.innerHTML = `<strong>${title}</strong>`;

  const d = document.createElement("div");
  d.style.color = "#aaa";
  d.innerText = desc;

  card.appendChild(t);
  card.appendChild(d);

  output.appendChild(card);
}

/* =========================
   COMMANDS
========================= */
const commands = {

  help: async () => {
    await typeText("Available commands:");
    await typeText("about");
    await typeText("skills");
    await typeText("projects");
    await typeText("contact");
    await typeText("resume");
    await typeText("hobbies");
    await typeText("clear");
  },

  about: async () => {
    await typeText("Initializing profile...");
    await delay(300);
    await typeText("Ashutosh Sharma");
    await typeText("CSE Student | System Thinker");
    await typeText("I don't follow tutorials. I reverse engineer them.");
  },

  skills: async () => {
    await typeText("Loading skill matrix...\n");

    createSkillBar("C++", 90);
    createSkillBar("Python", 85);
    createSkillBar("JavaScript", 80);
    createSkillBar("Machine Learning", 75);
    createSkillBar("DSA", 88);
  },

  projects: async () => {
    triggerGlitch();
    await typeText("Decrypting project files...\n");

    createProjectCard("Terminal Portfolio", "Interactive hacker-style portfolio");
    createProjectCard("ML Systems", "Intelligent models");
    createProjectCard("Web Experiments", "Animation-heavy builds");
  },

  contact: async () => {
    await typeText("Email: your-email@example.com");
    await typeText("LinkedIn: linkedin.com/in/yourprofile");
    await typeText("GitHub: github.com/yourusername");
  },

  resume: async () => {
    triggerGlitch();
    await typeText("Loading resume...\n");

    await typeText("Field: Computer Science Engineering");
    await typeText("Focus: ML + Web + Systems");
    await typeText("Strength: Problem solving");
  },

  hobbies: async () => {
    await typeText("Sports | Tech | Deep Thinking");
  },

  clear: async () => {
    output.innerHTML = "";
  }

};

/* =========================
   INPUT HANDLER
========================= */
input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();

    const line = document.createElement("div");
    line.innerHTML = `<span style="color:#888">$</span> ${cmd}`;
    output.appendChild(line);

    input.value = "";

    // easter egg
    if (cmd === "whoami") {
      await typeText("Someone who refuses to be average.");
      return;
    }

    if (commands[cmd]) {
      await commands[cmd]();
    } else {
      await typeText("Command not found. Type 'help'");
    }

    output.scrollTop = output.scrollHeight;
  }
});
