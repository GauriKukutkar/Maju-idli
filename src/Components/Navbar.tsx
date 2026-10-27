import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Branches", path: "/branches" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-orange-100 bg-white/90 backdrop-blur-xl shadow-sm">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

         <Link
  to="/"
  className="flex items-center flex-shrink-0"
>
  <img
    src={Logo}
    alt="Maju Idli"
    className="h-20 w-auto object-contain"
  />
</Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 md:flex">

            {navLinks.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-1 py-2 text-[15px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#0B6B37]"
                      : "text-gray-700 hover:text-[#F36A16]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    <span
                      className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#F36A16] transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>

            ))}

          </nav>

          {/* Desktop CTA */}

          <a
            href="tel:+919999999999"
            className="hidden rounded-full bg-[#F36A16] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0B6B37] hover:shadow-lg lg:block"
          >
            Call Now
          </a>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0B6B37]/20 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#0B6B37] hover:text-white md:hidden"
          >
            <Menu
              size={22}
              strokeWidth={2.7}
            />
          </button>

        </div>

      </header>

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm transition-all duration-300 md:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}

      <div
        className={`fixed right-0 top-0 z-[100] h-screen w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-500 md:hidden ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* Drawer Header */}

        <div className="flex items-center justify-between border-b px-5 py-5">

          <img
            src="/logo.png"
            alt="Maju Idli"
            className="h-12"
          />

          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F36A16] text-white transition-all duration-300 hover:rotate-90 hover:bg-[#0B6B37]"
          >
            <X
              size={18}
              strokeWidth={3}
            />
          </button>

        </div>

        {/* Navigation */}

        <nav className="px-5 py-8">
                    {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
            >
              {({ isActive }) => (
                <div
                  className={`group mb-3 flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 ${
                    isActive
                      ? "bg-[#0B6B37] text-white shadow-lg"
                      : "text-gray-700 hover:bg-orange-50 hover:text-[#F36A16]"
                  }`}
                >
                  <span className="text-base font-medium">
                    {item.name}
                  </span>

                  <span
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#F36A16]"
                        : "scale-0 group-hover:scale-100 group-hover:bg-[#F36A16]"
                    }`}
                  />
                </div>
              )}
            </NavLink>
          ))}

          {/* CTA */}

          <div className="mt-8">

            <a
              href="tel:+919999999999"
              className="flex items-center justify-center rounded-full bg-[#F36A16] py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0B6B37]"
            >
              📞 Call Now
            </a>

          </div>

          {/* Bottom */}

          <div className="mt-12 border-t pt-6">

            <p className="text-center text-sm text-gray-500">
              Authentic South Indian Taste
            </p>

            <p className="mt-2 text-center text-xs text-gray-400">
              Fresh • Hygienic • Traditional
            </p>

          </div>

        </nav>

      </div>

    </>
  );
}