# Manomay – Food Ordering Website

This is a very lightweight static prototype of **Manomay**, a food-ordering site. It contains three static pages:

* `index.html` – Home page with **Login** and **Sign Up** buttons
* `login.html` – Simple login form (no backend yet)
* `signup.html` – Simple sign-up form (no backend yet)

All styling lives in `assets/css/style.css`.

## Deploying to Vercel

Because this is a purely static site, deployment to Vercel is straightforward:

1. Push this repository to GitHub.
2. In the Vercel dashboard, import the repository.
3. For **Framework Preset** choose **Other** (static).
4. Leave the **Build Command** empty and set **Output Directory** to `.` (root).
5. Deploy, and Vercel will host the site at `https://manomay.vercel.app` (or your chosen sub-domain).

Feel free to extend these pages or migrate to Next.js for full-stack features later on.
