import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="space-y-12 my-6 overflow-hidden ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
