import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Navigation,
  Sparkles,
  Store,
} from "lucide-react";

/* ==================================================
   BRANCH DATA
================================================== */

const branches = [
  {
    id: "wadi",
    name: "Wadi",
    shortLocation: "Wadi T-Point, Amravati Road",
    address:
      "House No. 37, Shankar Bhavan, Wadi T Point, Amravati Road, Wadi, Nagpur (Rural), Nagpur - 440023",
    mapLink: "https://share.google/VsjRkl566fTpTvfKy",
    newBranch: false,
  },

  {
    id: "vasudev-nagar",
    name: "Vasudev Nagar",
    shortLocation: "Hingna Road, Nagpur",
    address:
      "Food Kort No. 1, Plot No. 07, Royal Rudra Apartment, Vasudev Nagar, Hingna Road, Nagpur - 440016",
    mapLink: "https://share.google/u0Dm70lGzqwbPOhac",
    newBranch: false,
  },

  {
    id: "rajiv-nagar",
    name: "Rajiv Nagar",
    shortLocation: "Rajiv Nagar Bus Stop, Hingna Road",
    address:
      "Shop No. 2, 3, Rajiv Nagar Bus Stop, Near HDFC Bank ATM, Beside Chaihub, Hingna Road, Rajiv Nagar, Nagpur - 441110",
    mapLink: "https://share.google/ADsZ16EcYqMxf0VeQ",
    newBranch: false,
  },

  {
    id: "dharampeth",
    name: "Dharampeth",
    shortLocation: "Zenda Chowk, Dharampeth",
    address:
      "Shop No. 02, Plot No. 799, Beside LOC Cafe, Zenda Chowk, Dharampeth, Nagpur",
    mapLink: "https://share.google/T9iC2UJioMbVX63OA",
    newBranch: true,
  },
];

/* ==================================================
   COMPONENT
================================================== */

export default function Branches() {
  return (
    <main className="overflow-hidden bg-[#FFF9F2]">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative overflow-hidden border-b border-orange-100 py-16 md:py-20">

        {/* Background Decoration */}

        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-orange-200/30 blur-[110px]" />

        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-green-200/30 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Badge */}

            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#0B6B37]">
              <MapPin size={16} />

              Find Maju Idli
            </span>

            {/* Heading */}

            <h1 className="mt-5 text-4xl font-bold leading-tight text-[#0B6B37] md:text-5xl">
              Your Favourite Taste,
              <span className="text-[#F36A16]">
                {" "}Closer To You.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
              Visit your nearest Maju Idli and enjoy freshly
              prepared South Indian favourites across our
              locations in Nagpur.
            </p>

            {/* Stats */}

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-gray-600 shadow-sm">
                <Store
                  size={17}
                  className="text-[#F36A16]"
                />

                4 Locations
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-gray-600 shadow-sm">
                <Sparkles
                  size={17}
                  className="text-[#0B6B37]"
                />

                1 Newly Opened
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ==================================================
          NEW DHARAMPETH BRANCH
      ================================================== */}

      <section className="py-14 md:py-16">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative overflow-hidden rounded-[32px] bg-[#0B6B37]"
          >

            {/* Background shapes */}

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#F36A16]/20 blur-3xl" />

            <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid items-center gap-8 p-7 md:p-10 lg:grid-cols-[1.15fr_.85fr] lg:p-12">

              {/* LEFT */}

              <div>

                <span className="inline-flex items-center gap-2 rounded-full bg-[#F36A16] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">

                  <Sparkles size={14} />

                  Newly Opened

                </span>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-green-200">
                  Our Newest Location
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                  Maju Idli Dharampeth
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-green-100">
                  We're now serving your favourite South Indian
                  flavours in the heart of Dharampeth. Drop by
                  and experience the newest Maju Idli location.
                </p>

                {/* Address */}

                <div className="mt-7 flex max-w-xl items-start gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-300">
                    <MapPin size={20} />
                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-green-200">
                      Address
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white">
                      Shop No. 02, Plot No. 799,
                      Beside LOC Cafe, Zenda Chowk,
                      Dharampeth, Nagpur
                    </p>

                  </div>

                </div>

                {/* Buttons */}

                <div className="mt-7 flex flex-wrap gap-4">

                  <a
                    href="https://share.google/T9iC2UJioMbVX63OA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#F36A16] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#0B6B37]"
                  >
                    <Navigation size={17} />

                    Get Directions
                  </a>

                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0B6B37]"
                  >
                    Explore Menu

                    <ArrowRight size={17} />
                  </Link>

                </div>

              </div>

              {/* RIGHT DECORATIVE AREA */}

              <div className="relative hidden min-h-[300px] items-center justify-center lg:flex">

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex h-64 w-64 items-center justify-center rounded-full bg-white/10"
                >

                  <div className="flex h-44 w-44 items-center justify-center rounded-full bg-white shadow-2xl">

                    <div className="text-center">

                      <MapPin
                        size={45}
                        strokeWidth={1.7}
                        className="mx-auto text-[#F36A16]"
                      />

                      <p className="mt-3 text-sm text-gray-500">
                        Now Serving
                      </p>

                      <p className="mt-1 text-xl font-bold text-[#0B6B37]">
                        Dharampeth
                      </p>

                    </div>

                  </div>

                </motion.div>

                {/* Floating Label */}

                <motion.div
                  animate={{
                    y: [0, 7, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-4 right-3 rounded-2xl bg-[#F36A16] px-5 py-4 text-white shadow-xl"
                >
                  <p className="text-xs text-orange-100">
                    Location
                  </p>

                  <p className="font-bold">
                    Zenda Chowk
                  </p>
                </motion.div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ==================================================
          ALL LOCATIONS
      ================================================== */}

      <section className="bg-white py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
          >

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#F36A16]">
                Our Locations
              </span>

              <h2 className="mt-2 text-3xl font-bold text-[#0B6B37] md:text-4xl">
                Find Your Nearest Maju
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Four locations, one familiar taste. Choose the
              Maju Idli branch that's most convenient for you.
            </p>

          </motion.div>

          {/* Branch Grid */}

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {branches.map((branch, index) => (

              <motion.article
                key={branch.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className={`
                  group relative overflow-hidden rounded-[26px]
                  border p-6 transition-shadow duration-300
                  hover:shadow-xl md:p-7
                  ${
                    branch.newBranch
                      ? "border-orange-200 bg-[#FFF9F2]"
                      : "border-gray-100 bg-white"
                  }
                `}
              >

                {/* Top */}

                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-center gap-4">

                    <div
                      className={`
                        flex h-12 w-12 shrink-0 items-center
                        justify-center rounded-2xl
                        ${
                          branch.newBranch
                            ? "bg-[#F36A16] text-white"
                            : "bg-green-50 text-[#0B6B37]"
                        }
                      `}
                    >
                      <Store size={22} />
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-[#0B6B37]">
                        {branch.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {branch.shortLocation}
                      </p>

                    </div>

                  </div>

                  {branch.newBranch && (

                    <span className="shrink-0 rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold text-[#F36A16]">
                      NEW
                    </span>

                  )}

                </div>

                {/* Address */}

                <div className="mt-6 flex items-start gap-3 border-t border-gray-100 pt-5">

                  <MapPin
                    size={18}
                    className="mt-1 shrink-0 text-[#F36A16]"
                  />

                  <p className="text-sm leading-6 text-gray-600">
                    {branch.address}
                  </p>

                </div>

                {/* Bottom */}

                <div className="mt-6 flex items-center justify-between gap-4">

                  <div className="flex items-center gap-2 text-xs text-gray-400">

                    <Clock3 size={15} />

                    Visit us today

                  </div>

                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button inline-flex items-center gap-2 text-sm font-bold text-[#F36A16]"
                  >
                    Directions

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/button:translate-x-1"
                    />
                  </a>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>

      {/* ==================================================
          BOTTOM CTA
      ================================================== */}

      <section className="px-6 py-16 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 rounded-[30px] border border-orange-100 bg-white px-7 py-9 shadow-sm md:flex-row md:px-10"
        >

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F36A16]">
              Hungry Already?
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#0B6B37] md:text-3xl">
              See What's Cooking at Maju Idli.
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Explore our complete menu before your next visit.
            </p>

          </div>

          <Link
            to="/menu"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F36A16] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0B6B37]"
          >
            View Menu

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </motion.div>

      </section>

    </main>
  );
}