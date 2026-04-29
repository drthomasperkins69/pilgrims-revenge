# Pilgrims Revenge — Premium Boat Services

A static marketing website for **Pilgrims Revenge**, a premium boat services business based at Coomera Marina, serving Brisbane and the Gold Coast.

## What's offered

- **Engine maintenance & repairs** — outboard, sterndrive, shaft drive; petrol and diesel
- **Marine electrical** — DC/AC, lithium banks, navigation, comms, switchboards
- **Structural & hull repairs** — fibreglass, gelcoat, osmosis, antifoul, deck recore
- **Project management** — refits, restorations, new commissioning, insurance rebuilds

End-to-end service for vessels of every size, from tenders to superyachts, all run from the Coomera Marina base.

## Site structure

```
pilgrims-revenge/
├── index.html        Home page
├── services.html     Detailed services with anchors (#engine, #electrical, #structural, #project)
├── about.html        About + Coomera Marina (#marina)
├── contact.html      Contact form + workshop info
├── css/styles.css    Navy & yellow nautical theme
├── js/main.js        Mobile nav, scroll reveal, form handling, year stamp
└── images/favicon.svg
```

## Run locally

It's plain static HTML/CSS/JS — open `index.html` in a browser, or:

```bash
cd pilgrims-revenge
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy

Drop the folder onto any static host — GitHub Pages, Netlify, Cloudflare Pages, S3 or a vanilla web server.

### GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:<user>/pilgrims-revenge.git
git push -u origin main
# Settings → Pages → Branch: main / root → Save
```

## Theme

| | |
|---|---|
| Navy (deep) | `#0a1f3d` |
| Navy | `#142850` |
| Yellow | `#f5c518` |
| Yellow (bright) | `#ffd700` |
| Cream | `#faf6e8` |

Display font: **Playfair Display**. Body: **Inter**. Both loaded from Google Fonts.

## Notes

- Contact form is front-end only — wire it up to Formspree / Netlify Forms / your own endpoint when deploying.
- Phone, email and address placeholders should be updated with the real business details before going live.
