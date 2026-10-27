import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../Layout/Main_Layout";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Menu from "../Pages/Menu";
import Branches from "../Pages/Branches";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}