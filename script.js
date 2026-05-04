/* 
===============================================
MASTER SCRIPT
Theme: Supreme Speciality Hospitals Premium
===============================================
*/

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. INTERSECTION OBSERVER (SCROLL ANIMATIONS)
    ========================================== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.add('aos-animate'); // Support for elite anims
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.fade-up, .zoom-in, .flip-card, .service-glow-card, .benefit-card, .service-dept-card, .feature-strip, [data-aos]');
    animateElements.forEach(el => observer.observe(el));

    /* ==========================================
       2. SCROLLER DUPLICATION (INFINITE LOOP)
    ========================================== */
    const scroller = document.querySelector('.scroller-inner');
    if (scroller) {
        const scrollerContent = Array.from(scroller.children);
        scrollerContent.forEach(item => {
            const duplication = item.cloneNode(true);
            duplication.setAttribute('aria-hidden', true);
            scroller.appendChild(duplication);
        });
    }

    /* ==========================================
       3. SWIPER CAROUSELS INITIALIZATION
    ========================================== */
    if (document.querySelector('.swiper-doctors')) {
        new Swiper('.swiper-doctors', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            speed: 3000,
            freeMode: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            breakpoints: {
                576: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
                1280: { slidesPerView: 5, spaceBetween: 30 }
            }
        });
    }

    /* ==========================================
       3. FAQ ACCORDION LOGIC (Global)
    ========================================== */
    document.addEventListener('click', function (e) {
        if (e.target.closest('.accordion-header')) {
            const header = e.target.closest('.accordion-header');
            const activeHeader = document.querySelector('.accordion-header.active');

            if (activeHeader && activeHeader !== header) {
                activeHeader.classList.remove('active');
                activeHeader.nextElementSibling.style.maxHeight = null;
            }

            header.classList.toggle('active');
            const content = header.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    });

});

/* ==========================================
   MODAL LOGIC (Global Functions)
========================================== */
function openModal() {
    const modal = document.getElementById('appointment-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('appointment-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal on clicking outside
document.addEventListener('click', function (e) {
    const modal = document.getElementById('appointment-modal');
    if (modal && e.target === modal) {
        closeModal();
    }
});

// Function to refresh observer for dynamically added or separate page elements
function observeAnimations() {
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.fade-up:not(.active), .zoom-in:not(.active)');
    animateElements.forEach(el => observer.observe(el));
}

// Initialize animations on load
window.addEventListener('load', observeAnimations);

/* ==========================================
   HEALTH CHECK LEAD FORM HANDLER
========================================== */
document.addEventListener('submit', function (e) {
    if (e.target.id === 'hc-lead-form') {
        e.preventDefault();
        const form = e.target;
        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;

        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        btn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            form.innerHTML = `
                <div class="text-center py-4 fade-up active">
                    <div class="icon-box-circle mb-3" style="width: 80px; height: 80px; background: #e8f5e9; color: #2ecc71; margin: 0 auto; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 2rem;">
                        <i class="fas fa-check"></i>
                    </div>
                    <h3 style="color: #00458b;">Thank You!</h3>
                    <p class="text-muted">Your health check-up inquiry has been received. Our wellness coordinator will contact you shortly.</p>
                </div>
            `;
        }, 1500);
    }
});

/* ==========================================
   GLOBAL APPOINTMENT MODAL LOGIC
   (Must live in script.js — footer.html scripts don't execute via innerHTML)
========================================== */

/** Populate the doctor dropdown in the global modal based on selected department */
function populateModalDoctors() {
    if (typeof doctorsData === 'undefined') return;
    const deptSelect = document.getElementById('modal-dept-select');
    const doctorSelect = document.getElementById('modal-doctor-select');
    if (!deptSelect || !doctorSelect) return;

    const dept = deptSelect.value;
    doctorSelect.innerHTML = '<option value="">Select Doctor (Optional)</option>';
    const filtered = doctorsData.filter(d => d.department === dept);
    filtered.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d.name;
        opt.textContent = d.name;
        doctorSelect.appendChild(opt);
    });
}

/** Pre-fill both department and doctor (called from doctor card buttons) */
function openAppointmentModal(docName, dept) {
    openModal();

    // Wait a tick for modal to be visible, then pre-fill
    setTimeout(() => {
        const deptSelect = document.getElementById('modal-dept-select');
        if (!deptSelect) return;

        // Select the correct department
        for (let i = 0; i < deptSelect.options.length; i++) {
            if (deptSelect.options[i].value === dept) {
                deptSelect.selectedIndex = i;
                break;
            }
        }

        // Populate doctors for this department
        populateModalDoctors();

        // Then select the specific doctor
        if (docName) {
            setTimeout(() => {
                const doctorSelect = document.getElementById('modal-doctor-select');
                if (!doctorSelect) return;

                // Fuzzy match: Break the requested doctor name into words, ignoring "Dr"
                const targetWords = docName.toLowerCase().replace(/dr\.?\s*/g, '').match(/\w+/g) || [];

                for (let j = 0; j < doctorSelect.options.length; j++) {
                    const optValue = doctorSelect.options[j].value.toLowerCase();

                    // If it's an exact match
                    if (optValue === docName.toLowerCase()) {
                        doctorSelect.selectedIndex = j;
                        break;
                    }

                    // Or if any meaningful word (length > 2) from target exists in the option value
                    const hasMatch = targetWords.some(word => word.length > 2 && optValue.includes(word));
                    if (hasMatch) {
                        doctorSelect.selectedIndex = j;
                        break;
                    }
                }
            }, 30);
        }
    }, 50);
}

/** Pre-fill only the department (called from department page buttons) */
function openModalForDept(dept) {
    openModal();
    setTimeout(() => {
        const deptSelect = document.getElementById('modal-dept-select');
        if (!deptSelect) return;
        for (let i = 0; i < deptSelect.options.length; i++) {
            if (deptSelect.options[i].value === dept) {
                deptSelect.selectedIndex = i;
                break;
            }
        }
        populateModalDoctors();
    }, 50);
}

/** EmailJS handler for the global appointment form */
document.addEventListener('submit', function (e) {
    if (e.target && e.target.id === 'global-appointment-form') {
        e.preventDefault();
        const form = e.target;
        const btn = document.getElementById('appointment-submit-btn');
        const responseDiv = document.getElementById('appointment-form-response');

        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        btn.disabled = true;

        if (typeof emailjs === 'undefined') {
            responseDiv.innerHTML = '<div style="color:#e74c3c;font-weight:600;text-align:center;margin-top:10px;">EmailJS not loaded. Please check your internet connection.</div>';
            btn.innerHTML = 'Confirm Booking';
            btn.disabled = false;
            return;
        }

        emailjs.sendForm('service_f8o3kcd', 'template_uku5x4m', form)
            .then(function () {
                btn.innerHTML = 'Confirmed! ✓';
                responseDiv.innerHTML = '<div style="color:#2ecc71;font-weight:600;text-align:center;margin-top:10px;">Thank you! Your appointment has been received. We will call you shortly.</div>';
                form.reset();
                setTimeout(() => {
                    closeModal();
                    btn.innerHTML = 'Confirm Booking';
                    btn.disabled = false;
                    responseDiv.innerHTML = '';
                }, 3000);
            }, function (error) {
                btn.innerHTML = 'Try Again';
                responseDiv.innerHTML = '<div style="color:#e74c3c;font-weight:600;text-align:center;margin-top:10px;">Failed to send. Please try again or call us directly.</div>';
                btn.disabled = false;
                console.error('EmailJS error:', error);
            });
    }
});
