# Handoff for Build & QA: motion and art

From: Bottom Dollar Design. Date: November 10, 2026. Branch: `design/motion-and-art`.

## Goal

Make the weekly text feel real on the first screen, and give the page a sense of the trade world, without slowing the page or making it harder to read for 55+ eyes.

## What is in the branch

| File | Size | What it is |
|---|---|---|
| `motion.js` | 0.7 KB | Adds `.play` to any `[data-play]` element once it is 35% on screen. Runs once per element. |
| `assets/receipt-thumb.svg` | 0.7 KB | Receipt drawing used inside the outgoing text bubble. Shown at 48 x 66 px. |
| `assets/img/dash-receipts-640.webp` | 42 KB | Truck dashboard with receipts and a phone. 640 x 480. |
| `assets/img/dash-receipts-1200.webp` | 105 KB | Same, 1200 x 900, for large or 2x screens. |
| `assets/img/shoebox-320.webp` | 16 KB | Shoebox of receipts. 320 x 320. |
| `assets/img/shoebox-640.webp` | 52 KB | Same, 640 x 640, for 2x screens. |
| `assets/img/van-jobsite-640.webp` | 27 KB | Work van at a job site. 640 x 360. |
| `assets/img/van-jobsite-1200.webp` | 72 KB | Same, 1200 x 675. |

All images are two colors only: navy `#1E2A4A` on carbon yellow `#F6E7A1`. They show no people, no words, and no logos.

## Where each piece goes

1. Hero phone (`.phone`, gets `data-play`). The thread now has four parts in this order:
   - "Thursday" day label (`data-step="1"`).
   - Outgoing bubble `.bubble.bubble-out` (`data-step="1"`): receipt thumbnail plus the word "Smith". Navy fill, yellow text, right aligned, max 75% wide.
   - Incoming bubble `.bubble.bubble-in` (`data-step="2"`): "Got it. $84.12 for Smith. Reply FIX if wrong." (shortened Nov 11)
   - "Monday" label and the weekly report bubble (`data-step="3"`). "Not billed yet:" gets class `mark`.
2. Timing: step 1 at 0.2s, step 2 at 1.1s, step 3 at 2.0s, each 0.35s. The red underline under "Not billed yet:" draws from 2.7s to 3.3s. Total 3.3s. It plays once and never loops.
3. Sample ticket stamp (`.stamp`, gets `data-play`): scales from 1.6 to 1 and fades in, 0.32s, starting 0.15s after it is on screen. It keeps its -3 degree tilt.
4. Pricing ticket: shoebox image floats right of the Shoebox Catch-Up note, 96px wide on phones and 128px from 900px up.
5. "Fits how you already work": a new `.fit-head` grid puts the title and the dashboard image side by side from 900px up. The image goes below the title on phones.
6. Signup section: the van image sits above "Start my first week", max 640px wide.

## Rules the code already follows (keep them)

- Motion starts only if an inline head script finds IntersectionObserver and no reduced-motion setting. It adds `motion` to `<html>`. With no JS or with reduced motion, every item shows in its final state.
- Failsafe: if `motion.js` does not load within 4 seconds, the head script removes `motion`, so nothing stays hidden.
- Hidden steps use opacity only, so the phone keeps its full height and nothing on the page jumps.
- The "Not billed yet" underline is always visible when motion is off. It marks missed money with a line as well as red, so color is not the only signal.
- All new images have `width`, `height`, `loading="lazy"`, `decoding="async"`, `srcset`, and `sizes`. None are above the fold on phones. Their `alt` is empty because the text beside each one already says the same thing.
- No video, no audio, no autoplay media.

## What I left out on purpose

- Explainer video: not now. The product is not live yet, so a video would be a made-up demo. It would also add weight, captions, and upkeep that the phone animation and "How it works" already cover. Revisit after the 5-contractor validation, using a real screen recording of a real text thread.
- Counting numbers: no. Dollar amounts that tick up make readers wait, can be misread mid-count, and suggest live data. The money should be still and readable at once.

## Acceptance checks

1. 375px, 320px, and 1440px: no sideways scroll. (Checked: none.)
2. With reduced motion on (OS setting or DevTools), the hero shows all four thread parts and the stamp with no movement. (Checked.)
3. With JS off, the hero shows the full thread and the stamp, and the underline is visible. (Checked.)
4. With motion on, the phone plays once and stops on the full Monday text in about 3.3 seconds. Scrolling back up does not replay it. (Checked frame by frame.)
5. No console errors. (Checked at all three widths, both motion settings.)
6. First load on a phone does not fetch any `.webp` until you scroll near it. First-load page weight measured at 375px: about 118 KB, most of it the heading font. (Measured locally.)
7. Smallest new text is 18px (bubble text). Yellow text on navy in the outgoing bubble is about 11:1.
8. No em dashes, en dashes, or exclamation points in any new copy.
9. On a real iPhone (Safari) and a real Android phone (Chrome), the animation plays smoothly and the images look sharp. (Not checked yet. Needs real devices.)

## Open items

- The receipt reply in the hero says "Got it. $84.12 for Smith. Reply FIX if wrong." Keep it under about 48 characters so it stays one line on desktop.
- Nov 11 update: the desktop phone is a fixed height (31rem at 1160px and up, 34rem at 1024 to 1159px, 37rem at 900 to 1023px). Any new line of sample text must be checked at 900px, 1024px, and 1160px so the Thursday label is not clipped.
- Growth layout limit: the outgoing bubble fits one short job name (up to about 10 characters) next to the receipt thumbnail.
