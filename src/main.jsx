import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/Details";

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <MainPage />,
    //     children: [
    //         { index: true, element: <SearchList /> },
    //         { path: "favorites", element: <FavoritesList /> },
    //     ],
    // },
    {
        path: "/list/:PKLT_CD",
        element: <Details />,
    },
    {
        path: "*",
        element: <>Page Not Found</>,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
