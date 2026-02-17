# Experiment–5: Route-Based Lazy Loading in SPA  
## Sub-Experiment 1: Lazy Loading of Dashboard Component

---
<img width="1919" height="1028" alt="Screenshot 2026-02-17 153030" src="https://github.com/user-attachments/assets/7a13e204-add2-42e9-ae62-a7f8a97d7ec1" />
<img width="1919" height="1029" alt="Screenshot 2026-02-17 153013" src="https://github.com/user-attachments/assets/fd8c801c-acc8-45a3-95d6-e7f290983e55" />
<img width="1919" height="1028" alt="Screenshot 2026-02-17 153003" src="https://github.com/user-attachments/assets/749df586-195d-46cf-885e-052a5ebec41f" />


## Aim

To implement lazy loading of a Dashboard component in a Single Page Application (SPA) using React.

---

## Theory

Lazy loading is a performance optimization technique in which components are loaded only when they are required.

In this experiment, the Dashboard component is loaded dynamically using `React.lazy()` when the user navigates to the `/dashboard` route. The `Suspense` component is used to display a fallback UI ("Loading...") while the component is being loaded.

This reduces the initial bundle size and improves application startup performance.

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
3. Create a separate `Dashboard.jsx` file.
4. Use `React.lazy()` to import the Dashboard component.
5. Wrap routes inside `<Suspense>` with a fallback UI.
6. Define routing using `<BrowserRouter>`, `<Routes>`, and `<Route>`.

---

## Project Structure
src/
│
├── App.jsx
├── Dashboard.jsx
├── App.css


---

## Implementation Concept

```javascript
const Dashboard = lazy(() => import("./Dashboard"));

