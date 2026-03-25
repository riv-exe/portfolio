const menuIcon = document.getElementById('setting-icon');
const navbar = document.getElementById('navbar');
const notDone = document.querySelectorAll('.not-done');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

notDone.forEach(link => {
    link.addEventListener('click', () => {
        alert('Not yet done!');
    })
})