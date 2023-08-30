const primaryNav = document.querySelector(".primary-nav");
const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if(visibility === "false") {
        navToggler.setAttribute("aria-expanded", true);
        primaryNav.setAttribute("data-visible", true);
    } else {
        navToggler.setAttribute("aria-expanded", false);
        primaryNav.setAttribute("data-visible", false);
    }
});