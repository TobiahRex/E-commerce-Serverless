# _NJ2JP Styles_

### Guide for understanding Style sheet (SS) structure.

## STRATEGY
Every _Page_ has 2 "Master" SS. 1 for "Web" styles & 1 for "Mobile" styles.
  * "_page_-styles-web.scss
  * "_page_-styles-mobile.scss"
    - Mobile SS are broken down into 3 "Sub Master" categories.  Each "Sub Master" stylesheet contains it's respective "Media Query".  Inside this media query, all device specific stylesheets are imported.
      1. _galaxy_ (S6 & S7)
      2. _iphone_ (6 & 7)
      3. _ipp_ (6 & 7 PLUS)
  * Inside `src/Styles` is _app.scss_ which all "Page" specific "Master" SS's are imported into.
