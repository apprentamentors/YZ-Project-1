// JS DOM Manipulation

function TD_Layout() {
    "use strict";
    //// Ready Content for Layout
    var theBody = document.getElementById("the-page");
    var pageTitle = document.getElementById("page-title");
    var pageTitleItem = document.getElementById("page-title-item");
    pageTitle.appendChild(pageTitleItem);
    var articleHeading = document.getElementById("article-heading");
    var articleHeadingItem = document.getElementById("article-heading-item");
    articleHeading.appendChild(articleHeadingItem);
    var sectionHeading = document.getElementById("section-heading");
    var sectionHeadingItem = document.getElementById("section-heading-item");
    sectionHeading.appendChild(sectionHeadingItem);
    var navText = document.getElementById("nav-text");
    var navTextItem = document.getElementById("nav-text-item");
    navText.appendChild(navTextItem);
    var mainMenu = document.getElementById("main-menu");
    var mainMenuItem = document.getElementById("main-menu-item");
    mainMenu.appendChild(mainMenuItem);
    var articleText = document.getElementById("article-text");
    var articleTextItem = document.getElementById("article-text-item");
    articleText.appendChild(articleTextItem);
    // Create Icon Variables
        // SVG Nav Icons
    var navArrowLeft = document.getElementById("nav-arrow-left");
    var navArrowLeftBlack = document.getElementById("nav-arrow-left-black");
    var navArrowLeftGrey = document.getElementById("nav-arrow-left-grey");
    navArrowLeft.appendChild(navArrowLeftBlack);
    navArrowLeft.appendChild(navArrowLeftGrey);
    var navArrowRight = document.getElementById("nav-arrow-right");
    var navArrowRightBlack = document.getElementById("nav-arrow-right-black");
    var navArrowRightGrey = document.getElementById("nav-arrow-right-grey");
    navArrowRight.appendChild(navArrowRightBlack);
    navArrowRight.appendChild(navArrowRightGrey);
    var navArrowUp = document.getElementById("nav-arrow-up");
    var navArrowUpBlack = document.getElementById("nav-arrow-up-black");
    var navArrowUpGrey = document.getElementById("nav-arrow-up-grey");
    navArrowUp.appendChild(navArrowUpBlack);
    navArrowUp.appendChild(navArrowUpGrey);
    var navMenu = document.getElementById("nav-menu");
    var navMenuOpenBlack = document.getElementById("nav-menu-open-black");
    var navMenuOpenGrey = document.getElementById("nav-menu-open-grey");
    var navMenuCloseBlack = document.getElementById("nav-menu-close-black");
    var navMenuCloseGrey = document.getElementById("nav-menu-close-grey");
    navMenu.appendChild(navMenuOpenBlack);
    navMenu.appendChild(navMenuOpenGrey);
    navMenu.appendChild(navMenuCloseBlack);
    navMenu.appendChild(navMenuCloseGrey);
    var OpenMenu = document.getElementsByClassName("open-menu");
    var CloseMenu = document.getElementsByClassName("close-menu");
    var lightDarkIcon = document.getElementById("light-dark-icon");
    var lightIcon = document.getElementById("toggle-light");
    var darkIcon = document.getElementById("toggle-dark");
    lightDarkIcon.appendChild(lightIcon);
    lightDarkIcon.appendChild(darkIcon);
    var lightTheme = document.getElementsByClassName("light");
    var darkTheme = document.getElementsByClassName("dark");
    pageTitle.appendChild(lightDarkIcon);

    var borderElements = document.getElementsByClassName("border")

    // Create Layout Variables
        // Default (MD, LG, XL)
    var leftSection = document.getElementById("left-section");
    var lsTopDiv = document.getElementById("ls-top-div");
    var lsBottomDiv = document.getElementById("ls-bottom-div");
    var midSection = document.getElementById("mid-section");
    var msTopDiv = document.getElementById("ms-top-div");
    var msBottomDiv = document.getElementById("ms-bottom-div");
    var rightSection = document.getElementById("right-section");
    var rsTopDiv = document.getElementById("rs-top-div");
    var rsBottomDiv = document.getElementById("rs-bottom-div");
        // (SM)
    var topSectionSM = document.getElementById("top-section-sm");
    var leftSectionSM = document.getElementById("left-section-sm");
    var rightSectionSM = document.getElementById("right-section-sm");
	var bottomSectionSM = document.getElementById("bottom-section-sm");
        // TODO (XS)


    // Initialize Adaptive Layout functions
    var openDefault = function(){
        leftSection.style.display = "initial";
        midSection.style.display = "initial";
        rightSection.style.display = "initial";
    }
    var closeDefault = function(){
        leftSection.style.display = "none";
        midSection.style.display = "none";
        rightSection.style.display = "none";
    }
    var openSM = function(){
        topSectionSM.style.display = "flex";
        leftSectionSM.style.display = "flex";
        rightSectionSM.style.display = "flex";
    }
    var closeSM = function(){
        topSectionSM.style.display = "none";
        leftSectionSM.style.display = "none";
        rightSectionSM.style.display = "none";
    }
    var openXS = function(){
        // TODO XS Open
    }
    var closeXS = function(){
        // TODO XS Close
    }
    var adaptLayout = function(){
        if (screenSize == "Default"){
            openDefault();
            closeSM();
            closeXS();
        }
        if (screenSize == "SM"){
            closeDefault();
            openSM();
            closeXS();
        }
        if (screenSize == "XS"){
            closeDefault();
            closeSM();
            openXS();
        }
    }
    var setMenu = function(){
        if (menuStatus == "Closed") {
            navMenu.style.display = "initial";
            OpenMenu.style.display = "initial";
            CloseMenu.style.display = "none";
        }
        if (menuStatus == "Open") {
            navMenu.style.display = "initial";
            OpenMenu.style.display = "none";
            CloseMenu.style.display = "initial";
        }
        if (menuStatus == "Hidden") {
            navMenu.style.display = "none";
        }
    }
    var toggleMenu = function(){
        if (menuStatus == "Closed") {
            menuStatus = "Open";
            setMenu();
        }
        if (menuStatus == "Open") {
            menuStatus = "Closed";
            setMenu();
        }
    }
    var adaptDark = function(){
        for (var i = 0; i < darkTheme.length; i++) {
            darkTheme[i].style.display = "initial";
        }
        for (var i = 0; i < lightTheme.length; i++) {
            lightTheme[i].style.display = "none";
        }
    }
    var adaptLight = function(){
        for (var i = 0; i < lightTheme.length; i++) {
            lightTheme[i].style.display = "initial";
        }
        for (var i = 0; i < darkTheme.length; i++) {
            darkTheme[i].style.display = "none";
        }
    }
    var goDark = function(){
        darkLightToggle = "Dark";
        theBody.style.color = "#DDDBDB";
        theBody.style.background = "#1E1E1E";
        for (var i = 0; i < borderElements.length; i++){
            borderElements[i].style.borderColor = "#DDDBDB";
        }
        adaptDark();
    }
    var goLight = function(){
        darkLightToggle = "Light";
        theBody.style.color = "black";
        theBody.style.background = "white";
        for (var i = 0; i < borderElements.length; i++){
            borderElements[i].style.borderColor = "black";
        }
        adaptLight();
    }
    lightIcon.addEventListener("click", goDark);
    darkIcon.addEventListener("click", goLight);




    // Defeault Layout Variables
        // Initialize string variable for the adaptLayout() function
    var screenSize = "";
    var setScreenSize = function(){
        // Get Screen Size
        if (window.innerWidth >= 1024) {
            screenSize = "Default";
        }
        if (window.innerWidth < 1024 && window.innerWidth >= 600) {
            screenSize = "SM";
        }
        if (window.innerWidth < 600) {
            screenSize = "XS";
        }
        adaptLayout();
    };
    setScreenSize();
        // Open/Close the navigation menu
    var menuStatus = "Closed";
        // Light/Dark option toggled by Moon/Sun Icon or in Main Menu
    var darkLightToggle = "Light";
    if (darkLightToggle == "Light"){
        goLight();
    } else { goDark(); }
        // Selected theme to load toggled in Main Menu
    var currentTheme = "Rasa";

    var getLayout = function() {
        // Create Layout :
            // (MD, LG and XL Screens)
        if (window.innerWidth >= 1024) {
            // Display appropriate Layout
            setScreenSize();
            // Hide navMenu
            menuStatus = "Hidden";
            setMenu();
            // Append Content to Layout
            lsTopDiv.appendChild(pageTitle);
            lsBottomDiv.appendChild(navText);
            msTopDiv.appendChild(articleHeading);
            msBottomDiv.appendChild(sectionHeading);
            msBottomDiv.appendChild(articleText);
            rsTopDiv.appendChild(mainMenu);
            // Append Icons to Layout
            rsBottomDiv.appendChild(navArrowUp);
            rsBottomDiv.appendChild(navArrowRight);
            rsBottomDiv.appendChild(navArrowLeft);
            var getHeight;
            var topDivHeight = (function(){
                    // MD Devices
                if (window.innerWidth >= 1024 && window.innerWidth < 1440){
                    getHeight = 100;
                    leftSection.style.width = "336px";
                    midSection.style.width = (window.innerWidth - 542) + "px";
                    midSection.style.left = "336px";
                    rightSection.style.width = "206px";
                }
                    // LG Devices
                if (window.innerWidth >= 1440 && window.innerWidth < 2560){
                    getHeight = 170;
                    leftSection.style.width = "400px";
                    midSection.style.width = (window.innerWidth - 636) + "px";
                    midSection.style.left = "400px";
                    rightSection.style.width = "236px";
                }
                    // XL Devices
                if (window.innerWidth >= 2560){
                    getHeight = 196;
                    leftSection.style.width = "400px";
                    midSection.style.width = (window.innerWidth - 636) + "px";
                    midSection.style.left = "400px";
                    rightSection.style.width = "236px";
                }
                return (getHeight + "px");
            }());
                // set top <div> height
            lsTopDiv.style.height = topDivHeight;
            msTopDiv.style.height = topDivHeight;
            rsTopDiv.style.height = topDivHeight;
                // Set bottom <div> height
            var bottomDivHeight = (window.innerHeight - getHeight) + "px";
            lsBottomDiv.style.height = bottomDivHeight;
            lsBottomDiv.style.top = getHeight + "px";
            msBottomDiv.style.height = bottomDivHeight;
            msBottomDiv.style.top = getHeight + "px";
            rsBottomDiv.style.height = bottomDivHeight;
            rsBottomDiv.style.top = getHeight + "px";
        }
            // (SM Screens)
        if (window.innerWidth < 1024 && window.innerWidth >= 600) {
            // Display Layout
            setScreenSize();
            if (menuStatus == "Hidden"){
                menuStatus = "Open";
                setMenu();
            }
            // Main Options

            // TODO Finish work on SM Layout
            topSectionSM.appendChild(articleHeading);
            leftSectionSM.appendChild(navArrowLeft);
            leftSectionSM.appendChild(navMenu);

            leftSectionSM.style.height = (window.innerHeight - 80) + "px";
            // navMenu.style.display = "initial"; -- Also check if certain items are being displayed in the background
            leftSectionSM.appendChild(navArrowRight);
            rightSectionSM.appendChild(sectionHeading);
            rightSectionSM.appendChild(articleText);
            rightSectionSM.style.width = (window.innerWidth - 136) + "px";
            rightSectionSM.style.height = (window.innerHeight - 80) + "px";
			bottomSectionSM.appendChild(mainMenu);
			bottomSectionSM.appendChild(pageTitle);
			bottomSectionSM.appendChild(darkLightToggle);
			bottomSectionSM.style.width = (window.innerWidth - 136) + "px";
			bottomSectionSM.style.height = (window.innerHeight - 80) + "px";

        }
            // (XS Screens)
        if (window.innerWidth < 600) {
            // Display Layout
            setScreenSize();
            // TODO Create XS Layout
        }
    }
    getLayout();
    window.addEventListener("resize", getLayout);
}
