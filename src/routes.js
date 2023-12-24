import React from "react";
import { DailyDigestPage } from "./pages/DailyDigestPage";
import { DesignToolsPage } from "./pages/DesignToolsPage";
import { TutorialsPage } from "./pages/TutorialsPage";
import { HomePage } from "./pages/HomePage";
import { SingleBlogPage } from "./pages/SingleBlogPage";
import { createBrowserRouter } from "react-router-dom";
import { AddBlogPage } from "./pages/AddBlogPage";
import { EditBlogPage } from "./pages/EditBlogPage";
import { LandingPage } from "./pages/landingPge/LandingPage";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/HomePage",
        element: <HomePage />,
      },
      {
        path: "/DailyDigest",
        element: <DailyDigestPage />,
      },
      {
        path: "/DesignTools",
        element: <DesignToolsPage />,
      },
      {
        path: "/Tutorials",
        element: <TutorialsPage />,
      },
      {
        path: `/Tutorials/:id`,
        element: <SingleBlogPage />,
      },
      {
        path: `/DailyDigest/:id`,
        element: <SingleBlogPage />,
      },
      {
        path: `/DesignTools/:id`,
        element: <SingleBlogPage />,
      },
      {
        path: "/:id",
        element: <SingleBlogPage />,
      },
      {
        path: "/AddBlog",
        element: <AddBlogPage />,
      },
      {
        path: "/EditBlogPage/:id",
        element: <EditBlogPage />,
      },
    ],
  },
]);
