// JS DOM Manipulation
function TD_Layout() {
    "use strict";
    function getLayout() {
        var midSectionWidth = (window.innerWidth - 450) + "px";
        document.getElementById("mid-section").style.width = midSectionWidth;
        document.getElementById("right-section").style.width = "150px";
    }
    getLayout();
    window.addEventListener("resize", getLayout);
}



