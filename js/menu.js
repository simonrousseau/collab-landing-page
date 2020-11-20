const toggleMobileNavigation = () => {
    const navMenu = document.getElementById("mobile-navigation");
    if (navMenu.classList.contains("mobile-navigation_open")) {
        navMenu.classList.remove("mobile-navigation_open");
    } else {
        navMenu.classList.add("mobile-navigation_open");
    }
}