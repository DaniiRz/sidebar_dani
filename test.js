const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".sidebar-nav-dropdown-toggle").click(function () {
        $(this).closest(".sidebar-nav-dropdown")
            .toggleClass("show")
            .find(".sidebar-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".sidebar-nav").toggleClass("mobile-show");
        } else {
            $(".sidebar").toggleClass("sidebar-compact");
        }
    });
});
