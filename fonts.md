# Font Eksak

## Heading: Fraunces (Google Fonts)
Soft-serif "Old Style" karya Undercase Type. Variable font dengan 4 axis:
`opsz` (9–144), `wght` (100–900), `SOFT` (0–100), `WONK` (0–1).

- Penggunaan: H1, H2, harga besar, angka section.
- Setelan yang dipakai:
  - H1/H2: `opsz` 144, `wght` 500, `SOFT` 50, `WONK` 0
  - Harga & angka: `opsz` 72, `wght` 600, `SOFT` 30, `WONK` 0
- `WONK` dimatikan agar tampilan tetap bersih; nyalakan (1) hanya jika ingin karakter lebih ekspresif.

## Body: DM Sans (Google Fonts)
Sans geometris bersih. Bobot 400, 500, 700.
- Penggunaan: paragraf, navigasi, tombol, label.

## Cara memasang (di `<head>` Layout.astro)
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,100..900,0..100,0..1;1,9..144,100..900,0..100,0..1&display=swap"
  rel="stylesheet"
/>
```

## Konfigurasi Tailwind (tailwind.config atau @theme)
```css
@theme {
  --font-display: "Fraunces", Georgia, serif;
  --font-sans: "DM Sans", system-ui, sans-serif;
}
```

## CSS untuk setelan axis
```css
.font-display {
  font-family: var(--font-display);
  font-variation-settings: "opsz" 144, "SOFT" 50, "WONK" 0;
  font-weight: 500;
}
.font-price {
  font-family: var(--font-display);
  font-variation-settings: "opsz" 72, "SOFT" 30, "WONK" 0;
  font-weight: 600;
}
```

## Catatan
Jika ingin self-host (lebih cepat dan tanpa permintaan ke Google), pasang lewat Fontsource:
`npm i @fontsource-variable/fraunces @fontsource-variable/dm-sans`
lalu impor di Layout.astro. Cek dokumentasi Fontsource untuk nama file CSS axis yang tepat.