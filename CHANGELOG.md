# Changelog

## 0.2.1, November 11, 2026 (branch design/hero-phone-fit)

- Desktop hero now fits one screen at 1280x720 and 1440x900. The phone is a fixed 496px tall (31rem) at full width, taller only on narrow desktops (900 to 1159px) so the finished text never clips.
- The thread sits at the bottom of the phone like a real chat. On desktop, hidden messages take no space, and each new one pushes the older ones up inside the phone. The phone and page never change size.
- Phones (under 900px) keep the old rule: hidden messages keep their space, so nothing below moves.
- Tighter phone: 28px header icon, smaller receipt thumbnail (32x44), less bubble padding, caption moved under the phone. All text still 18px or larger.
- Shorter sample text in the hero phone. Same jobs and numbers.
- Desktop hero padding and heading size trimmed so the buttons sit well above the fold.

## 0.2.0, November 10, 2026 (branch design/motion-and-art)

- Hero phone now plays a short story once: Thursday receipt photo goes out, "Got it" comes back, Monday report arrives, then a red underline draws under "Not billed yet." Under 3.5 seconds, ends still. No loop.
- Sample ticket: the "Not billed yet" stamp lands once when it scrolls into view.
- Three two-color illustrations (truck dashboard with receipts, shoebox of receipts, work van at a job site), WebP, lazy loaded.
- New `motion.js` (under 1 KB, deferred). Motion only runs when JS is on and the visitor has not asked for reduced motion. Without it, the page shows the final state.

## 0.1.0, November 10, 2026

- First mock landing page: hero, sample weekly text, the math behind it, how it works, what it catches, one plan with the first-10 price, annual and Shoebox Catch-Up, 60-day promise, QuickBooks and no-app section, FAQ, signup placeholder, footer with SMS consent note.
- Static HTML and CSS only. No build step, no JavaScript.
- QA screenshots at 375px and 1440px in `docs/screenshots/`.
