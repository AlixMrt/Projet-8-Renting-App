// import "../assets/scss/layouts/_root-layout.scss";
import "./_root-layout.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
