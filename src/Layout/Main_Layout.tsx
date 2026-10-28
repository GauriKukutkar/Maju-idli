
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import OfferPopup from "../Components/OfferPopup";

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* GLOBAL OFFER POPUP */}
      <OfferPopup />
    </>
  );
}
