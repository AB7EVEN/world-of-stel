# World of STEL

Static Netlify landing page for **STEL** — a low-calorie whipped collagen cream made for coffee, matcha, fruit, yogurt bowls and desserts.

## Stack

- Pure HTML / CSS / JS — no build step
- Cormorant Garamond + Inter (Google Fonts)
- Editorial palette (cream / linen / sand / champagne / ink)
- Netlify-compatible waitlist form (`data-netlify="true"`)

## Files

- `index.html` — main landing page
- `styles.css` — full editorial stylesheet
- `script.js` — header behavior, scroll reveal, FAQ, smooth scroll
- `success.html` — Netlify form success page
- `assets/stel-logo.png` — brand mark
- `assets/stel-hero.jpg` — hero product photo
- `assets/use-coffee.jpg` / `use-matcha.jpg` / `use-yogurt.jpg` / `use-chocolate.jpg` — ritual images

## Local preview

Any static server works:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Netlify settings

- Build command: _(leave blank)_
- Publish directory: `.`
- Branch: `main`

The form `name="stel-waitlist"` will appear under **Forms** in the Netlify dashboard after the first submission.
