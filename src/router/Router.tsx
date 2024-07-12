import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Order from "../pages/Order";
import Home from "../pages/Dashboard";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {location.pathname}
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/dashboard", element: <Home /> },
      { path: "/order-management", element: <Order /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
