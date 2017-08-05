# YZ_Project 1 - Technical Documentation Page

## Core Concepts

- Media Queries
- Fixed Positioning
- Absolute Positioning
- Flexible Box Model (Flex Box)
- Responsive text

## User Stories

### FCC Acceptance Tests

#### Content

- [ ] I can see an `<article>` element with a corresponding id="main-doc", which contains the page's main content (technical documentation).
- [ ] Within the #main-doc `<article>` element, I can see several `<section>` elements, each with a class of "main-section". There should be a minimum of 5.
- [ ] The first element within each .main-section should be a `<header>` element which contains text that describes the topic of that section.
- [ ] Each `<section>` element with the class of "main-section" should also have an id that corresponds with the text of each `<header>` contained within it. Any spaces should be replaced with underscores (e.g. The `<section>` that contains the header "Javascript and Java" should have a corresponding id="Javascript_and_Java").
- [ ] The .main-section elements should contain at least 10 `<p>` elements total (not each).
- [ ] The .main-section elements should contain at least 5 `<code>` elements total (not each).
- [ ] The .main-section elements should contain at least 5 `<li>` items total (not each).
- [ ] I can see a `<nav>` element with a corresponding id="navbar".
- [ ] The first element within the navbar should be a `<header>` which contains text that describes the topic of the technical documentation.
- [ ] Additionally, the navbar should contain link, `<a>`, elements with the class of "nav-link". There should be one for every element with the class "main-section".
- [ ] Each element with the class of "nav-link" should contain text that corresponds to the `<header>` text within each `<section>` (e.g. if you have a "Hello world" section/header, your navbar should have an element which contains the text "Hello world").
- [ ] When I click on a navbar element, the page should navigate to the corresponding section of the #main-doc element (e.g. If I click on a .nav-link element that contains the text "Hello world", the page navigates to a `<section>` element that has that id and contains the corresponding `<header>`.

#### Layout

- [ ] On regular sized devices (laptops, desktops), the element with id="navbar" should be shown on the left side of the screen and should always be visible to the user.
- [ ] My Technical Documentation page should use at least one media query.

### My User Stories

- [ ] As a user, the page layout responsively changes to suit my device's screen width.
- [ ] As a user, I can use a sidebar to scroll through different sections.
- [ ] As a user, I can type words into a search bar to search for technical terms.
- [ ] As a user, when I hover above a technical term, a popup (tooltip) appears containing an explanation of the word's meaning. When I hover away from the technical term, the popup disappears so I can continue reading.
- [ ] As a user, I can click an icon that switches between Day & Night Mode, which changes the colour scheme to suit reading during the day or at night.
- [ ] As a user, I can click on any paragraph or header and a rich text editor will popup, allowing me to edit the contents of the page.
- [ ] As a user, when I click on a login button, a menu pops up that I can use to either sign up or sign in to the page.
- [ ] As a user, when I signup to the page, I can easily access and configure my profile information in my user profile.
- [ ] As a user, when I signin to the page, I can bookmark any article, and access these bookmarks in my user profile.
- [ ] As a user, I can click on a help button that brings up a contact form that I can use to ask for help with any problem I might have.
