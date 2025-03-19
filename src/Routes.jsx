import NotFound from "./pages/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //   {
      //     path: "/userProfile",
      //     element: <UserProfile />,
      //   },
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
