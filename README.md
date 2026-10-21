# Electromart Dashboard

An admin dashboard for the Electromart store, for managing products, categories, banners and orders against the Electromart API.

**Status:** In progress. Products, categories, banners and orders are wired to a hosted API with list, add and edit screens, but the dashboard home uses hard-coded chart data, a customer card shows placeholder text, and there are no tests or documented deployment URL.

## The problem

A store's catalogue and order list need an admin interface that does not require direct database access. This dashboard gives store staff a browser UI for the shop's products, categories, promotional banners and orders, on top of an existing API.

## What it does

- Products: a list screen plus add and edit screens (`src/screens/dashboard/products`).
- Categories: a list screen plus add and edit screens (`src/screens/dashboard/Categories`).
- Orders: a list screen (`src/screens/dashboard/orders`).
- Banners: a short screen that uploads a banner image through the API (`src/screens/dashboard/banners.jsx`).
- Image upload through the Cloudinary upload widget, and rich-text descriptions through CKEditor 5.
- A home dashboard with charts (Recharts) and a profile page. The chart data is currently hard-coded.

## How it's built

- Vite with React, and a few TypeScript entry files alongside mostly JSX components.
- Client-side routing with lazy-loaded route modules (`*.lazy.jsx`), so each dashboard section loads on demand.
- Data access goes through one shared Axios instance (`src/utils/axios.jsx`) whose base URL points at the hosted Electromart API.
- Jotai is used for shared client state in several files. Layout pieces live in `src/layouts` and reusable widgets in `src/components`.
- Firebase Hosting serves the built `dist` folder with a rewrite to `index.html` for client-side routes (`firebase.json`).

## Running it locally

```bash
yarn install        # or npm install / pnpm install
yarn dev            # vite dev server
yarn build          # production build into dist/
yarn deploy         # build, then firebase deploy
```

The dev server talks to the hosted API, so no local backend is needed to browse the screens. Deploying requires access to the Firebase project in `.firebaserc`.

## What's left

- The home dashboard chart in `src/components/Chart.jsx` uses a hard-coded array instead of API data.
- `src/components/CustomerCard.jsx` still shows lorem-ipsum text. Customers appear only as a name column in the orders list; there is no customer screen.
- The API base URL is hard-coded in `src/utils/axios.jsx`. It should come from an environment variable.
- There are no automated tests.
- There is no README from the original project and no documented production URL.
- The repo contains a `tsconfig.json` and a TypeScript entry file, but the components are JSX, so the typing is partial.
