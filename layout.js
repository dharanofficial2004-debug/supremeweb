document.addEventListener("DOMContentLoaded", () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    const loadPromises = [];

    if (headerPlaceholder) {
        loadPromises.push(
            fetch('header.html')
                .then(res => res.text())
                .then(data => {
                    headerPlaceholder.innerHTML = data;
                    initHeader();
                })
        );
    }

    if (footerPlaceholder) {
        loadPromises.push(
            fetch('footer.html')
                .then(res => res.text())
                .then(data => {
                    footerPlaceholder.innerHTML = data;
                })
        );
    }

    // Wait for all layouts to be loaded before dispatching event
    Promise.all(loadPromises).then(() => {
        document.dispatchEvent(new Event('layoutLoaded'));
    });
});

function initHeader() {
    // Header shadow on scroll
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                header.style.padding = '8px 0';
            } else {
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
                header.style.padding = '10px 0';
            }
        });
    }

    // Mobile toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.querySelector('.nav-list');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link:not(.dropbtn)').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768 && navMenu) {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // Dropdown toggle logic
    const dropdownBtn = document.querySelector('.dropdown .dropbtn');
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const parentDropdown = dropdownBtn.closest('.dropdown');
            parentDropdown.classList.toggle('show');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const dropdown = document.querySelector('.dropdown');
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
}
