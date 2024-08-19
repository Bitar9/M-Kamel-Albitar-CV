document.addEventListener('DOMContentLoaded', () => {
    const certifications = [
        {
            title: "The Upper-Intermediate Level (B2)",
            url: "certificates/Upper_Intermediate_Level_B2.pdf",
            issuer: "Edraak.org",
            date: "2018-12-12",
            logo: "edraak_logo.png"
        },
        {
            title: "Computer Essentials",
            url: "certificates/Computer_Essentials.pdf",
            issuer: "Edraak.org",
            date: "2019-08-20",
            logo: "edraak_logo.png"
        },
        {
            title: "Advanced Excel - (2)",
            url: "certificates/Advanced_Excel_2.pdf",
            issuer: "Edraak.org",
            date: "2022-6-05",
            logo: "edraak_logo.png"
        },
        {
            title: "Data Science & Machine Learning",
            url: "certificates/Data_Science_Machine_Learning.pdf",
            issuer: "Edraak.org",
            date: "2022-8-15",
            logo: "edraak_logo.png"
        },
        {
            title: "Emotional Intelligence",
            url: "certificates/Emotional_Intelligence.pdf",
            issuer: "Edraak.org",
            date: "2022-10-15",
            logo: "edraak_logo.png"
        },
        {
            title: "Protect Systems from Penetrations",
            url: "certificates/Protect_Systems_from_Penetrations.pdf",
            issuer: "Edraak.org",
            date: "2022-11-15",
            logo: "edraak_logo.png"
        },
        {
            title: "Data Analysis with Python",
            url: "certificates/Data_Analysis_with_Python.pdf",
            issuer: "cognitiveclass.ai",
            date: "2023-12-28",
            logo: "cognitiveclass_logo.png"
        },
        {
            title: "CS50",
            issuer: "Harvard.edu",
            date: "August 2024",
            url: "Cs50.pdf",
            logo: "harvard_logo.png"
        },
        // More certifications here
    ];

    const certGrid = document.querySelector('.cert-grid');

    certifications.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.classList.add('cert-card');
        if (cert.issuer === "Harvard.edu") {
            certCard.classList.add('latest');
            certCard.innerHTML = `
                <img src="${cert.logo}" alt="${cert.issuer} Logo">
                <div>
                    <h3>${cert.title}</h3>
                    <p>Issued by ${cert.issuer} on ${cert.date}</p>
                    <a href="${cert.url}" target="_blank" class="btn" data-en="View Certificate" data-sv="Visa Certifikat">View Certificate</a>
                </div>
                <div class="banner">Latest</div>
            `;
        } else {
            certCard.innerHTML = `
                <img src="${cert.logo}" alt="${cert.issuer} Logo">
                <div>
                    <h3>${cert.title}</h3>
                    <p>Issued by ${cert.issuer} on ${cert.date}</p>
                    <a href="${cert.url}" target="_blank" class="btn" data-en="View Certificate" data-sv="Visa Certifikat">View Certificate</a>
                </div>
            `;
        }
        certCard.addEventListener('click', () => {
            certCard.classList.toggle('expanded');
        });
        certGrid.appendChild(certCard);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Language Switcher
    const languageSwitcher = document.querySelector('.language-switcher');
    const elementsToTranslate = document.querySelectorAll('[data-en]');

    languageSwitcher.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const lang = e.target.id;
            document.querySelectorAll('.language-switcher button').forEach(button => {
                button.classList.toggle('active', button.id === lang);
            });
            elementsToTranslate.forEach(element => {
                element.textContent = element.getAttribute(`data-${lang}`);
            });
        }
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('header ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});
