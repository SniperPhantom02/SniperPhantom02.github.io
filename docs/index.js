const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const terminal = document.getElementById("terminal-container");
const input = document.getElementById("command-input");
const output = document.getElementById("terminal-output");
const keySound = document.getElementById("keySound");

/* =========================
   ENTER SYSTEM ANIMATION
========================= */
enterBtn.addEventListener("click", () => {
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
  keySound.currentTime = 0;
  keySound.play();
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
   COMMAND SYSTEM
========================= */
const commands = {

  help: async () => {
    await typeText("Available commands:");
    await typeText("about   → Who am I");
    await typeText("skills  → My arsenal");
    await typeText("projects → Classified work");
    await typeText("contact → Find me");
    await typeText("clear   → Reset terminal");
  },

  about: async () => {
    await typeText("Initializing profile...");
    await delay(400);
    await typeText("Ashutosh Sharma");
    await typeText("CSE Student | System Thinker");
    await typeText("I don't follow tutorials. I reverse engineer them.");
    await typeText("I don't chase trends. I understand systems.");
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
    await typeText("Decrypting project files...\n");

    createProjectCard("Terminal Portfolio", "Interactive hacker-style portfolio");
    createProjectCard("ML Systems", "Model-based intelligent solutions");
    createProjectCard("Web Experiments", "Animation-heavy UI builds");
  },

  contact: async () => {
    await typeText("Establishing connection...\n");
    await typeText("Email: your-email@example.com");
    await typeText("LinkedIn: linkedin.com/in/yourprofile");
    await typeText("GitHub: github.com/yourusername");
  },

  clear: async () => {
    output.innerHTML = "";
  }

};

/* =========================
   HANDLE INPUT
========================= */
input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();

    // show command
    const commandLine = document.createElement("div");
    commandLine.innerHTML = `<span style="color:#888">$</span> ${cmd}`;
    output.appendChild(commandLine);

    input.value = "";

    if (commands[cmd]) {
      await commands[cmd]();
    } else {
      await typeText("Command not found. Type 'help'");
    }

    output.scrollTop = output.scrollHeight;
  }
});
