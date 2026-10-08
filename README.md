# for srin ♡

A little website for our 4-year anniversary.

## how to run it
No build step, no installs. Just open `index.html` in a browser.

Or, for the song and photos to load reliably, run a tiny local server from
this folder:

```bash
python3 -m http.server 8000
```

then visit http://localhost:8000

## adding your photos & song
See [`assets/README.md`](assets/README.md). Short version:
- song → `assets/we-fell-in-love-in-october.mp3`
- photos → `assets/`, then set `src` + `caption` in the `YEARS` list in `script.js`.
