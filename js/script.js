document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            aboutTitle: "Thai Restaurant in Vilnius",
            aboutDescription: "Where you can enjoy various dishes made with traditional recipes and ingredients. Our restaurant offers authentic Thai flavors...",
            contactInfo: "Contact Information",
            workingHours: "Working Hours",
            workingHoursContent: [
                "Monday: Closed",
                "Tuesday: 11:00 AM - 10:00 PM",
                // ... другие дни недели
            ]
        },
        ru: {
            aboutTitle: "Тайский ресторан в Вильнюсе",
            aboutDescription: "Где вы можете наслаждаться различными блюдами...",
            contactInfo: "Контактная информация",
            workingHours: "Часы работы",
            workingHoursContent: [
                "Понедельник: Закрыто",
                "Вторник: 11:00 - 22:00",
                // ... другие дни недели
            ]
        },
    };


    const contactModal = document.getElementById('contact-modal');
    const hoursModal = document.getElementById('hours-modal');
    const aboutModal = document.getElementById('contact-about');

    const contactsLink = document.getElementById('contacts-link');
    const workingHoursLink = document.getElementById('working-hours-link');
    const aboutLink = document.getElementById('open-modal');

    const closeButtons = document.querySelectorAll('.close-button');

    // Функция для открытия модального окна
    const openModal = (modal) => {
        modal.style.display = 'block';
    };

    // Функция для закрытия модального окна
    const closeModal = (modal) => {
        modal.style.display = 'none';
    };

    contactsLink.onclick = (event) => {
        event.preventDefault();
        openModal(contactModal);
    };

    workingHoursLink.onclick = (event) => {
        event.preventDefault();
        openModal(hoursModal);
    };

    aboutLink.onclick = (event) => {
        event.preventDefault();
        openModal(aboutModal);
    };

    closeButtons.forEach(button => {
        button.onclick = (event) => {
            closeModal(event.target.closest('.modal'));
        };
    });

    window.onclick = (event) => {
        if (event.target === contactModal) {
            closeModal(contactModal);
        }
        if (event.target === hoursModal) {
            closeModal(hoursModal);
        }
        if (event.target === aboutModal) {
            closeModal(aboutModal);
        }
    };

    // Бургер-меню
    const burger = document.getElementById('burger');
    const menuList = document.getElementById('menu-list');
    burger.onclick = () => {
        menuList.classList.toggle('active');
        burger.classList.toggle('active');
    };
        

    // Прокрутка навигационного меню
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.menu');
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Прокрутка изображений
    const scrollContainer = document.querySelector('.scroll-content');
    const scrollLeftButton = document.querySelector('.scroll-left');
    const scrollRightButton = document.querySelector('.scroll-right');

    const scrollLeft = () => {
        scrollContainer.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        scrollContainer.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    };

    scrollLeftButton.onclick = scrollLeft;
    scrollRightButton.onclick = scrollRight;
});
