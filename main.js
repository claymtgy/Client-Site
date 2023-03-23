// Sticky Navigation Bar
window.addEventListener('scroll', () => {
const header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 0);
});

// Dark Theme Switch
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
if (e.target.checked) {
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');
} else {
document.documentElement.setAttribute('data-theme', 'light');

localStorage.setItem('theme', 'light');
}
}

toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
toggleSwitch.checked = true;
}
}
