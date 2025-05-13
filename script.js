document.addEventListener("DOMContentLoaded", function () {
    const homeBtn = document.getElementById("home-btn");
    const certificatesBtn = document.getElementById("certificates-btn");
    const projectsBtn = document.getElementById("projects-btn");
    const contactsBtn = document.getElementById("contacts-btn");
    const homeSection = document.getElementById("home");
    const certificates = document.getElementById("certificates");
    const projects = document.getElementById("projects");
    const contacts = document.getElementById("contacts");

    homeBtn.addEventListener("click", function () {
        homeSection.style.display = "block";
        certificates.style.display = "none";
        projects.style.display = "none";
        contacts.style.display = "none";
    });

    certificatesBtn.addEventListener("click", function () {
        homeSection.style.display = "none";
        certificates.style.display = "block";
        projects.style.display = "none";
        contacts.style.display = "none";
    });
    projectsBtn.addEventListener("click", function () {
        homeSection.style.display = "none";
        certificates.style.display = "none";
        projects.style.display = "block";
        contacts.style.display = "none";
    });
    contactsBtn.addEventListener("click", function () {
        homeSection.style.display = "none";
        certificates.style.display = "none";
        projects.style.display = "none";
        contacts.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll(".info img, .t1, .t3");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        {
            threshold: 0.2 // 20% блока должно быть видно, чтобы он появился
        }
    );

    blocks.forEach((block) => {
        block.classList.add("hidden"); // Изначально скрываем элементы
        observer.observe(block);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});
