# evrsplsh

Public marketing site for (evermed)research, hosted via GitHub Pages at `evermedresearch.org` and `www.evermedresearch.org`.

## What is in this repo

- `index.html`: primary Health-Connect landing page
- `health-connect/demos/`: public video capability library and dedicated SEO watch pages
- `privacy.html`: current privacy policy for the splash site and inquiry workflow
- `thanks.html`: post-submission confirmation page
- `assets/`: site CSS, JS, fonts, and theme assets
- `images/`: supporting image assets
- `sitemap.xml` and `video-sitemap.xml`: search discovery for the site and public demo videos
- `CNAME`: custom domain configuration for GitHub Pages

## Public demo videos

The current library publishes four narrated capability walkthroughs:

- AI chart review from connected FHIR data
- Clinical data normalization, quarantine review, and FHIR ConceptMap authoring
- PIQI healthcare data-quality scorecards and executive normalization-lift reporting
- AI Claims Agent payer follow-up and revenue-cycle fleet control

Each watch page includes a stable poster, MP4 master, WebVTT captions, visible transcript, `VideoObject` structured data, workflow chapters, and a capability-specific inquiry link. Only synthetic demo data may be published here.

## Local preview

Serve the site locally from the repo root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Styling

The site is based on the Photon theme from HTML5 UP and keeps the theme source files under `assets/sass/`.

If you need to rebuild the compiled stylesheet:

```bash
sass assets/sass/main.scss assets/css/main.css
```

## Public repo notes

- This repository is intended to stay public because it is deployed with GitHub Pages.
- Do not commit credentials, internal notes, private documents, or draft assets that are not meant to be publicly accessible.
- Do not submit PHI or patient data through the site or its demo request flow.

## Attribution and license

This site is adapted from Photon by HTML5 UP.
The template license text is retained in `LICENSE.txt`.
