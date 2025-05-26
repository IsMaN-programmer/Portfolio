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
    const menuLinks = document.querySelectorAll(".menu li a"); // Получаем все ссылки внутри меню

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
        
        // Меняем иконку
        menuBtn.innerHTML = menu.classList.contains("active") ? "✖" : "☰";
    });

    // Закрытие меню после клика на ссылку **только на мобильных устройствах**
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 768) { // Проверяем ширину экрана
                menu.classList.remove("active");
                menu.style.display = "none";
                menuBtn.innerHTML = "☰"; // Возвращаем бургер-иконку
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-button");

    searchButton.addEventListener("click", function (event) {
        event.preventDefault(); // Останавливаем отправку формы
        const query = searchInput.value.toLowerCase();

        // Скрываем все разделы перед показом нужного
        document.getElementById("contacts").style.display = "none";
        document.getElementById("projects").style.display = "none";
        document.getElementById("certificates").style.display = "none";
        document.getElementById("home").style.display = "none";

        // Показываем только нужный раздел
        if (query.includes("contacts")) {
            document.getElementById("contacts").style.display = "block";
        } else if (query.includes("projects")) {
            document.getElementById("projects").style.display = "block";
        } else if (query.includes("certificates")) {
            document.getElementById("certificates").style.display = "block";
        } else {
            alert("Раздел не найден, попробуйте другие ключевые слова.");
        }
    });
});