import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link
        to="/dashboard"
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 15px",
          backgroundColor: "black",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px"
        }}
      >
        Go to Dashboard
      </Link>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Loading...</h2>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
