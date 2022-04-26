import Index from "../pages/index";
import Gallery from "../pages/gallery";
import Roadmap from "../pages/roadmap";
export const mainRoutes = [
    {
        path: '/gallery',
        component: Gallery
    },
    {
        path: '/roadmap',
        component: Roadmap
    },
    {
        path: '/',
        component: Index,
    }
]