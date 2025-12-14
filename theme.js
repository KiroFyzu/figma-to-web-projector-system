// Dark Mode Theme Toggle
// Import file ini di semua halaman HTML dengan: <script src="theme.js"></script>

// Fungsi untuk toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Set theme
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon dengan animasi
    updateThemeIcon(newTheme);
    
    // Add rotation animation
    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
        toggleButton.classList.add('rotating');
        setTimeout(() => {
            toggleButton.classList.remove('rotating');
        }, 500);
    }
}

// Fungsi untuk update icon
function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Load theme saat halaman dibuka
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
});

// Keyboard shortcut: Ctrl + Shift + D untuk toggle
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        toggleTheme();
    }
});
