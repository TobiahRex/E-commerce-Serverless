## NavBob

### Setup
1. Add the following style tree somewhere in your Master styles sheets.  I typically use `_elements.scss` to hold a class called `.navBob`
2. Then if you're using Sass you can call `@extend .navBob` inside the class brackets you will pass in as a prop. (See below *className*);

### Receives 2 props
* _height_: Indicates how far the onClick should scroll.
* _className_: Recommend using BEM syntax.  Therefore this component would have class relative to it's parent.
