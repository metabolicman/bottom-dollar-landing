# Changelog

## 0.2.0, November 10, 2026 (branch design/motion-and-art)

- Hero phone now plays a short story once: Thursday receipt photo goes out, "Got it" comes back, Monday report arrives, then a red underline draws under "Not billed yet." Under 3.5 seconds, ends still. No loop.
- Sample ticket: the "Not billed yet" stamp lands once when it scrolls into view.
- Three two-color illustrations (truck dashboard with receipts, shoebox of receipts, work van at a job site), WebP, lazy loaded.
- New `motion.js` (under 1 KB, deferred). Motion only runs when JS is on and the visitor has not asked for reduced motion. Without it, the page shows the final state.

## 0.1.0, November 10, 2026

- First mock landing page: hero, sample weekly text, the math behind it, how it works, what it catches, one plan with the first-10 price, annual and Shoebox Catch-Up, 60-day promise, QuickBooks and no-app section, FAQ, signup placeholder, footer with SMS consent note.
- Static HTML and CSS only. No build step, no JavaScript.
- QA screenshots at 375px and 1440px in `docs/screenshots/`.
