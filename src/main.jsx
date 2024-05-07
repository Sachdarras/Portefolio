// index.jsx
import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Pages/Home";
import Projet from "./Pages/Projet";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projet",
    element: <Projet />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projet />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </RouterProvider>
  </React.StrictMode>
);
