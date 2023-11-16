const parallax = (target, speed = 1, cb = () => {
}) => {

    // update when scrolling
    window.addEventListener("scroll", () => {
        cb(window.scrollY * speed);
    });
};

// init
document.querySelectorAll(".cb-logo").forEach((element) => {
    parallax(element, 0.2, (parallaxValue) => {
        element.style.transform = `translate(-50%,${parallaxValue}%)`;
    });
});

document.querySelectorAll(".cb-cute").forEach((element) => {
    parallax(element, 0.15, (parallaxValue) => {
        element.style.transform = `translateY(${parallaxValue}%)`;
    });
});

document.querySelectorAll(".cb-forest").forEach((element) => {
    parallax(element, 0.04, (parallaxValue) => {
        element.style.transform = `translateY(${parallaxValue}%)`;
    });
});

document.querySelectorAll(".cb-mountain").forEach((element) => {
    parallax(element, 0.03, (parallaxValue) => {
        element.style.transform = `translateY(${parallaxValue}%)`;
    });
});

document.querySelectorAll(".cb-forest_black").forEach((element) => {
    parallax(element, 0.02, (parallaxValue) => {
        element.style.transform = `translateY(${-parallaxValue}%)`;
    });
});