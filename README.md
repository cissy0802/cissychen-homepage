# cissychen-homepage

Archived source of the personal homepage served at **https://www.cissychen.com**
(AWS CloudFront distribution `d1fjwdp9ivqfi8.cloudfront.net`, origin S3).

## Provenance

The original source was **never committed to git** — the old `cheng_chen_homepage`
repo contained only `.gitattributes`/`.gitignore` (last touched 2014). This repo was
reconstructed by **mirroring the live static site** (HTML + `js/`, `css/`, `img/`,
`textures/`, `video/`, and the inka3d WebGL demo scripts) on 2026-07-02.

It is a faithful full mirror of what CloudFront serves. If the S3 bucket is still
available, that bucket remains the most authoritative copy (it may hold assets not
referenced by the live HTML).

## Stack

Hand-built ~2014 static site: jQuery 2.1.4 + easytabs + jQuery UI, Font Awesome 3,
HTML5 Boilerplate (IE conditional comments), inka3d WebGL 3D demos, HTML5 `<video>`.
No build step — the files here are the deployable site as-is.

## Run locally

```
python3 -m http.server 8000
# open http://localhost:8000
```
