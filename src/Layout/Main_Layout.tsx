import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import OfferPopup from "../Components/OfferPopup";


export default function MainLayout() {

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