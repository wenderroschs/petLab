document.addEventListener('DOMContentLoaded', () => init());

const init = () => {
    // Navbar
    const navbar = document.querySelector('.sidenav');
    M.Sidenav.init(navbar);

    const carousel = document.querySelector('.carousel');

    const instance = M.Carousel.init(carousel);

    // const setHeight = () => carousel.style.height = `${window.innerHeight - 206}px`;
    // // Setting height (init);
    setHeight();

    // Setting height (browser resizing);
    document.body.onresize = () => setHeight();
}