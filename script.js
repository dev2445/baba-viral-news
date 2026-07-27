// =========================
// BABA VIRAL NEWS V2.0
// Ultra Premium Script
// =========================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((item) => {
        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// Button Animation
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.96)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});

// Page Loaded
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
