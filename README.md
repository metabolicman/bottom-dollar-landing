# Bottom Dollar landing page (mock)

A one-page preview site for Bottom Dollar. Small trade contractors text receipt photos and a job name to one number. Once a week they get one text with the profit on each job and any work they did but never billed.

This is a mock. Signup is not open, checkout is not wired, and every unknown fact is an honest placeholder in square brackets.

## Deploy on Netlify

There is no build step.

1. In Netlify, choose "Add new site", then "Import an existing project", then pick this repo.
2. Leave the build command empty. Set the publish directory to the repo root (`.` or blank).
3. Deploy.

To preview locally, open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit `http://localhost:8000`.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole page. No JavaScript. |
| `styles.css` | All styles, mobile first. |
| `assets/` | Logo, icon, and stamp SVGs from the Bottom Dollar brand files. |
| `assets/fonts/` | TeX Gyre Schola Bold (a free Century Schoolbook-style font) and its license. |
| `docs/screenshots/` | QA screenshots at 375px and 1440px. |
| `CHANGELOG.md` | What changed and when. |

## Placeholders to fill before launch

| Placeholder | Where | Fill with |
|---|---|---|
| `[PHONE]` | Header, signup section | The real Twilio 10DLC number, once registered |
| `[REAL COUNT]` | Pricing ticket | Real number of $59 spots left (from the Stripe coupon's 10-use limit) |
| `[LINK]` | Sample weekly text | The final short link domain (open decision in Build Spec v1) |
| `[COMPANY LEGAL NAME]`, `[POSTAL ADDRESS]`, `[CITY, STATE ZIP]`, `[EMAIL]` | Footer | Real business details. CAN-SPAM needs a real postal address. |
| `[PRIVACY POLICY]`, `[TERMS]` | Footer | Real pages. Have them live before 10DLC review (check Twilio's current rules). |
| Preview bar | Top of page | Remove once signup is live |
| `#signup` section | Bottom of page | Replace with the Stripe Checkout link when it exists |

The sample weekly text and ticket use made-up jobs (Smith, Lopez, Oak St) and are labeled as samples. They follow the math and the "No hours sent" rule from Build Spec v1.

## Copy rules this page follows

- Sells the weekly profit answer and the unbilled-work catch, not receipt scanning.
- One plan: $79 a month, first 10 shops at $59 locked, $790 a year, optional $149 Shoebox Catch-Up, 60-day money-back promise. No tiers, no fake anchors, no fake scarcity.
- No statistics, logos, or testimonials. Nothing is claimed that is not in the project's Build Spec v1 or Pricing and Features Findings.
- Eighth-grade reading level. No em dashes, no exclamation points, no emojis.
- The SMS note says the opt-in box is unchecked by default, lists what texts are sent, and covers STOP, HELP, and message and data rates.

Features on the page describe the v1 plan in Build Spec v1. They are not live yet, which is why the preview bar is there.

## Design decisions (one line each)

- Look: carbon-copy job ticket, the brand look chosen Nov 10, 2026. Contractors already know carbon tickets and receipts.
- Colors: carbon yellow, light yellow, and ink navy from the brand file. Stamp red only marks losing jobs, missed money, and the stamp.
- Headings and big numbers: a Century Schoolbook-style serif, to match the logo's C059 Bold. Self-hosted, so no third-party font request.
- Body text: the phone's own sans font at 20px, so it reads clearly and loads instantly.
- Zigzag ticket tear and the double "bottom line" rule repeat the logo icon. They are the page's one visual motif.
- The phone mock is the first screen's focal point, because the weekly text is the product.
- Hard offset shadow on the phone only, to lift the one object that matters on the first screen.
- Sample table turns into one block per job on phones, so the Profit column is never cut off.
- FAQ uses native details and summary tags, so it works with a keyboard and needs no JavaScript.
- No light or dark toggle. The page is light only, on purpose, because older readers on job sites need strong contrast in daylight.

## QA checklist (last run Nov 10, 2026)

- 375px, 320px, and 1440px wide: no sideways scrolling.
- Smallest text on the page: 18px. Body text: 20px.
- Lowest contrast found: 5.28:1 (stamp red on carbon yellow). Body text is 11:1 or higher. All text passes WCAG AA.
- All buttons and links are at least 44px tall on phones.
- Every `#` link goes to a section that exists.
- Keyboard: Tab order follows the page, focus ring is a 4px outline, FAQ opens with Enter and Space, skip link works.
- No console errors. No em dashes, en dashes, or exclamation points in the page text.

## Font license

TeX Gyre Schola is free under the GUST Font License. See `assets/fonts/GUST-FONT-LICENSE.txt`.
