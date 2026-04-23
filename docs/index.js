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
    await typeText("about  - Who am I");
    await typeText("skills - My weapons");
    await typeText("projects - Things I've built");
    await typeText("contact - Reach me");
    await typeText("clear - Clean screen");
  },

  about: async () => {
    await typeText("Ashutosh Sharma");
    await typeText("CSE Student | Builder | Problem Solver");
    await typeText("I don’t just write code. I design systems.");
  },

  skills: async () => {
    await typeText("Languages: C++, Python, JavaScript");
    await typeText("Domains: Machine Learning, Web Dev, DSA");
    await typeText("Mindset: Break → Understand → Rebuild better");
  },

  projects: async () => {
    await typeText("• Terminal Portfolio (this)");
    await typeText("• ML-based systems (more coming...)");
    await typeText("• Web projects with animation focus");
  },

  contact: async () => {
    await typeText("Email: your-email@example.com");
    await typeText("LinkedIn: linkedin.com/in/yourprofile");
    await typeText("GitHub: github.com/yourusername");
  },

  clear: async () => {
    output.innerHTML = "";
  },

  secret: async () => {
    await typeText("You weren’t supposed to find this.");
    await typeText("But I like curious minds.");
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
