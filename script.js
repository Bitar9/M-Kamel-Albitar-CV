document.addEventListener('DOMContentLoaded', () => {
    const certifications = [
        {
        title: "Cybersecurity Operations",
        issuer: "Cisco Networking Academy",
        date: "2026-01-04",
        url: "certificates/Cisco_Cybersecurity_Albitar.pdf",
        logo: "cisco_logo.png",
        verifyUrl: "https://www.credly.com/badges/6045c080-1d3e-4525-a18f-b1778b2f56f9/linked_in_profile" // Leave empty or add the Credly link if you have one
    },
        {
        title: "Inbound Marketing",
        issuer: "HubSpot Academy",
        date: "2025",
        url: "certificates/MarketingInbound.png",
        logo: "HubSpot-Academy-Logo-1-.png",
        verifyUrl: "https://app-eu1.hubspot.com/academy/achievements/jf0w4jp5/en/1/mohamed-na/inbound-marketing"
    },
        {
        title: "Leadership Essentials Certificate",
        issuer: "Cornerstone OnDemand Foundation",
        date: "2025",
        url: "Leadership_Essentials.pdf",
        logo: "Cornerstone.jpg",
        verifyUrl: ""
    },
        {
        title: "CS50 Cybersecurity",
        issuer: "Harvard.edu",
        date: "2025",
        url: "CS50CY.pdf",
        logo: "harvard_logo.png",
        verifyUrl: "https://cs50.harvard.edu/certificates/1b65358c-2c07-409a-a442-5881e37780c3"
    },
        {
        title: "CS50",
        issuer: "Harvard.edu",
        date: "August 2024",
        url: "Cs50.pdf",
        logo: "harvard_logo.png",
        verifyUrl: "https://certificates.cs50.io/536b1726-f325-49ff-8d67-206d66a2a9e1.pdf?size=letter"
    },
    {
        title: "Data Analysis with Python",
        url: "certificates/Data_Analysis_with_Python.pdf",
        issuer: "cognitiveclass.ai",
        date: "2023-12-28",
        logo: "cognitiveclass_logo.png",
        verifyUrl: "https://courses.cognitiveclass.ai/certificates/6850ae965ffc47308b40fd3d8cf0bb9e"
    },
    {
        title: "Protect Systems from Penetrations",
        url: "certificates/Protect_Systems_from_Penetrations.pdf",
        issuer: "Edraak.org",
        date: "2022-11-15",
        logo: "edraak_logo.png",
        verifyUrl: ""
    },
    {
        title: "Emotional Intelligence",
        url: "certificates/Emotional_Intelligence.pdf",
        issuer: "Edraak.org",
        date: "2022-10-15",
        logo: "edraak_logo.png",
        verifyUrl: ""
    },
    {
        title: "Data Science & Machine Learning",
        url: "certificates/Data_Science_Machine_Learning.pdf",
        issuer: "Edraak.org",
        date: "2022-08-15",
        logo: "edraak_logo.png",
        verifyUrl: ""
    },
    {
        title: "Advanced Excel - (2)",
        url: "certificates/Advanced_Excel_2.pdf",
        issuer: "Edraak.org",
        date: "2022-06-05",
        logo: "edraak_logo.png",
        verifyUrl: ""
    },
    {
        title: "Computer Essentials",
        url: "certificates/Computer_Essentials.pdf",
        issuer: "Edraak.org",
        date: "2019-08-20",
        logo: "edraak_logo.png",
        verifyUrl: ""
    },
    {
        title: "The Upper-Intermediate Level (B2)",
        url: "certificates/Upper_Intermediate_Level_B2.pdf",
        issuer: "Edraak.org",
        date: "2018-12-12",
        logo: "edraak_logo.png",
        verifyUrl: ""
    }
        // More certifications here
    ];

    // Helpers for dates
    const parseDate = (val) => {
        if (!val) return new Date(0);
        // ISO or full date
        if (/^\d{4}-\d{2}-\d{2}/.test(val)) return new Date(val);
        // Year only
        if (/^\d{4}$/.test(val)) return new Date(`${val}-01-01`);
        // Month Year strings (e.g., "August 2024")
        const d = new Date(val);
        return isNaN(d.getTime()) ? new Date(0) : d;
    };

    const formatDate = (val) => {
        if (!val) return '';
        if (/^\d{4}-\d{2}-\d{2}/.test(val)) {
            const d = new Date(val);
            return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
        }
        if (/^\d{4}$/.test(val)) {
            return val;
        }
        const d = new Date(val);
        return isNaN(d.getTime())
            ? val
            : d.toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
    };

    // Sort certifications by date descending
    const sortedCertifications = [...certifications].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

    const certGrid = document.querySelector('.cert-grid');

    sortedCertifications.forEach((cert, index) => {
        const certCard = document.createElement('div');
        certCard.classList.add('cert-card');
        const isLatest = index === 0;

        certCard.innerHTML = `
            <img src="${cert.logo}" alt="${cert.issuer} Logo">
            <div>
                <h3>${cert.title}</h3>
                <p data-en="Issued by ${cert.issuer} on ${formatDate(cert.date)}" data-sv="Utfärdat av ${cert.issuer} den ${formatDate(cert.date)}">
                    Issued by ${cert.issuer} on ${formatDate(cert.date)}
                </p>
                <a href="${cert.url}" target="_blank" class="btn" data-en="View Certificate" data-sv="Visa Certifikat">View Certificate</a>
                ${cert.verifyUrl ? `<a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn secondary" data-en="Verify" data-sv="Verifiera">Verify</a>` : ''}
            </div>
            ${isLatest ? '<div class="banner">Latest</div>' : ''}
        `;

        certCard.addEventListener('click', () => {
            certCard.classList.toggle('expanded');
        });
        certGrid.appendChild(certCard);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            // Close mobile menu after navigation
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('no-scroll');
            }
        });
    });

    // Set default language to Swedish on load
    const defaultLang = 'sv';
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        const isActive = btn.id === defaultLang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });
    document.querySelectorAll('[data-en]').forEach(el => {
        const nextText = el.getAttribute(`data-${defaultLang}`);
        if (nextText) el.textContent = nextText;
    });

    // Dynamic typed roles in hero
    const typedEl = document.querySelector('.hero-typed');
    let typedTimer = null;
    function getRolesForLang(lang) {
        try {
            const attr = typedEl?.getAttribute(`data-${lang}-roles`);
            return attr ? JSON.parse(attr) : [];
        } catch {
            return [];
        }
    }
    function runTyped(lang) {
        if (!typedEl) return;
        const roles = getRolesForLang(lang);
        let idx = 0;
        let charIdx = 0;
        let deleting = false;

        function tick() {
            const target = roles[idx] || '';
            let displayed = typedEl.textContent || '';
            if (!deleting) {
                displayed = target.slice(0, charIdx + 1);
                charIdx++;
                typedEl.textContent = displayed;
                if (displayed === target) {
                    deleting = true;
                    typedTimer = setTimeout(tick, 1200);
                    return;
                }
                typedTimer = setTimeout(tick, 80);
            } else {
                displayed = target.slice(0, charIdx - 1);
                charIdx = Math.max(charIdx - 1, 0);
                typedEl.textContent = displayed || ' ';
                if (charIdx === 0) {
                    deleting = false;
                    idx = (idx + 1) % roles.length;
                    typedTimer = setTimeout(tick, 300);
                    return;
                }
                typedTimer = setTimeout(tick, 30);
            }
        }
        if (typedTimer) clearTimeout(typedTimer);
        tick();
    }
    const activeLangBtn = document.querySelector('.language-switcher button.active');
    runTyped(activeLangBtn ? activeLangBtn.id : defaultLang);

    // Update typed roles when language changes
    const languageSwitcher = document.querySelector('.language-switcher');
    languageSwitcher.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const lang = e.target.id;
            // existing language toggle logic...
            document.querySelectorAll('.language-switcher button').forEach(button => {
                button.classList.toggle('active', button.id === lang);
                button.setAttribute('aria-pressed', String(button.id === lang));
            });
            document.querySelectorAll('[data-en]').forEach(element => {
                const nextText = element.getAttribute(`data-${lang}`);
                if (nextText) element.textContent = nextText;
            });
            runTyped(lang);
        }
    });

    // Live stats based on existing data
    const statCert = document.getElementById('stat-cert-count');
    const statProj = document.getElementById('stat-project-count');
    const statYears = document.getElementById('stat-years');

    const earliestCertDate = (sortedCertifications.length ? sortedCertifications[sortedCertifications.length - 1].date : '2018');
    const earliestYear = /^\d{4}/.test(earliestCertDate) ? Number((earliestCertDate.match(/^\d{4}/) || ['2018'])[0]) : 2018;
    const years = Math.max(new Date().getFullYear() - earliestYear + 1, 1);

    function animateNumber(el, target, duration = 900) {
        let start = 0;
        const step = Math.max(Math.ceil(target / (duration / 16)), 1);
        const interval = setInterval(() => {
            start += step;
            if (start >= target) {
                el.textContent = String(target);
                clearInterval(interval);
            } else {
                el.textContent = String(start);
            }
        }, 16);
    }

    if (statCert) animateNumber(statCert, Array.isArray(sortedCertifications) ? sortedCertifications.length : 0);
    if (statProj) animateNumber(statProj, Array.isArray(projects) ? projects.length : 0);
    if (statYears) animateNumber(statYears, years);

    // Theme toggle with persistence and OS preference
    const themeBtn = document.getElementById('theme-toggle');
    const THEME_KEY = 'preferred-theme';
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    function applyTheme(theme) {
        document.body.classList.toggle('light-theme', theme === 'light');
        themeBtn?.setAttribute('aria-pressed', String(theme === 'light'));
    }

    let savedTheme = localStorage.getItem(THEME_KEY);
    if (!savedTheme) {
        savedTheme = prefersDark ? 'dark' : 'light';
    }
    applyTheme(savedTheme);

    themeBtn?.addEventListener('click', () => {
        const current = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        const next = current === 'light' ? 'dark' : 'light';
        applyTheme(next);
        localStorage.setItem(THEME_KEY, next);
    });

    // Scroll reveal for sections
    const revealTargets = document.querySelectorAll('.certifications, .about, .contact, .projects, .skills, .timeline');
    revealTargets.forEach(el => el.classList.add('reveal'));

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        revealTargets.forEach(el => revealObserver.observe(el));
    } else {
        revealTargets.forEach(el => el.classList.add('in-view'));
    }

    // Contact form – mailto generation and copy fallback
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const nameInput = document.getElementById('cf-name');
        const emailInput = document.getElementById('cf-email');
        const messageInput = document.getElementById('cf-message');
        const websiteInput = document.getElementById('cf-website'); // honeypot
        const statusEl = contactForm.querySelector('.form-status');
        const copyBtn = document.getElementById('copy-message');

        function setError(inputEl, message) {
            const errEl = document.getElementById(`${inputEl.id}-error`);
            if (errEl) errEl.textContent = message || '';
            inputEl.setAttribute('aria-invalid', message ? 'true' : 'false');
        }
        function validateEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
        function validateForm() {
            let valid = true;
            const nameVal = (nameInput.value || '').trim();
            const emailVal = (emailInput.value || '').trim();
            const messageVal = (messageInput.value || '').trim();

            if (nameVal.length < 2) { setError(nameInput, 'Ange ditt namn (minst 2 tecken).'); valid = false; } else { setError(nameInput, ''); }
            if (!validateEmail(emailVal)) { setError(emailInput, 'Ange en giltig e‑postadress.'); valid = false; } else { setError(emailInput, ''); }
            if (messageVal.length < 10) { setError(messageInput, 'Ange ett meddelande (minst 10 tecken).'); valid = false; } else { setError(messageInput, ''); }
            if ((websiteInput.value || '').trim() !== '') { valid = false; } // bot honeypot
            return valid;
        }

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            statusEl.textContent = '';
            if (!validateForm()) {
                statusEl.textContent = 'Korrigera felen ovan och försök igen.';
                return;
            }
            const name = encodeURIComponent((nameInput.value || '').trim());
            const fromEmail = encodeURIComponent((emailInput.value || '').trim());
            const body = encodeURIComponent((messageInput.value || '').trim() + `\n\n— Avsändare: ${name} • ${fromEmail}`);
            const subject = encodeURIComponent(`Kontaktförfrågan från ${name}`);
            const mailto = `mailto:mohamedalbitar066@gmail.com?subject=${subject}&body=${body}`;

            // Open user's email client
            window.location.href = mailto;
            statusEl.textContent = 'Din e‑postklient öppnades med ett färdigt meddelande.';
        });

        copyBtn?.addEventListener('click', async () => {
            const content = `Namn: ${(nameInput.value || '').trim()}\nE‑post: ${(emailInput.value || '').trim()}\n\nMeddelande:\n${(messageInput.value || '').trim()}`;
            try {
                await navigator.clipboard.writeText(content);
                statusEl.textContent = 'Meddelandet kopierades. Klistra in i din e‑post.';
                statusEl.classList.add('copy-success');
                setTimeout(() => statusEl.classList.remove('copy-success'), 2000);
            } catch {
                statusEl.textContent = 'Kunde inte kopiera. Markera och kopiera manuellt.';
            }
        });
    }

    // Modal focus trap for accessibility
    const modal = document.getElementById('project-modal');
    if (modal) {
        const modalOverlay = modal.querySelector('.modal-overlay');
        const modalClose = modal.querySelector('.modal-close');
        let lastFocused = null;
        let trapHandler = null;

        function getFocusable(container) {
            return container.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
        }

        function openProjectModal(project) {
            modalTitle.textContent = project.title;
            modalSubtitle.textContent = `${project.category} • ${project.year}`;
            modalSections.innerHTML = '';

            const sections = [
                { heading: 'Role', content: project.caseStudy.role },
                { heading: 'Problem', content: project.caseStudy.problem },
                { heading: 'Approach', content: project.caseStudy.approach },
                { heading: 'Outcomes', list: project.caseStudy.outcomes },
                { heading: 'Tech Stack', list: project.techStack }
            ];

            sections.forEach(sec => {
                const container = document.createElement('div');
                container.className = 'section';
                const h4 = document.createElement('h4');
                h4.textContent = sec.heading;
                container.appendChild(h4);

                if (sec.list) {
                    const ul = document.createElement('ul');
                    sec.list.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        ul.appendChild(li);
                    });
                    container.appendChild(ul);
                } else {
                    const p = document.createElement('p');
                    p.textContent = String(sec.content || '');
                    container.appendChild(p);
                }

                modalSections.appendChild(container);
            });

            modalActions.innerHTML = '';
            if (project.links.demo) {
                const demo = document.createElement('a');
                demo.href = project.links.demo;
                demo.target = project.links.demo.startsWith('http') ? '_blank' : '_self';
                demo.className = 'btn';
                demo.textContent = 'Live Demo';
                modalActions.appendChild(demo);
            }
            if (project.links.code) {
                const code = document.createElement('a');
                code.href = project.links.code;
                code.target = '_blank';
                code.rel = 'noopener noreferrer';
                code.className = 'btn secondary';
                code.textContent = 'Source Code';
                modalActions.appendChild(code);
            }

            modal.classList.add('open');
            document.body.classList.add('no-scroll');

            lastFocused = document.activeElement;
            const focusables = getFocusable(modal);
            const first = focusables[0];
            const last = focusables[focusables.length - 1];

            trapHandler = (e) => {
                if (e.key === 'Tab') {
                    if (focusables.length === 0) return;
                    if (e.shiftKey && document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    } else if (!e.shiftKey && document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                } else if (e.key === 'Escape') {
                    closeProjectModal();
                }
            };
            document.addEventListener('keydown', trapHandler);
            (modalClose || first)?.focus();
        }

        function closeProjectModal() {
            modal.classList.remove('open');
            document.body.classList.remove('no-scroll');
            if (trapHandler) {
                document.removeEventListener('keydown', trapHandler);
                trapHandler = null;
            }
            if (lastFocused && lastFocused instanceof HTMLElement) {
                lastFocused.focus();
            }
        }

        modalOverlay?.addEventListener('click', closeProjectModal);
        modalClose?.addEventListener('click', closeProjectModal);
    }

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('button.hamburger');
    const navMenu = document.querySelector('header ul#primary-navigation');

    hamburger.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        hamburger.classList.toggle('active', isActive);
        hamburger.setAttribute('aria-expanded', String(isActive));
        document.body.classList.toggle('no-scroll', isActive);
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        }
    });

    // Navigation scroll spy for active states
    const navLinks = document.querySelectorAll('header ul#primary-navigation li a');
    const sections = Array.from(navLinks)
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    const setActiveLink = () => {
        const scrollPos = window.scrollY + 100;
        let currentId = '';
        sections.forEach(section => {
            const secTop = section.offsetTop;
            const secBottom = secTop + section.offsetHeight;
            if (secTop <= scrollPos && secBottom > scrollPos) {
                currentId = `#${section.id}`;
            }
        });

        navLinks.forEach(link => {
            const isActive = link.getAttribute('href') === currentId;
            link.classList.toggle('active', Boolean(isActive));
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    };

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);

    // Skills data and rendering
    const skillsData = [
        {
            group: { en: 'Languages', sv: 'Språk' },
            items: [
                { name: 'Python', level: 80 },
                { name: 'JavaScript', level: 85 },
                { name: 'SQL', level: 70 }
            ]
        },
        {
            group: { en: 'Frameworks', sv: 'Ramverk' },
            items: [
                { name: 'React (Basics)', level: 60 },
                { name: 'Bootstrap', level: 70 }
            ]
        },
        {
            group: { en: 'Tools', sv: 'Verktyg' },
            items: [
                { name: 'Git & GitHub', level: 75 },
                { name: 'Excel (Advanced)', level: 85 }
            ]
        },
        {
            group: { en: 'Soft Skills', sv: 'Mjuka färdigheter' },
            items: [
                { name: 'Problem Solving', level: 80 },
                { name: 'Communication (B2)', level: 75 }
            ]
        }
    ];

    const skillsGrid = document.querySelector('.skills-grid');

    function renderSkills() {
        if (!skillsGrid) return;
        skillsGrid.innerHTML = '';

        skillsData.forEach(group => {
            const card = document.createElement('section');
            card.className = 'skill-card';

            const h3 = document.createElement('h3');
            h3.setAttribute('data-en', group.group.en);
            h3.setAttribute('data-sv', group.group.sv);
            h3.textContent = group.group.en;
            card.appendChild(h3);

            group.items.forEach(item => {
                const row = document.createElement('div');
                row.className = 'skill-item';

                const name = document.createElement('span');
                name.className = 'skill-name';
                name.textContent = item.name;

                const level = document.createElement('span');
                level.className = 'skill-level';
                level.textContent = `${item.level}%`;

                const bar = document.createElement('div');
                bar.className = 'progress-bar';
                const fill = document.createElement('div');
                fill.className = 'progress-fill';
                fill.setAttribute('data-target', String(item.level));
                bar.appendChild(fill);

                row.appendChild(name);
                row.appendChild(level);
                card.appendChild(row);
                card.appendChild(bar);
            });

            skillsGrid.appendChild(card);
        });

        // Apply current language to new elements
        const activeLangBtn = document.querySelector('.language-switcher button.active');
        if (activeLangBtn) {
            const lang = activeLangBtn.id;
            document.querySelectorAll('[data-en]').forEach(element => {
                const nextText = element.getAttribute(`data-${lang}`);
                if (nextText) element.textContent = nextText;
            });
        }
    }

    renderSkills();

    // Animate skill bars when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const target = Number(fill.getAttribute('data-target') || '0');
                requestAnimationFrame(() => {
                    fill.style.width = `${target}%`;
                });
                observer.unobserve(fill);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.progress-fill').forEach(el => observer.observe(el));

    // Timeline rendering from certifications
    const timelineList = document.querySelector('.timeline-list');

    function renderTimeline() {
        if (!timelineList) return;
        timelineList.innerHTML = '';

        sortedCertifications.forEach(cert => {
            const item = document.createElement('div');
            item.className = 'timeline-item';

            const row = document.createElement('div');
            row.className = 'timeline-row';

            const year = document.createElement('span');
            year.className = 'timeline-year';
            year.textContent = /^\d{4}/.test(cert.date) ? cert.date.match(/^\d{4}/)[0] : formatDate(cert.date).match(/\d{4}/)?.[0] || '';

            const title = document.createElement('span');
            title.className = 'timeline-title';
            title.textContent = cert.title;

            const meta = document.createElement('span');
            meta.className = 'timeline-meta';
            meta.textContent = `${cert.issuer} • ${formatDate(cert.date)}`;

            row.appendChild(year);
            row.appendChild(title);
            row.appendChild(meta);

            item.appendChild(row);
            timelineList.appendChild(item);
        });
    }

    renderTimeline();

    // Projects Portfolio
    const projects = [
        {
            id: 'p1',
            title: 'Secure, Bilingual Portfolio',
            year: 2025,
            category: 'Web',
            summary: 'High-performance, accessible personal site with EN/SV, smooth UX, and modern micro-interactions.',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            links: { demo: '#home', code: '' },
            caseStudy: {
                role: 'Frontend Developer',
                problem: 'Create a professional portfolio that loads fast, supports bilingual content, and feels polished.',
                approach: 'Built semantic HTML, modular CSS, and vanilla JS with accessibility-first patterns and responsive design.',
                outcomes: [
                    'Sub-100KB payload and instant navigation',
                    'Clear information architecture and mobile-first UX',
                    'Accessible keyboard interactions and ARIA semantics'
                ]
            }
        },
        {
            id: 'p2',
            title: 'CS50 Projects Showcase',
            year: 2024,
            category: 'Web',
            summary: 'Curated collection of CS50 problem sets and final projects demonstrating fundamentals and depth.',
            techStack: ['Python', 'SQL', 'HTML', 'CSS'],
            links: { demo: '', code: '' },
            caseStudy: {
                role: 'Student Developer',
                problem: 'Demonstrate breadth of CS fundamentals through practical assignments with clarity and testing.',
                approach: 'Organized repos per module, documented learnings, and emphasized correctness and readability.',
                outcomes: [
                    'Consistent coding standards and documentation',
                    'Hands-on experience across algorithms, web, and databases'
                ]
            }
        },
        {
            id: 'p3',
            title: 'Data Analysis Toolkit',
            year: 2023,
            category: 'Data',
            summary: 'Reusable Python notebooks for EDA, feature engineering, and visualization for marketing datasets.',
            techStack: ['Python', 'Pandas', 'Jupyter'],
            links: { demo: '', code: '' },
            caseStudy: {
                role: 'Data Analyst',
                problem: 'Accelerate insight generation from messy datasets with a repeatable workflow.',
                approach: 'Built notebook templates for cleaning, EDA, and charts; automated common steps.',
                outcomes: [
                    'Reduced time-to-insight by 40%',
                    'Improved reproducibility across analyses'
                ]
            }
        },
        {
            id: 'p4',
            title: 'Security Incident Simulator',
            year: 2024,
            category: 'Security',
            summary: 'Interactive simulation for teaching basic incident response workflows and secure habits.',
            techStack: ['JavaScript', 'Node', 'Docker'],
            links: { demo: '', code: '' },
            caseStudy: {
                role: 'Security Enthusiast',
                problem: 'Make security fundamentals engaging and practical for beginners.',
                approach: 'Modeled simple scenarios, added decision trees, and emphasized actionable takeaways.',
                outcomes: [
                    'Boosted user retention with hands-on exploration',
                    'Raised awareness of secure development practices'
                ]
            }
        }
    ];

    const projectsGrid = document.querySelector('.projects-grid');
    const categoryFiltersContainer = document.querySelector('.category-filters');
    const techFiltersContainer = document.querySelector('.tech-filters');

    const categoryValues = Array.from(new Set(projects.map(p => p.category))).sort();
    const categories = ['All', ...categoryValues];
    const techValues = Array.from(new Set(projects.flatMap(p => p.techStack))).sort();

    let activeCategory = 'All';
    const activeTechs = new Set();

    function renderFilters() {
        // Categories
        categoryFiltersContainer.innerHTML = '';
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `filter-chip${cat === activeCategory ? ' active' : ''}`;
            btn.setAttribute('data-type', 'category');
            btn.setAttribute('data-value', cat);
            btn.setAttribute('data-en', cat === 'All' ? 'All' : cat);
            btn.setAttribute('data-sv', cat === 'All' ? 'Alla' : cat);
            btn.textContent = cat;
            categoryFiltersContainer.appendChild(btn);
        });

        // Technologies
        techFiltersContainer.innerHTML = '';
        techValues.forEach(tech => {
            const btn = document.createElement('button');
            btn.className = `filter-chip${activeTechs.has(tech) ? ' active' : ''}`;
            btn.setAttribute('data-type', 'tech');
            btn.setAttribute('data-value', tech);
            btn.textContent = tech;
            techFiltersContainer.appendChild(btn);
        });
    }

    function renderProjects() {
        const filtered = projects
            .filter(p => activeCategory === 'All' || p.category === activeCategory)
            .filter(p => Array.from(activeTechs).every(t => p.techStack.includes(t)))
            .sort((a, b) => b.year - a.year);

        projectsGrid.innerHTML = '';

        filtered.forEach(project => {
            const card = document.createElement('article');
            card.className = 'project-card';

            const thumb = document.createElement('div');
            thumb.className = 'thumb';
            thumb.setAttribute('aria-hidden', 'true');

            const content = document.createElement('div');
            content.className = 'content';

            const titleRow = document.createElement('div');
            titleRow.className = 'title-row';

            const h3 = document.createElement('h3');
            h3.textContent = project.title;

            const meta = document.createElement('span');
            meta.className = 'meta';
            meta.textContent = `${project.category} • ${project.year}`;

            titleRow.appendChild(h3);
            titleRow.appendChild(meta);

            const summary = document.createElement('p');
            summary.className = 'summary';
            summary.textContent = project.summary;

            const tags = document.createElement('div');
            tags.className = 'tags';
            project.techStack.forEach(t => {
                const tag = document.createElement('span');
                tag.className = 'tag';
                tag.textContent = t;
                tags.appendChild(tag);
            });

            const actions = document.createElement('div');
            actions.className = 'card-actions';

            if (project.links.demo) {
                const demo = document.createElement('a');
                demo.href = project.links.demo;
                demo.target = project.links.demo.startsWith('http') ? '_blank' : '_self';
                demo.className = 'btn';
                demo.setAttribute('data-en', 'Live Demo');
                demo.setAttribute('data-sv', 'Live-demo');
                demo.textContent = 'Live Demo';
                actions.appendChild(demo);
            }

            if (project.links.code) {
                const code = document.createElement('a');
                code.href = project.links.code;
                code.target = '_blank';
                code.className = 'btn secondary';
                code.setAttribute('rel', 'noopener noreferrer');
                code.setAttribute('data-en', 'Source Code');
                code.setAttribute('data-sv', 'Källkod');
                code.textContent = 'Source Code';
                actions.appendChild(code);
            }

            const caseBtn = document.createElement('button');
            caseBtn.type = 'button';
            caseBtn.className = 'btn';
            caseBtn.setAttribute('data-en', 'View Case Study');
            caseBtn.setAttribute('data-sv', 'Visa Fallstudie');
            caseBtn.textContent = 'View Case Study';
            caseBtn.addEventListener('click', () => openProjectModal(project));
            actions.appendChild(caseBtn);

            content.appendChild(titleRow);
            content.appendChild(summary);
            content.appendChild(tags);

            card.appendChild(thumb);
            card.appendChild(content);
            card.appendChild(actions);

            projectsGrid.appendChild(card);
        });

        // Trigger language update to reflect current language on newly rendered items
        const activeLangBtn = document.querySelector('.language-switcher button.active');
        if (activeLangBtn) {
            const lang = activeLangBtn.id;
            document.querySelectorAll('[data-en]').forEach(element => {
                const nextText = element.getAttribute(`data-${lang}`);
                if (nextText) element.textContent = nextText;
            });
        }
    }

    // Filter interactions
    function onFilterClick(e) {
        const target = e.target;
        if (!(target instanceof HTMLElement)) return;
        if (!target.classList.contains('filter-chip')) return;

        const type = target.getAttribute('data-type');
        const value = target.getAttribute('data-value') || '';

        if (type === 'category') {
            activeCategory = value;
            // Update actives
            categoryFiltersContainer.querySelectorAll('.filter-chip').forEach(chip => {
                chip.classList.toggle('active', chip.getAttribute('data-value') === activeCategory);
            });
        } else if (type === 'tech') {
            if (activeTechs.has(value)) {
                activeTechs.delete(value);
                target.classList.remove('active');
            } else {
                activeTechs.add(value);
                target.classList.add('active');
            }
        }

        renderProjects();
    }

    categoryFiltersContainer.addEventListener('click', onFilterClick);
    techFiltersContainer.addEventListener('click', onFilterClick);

    renderFilters();
    renderProjects();

    // Case Study Modal
    const modalTitle = modal.querySelector('#project-modal-title');
    const modalSubtitle = modal.querySelector('.modal-subtitle');
    const modalSections = modal.querySelector('.modal-sections');
    const modalActions = modal.querySelector('.modal-actions');

    function openProjectModal(project) {
        modalTitle.textContent = project.title;
        modalSubtitle.textContent = `${project.category} • ${project.year}`;
        modalSections.innerHTML = '';

        const sections = [
            { heading: 'Role', content: project.caseStudy.role },
            { heading: 'Problem', content: project.caseStudy.problem },
            { heading: 'Approach', content: project.caseStudy.approach },
            { heading: 'Outcomes', list: project.caseStudy.outcomes },
            { heading: 'Tech Stack', list: project.techStack }
        ];

        sections.forEach(sec => {
            const container = document.createElement('div');
            container.className = 'section';
            const h4 = document.createElement('h4');
            h4.textContent = sec.heading;
            container.appendChild(h4);

            if (sec.list) {
                const ul = document.createElement('ul');
                sec.list.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    ul.appendChild(li);
                });
                container.appendChild(ul);
            } else {
                const p = document.createElement('p');
                p.textContent = String(sec.content || '');
                container.appendChild(p);
            }

            modalSections.appendChild(container);
        });

        modalActions.innerHTML = '';
        if (project.links.demo) {
            const demo = document.createElement('a');
            demo.href = project.links.demo;
            demo.target = project.links.demo.startsWith('http') ? '_blank' : '_self';
            demo.className = 'btn';
            demo.textContent = 'Live Demo';
            modalActions.appendChild(demo);
        }
        if (project.links.code) {
            const code = document.createElement('a');
            code.href = project.links.code;
            code.target = '_blank';
            code.rel = 'noopener noreferrer';
            code.className = 'btn secondary';
            code.textContent = 'Source Code';
            modalActions.appendChild(code);
        }

        modal.classList.add('open');
        document.body.classList.add('no-scroll');
        modalClose.focus();
    }

    function closeProjectModal() {
        modal.classList.remove('open');
        document.body.classList.remove('no-scroll');
    }

    modalOverlay.addEventListener('click', closeProjectModal);
    modalClose.addEventListener('click', closeProjectModal);

    // Close modal on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeProjectModal();
        }
    });
});
