# kwanyinsan.github.io

This is my personal GitHub Pages portfolio for `https://kwanyinsan.github.io`.

It is a static HTML, CSS, and JavaScript site with one actual page: `index.html`. The site has two internal screens, Profile and Projects, and the JavaScript switches between them without changing the URL.

## Structure

- `index.html` contains the page structure.
- `style.css` contains the dark responsive styling.
- `data.js` contains profile, contact, experience, education, skills, leadership, and project content.
- `script.js` renders the content and handles the Profile and Projects switcher.
- `assets/CV.pdf` is the downloadable CV.
- `assets/profile.jpg` is the optional profile photo.

## Updating Content

Edit `data.js` to add or update projects, work experience, education, skills, or leadership entries.

Dated entries should be kept newest first. Entries also include `sortDate` fields where sorting is useful.

To update the profile photo, replace `assets/profile.jpg`. If the image is missing, the site shows an initials placeholder.

To update the CV, replace `assets/CV.pdf`. The Download CV link already points to that file.

The sidebar update date uses the public GitHub repository in `data.js` to fetch the latest commit month and year when the site is online. If that request is unavailable, it falls back to the browser's modified date for `index.html`.

No build step is required. GitHub Pages can serve the site directly from these files.
