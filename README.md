# etch-a-sketch

## Purpose
Etch a sketch functionality implemented in JavaScript as part of [The Odin Project](https://theodinproject.com) curriculum.


## Live Version

https://mogoatlhe.github.io/etch-a-sketch/
![](images/design.png)

## Challenges Encountered
I tried using JavaScript's `defer` attribute which fetches the `.script` file as it is parsing the HTML, instead of fetching it only **after** the HTML has been parsed like when the `script` tags are placed as the last elements of the body tag.

`defer` attribute
```
(html fetch and parse -> javascript fetch, while still parsing html) -> javascript execute
```

`script` tag at the bottom of the body
```
html fetch -> html parse -> javascript fetch, once the html has been parsed -> javascript execute
```

As illustrasted above, `defer` is a bit more efficient compared to just placing the `script` tag at the bottom of the body tag

Unfortunately for me, `defer` executes when the DOM is ready but **before the DOMContentLoaded event**. And the [DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets*...](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event). Meaning that the JS was firing before my styles were loaded, this caused problems because I perform calculations in JS using the `width` that I set in my stylesheet.

Short story short, I'll be sticking with just placing the `script` tag as the last child of the body