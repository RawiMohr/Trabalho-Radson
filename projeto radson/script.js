// Tailwind Config
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#EF4444', // Red-500 as main color
                secondary: '#6B7280', // Gray-500 as secondary
                radson: '#DC2626' // Stronger red for brand accents
            }
        }
    }
}

// Mobile menu toggle
document.querySelector('[aria-controls="mobile-menu"]').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Feather icons
feather.replace();
