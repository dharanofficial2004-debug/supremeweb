/**
 * DOCTOR PROFILES DATA
 * Contains the official list of doctors and their specialties.
 */

const doctorsData = [
    // ANAESTHESIOLOGY
    {
        name: "Dr. G. Dilip Kumar",
        degree: "MBBS, MD, FIPM",
        department: "ANAESTHESIOLOGY",
        deptId: "anaesthesiology"
    },
    {
        name: "Dr. Karthikeyan",
        degree: "MBBS, MD Anaesthesiology",
        department: "ANAESTHESIOLOGY",
        deptId: "anaesthesiology"
    },
    {
        name: "Dr. R. Adhilakshmi",
        degree: "MBBS, DA, DNB Anaesthesia",
        department: "ANAESTHESIOLOGY",
        deptId: "anaesthesiology"
    },

    // CARDIOLOGY
    {
        name: "Dr. K. Anand Manjunath",
        degree: "MBBS, MD Paediatrics, DM Cardiology",
        department: "CARDIOLOGY",
        deptId: "cardiology"
    },
    {
        name: "Dr. Arun Arockia Rajesh. J",
        degree: "MBBS, MD (General Medicine), DM (Cardiology)",
        department: "CARDIOLOGY",
        deptId: "cardiology"
    },

    // DERMATOLOGY
    {
        name: "Dr. R. Gokul",
        degree: "MBBS, MD (DVL), DNB (DVL)",
        department: "DERMATOLOGY",
        deptId: "dermatology"
    },
    {
        name: "Dr. Yuwarani",
        degree: "MBBS, MD Dermatology, Venereology & Leprosy",
        department: "DERMATOLOGY",
        deptId: "dermatology"
    },

    // ENT
    {
        name: "Dr. K. Priya",
        degree: "MBBS, MS ENT",
        department: "ENT",
        deptId: "ent"
    },
    {
        name: "Dr. Puja Ghosh",
        degree: "MBBS, MS ENT",
        department: "ENT",
        deptId: "ent"
    },

    // GENERAL SURGERY
    {
        name: "Dr. Felix Anand Raj",
        degree: "MBBS, MS General Surgery",
        department: "GENERAL SURGERY",
        deptId: "general-surgery"
    },
    {
        name: "Dr. S. Mathan Sankar",
        degree: "MBBS, MS (Gen. Surgery), MCh Neuro Surgery",
        department: "GENERAL SURGERY",
        deptId: "general-surgery"
    },

    // GENERAL MEDICINE
    {
        name: "Dr. Bravian Samvict Devadas",
        degree: "MBBS, MD – General Medicine",
        department: "GENERAL MEDICINE",
        deptId: "general-medicine"
    },

    // DIABETOLOGY
    {
        name: "Dr. R. Arun Kumar",
        degree: "MBBS, MD, PhD, Dip Diab, FRCP (Glasg), FRCP (London)",
        department: "DIABETOLOGY",
        deptId: "diabetology"
    },

    // Interventional Pulmonology
    {
        name: "Dr. S. Suresh Sagadevan",
        degree: "MBBS, MD (Respiratory Medicine), FCCP (USA), FAPSR (Japan)",
        department: "INTERVENTIONAL PULMONOLOGY",
        deptId: "pulmonology"
    },

    // NEPHROLOGY
    {
        name: "Dr. P. Muthukumar",
        degree: "MBBS, MD (General Medicine), DM (Nephrology)",
        department: "NEPHROLOGY",
        deptId: "nephrology"
    },

    // NEUROLOGY
    {
        name: "Dr. N. Praveen Chander",
        degree: "MBBS, MD, DM (Neurology)",
        department: "NEUROLOGY",
        deptId: "neurology"
    },

    // Obstretics & Gynecology
    {
        name: "Dr. K. Rini Ezhil",
        degree: "MBBS, MS OBG",
        department: "OBSTRETICS & GYNECOLOGY",
        deptId: "obstetrics-gynecology"
    },
    {
        name: "Dr. Shery Angel Rajkumar",
        degree: "MBBS, MS (OBG), FMAS",
        department: "OBSTRETICS & GYNECOLOGY",
        deptId: "obstetrics-gynecology"
    },
    {
        name: "Dr. Sharmila Ganesan",
        degree: "MBBS, MS (OBG), FMAS, DMAS (Lap Surgeon)",
        department: "OBSTRETICS & GYNECOLOGY",
        deptId: "obstetrics-gynecology"
    },

    // OPHTHALMOLOGY
    {
        name: "Dr. (Maj) G. Premnath",
        degree: "MBBS, MS (Ophthalmology), Clinical Fellowship in Glaucoma",
        department: "OPHTHALMOLOGY",
        deptId: "ophthalmology"
    },

    // Dental
    {
        name: "Dr. Jessica Yolanda Jeevitha",
        degree: "BDS, MDS (Oral & Maxillofacial Surgery)",
        department: "DENTAL",
        deptId: "dental"
    },

    // ORTHOPEDICS
    {
        name: "Dr. F. Abdul Khader",
        degree: "MBBS, MS Ortho, MCh Ortho",
        department: "ORTHOPEDICS",
        deptId: "orthopedics"
    },
    {
        name: "Dr. Thirumal",
        degree: "MBBS, Dip Ortho, FSS Spine, FMAS",
        department: "ORTHOPEDICS",
        deptId: "orthopedics"
    },

    // PEADIATRICS
    {
        name: "Dr. Archana Kulasekaran",
        degree: "MBBS, MD (Paediatrics)",
        department: "PEADIATRICS",
        deptId: "paediatrics"
    },
    {
        name: "Dr. Rajkumar",
        degree: "MBBS, MD (Paediatrics)",
        department: "PEADIATRICS",
        deptId: "paediatrics"
    },

    // PAEDIATRIC SURGERY
    {
        name: "Dr. Sivasanakar Jayakumar",
        degree: "MBBS, MRCS, FEBPS",
        department: "PAEDIATRIC SURGERY",
        deptId: "paediatric-surgery"
    },

    // PLASTIC SURGERY
    {
        name: "Dr. T. Dinesh Kumar",
        degree: "MBBS, MS (General Surgery), MCh Plastic Surgery",
        department: "PLASTIC SURGERY",
        deptId: "plastic-surgery"
    },

    // PSYCHIATRY
    {
        name: "Dr. Arasi D. M",
        degree: "MBBS, MD Psychiatry, DGO",
        department: "PSYCHIATRY",
        deptId: "psychiatry"
    },
    {
        name: "Dr. M. Aravindh",
        degree: "MBBS, MD Psychiatry",
        department: "PSYCHIATRY",
        deptId: "psychiatry"
    },

    // RADIOLOGY
    {
        name: "Dr. Lavanya",
        degree: "MBBS, MDRD (Radiology)",
        department: "RADIOLOGY",
        deptId: "radiology"
    },

    // MEDICAL GASTROENTEROLOGY
    {
        name: "Dr. Arun Kasiviswanathan",
        degree: "MBBS, MS, MCh Gastroenterology",
        department: "MEDICAL GASTROENTEROLOGY",
        deptId: "medical-gastroenterology"
    },

    // PAIN & PALLIATIVE CARE
    {
        name: "Dr. Shery Angel Rajkumar",
        degree: "MBBS, MD, Fellowship in Pain Management",
        department: "PAIN & PALLIATIVE CARE",
        deptId: "pain-palliative-care"
    },

    // VASCULAR SURGERY
    {
        name: "Dr. Venkateshwar",
        degree: "MBBS, MS (General Surgery), MCh (Vascular Surgery)",
        department: "VASCULAR SURGERY",
        deptId: "vascular-surgery"
    },

    // Urology and Andrology
    {
        name: "Dr. Joseph Wilfred Amrit",
        degree: "MBBS, MS (General Surgery), MCh (Urology)",
        department: "UROLOGY AND ANDROLOGY",
        deptId: "urology"
    },
    {
        name: "Dr. Somnatha Sharma",
        degree: "MBBS, MS (General Surgery), MCh (Urology)",
        department: "UROLOGY AND ANDROLOGY",
        deptId: "urology"
    },

    // Oncology
    {
        name: "Dr. X. Gerald Anand Raj",
        degree: "MBBS, MS, MCh (Surgical Oncology)",
        department: "ONCOLOGY",
        deptId: "oncology",
        specialization: "Surgical Oncologist"
    },
    {
        name: "Dr. Sivakumar Ganesan",
        degree: "MBBS, MD (Radiation Therapy)",
        department: "ONCOLOGY",
        deptId: "oncology",
        specialization: "Radiation Oncologist"
    },
    {
        name: "Dr. Vijay Guru",
        degree: "MBBS, MD, DM (Medical Oncology)",
        department: "ONCOLOGY",
        deptId: "oncology",
        specialization: "Medical & Hemato Oncologist"
    },

    // Laboratory (Pathology)
    {
        name: "Dr. Chandana Adayalam",
        degree: "MBBS, MD (Pathology)",
        department: "LABORATORY",
        deptId: "pathology"
    }
];

let currentFilter = 'ALL';
let currentSearch = '';

function renderAllDoctors() {
    const grid = document.querySelector('.doctors-grid');
    if (!grid) return;

    const filtered = doctorsData.filter(doc => {
        const matchesFilter = currentFilter === 'ALL' ||
            doc.department === currentFilter ||
            doc.deptId === currentFilter.toLowerCase();

        const matchesSearch = doc.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            doc.degree.toLowerCase().includes(currentSearch.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results fade-up">
                <i class="fas fa-user-md-slash"></i>
                <h3>No doctors found</h3>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(doc => `
        <div class="doctor-minimal-card fade-up">
            <div class="doc-badge">${doc.department}</div>
            <div class="doc-main-info">
                <h3>${doc.name}</h3>
                <p class="degree">${doc.degree}</p>
                ${doc.specialization ? `<p class="specialty">${doc.specialization}</p>` : ''}
            </div>
            <div class="doc-actions">
                <button class="btn btn-primary btn-sm" onclick="openAppointmentModal('${doc.name}', '${doc.department}')">Book Appointment</button>
                <a href="department.html?dept=${doc.deptId}" class="btn-view-dept">View Department <i class="fas fa-chevron-right"></i></a>
            </div>
        </div>
    `).join('');

    // Trigger animation observer for new elements
    if (typeof observeAnimations === 'function') {
        observeAnimations();
    } else {
        // Fallback: if observer not available, make them visible manually
        document.querySelectorAll('.fade-up').forEach(el => el.classList.add('active'));
    }
}

// Global filter function for buttons
function filterByDept(dept) {
    currentFilter = dept;
    renderAllDoctors();
}

// Global search function
function searchDoctors(query) {
    currentSearch = query.length >= 2 ? query : '';
    renderAllDoctors();
}

// Global category dropdown filter
function categoryDropdownFilter(val) {
    currentFilter = val;
    renderAllDoctors();
}

// openAppointmentModal is defined in script.js
