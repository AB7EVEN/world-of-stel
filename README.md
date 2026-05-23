# STEL WHIP Landing Page

This repository contains the source code for the **STEL WHIP** landing page. The site is a static HTML/CSS project designed for deployment on Netlify with continuous deployment from GitHub. It showcases the STEL brand, highlights key product benefits, provides usage inspiration, and collects email addresses via a Netlify form.

## Project Structure

```
world-of-stel/
├── index.html       # Main landing page
├── success.html     # Thank‑you page after form submission
├── styles.css       # Styles for the site
├── netlify.toml     # Netlify build configuration
├── README.md        # This file
└── assets/
    └── stel-logo.jpg  # STEL logo used in nav and hero sections
```

## Features

* Clean, minimalist design aligned with the STEL brand aesthetic.
* Top navigation with links to `About`, `Ingredients` and `FAQ` (placeholders for future content) and a prominent **Join the waitlist** button.
* Hero section featuring the STEL logo and a short tagline.
* Four‑part benefits section highlighting *Low calorie*, *No added sugar*, *With collagen* and *Fridge staple*.
* “How to use” section with illustrative cards (placeholders for images) for matcha, fruit, yogurt bowls and hot chocolate.
* Waitlist form integrated with Netlify Forms. On submission, users are redirected to a simple thank‑you page.
* Footer with navigation links and social media links (Instagram and TikTok).

## Deployment

This site is built for static deployment on Netlify.

1. Ensure that the repository files are placed at the root of the project so that `index.html` sits in the top‑level directory.
2. In Netlify, set the **Publish directory** to `.` (the repository root), and leave the **build command** empty since no static site generator is used.
3. Ensure `netlify.toml` is present to configure a redirect from `/success` to the `success.html` page.
4. Netlify will automatically detect the `waitlist` form and handle submissions.

For local development, simply open `index.html` in your browser to preview the site.