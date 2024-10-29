// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing effect for the job title
const jobTitle = ["Data Engineer", "AWS Solution Architect Associate", "Python, PySpark & SQL Developer", "Knight @ LeetCode"];
let titleIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < jobTitle[titleIndex].length) {
        document.getElementById("job-title").textContent += jobTitle[titleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        document.getElementById("job-title").textContent = jobTitle[titleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        titleIndex = (titleIndex + 1) % jobTitle.length;
        setTimeout(type, 1000);
    }
}

document.addEventListener("DOMContentLoaded", type);

// Scroll reveal animation for sections
const revealSections = document.querySelectorAll("section");

function reveal() {
    const windowHeight = window.innerHeight;
    revealSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", reveal);

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();
