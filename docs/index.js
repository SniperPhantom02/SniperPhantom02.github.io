<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Ashutosh Sharma | Terminal Portfolio</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Playfair+Display:wght@600&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="style.css">

</head>

<body>

  <!-- Background Glow -->
  <div class="bg-glow"></div>

  <!-- Intro Screen -->
  <section id="intro">
    <h1 class="title">Ashutosh Sharma</h1>
    <p class="subtitle">"Code. Break. Rebuild. Repeat."</p>
    <button id="enterBtn">ENTER SYSTEM</button>
  </section>

  <!-- Terminal Container -->
  <div id="terminal-container" class="hidden">
    
    <div class="terminal-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="terminal-title">ashutosh@system:~</span>
    </div>

    <div id="terminal-output"></div>

    <div class="terminal-input-line">
      <span class="prompt">$</span>
      <input type="text" id="command-input" autofocus />
    </div>

  </div>

  <!-- Audio (mechanical keyboard) -->
  <audio id="keySound" src="assets/keyboard.mp3" preload="auto"></audio>

  <!-- Scripts -->
  <script src="index.js"></script>

</body>
</html>
