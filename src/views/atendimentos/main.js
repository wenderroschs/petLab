document.addEventListener('DOMContentLoaded', () => init());

const init = () => {
    // Navbar
    const navbar = document.querySelector('.sidenav');
    M.Sidenav.init(navbar);

    const carousel = document.querySelector('.carousel');

    const instance = M.Carousel.init(carousel, {
        fullWidth: true,
        indicators: true
    });

    const setHeight = () => {
        const imgCarousel = document.querySelector('.img-carousel');
        carousel.style.height = `${window.innerHeight - 206}px`;
    }
    
    // // Setting height (init);
    setHeight();

    // Setting height (browser resizing);
    document.body.onresize = () => setHeight();
}