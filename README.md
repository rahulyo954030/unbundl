# Unbundl — Marketing Landing (Whistle)

This repository is a small React app (Vite) for the Whistle landing page. It includes components for Hero, Pricing, Features, Results, Testimonials, FAQ, and more.

## Quick setup

1. Install dependencies

```bash
npm install
```

2. Install `axios` (used by the shared content hook)

```bash
npm install axios
```

3. Run development server

```bash
npm run dev
```

Open http://localhost:5173 (or the port Vite shows).

## What I changed / implemented

- Added a shared content hook: `src/components/common/useContent.js` (uses `axios` to fetch JSONPlaceholder posts).
- Wired many components to use dynamic content from the hook, with static fallbacks:
  - `Hero`, `LeadForm`, `ClinicBanner`, `BenefitCarousel`, `PricingSection`, `ResultsSection`, `WhyWhistle`, `WhistleDifference`, `ComparisonTable`, `StepsSection`, `DoctorSection`, `Testimonials`, `FAQ`, `Navbar`, `Footer`.
- Restored original short `Banner` text (left static).
- Implemented responsive improvements for `Hero` and `PricingSection`.
- Ensured a shared container via `src/styles/index.css` to standardize max-width and centering.

## File references

- Hook: `src/components/common/useContent.js`
- Global styles: `src/styles/index.css`
- Key components: `src/components/*` (see list in `src/App.jsx`)

## How dynamic content works

- `useContent(limit)` returns `{ data, loading, error }`.
- Components map the returned `data` (JSONPlaceholder posts) into titles and bodies for headings, lists, and cards. Each component keeps a safe static fallback if `data` is empty or slow.

## Responsive notes & testing

- I updated CSS for `Hero` and `PricingSection` to be responsive at common breakpoints (<=992px and <=576px).
- I did not run an automated Lighthouse run or full device QA. I recommend:

```bash
npm run dev
# then check breakpoints: 375, 576, 768, 992, 1280
```

If you want, I can run the dev server and capture screenshots for those breakpoints and patch any remaining layout issues.

## Next steps / improvements you might want

- Run manual QA on actual devices and adjust spacing for long API text.
- Improve accessibility (focus states, ARIA labels) across interactive components.
- Replace JSONPlaceholder with your real content API and map fields accordingly.
- Add unit/integration tests for components.

## APIs used

- Primary (used in this project): `JSONPlaceholder` — endpoint: `https://jsonplaceholder.typicode.com/posts`.
  - Purpose: supplied titles and bodies used as temporary dynamic content (mapped into headings, feature titles, FAQ questions/answers, etc.).
  - Mapping example: `post.title` -> component heading/feature title, `post.body` -> paragraph/description.
  - The app uses `axios` (via `useContent`) to fetch these posts and components provide static fallbacks when API data is unavailable.

*Note:* JSONPlaceholder is a public fake API used for prototyping; replace it with your production API and adjust mappings when ready.

---

If you'd like, I can commit these changes and open a short PR, or run the dev server now and take screenshots for mobile/tablet views.
