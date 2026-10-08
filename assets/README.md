# assets

Drop your files in this folder.

## the song
Save it here as exactly:

```
we-fell-in-love-in-october.mp3
```

(any mp3 works — just keep the filename, or update the `<source>` path in `index.html`.)

## the photos
Save your pictures here with any names you like, e.g. `first-date.jpg`,
`roadtrip.png`, etc. Then open `script.js`, find the `YEARS` list near the top,
and fill in the `src` + `caption` for each one:

```js
{ src: "assets/first-date.jpg", caption: "our first date ♡" }
```

Leave `src` as `""` to keep showing a plain box (handy while testing).
