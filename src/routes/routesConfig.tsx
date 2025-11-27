import { Home, Partners, NotFound } from "../pages"

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/partners",
        element: <Partners />
    },
    {
        path: "*",
        element: <NotFound />
    }
]