# Experiment–5: Route-Based Lazy Loading in SPA  
## Sub-Experiment 2: Route-Based Lazy Loading for Contact and About Pages

---
<img width="1919" height="1028" alt="Screenshot 2026-02-17 153804" src="https://github.com/user-attachments/assets/cb1cd5bd-ee43-4394-b3a4-9c927ad6b106" />
<img width="1919" height="1029" alt="Screenshot 2026-02-17 153743" src="https://github.com/user-attachments/assets/520ff44c-d4a0-4e95-b1eb-63debd093cd6" />

## Aim

To implement route-based lazy loading for multiple components (Contact and About) in a Single Page Application (SPA) using React.

---

## Theory

Route-based lazy loading is a performance optimization technique in which components associated with specific routes are loaded only when the user navigates to those routes.

In a traditional setup, all components are bundled and loaded at once when the application starts. This increases the initial load time.

Using `React.lazy()` and `Suspense`, components such as Contact and About are dynamically imported only when their routes (`/contact`, `/about`) are accessed.

This technique reduces the initial bundle size, improves startup performance, and enhances scalability in large applications.

---

## Technologies Used

- React
- React Router DOM
- Vite
- CSS

---

## Procedure

1. Create a new React application using Vite.
2. Install `react-router-dom`.
3. Create separate component files:
   - Home.jsx
   - Contact.jsx
   - About.jsx
4. Import components dynamically using `React.lazy()`.
5. Wrap all routes inside `<Suspense>` and provide a fallback UI.
6. Define route paths using `<BrowserRouter>`, `<Routes>`, and `<Route>`.

---

## Implementation

### Lazy Import

```javascript
const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));
const About = lazy(() => import("./About"));
