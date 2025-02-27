// scripts/common.js - Shared functionality for Nijin's portfolio website

// Dark mode detection and toggle based on system preference
function initializeDarkMode() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial dark mode state
    if (darkModeMediaQuery.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Listen for changes in dark mode preference
    darkModeMediaQuery.addEventListener('change', (e) => {
        document.documentElement.classList.toggle('dark', e.matches);
    });
}

// Menu toggle functionality
function initializeMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuOverlay = document.getElementById('menu-overlay');
    let isMenuOpen = false;

    if (!menuToggle || !menuOverlay) return; // Exit if elements are missing

    menuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        menuOverlay.style.display = isMenuOpen ? 'flex' : 'none';
        menuToggle.textContent = isMenuOpen ? 'close' : 'menu';
    });

    menuOverlay.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' || e.target.id === 'close-button') {
            isMenuOpen = false;
            menuOverlay.style.display = 'none';
            menuToggle.textContent = 'menu';
        }
    });
}

// Initialize common functionality when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    initializeMenuToggle();
});