const header = document.getElementById('hdr');

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);
});