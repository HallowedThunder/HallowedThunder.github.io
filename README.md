# Hallowed Thunder — GitHub Pages site

Zero-build static site for Hallowed Thunder.

## Current content architecture

- **Awakening** is the currently completed album on streaming services.
- Awakening is a New Testament project centered on Jesus, visceral and rock-rooted while moving between subgenres as the songs require.
- The wider Hallowed Thunder catalog is developed from the whole Bible.
- New finished songs / visual works appear on YouTube while future albums are still being assembled.
- When an album is complete, it moves into the streaming catalog.

## Deployment

Upload the contents of this directory to the root of a GitHub repository.

GitHub → Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

No npm, framework, or build step is required.

## Files

- `index.html` — semantic page content
- `styles.css` — complete visual / responsive system
- `app.js` — navigation, reveals, cursor field, parallax, tilt, canon interaction
- `assets/` — optimized brand / release artwork and favicon

## Brand assets in use

- `awakening-cover.webp` — real Awakening artwork
- `brand-banner.webp` — Hallowed Thunder banner treatment
- `brand-watermark.webp` — atmospheric closing mark
- `i-still-hear-it-cover.png` / `i-still-hear-it-frame.png` — current YouTube work

## External destinations

The site currently links to the official Hallowed Thunder YouTube channel and the supplied Spotify, YouTube Music, Apple Music, Tidal, and Deezer destinations.

## Favicon
The browser favicon, Apple touch icon, and manifest icons use the official Hallowed Thunder logo.


## v04 final visual corrections
- Official Hallowed Thunder logo replaces the temporary HT monogram in header and footer.
- The official 16:9 I Still Hear It presentation artwork is used in the hero stack and current-work feature without crop.

## Typography v05
The visual system now uses Instrument Serif for sacred/editorial display typography, Manrope for modern UI/body/impact typography, and IBM Plex Mono only for scripture references, indexes, and archival metadata. The hierarchy is deliberately semantic: sacred language and emotional statements use the serif; impact/navigation/action use the sans.


## v06 — rounded favicon + Spanish edition
- Official Hallowed Thunder mark rebuilt as a rounded-square favicon with transparent outer corners and small-size breathing room.
- English/Spanish language switch added to desktop and mobile navigation.
- Spanish edition lives at `/es/` and shares the same CSS, JavaScript, artwork and interactions.
- Spanish copy is an authored literary localization, not a literal machine translation.


## v07
- Spanish edition is a full structural clone of the English site at `/es/`, translated section-for-section.
- The old compressed release slogan was replaced with a two-step release path: finished song → YouTube premiere; completed album → streaming.


## Language routing
The EN/ES switch uses explicit `index.html` paths so it works both from local file previews and on GitHub Pages.
