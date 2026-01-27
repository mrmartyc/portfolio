/* --- PŘEKLADY (DICTIONARY) --- */
const translations = {
    cs: {
        nav_about: "O mně",
        nav_services: "Služby",
        nav_portfolio: "Portfolio",
        nav_contact: "Kontakt",
        
        // O MNĚ
        hero_job: "Full-Stack Vývojář & Architekt Řešení",
        hero_hello: "Tvořím webové systémy,",
        hero_span_name: "které vydělávají.",
        hero_desc_1: "Nejsem jen programátor, jsem váš technický partner. Za poslední roky jsem přešel od tvorby jednoduchých webů k vývoji komplexních e-shopů a interních systémů na míru. Rozumím tomu, že web musí nejen vypadat dobře, ale hlavně plnit obchodní cíle.",
        hero_desc_2: "Moje specializace je PHP backend a databázová architektura. Díky tomu, že ovládám celý proces vývoje (Full-Stack), dokážu doručit robustní řešení rychleji a efektivněji, než velké agentury.",
        stat_years: "Let zkušeností",
        stat_clients: "Spokojených klientů",
        hero_contact_note: "Hledáte spolehlivost a čistý kód? Napište mi.",
        
        // SLUŽBY (NOVÉ)
        section_services: "Co nabízím",
        service_1_title: "Weby na míru",
        service_1_desc: "Moderní, rychlé a responzivní weby, které vás odliší od konkurence. Žádné šablony, ale čistý kód.",
        service_2_title: "E-shop řešení",
        service_2_desc: "Komplexní e-commerce systémy s napojením na platební brány a skladové hospodářství.",
        service_3_title: "Správa & Údržba",
        service_3_desc: "Webem to nekončí. Postaráme se o technické aktualizace, zálohování i drobné úpravy textů či fotek. Vy se věnujte podnikání, techniku nechte na nás.",
        service_4_title: "Aby vás bylo vidět",
        service_4_desc: "Mít web nestačí, zákazníci ho musí najít. Pomůžeme vám dostat se na přední příčky ve vyhledávačích (Google, Seznam), abyste měli více objednávek.",

        // PORTFOLIO
        section_portfolio: "Ukázky mé práce",
        section_coop: "Dlouhodobé spolupráce",
        proj_sigma: "Komplexní školní projekt s vlastním objednávkovým systémem.",
        proj_uhulu: "Prezentační web pro gastro podnik s důrazem na rychlost.",
        proj_title_personal: "Osobní Portfolio",
        proj_personal: "Ukázka moderních technologií a designu.",
        proj_parties: "Portfolio showcase pro eventovou agenturu.",
        btn_visit: "Prohlédnout",
        
        // PATIČKA A COOKIES
        footer_rights: "Všechna práva vyhrazena.",
        cookie_text: "Tento web používá cookies k analýze návštěvnosti.",
        cookie_btn: "Rozumím"
    },
    en: {
        nav_about: "About",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        
        // ABOUT
        hero_job: "Full-Stack Developer & Solution Architect",
        hero_hello: "Building web systems",
        hero_span_name: "that drive business.",
        hero_desc_1: "I'm not just a coder; I'm your technical partner. Over the years, I've evolved from building simple sites to architecting complex custom e-shops and internal systems. I understand that a website must not only look good but, more importantly, achieve business goals.",
        hero_desc_2: "My core expertise lies in PHP backend and database architecture. As a Full-Stack developer controlling the entire development process, I deliver robust solutions faster and more efficiently than large agencies.",
        stat_years: "Years of Experience",
        stat_clients: "Happy Clients",
        hero_contact_note: "Looking for reliability and clean code? Let's talk.",

        // SERVICES (NEW)
        section_services: "Services",
        service_1_title: "Custom Websites",
        service_1_desc: "Modern, fast, and responsive websites that set you apart. No templates, just clean code.",
        service_2_title: "E-commerce Solutions",
        service_2_desc: "Complex e-commerce systems integrated with payment gateways and inventory management.",
        service_3_title: "Management & Maintenance",
        service_3_desc: "It doesn't end with the website launch. We take care of technical updates, backups, and minor text or photo adjustments. Focus on your business and leave the technical side to us.",
        service_4_title: "Online Visibility",
        service_4_desc: "Having a website isn't enough; customers need to find it. We will help you reach top positions in search engines (Google, Seznam) to drive more orders.",
        
        // PORTFOLIO
        section_portfolio: "Selected Work",
        section_coop: "Long-term Cooperations",
        proj_sigma: "Complex academic project with a custom ordering system.",
        proj_uhulu: "Presentation website for a local business focusing on speed.",
        proj_title_personal: "Personal Portfolio",
        proj_personal: "Showcase of modern technologies and design.",
        proj_parties: "Portfolio showcase for an event agency.",
        btn_visit: "View Project",
        
        // FOOTER & COOKIES
        footer_rights: "All rights reserved.",
        cookie_text: "This website uses cookies to analyze traffic.",
        cookie_btn: "I Understand"
    }
};

/* --- FUNKCE PRO ZMĚNU JAZYKA --- */
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-switch span, .mobile-lang span').forEach(span => {
        span.classList.remove('active');
        if(span.innerText.toLowerCase() === lang.toLowerCase() || 
           (lang === 'cs' && span.innerText === 'CZ') || 
           (lang === 'en' && span.innerText === 'EN')) {
            span.classList.add('active');
        }
    });
    
    const enBtn = document.getElementById('lang-en');
    const csBtn = document.getElementById('lang-cs');
    if(enBtn && csBtn) {
        if(lang === 'en') {
            enBtn.classList.add('active');
            csBtn.classList.remove('active');
        } else {
            csBtn.classList.add('active');
            enBtn.classList.remove('active');
        }
    }
    localStorage.setItem('selectedLang', lang);
}

/* --- LOADER & INITIALIZATION --- */
function hideLoader() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    if (!loader || loader.style.display === "none") return;
    loader.style.opacity = "0";
    if (content) {
        content.style.display = "block";
        setTimeout(() => {
            loader.style.display = "none";
            content.style.opacity = "1";
        }, 500);
    } else {
        loader.style.display = "none";
    }
}

window.addEventListener("load", () => {
    const savedLang = localStorage.getItem('selectedLang') || 'cs';
    changeLanguage(savedLang);

    if (typeof particlesJS !== 'undefined') {
        try {
            particlesJS("particles-js", {
                "particles": {
                    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                    "color": { "value": "#ffffff" },
                    "shape": { "type": "circle" },
                    "opacity": { "value": 0.5, "random": true },
                    "size": { "value": 3, "random": true },
                    "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
                    "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }
                },
                "retina_detect": true
            });
        } catch (e) { console.log("Chyba particles:", e); }
    }
    hideLoader();
});
setTimeout(hideLoader, 3000);

/* --- ANIMACE ČÍSEL --- */
const statsSection = document.querySelector('.stats-row');
const counters = document.querySelectorAll('.counter');
let started = false;

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
        started = true;
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const symbol = counter.getAttribute('data-symbol') || "";
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current) + symbol;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target + symbol;
                }
            };
            updateCounter();
        });
    }
});
if(statsSection) { observer.observe(statsSection); }

/* --- MOBILE MENU --- */
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
if (toggleBtn) {
    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
        toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    };
}

/* --- COOKIES --- */
const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => { cookieBanner.classList.add('show'); }, 2000);
}
if (acceptBtn) {
    acceptBtn.onclick = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('show');
    };
}
