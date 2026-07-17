Here's a full technical brief with the actual source included — much more useful than my earlier guesswork:

---

## Bug Report: Splide carousel not slicing into slides (Astro + Splide.js)

**Stack:** Astro static site, Splide.js (`@splidejs/splide`), dynamically imported client-side.

### Symptom
On mobile viewport (390×844, Chrome DevTools emulation), the "Leadership and Community" Splide carousel renders all cards side-by-side, overflowing the container, instead of paging one slide at a time.

### Diagnostic evidence

Debug loop over all `.splide` containers:
```js
document.querySelectorAll('.splide').forEach((el, i) => {
  console.log(`Carousel ${i}:`, {
    id: el.id,
    initialized: el.dataset.splideInit,
    slides: el.querySelectorAll('.splide__slide').length,
    options: el.splide?.options,
  });
});
```
Result — **all 4 carousels**:
```
initialized: 'true'
slides: 0
options: undefined
```

But a manual follow-up check of the raw DOM:
```js
document.querySelectorAll('.splide__list').forEach(el => console.log(el.children.length, 'slides'));
// → 4, 5, 5, 7
```

**The core contradiction:** `.splide__list` genuinely has 4–7 `<li>` children in the DOM, but `.splide__slide` (the class those `<li>`s are supposed to have) matches zero elements. Also, `el.splide` — the instance we manually attach post-mount — is `undefined`, meaning `.mount()` never completed successfully.

### Relevant source

`Carousel.astro` init script:
```js
async function initSplide() {
  const { Splide } = await import('@splidejs/splide');
  const splideElements = document.querySelectorAll('.splide');
  splideElements.forEach((el) => {
    if (el.dataset.splideInit) return;
    el.dataset.splideInit = 'true';
    // ...
    const splide = new Splide(el, {
      type: customScroll ? 'slide' : 'loop',
      perPage,
      perMove,
      gap,
      breakpoints: {
        767: { perPage: 1, gap: '1rem', arrows: false, pagination: false, drag: 'free', snap: false, focus: 'center' },
        1024: { perPage: 3, gap: '1.5rem' },
        ...breakpoints,
      },
    }).mount();
    el.splide = splide; // never runs if mount() throws
  });
}
initSplide();
```

`CarouselSlide.astro` (slide wrapper — class is correctly set here):
```astro
<li class="splide__slide">
  <slot />
</li>
```

`Leadership.astro` usage — note the custom breakpoints passed in:
```astro
<Carousel
  id="leadership-carousel"
  perPage={1}
  perMove={1}
  breakpoints={{
    768: { perPage: 1.2 },
    1024: { perPage: 1 }
  }}
>
```

### Key detail to flag for Nemotron
- `dataset.splideInit = 'true'` is set **before** `new Splide().mount()` runs, as a re-entry guard.
- If `.mount()` throws synchronously (e.g. from an invalid option), the guard is already `true`, so on any re-run of the init script the carousel is silently skipped forever — permanently "stuck" uninitialized but *looking* initialized.
- Suspect option: `perPage: 1.2` (fractional) in the `768` breakpoint for the leadership carousel — Splide's `type: 'loop'` mode has historically had strict integer expectations for `perPage`/loop clone math, and a fractional value there could throw during `Components.Clones` setup, which happens *after* Splide has already restructured/detached the original `.splide__slide` list items (explaining why they exist as `<li>` children but no longer carry the `.splide__slide` class — Splide may have already stripped/moved them mid-failure).
- Ask Nemotron to check: does Splide v4's `loop` mode support non-integer `perPage` values at all, and does `Splide.mount()` fail atomically or partially (leaving DOM half-migrated) when an invalid option throws mid-Components-init?

### What to ask Nemotron to do
1. Confirm whether fractional `perPage` in a breakpoint is valid for `type: 'loop'`.
2. Suggest a fix: either round to integer, use `type: 'slide'` instead of `'loop'` for carousels with fractional peek behavior, or wrap `.mount()` in try/catch and reset `dataset.splideInit` on failure so it's not permanently stuck.
3. Explain why `.splide__slide` count went to 0 while `.splide__list` retained its children — is this expected Splide failure behavior, or does it indicate something else broke the DOM (e.g. a competing script re-running Splide init and corrupting the list)?`