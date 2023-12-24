import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { BlogProvider } from "./providers/blog-providers";
import { AuthProvider } from "./providers/AuthProviders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AuthProvider>
    <BlogProvider>
      <RouterProvider router={router} />
    </BlogProvider>
  </AuthProvider>
  // </React.StrictMode>
);
