$(document).ready(function() {
    const panels = document.querySelectorAll(".panel");

    function toggleOpen() {
        this.classList.toggle("open");
    }

    function toggleActive(e) {
        if (e.propertyName.includes("flex")) {
            this.classList.toggle("open-active")
        }
    }
    // toggleOpen() would run on page load, we only need to refer to the function toggleOpen so there is no execution "()" necessary

    panels.forEach(panel => panel.addEventListener("click", toggleOpen))

    panels.forEach(panel => panel.addEventListener("transitionend", toggleActive))
})