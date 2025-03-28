import NotFound from "./pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import SearchNotFound from "./pages/SearchNotFound";
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
      //   {
      //     path: "/privacyPolicy",
      //     element: <PrivacyPolicy/>,
      //   },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
