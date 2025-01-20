import { createBrowserRouter } from "react-router-dom";
import Main from "./main/components/main";
import MainLayout from "@/components/layouts/main-layout";
import NotFound from "./exception/not-found";
import BlogDetail from "./blog/blog-detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Main /> },
      { path: "/articles/:id", element: <BlogDetail /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
