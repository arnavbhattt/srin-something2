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

## the flow
1. **password** — two blanks with an `&`. The answer is `behemoth` & `behemini`
   (any casing).
2. **the proposal** — "Will you be my 4-year anniversaritine?" with a runaway
   *Yes!* button. Takes 4 clicks to catch it.
3. **the letter** — a note from Arnav, then *next*.
4. **the years** — four pages, one per year. Tap to reveal each photo. The song
   starts on Year One.
5. **the end** — a closing message and a *start over* button.

## adding your photos & song
See [`assets/README.md`](assets/README.md). Short version:
- song → `assets/we-fell-in-love-in-october.mp3`
- photos → `assets/`, then set `src` + `caption` in the `YEARS` list in `script.js`.
