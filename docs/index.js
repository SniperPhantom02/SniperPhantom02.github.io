gsap.registerPlugin(ScrollTrigger);

/* CURSOR */

const cursor =
document.querySelector(".custom-cursor");

document.addEventListener("mousemove",(e)=>{

gsap.to(cursor,{
x:e.clientX,
y:e.clientY,
duration:0.08
});

});

/* HERO */

gsap.from("#hero-sub",{
opacity:0,
y:80,
duration:1.2
});

gsap.from("#hero-title",{
opacity:0,
y:120,
duration:1.5
});

gsap.from("#hero-p",{
opacity:0,
y:60,
duration:1.2
});

/* SECTION REVEALS */

gsap.utils.toArray("section").forEach((section)=>{

gsap.from(section,{
opacity:0,
y:120,
duration:1.2,

scrollTrigger:{
trigger:section,
start:"top 85%"
}

});

});

/* CARD ANIMATIONS */

gsap.utils.toArray(".intel-card,.war-card,.exp-card").forEach((card)=>{

gsap.from(card,{
opacity:0,
y:100,
rotateX:20,
duration:1.4,

scrollTrigger:{
trigger:card,
start:"top 90%"
}

});

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const moveX =
(x - rect.width/2)/18;

const moveY =
(y - rect.height/2)/18;

gsap.to(card,{
rotateY:moveX,
rotateX:-moveY,
duration:0.4
});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{
rotateX:0,
rotateY:0,
duration:0.6
});

});

});

/* ACHIEVEMENTS */

gsap.from(".achievement-card",{

opacity:0,
x:100,
stagger:0.2,

scrollTrigger:{
trigger:"#achievements",
start:"top 80%"
}

});

/* NAV */

gsap.from("nav",{
y:-100,
opacity:0,
duration:1.2
});

/* BACKGROUNDS */

const backgrounds = [

"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2070&auto=format&fit=crop",

"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",

"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"

];

const bg =
document.getElementById("bg-image");

bg.style.backgroundImage=
`linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.88)), url(${backgrounds[0]})`;

window.addEventListener("scroll",()=>{

const scrollY =
window.scrollY;

const pageHeight =
document.body.scrollHeight -
window.innerHeight;

const section =
Math.floor((scrollY/pageHeight)*backgrounds.length);

bg.style.backgroundImage=
`linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.88)), url(${backgrounds[Math.min(section, backgrounds.length-1)]})`;

});

/* LOADER */

window.addEventListener("load",()=>{

gsap.to(".loader-progress",{

width:"100%",
duration:1.8,

onComplete:()=>{

gsap.to("#loader",{

opacity:0,
duration:1,

onComplete:()=>{

document.getElementById("loader").remove();

}

});

}

});

});

/* SCROLL PROGRESS */

window.addEventListener("scroll",()=>{

const scrollTop =
window.scrollY;

const docHeight =
document.body.scrollHeight -
window.innerHeight;

const progress =
(scrollTop/docHeight)*100;

document.getElementById("scroll-progress")
.style.width = progress + "%";

});

/* TERMINAL */

const terminalInput =
document.getElementById("terminal-command");

const terminalOutput =
document.getElementById("terminal-output");

const commands = {

help:`
Available Commands:
- projects
- research
- skills
- mission
- solar
- contact
`,

projects:`
Quantum-Safe Communication
RedFlag
STEAL-Net
Cybersecurity Systems
`,

research:`
Research Areas:
- AI Systems
- Energy Forecasting
- Quantum Security
- Privacy Infrastructure
`,

skills:`
Python
JavaScript
Linux
GSAP
Cybersecurity
`,

mission:`
Building futuristic secure systems
inspired by intelligence operations,
space systems, and advanced computing.
`,

solar:`
Interests:
- Orbital Mechanics
- Planetary Systems
- Space Exploration
- Simulation Environments
`,

contact:`
GitHub:
github.com/SniperPhantom02

Email:
sharmaashutosh2610@gmail.com
`

};

if(terminalInput){

terminalInput.addEventListener("keydown",(e)=>{

if(e.key === "Enter"){

const cmd =
terminalInput.value.trim().toLowerCase();

const response =
commands[cmd] || "Unknown command.";

terminalOutput.innerHTML += `

<div class="mt-4">
<span style="color:#C5A059">
> ${cmd}
</span>

<p style="color:#999; white-space:pre-line; margin-top:8px;">
${response}
</p>
</div>
`;

terminalInput.value = "";

terminalOutput.scrollTop =
terminalOutput.scrollHeight;

}

});

}

/* CONTACT */

function toggleContact(){

document
.getElementById("contact-modal")
.classList.toggle("hidden");

}
/* =========================
   LEGACY DOSSIER EFFECT
========================= */

gsap.utils.toArray(".achievement-dossier")
.forEach((card)=>{

gsap.from(card,{

opacity:0,
y:120,
duration:1.2,

scrollTrigger:{
trigger:card,
start:"top 90%"
}

});

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
(x - rect.width/2)/18;

const rotateX =
(y - rect.height/2)/18;

gsap.to(card,{
rotateY:rotateY,
rotateX:-rotateX,
duration:0.3
});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{
rotateX:0,
rotateY:0,
duration:0.6
});

});

});