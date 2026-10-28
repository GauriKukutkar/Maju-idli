import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowRight,
  Navigation,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  // FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa";

import Logo from "../assets/Logo.jpeg";


export default function Footer() {

  const currentYear = new Date().getFullYear();


  return (

    <footer className="relative overflow-hidden bg-[#075C30] text-white">


      {/* ==================================================
          DECORATIVE BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full border border-white/[0.04]" />

      <div className="pointer-events-none absolute -left-20 top-32 h-52 w-52 rounded-full border border-white/[0.04]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#F36A16]/5 blur-[80px]" />


      {/* ==================================================
          TOP CTA STRIP
      ================================================== */}

      <div className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">


            {/* LEFT */}

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F36A16]">

                <MapPin size={21} />

              </div>


              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-200">
                  Craving Something Delicious?
                </p>

                <h3 className="mt-1 text-xl font-bold md:text-2xl">
                  Find your nearest Maju Idli
                </h3>

              </div>

            </div>


            {/* BUTTON */}

            <Link
              to="/branches"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold !text-[#0B6B37] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F36A16] hover:!text-white"
            >

              View All Branches

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

          </div>

        </div>

      </div>



      {/* ==================================================
          MAIN FOOTER
      ================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-14">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.1fr_1fr] lg:gap-12">


          {/* ==================================================
              BRAND
          ================================================== */}

          <div>

            <Link
              to="/"
              className="inline-flex"
            >

              <div className="rounded-2xl bg-white p-2.5 shadow-lg">

                <img
                  src={Logo}
                  alt="Maju Idli"
                  className="w-44 object-contain sm:w-48"
                />

              </div>

            </Link>


            <p className="mt-5 max-w-sm text-sm leading-7 text-green-100/90">

              Authentic South Indian flavours made with
              traditional recipes, fresh ingredients and the
              warmth that makes every Maju meal special.

            </p>


            {/* ==========================================
                SOCIAL MEDIA
            ========================================== */}

            <div className="mt-6">

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-green-200">
                Follow Our Journey
              </p>


              <div className="flex flex-wrap gap-2.5">


                {/* INSTAGRAM */}

                <a
                  href="https://www.instagram.com/majuidli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Maju Idli Instagram"
                  title="Instagram"
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F36A16] hover:bg-[#F36A16]"
                >

                  <FaInstagram size={17} />

                </a>


                {/* FACEBOOK */}

                <a
                  href="https://www.facebook.com/people/Maju-Idli/61572115364506/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Maju Idli Facebook"
                  title="Facebook"
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F36A16] hover:bg-[#F36A16]"
                >

                  <FaFacebookF size={15} />

                </a>


                {/* YOUTUBE */}

                <a
                  href="https://www.youtube.com/@MajuIdli"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Maju Idli YouTube"
                  title="YouTube"
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F36A16] hover:bg-[#F36A16]"
                >

                  <FaYoutube size={18} />

                </a>


                {/* LINKEDIN */}

                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Maju Idli LinkedIn"
                  title="LinkedIn"
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F36A16] hover:bg-[#F36A16]"
                >

                  <FaLinkedinIn size={16} />

                </a> */}


                {/* GOOGLE BUSINESS */}

                <a
                  href="https://www.google.com/search?q=maju+idli+branches+in+nagpur&rlz=1C1CHBD_en-GBIN1167IN1169&oq=maju+idli+branches+in+na&gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigATIHCAYQIRiPAjIHCAcQIRiPAjIHCAgQIRiPAtIBCTgxNjZqMGoxNagCCLACAfEFtCHoKfQJC2c&sourceid=chrome&source=chrome.rb&ie=UTF-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Maju Idli Google Business Profile"
                  title="Google Business Profile"
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#F36A16] hover:bg-[#F36A16]"
                >

                  <FaGoogle size={16} />

                </a>

              </div>

            </div>

          </div>



          {/* ==================================================
              QUICK LINKS
          ================================================== */}

          <div>

            <h3 className="text-base font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-2 h-[2px] w-9 rounded-full bg-[#F36A16]" />


            <ul className="mt-6 space-y-3">

              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Our Menu", "/menu"],
                ["Branches", "/branches"],
                ["Gallery", "/gallery"],
                ["Contact Us", "/contact"],
              ].map(([name, path]) => (

                <li key={path}>

                  <Link
                    to={path}
                    className="group inline-flex items-center gap-2 text-sm !text-green-100/90 transition-colors duration-300 hover:!text-white"
                  >

                    <span className="h-1.5 w-1.5 rounded-full bg-[#F36A16] transition-transform duration-300 group-hover:scale-150" />

                    {name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>



          {/* ==================================================
              CONTACT
          ================================================== */}

          <div>

            <h3 className="text-base font-bold text-white">
              Get In Touch
            </h3>

            <div className="mt-2 h-[2px] w-9 rounded-full bg-[#F36A16]" />


            <div className="mt-6 space-y-5">


              {/* LOCATION */}

              <div className="flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-[#FF8A43]">

                  <MapPin size={17} />

                </div>

                <div>

                  <p className="text-xs text-green-200">
                    Our Locations
                  </p>

                  <p className="mt-1 text-sm leading-6 text-green-50">
                    Wadi, Vasudev Nagar,
                    <br />
                    Rajiv Nagar & Dharampeth
                  </p>

                </div>

              </div>


              {/* PHONE */}

              <a
                href="tel:+918624015408"
                className="group flex items-center gap-3"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-[#FF8A43] transition group-hover:bg-[#F36A16] group-hover:text-white">

                  <Phone size={16} />

                </div>

                <div>

                  <p className="text-xs text-green-200">
                    Call Us
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    +91 86240 15408
                  </p>

                </div>

              </a>


              {/* EMAIL */}

              <a
                href="mailto:maju.idli@majuventurs.com"
                className="group flex items-center gap-3"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-[#FF8A43] transition group-hover:bg-[#F36A16] group-hover:text-white">

                  <Mail size={16} />

                </div>

                <div className="min-w-0">

                  <p className="text-xs text-green-200">
                    Email Us
                  </p>

                  <p className="mt-1 break-all text-sm font-medium text-white">
                          maju.idli@majuventurs.com
                  </p>

                </div>

              </a>

            </div>

          </div>



          {/* ==================================================
              OPENING HOURS
          ================================================== */}

          <div>

            <h3 className="text-base font-bold text-white">
              Opening Hours
            </h3>

            <div className="mt-2 h-[2px] w-9 rounded-full bg-[#F36A16]" />


            <div className="mt-6">

              <div className="flex items-start gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-[#FF8A43]">

                  <Clock3 size={17} />

                </div>

                <div>

                  <p className="text-sm font-semibold text-white">
                    Monday – Sunday
                  </p>

                  <p className="mt-1 text-sm text-green-100">
                    7:00 AM – 10:30 PM
                  </p>

                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-green-400/10 px-2.5 py-1">

                    <span className="h-1.5 w-1.5 rounded-full bg-green-300" />

                    <span className="text-[11px] font-medium text-green-100">
                      Open All Week
                    </span>

                  </div>

                </div>

              </div>


              {/* DIRECTIONS */}

              <Link
                to="/branches"
                className="group mt-6 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 transition-all duration-300 hover:border-[#F36A16]/60 hover:bg-[#F36A16]"
              >

                <div className="flex items-center gap-3">

                  <Navigation size={17} />

                  <span className="text-sm font-semibold text-white">
                    Get Directions
                  </span>

                </div>

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>

        </div>

      </div>



      {/* ==================================================
          BOTTOM FOOTER
      ================================================== */}

      <div className="relative border-t border-white/10 bg-black/[0.08]">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row sm:text-left lg:px-8">

          <p className="text-xs text-green-100/80 sm:text-sm">

            © {currentYear} Maju Idli. All Rights Reserved.

          </p>


          <div className="flex items-center gap-1.5 text-xs text-green-100/80 sm:text-sm">

            <span>
              Healthy Bites.
            </span>

            <span className="font-semibold text-[#FF8A43]">
              Tasty Delights!
            </span>

            <Heart
              size={13}
              className="ml-1 fill-[#F36A16] text-[#F36A16]"
            />

          </div>

        </div>

      </div>

    </footer>

  );
}