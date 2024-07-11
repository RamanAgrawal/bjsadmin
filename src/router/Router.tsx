import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Order from "../pages/Order";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "order", element: <Order /> },
    ],
  },
]);
