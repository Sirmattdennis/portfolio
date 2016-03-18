#### Cascading Cols
---
Shown here is an html file using DotLiquid templating.
It is one of the main components in making a reusable method of dynamically arranging
content into cascading columns. That is, content (in this case, lists) of varying/indeterminate
heights, will be stacked in a way that prevents either column from outsizing the other and thus
causing the page layout to become lopsided. Additionally, it helps preserve accessibility to
responsive design, letting bootstrap easily do its job on the compiled columns.

The included screenshots show the end result, as they also account for the CMS and SCSS contribution.
While not apparent from the screenshot, the actual rendering order of the contentblocks is:

*Member Access > Orders > Information > Marketing Aid > Need Help*
