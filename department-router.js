document.addEventListener("DOMContentLoaded", () => {
    // 1. Determine which department is requested via '?dept='
    const params = new URLSearchParams(window.location.search);
    let deptId = params.get('dept');

    // Default to 'cardiology' if no dept parameter is provided or if not found in data
    if (!deptId || !window.departmentData[deptId]) {
        deptId = 'cardiology';
    }

    const deptData = window.departmentData[deptId];

    // 2. Map URL deptId → the UPPERCASE value used in the global modal dropdown + doctors-data.js
    const deptIdToModalValue = {
        'cardiology': 'CARDIOLOGY',
        'dental': 'DENTAL',
        'dermatology': 'DERMATOLOGY',
        'diabetology': 'DIABETOLOGY',
        'psychiatry': 'PSYCHIATRY',
        'ent': 'ENT',
        'general-surgery': 'GENERAL SURGERY',
        'medical-gastroenterology': 'MEDICAL GASTROENTEROLOGY',
        'nephrology': 'NEPHROLOGY',
        'obstetrics-gynaecology': 'OBSTRETICS & GYNECOLOGY',
        'orthopedics': 'ORTHOPEDICS',
        'pulmonology': 'INTERVENTIONAL PULMONOLOGY',
        'ophthalmology': 'OPHTHALMOLOGY',
        'pediatrics': 'PEADIATRICS',
        'pain-palliative-care': 'PAIN & PALLIATIVE CARE',
        'general-medicine': 'GENERAL MEDICINE',
        'urology': 'UROLOGY AND ANDROLOGY',
        'radiology': 'RADIOLOGY',
        'anaesthesiology': 'ANAESTHESIOLOGY',
        'neurology': 'NEUROLOGY',
        'oncology': 'ONCOLOGY',
        'laboratory': 'LABORATORY'
    };

    // Store current dept modal value globally so doctor card buttons can reference it
    window.currentDeptModalValue = deptIdToModalValue[deptId] || '';

    // 3. Inject HTML content into the main tag
    const mainContainer = document.getElementById('dynamic-main');
    if (mainContainer && deptData.mainHtml) {
        mainContainer.innerHTML = deptData.mainHtml;
    }

    // 4. Update Title & Meta Description
    if (deptData.title) {
        document.title = deptData.title;
    }

    if (deptData.description) {
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', deptData.description);
        } else {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            metaDesc.content = deptData.description;
            document.head.appendChild(metaDesc);
        }
    }

    // 5. Update the FLOATING CTA to call openModalForDept() with the correct dept
    const floatingCta = document.querySelector('.floating-cta');
    if (floatingCta && window.currentDeptModalValue) {
        floatingCta.setAttribute('onclick', `openModalForDept('${window.currentDeptModalValue}')`);
    }

    // 6. Also update ALL "Book Appointment" buttons in the injected HTML to use the dept
    //    Use event delegation on dynamic-main so it works after innerHTML injection
    if (mainContainer) {
        mainContainer.addEventListener('click', function (e) {
            const btn = e.target.closest('button[onclick="openModal()"]');
            if (btn) {
                e.preventDefault();
                e.stopPropagation();

                // Check if this button is inside a consultant card
                const consultantCard = btn.closest('.consultant-card');
                if (consultantCard) {
                    const docNameHeading = consultantCard.querySelector('h3');
                    if (docNameHeading) {
                        const doctorName = docNameHeading.innerText.trim();
                        // Open modal with BOTH doctor name and department
                        openAppointmentModal(doctorName, window.currentDeptModalValue);
                        return; // Done
                    }
                }

                openModalForDept(window.currentDeptModalValue);
            }
        });
    }
});

