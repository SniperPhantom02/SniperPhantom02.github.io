const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

// Cursor expansion effect on links
document.querySelectorAll('a, button').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.classList.add('scale-[2.5]', 'bg-shelby-gold/10'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('scale-[2.5]', 'bg-shelby-gold/10'));
});
