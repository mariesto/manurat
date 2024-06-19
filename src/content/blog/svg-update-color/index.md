---
title: "How to Change SVG Color Automatically"
description: "Hit the ground running."
date: "2024-06-16"
---

## Background
During my journey to develop this site, I want to create my own logo from a `.png` file.
Unfortunately, since I have a light and dark mode, the logo image is not adapt properly.

## Solution
To resolve this issue, I'm converting the image into `svg` format then add `fill="currentColor"` attribute inside the `<svg>` tag.
The `fill` attribute sets the color of the inside of an element.

```html
<svg width="600" height="220" xmlns="http://www.w3.org/2000/svg">
  <rect width="150" height="100" fill="currentColor" />
</svg>
```

### Example
#### Before

<svg width="600" height="220" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,10 40,198 190,78 10,78 160,198" fill="blue" fill-rule="nonzero" />
</svg>

#### After

<svg width="600" height="220" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,10 40,198 190,78 10,78 160,198" fill="currentColor" fill-rule="nonzero" />
</svg>