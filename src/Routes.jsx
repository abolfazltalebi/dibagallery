import NotFound from "./pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import SearchNotFound from "./pages/SearchNotFound";
import AboutUs from "./pages/aboutUs/aboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search-not-found",
        element: <SearchNotFound />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
