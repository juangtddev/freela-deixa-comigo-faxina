// Seleciona todos os links do menu e todas as seções
const menuLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.5 // 50% visível
};

// Callback quando a seção entra ou sai da viewport
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove 'active' de todos os links
            menuLinks.forEach(link => link.classList.remove('active'));

            // Adiciona 'active' ao link correspondente
            const id = entry.target.id;
            const activeLink = document.querySelector(`.nav__link[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

// Cria o observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observa todas as seções
sections.forEach(section => observer.observe(section));

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});