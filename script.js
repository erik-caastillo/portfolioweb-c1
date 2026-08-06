/* ============================
   PROJECT DATA
   ============================
   Add new projects here. Each project can have up to 3 screenshots,
   one per device (imac, tablet, phone). If a device shot is missing,
   the frame will show a "coming soon" placeholder instead of breaking.
*/

const projects = [
    {
        title: "Email Templates",
        description: "HTML email built for cross-client compatibility, coded by hand for tools like Outlook and Gmail.",
        features: ["Responsive", "Semantic Code", "Multi-Platform Compatibility", "Email Best Practices"],
        codeLink: "https://github.com/ec-mtsac87?tab=repositories",
        screens: {
            imac: "Assets/newbalance-ad.png",
            tablet: null,
            phone: null
        }
    },
    {
        title: "Landing Page",
        description: "A clean marketing landing page focused on clear hierarchy and fast load times.",
        features: ["Responsive", "Semantic Code", "Custom CSS", "SEO Friendly"],
        codeLink: "https://github.com/ec-mtsac87?tab=repositories",
        screens: {
            imac: "Assets/Minimalista-landing-page.png",
            tablet: null,
            phone: null
        }
    }
];

/* ============================
   STATE
   ============================ */

let currentProjectIndex = 0;
let currentDevice = "imac"; // "imac" | "tablet" | "phone"

/* ============================
   RENDER
   ============================ */

function render() {
    const project = projects[currentProjectIndex];

    // Title
    const titleEl = document.getElementById("project-title");
    if (titleEl) titleEl.textContent = project.title;

    // Description
    const descEl = document.getElementById("project-description");
    if (descEl) descEl.textContent = project.description;

    // Features list
    const featuresEl = document.getElementById("project-features");
    if (featuresEl) {
        featuresEl.innerHTML = "";
        project.features.forEach((feature) => {
            const li = document.createElement("li");
            li.textContent = feature + " ✅";
            featuresEl.appendChild(li);
        });
    }

    // Code link
    const codeLinkEl = document.getElementById("project-code-link");
    if (codeLinkEl) codeLinkEl.href = project.codeLink;

    // Device frame class
    const frameEl = document.getElementById("device-frame");
    if (frameEl) {
        frameEl.className = "device-frame device-frame--" + currentDevice;
    }

    // Screenshot vs placeholder
    const imgEl = document.getElementById("project-image");
    const placeholderEl = document.getElementById("screen-placeholder");
    const src = project.screens[currentDevice];

    if (src) {
        imgEl.src = src;
        imgEl.alt = project.title + " preview on " + currentDevice;
        imgEl.style.display = "block";
        if (placeholderEl) placeholderEl.style.display = "none";
    } else {
        imgEl.style.display = "none";
        imgEl.src = "";
        if (placeholderEl) {
            placeholderEl.style.display = "flex";
            placeholderEl.textContent = project.title + " — " + currentDevice + " view coming soon";
        }
    }

    // Active state on device buttons
    document.querySelectorAll(".device-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.device === currentDevice);
    });
}

/* ============================
   CONTROLS
   ============================ */

function changeProject(direction) {
    currentProjectIndex =
        (currentProjectIndex + direction + projects.length) % projects.length;
    render();
}

function changeDevice(device) {
    currentDevice = device;
    render();
}

document.addEventListener("DOMContentLoaded", render);
