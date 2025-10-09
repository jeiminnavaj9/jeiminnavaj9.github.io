// Script to update the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Function to format the date as "Month Day, Year"
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

// Get the last modified date of the document and format it
const lastUpdatedDate = new Date(document.lastModified);
document.getElementById('last-updated').textContent = formatDate(lastUpdatedDate);

// ===== Site-wide theme management =====
(function () {
  const THEME_KEY = 'site-theme';
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);

    // Set the icon to show the action you can take next
    if (icon) {
      if (isDark) {
        icon.src = 'images/light_mode.png';
        icon.alt = 'Switch to light mode';
      } else {
        icon.src = 'images/dark_mode.png';
        icon.alt = 'Switch to dark mode';
      }
    }
  }

  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY) || 'light'; // default light
  }

  function setStoredTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
  }

  // Initialize on page load
  const initial = getStoredTheme();
  applyTheme(initial);

  // Enable smooth transitions AFTER first paint on each page
  requestAnimationFrame(() => {
    document.body.classList.add('theme-animate');  // <-- add this
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const next = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
      setStoredTheme(next);
      applyTheme(next);

      // optional micro animation on the icon
      if (icon) {
        icon.style.opacity = '0.6';
        icon.style.transform = 'scale(0.94)';
        setTimeout(() => {
          icon.style.opacity = '';
          icon.style.transform = '';
        }, 200);
      }
    });
  }
})();

