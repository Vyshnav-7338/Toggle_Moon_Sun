// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('icon');

    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        icon.innerHTML = '&#127772;'; // Moon icon
    } else {
        icon.innerHTML = '&#127774;'; // Sun icon
    }
}