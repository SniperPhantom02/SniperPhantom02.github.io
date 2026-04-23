// 1. Sniper Cursor Logic (Carried over from before)
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

document.querySelectorAll('a, button').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.classList.add('scale-[2.5]', 'bg-shelby-gold/10'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('scale-[2.5]', 'bg-shelby-gold/10'));
});

// 2. Scroll Reveal Logic (The "Apple" Effect)
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, revealOptions);

// Target all project cards and timeline items
document.querySelectorAll('.md\\:col-span-2, .rounded-3xl, .mb-16.relative').forEach(item => {
    // Initial state: Hidden and slightly shifted down
    item.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-out');
    revealOnScroll.observe(item);
});
