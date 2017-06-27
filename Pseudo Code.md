## Pseudo Code for the Technical Documentaion Page

- Divide the HTML code into seven separate concerns (sections): `general styling`, `content`, `css media queries`, `layout`, `icons` and `MAVO CMS`.

### General Styling
- The `general styling` section includes the standard body font size (16px) and corresponding styling for the default screen size (LG).

### Content
- The `content` section contains the actual information on the page:
    - Paragraphs
    - Headers
    - List Items    etc.
    
### Media Queries
- The `css media queries` section contains the CSS that will responsively change according to the device screen width.
    - Extra Large   (XL) : 2560++
    - Large         (LG) : 1440 --> 2560
    - Medium        (MD) : 1024 --> 1440
    - Small         (SM) : 600 --> 1024
    - Extra Small   (XS) : 360 --> 600

### Layout
- The `layout` section contains DOM elements (divs) grouped by their device media query range; that are manipulated to hide or display divs to change the layout of the page according to the device screen width.
    - Each layout is composed of several `div` elements.
    - On screen load, a script (a single function) is called that will calculate the screen width, create the `div` elements, and append the `content` and `icon` elements unto those divs. 

### Icons
- The `icons` section contains SVG images of buttons that will dynamically be displayed according to the device screen width.

### MAVO
- The `MAVO` section contains the script for the Content Management System: `MAVO`. The functionality to edit the `content` of the page will be contained here. 
