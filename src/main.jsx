import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchLists from "./components/features/SearchLists";
import FavoritesLists from "./components/features/FavoritesLists";
import DetailsPage from "./pages/DetailsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        children: [
            { index: true, element: <SearchLists /> },
            { path: "favorites", element: <FavoritesLists /> },
        ],
    },
    {
        path: "/list/:PKLT_CD",
        element: <DetailsPage />,
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
