import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Leaf,
  UtensilsCrossed,
  MapPin,
} from "lucide-react";
import {
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import fssaiLogo from "../assets/FSSAI_Logo.png";

import aboutImage from "../assets/gallery6.png";

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: "Fresh Every Day",
      description:
        "Fresh ingredients and careful preparation are at the heart of everything we serve.",
    },
    {
      icon: UtensilsCrossed,
      title: "Authentic Taste",
      description:
        "Traditional South Indian flavours prepared with recipes that keep the experience familiar and comforting.",
    },
    {
      icon: Heart,
      title: "Served With Care",
      description:
        "From our kitchen to your table, we focus on good food, warm service and a welcoming experience.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#FFF9F2]">

      {/* ==================================================
          ABOUT HERO
      ================================================== */}

      <section className="relative overflow-hidden py-16 md:py-20">

        {/* Background decorations */}

        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-orange-200/30 blur-[110px]" />

        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-green-200/30 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F36A16]">
              About Maju Idli
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-[#0B6B37] md:text-5xl lg:text-6xl">
              South Indian Food,
              <span className="text-[#F36A16]"> Made With Heart.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              Maju Idli brings the comforting taste of South India closer
              to you — from soft idlis and crispy dosas to freshly brewed
              filter coffee and much more.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/menu"
                className="group flex items-center gap-2 rounded-full bg-[#F36A16] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0B6B37]"
              >
                Explore Menu

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/branches"
                className="flex items-center gap-2 rounded-full border-2 border-[#0B6B37] px-7 py-3.5 font-semibold text-[#0B6B37] transition hover:bg-[#0B6B37] hover:text-white"
              >
                <MapPin size={18} />

                Our Branches
              </Link>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="relative"
          >

            {/* Background shape */}

            <div className="absolute -right-5 -top-5 h-full w-full rounded-[35px] bg-[#FFE7D1]" />

            <div className="relative overflow-hidden rounded-[35px] shadow-[0_25px_60px_rgba(0,0,0,.15)]">

              <img
                src={aboutImage}
                alt="Maju Idli South Indian Restaurant"
                className="h-[350px] w-full object-cover md:h-[430px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            </div>

            {/* Small floating label */}

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 left-5 rounded-2xl bg-white px-6 py-4 shadow-xl md:left-8"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Our Promise
              </p>

              <p className="mt-1 font-bold text-[#0B6B37]">
                Fresh • Authentic • Delicious
              </p>
            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* ==================================================
          OUR STORY
      ================================================== */}

      <section className="bg-white py-16 md:py-20">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F36A16]">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#0B6B37] md:text-4xl">
              Simple Food. Authentic Flavours.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600">
              Maju Idli was built around a simple idea — serve wholesome
              South Indian food that feels fresh, familiar and satisfying.
              What started with a love for authentic flavours has grown into
              multiple locations serving customers across Nagpur.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600">
              Whether it is breakfast with family, a quick dosa with friends,
              or a cup of filter coffee during a busy day, we want every visit
              to Maju Idli to feel easy, warm and delicious.
            </p>

          </motion.div>


          {/* Small Stats */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4"
          >

            <div className="rounded-2xl bg-[#FFF9F2] px-5 py-5">
              <p className="text-3xl font-bold text-[#0B6B37]">
                4+
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Locations
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF9F2] px-5 py-5">
              <p className="text-3xl font-bold text-[#F36A16]">
                100%
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Vegetarian
              </p>
            </div>

          </motion.div>

        </div>

      </section>


      {/* ==================================================
          OUR VALUES
      ================================================== */}

      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#0B6B37]">
              What Matters To Us
            </span>

            <h2 className="mt-5 text-3xl font-bold text-[#0B6B37] md:text-4xl">
              The Maju Idli Experience
            </h2>

          </motion.div>


          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {values.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-[26px] border border-orange-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-[#F36A16]">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#0B6B37]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

     {/* ==================================================
    FSSAI APPROVED SECTION
================================================== */}

<section className="relative overflow-hidden bg-white py-16 md:py-20">

  {/* Background Decorations */}

  <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-green-100/50 blur-[110px]" />

  <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-orange-100/50 blur-[110px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

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
      className="relative overflow-hidden rounded-[32px] border border-green-100 bg-[#FFF9F2]"
    >

      <div className="grid items-center lg:grid-cols-[0.8fr_1.2fr]">

        {/* =========================================
            LEFT SIDE
        ========================================= */}

        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#0B6B37] p-8">

          {/* Decorative Circles */}

          <div className="absolute h-64 w-64 rounded-full border border-white/10" />

          <div className="absolute h-48 w-48 rounded-full border border-white/10" />

          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#F36A16]/20 blur-2xl" />

          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />


          {/* FSSAI Logo */}

          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 text-center"
          >

            <div className="mx-auto flex h-40 w-56 items-center justify-center rounded-[28px] bg-white p-7 shadow-2xl">

              <img
                src={fssaiLogo}
                alt="FSSAI"
                className="max-h-full max-w-full object-contain"
              />

            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">

              <CheckCircle2
                size={17}
                className="text-orange-300"
              />

              FSSAI Approved

            </div>

          </motion.div>

        </div>


        {/* =========================================
            RIGHT SIDE
        ========================================= */}

        <div className="p-7 md:p-10 lg:p-12">

          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#0B6B37]">

            <ShieldCheck size={16} />

            Food Safety & Quality

          </span>

          <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight text-[#0B6B37] md:text-4xl">

            Taste You Love.
            <br />

            <span className="text-[#F36A16]">
              Standards You Can Trust.
            </span>

          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">

            At Maju Idli, quality and hygiene are an important
            part of every meal we serve. We follow food safety
            practices to make your dining experience fresh,
            hygienic and enjoyable.

          </p>


          {/* Trust Points */}

          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            {/* FSSAI */}

            <motion.div
              whileHover={{
                y: -4,
              }}
              className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-[#0B6B37]">

                <ShieldCheck size={20} />

              </div>

              <h4 className="mt-4 text-sm font-bold text-gray-800">
                FSSAI Approved
              </h4>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Food safety standards
              </p>

            </motion.div>


            {/* Hygiene */}

            <motion.div
              whileHover={{
                y: -4,
              }}
              className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#F36A16]">

                <Sparkles size={20} />

              </div>

              <h4 className="mt-4 text-sm font-bold text-gray-800">
                Hygienic
              </h4>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Clean preparation
              </p>

            </motion.div>


            {/* Fresh */}

            <motion.div
              whileHover={{
                y: -4,
              }}
              className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-[#0B6B37]">

                <Leaf size={20} />

              </div>

              <h4 className="mt-4 text-sm font-bold text-gray-800">
                Fresh Food
              </h4>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Prepared with care
              </p>

            </motion.div>

          </div>


          {/* Bottom Line */}

          <div className="mt-7 flex items-start gap-3 border-t border-orange-100 pt-6">

            <CheckCircle2
              size={20}
              className="mt-0.5 shrink-0 text-[#0B6B37]"
            />

            <p className="text-sm leading-6 text-gray-600">

              <span className="font-semibold text-[#0B6B37]">
                Food safety is part of our commitment
              </span>{" "}
              to serving every Maju Idli customer with
              quality and care.

            </p>

          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="px-6 pb-16 md:pb-20 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#0B6B37] px-6 py-12 text-center md:px-10"
        >

          <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#F36A16]/20 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Come Hungry
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Your South Indian Favourite Is Waiting.
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-green-100">
              Find your nearest Maju Idli branch and enjoy fresh,
              authentic South Indian food today.
            </p>

            <Link
              to="/branches"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F36A16] px-7 py-3.5 font-semibold text-white transition hover:scale-105"
            >
              Find Nearest Branch

              <ArrowRight size={18} />
            </Link>

          </div>

        </motion.div>

      </section>

      {/* ==================================================
    OUR JOURNEY
================================================== */}

<section className="relative overflow-hidden bg-[#FFF9F2] py-16 md:py-20">

  {/* Background Decorations */}

  <div className="absolute -left-24 top-20 h-56 w-56 rounded-full bg-orange-200/30 blur-[100px]" />

  <div className="absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-green-200/30 blur-[100px]" />

  <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F36A16]">
        Our Journey
      </span>

      <h2 className="mt-5 text-3xl font-bold text-[#0B6B37] md:text-4xl">
        From One Kitchen to
        <span className="text-[#F36A16]"> Many Tables</span>
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 md:text-base">
        What began with a simple love for authentic South Indian
        food continues to grow with every customer we serve.
      </p>
    </motion.div>

    {/* Journey */}

    <div className="relative mt-14">

      {/* Desktop Connecting Line */}

      <div className="absolute left-0 right-0 top-[31px] hidden h-[2px] bg-orange-100 md:block" />

      {/* Mobile Connecting Line */}

      <div className="absolute bottom-0 left-[25px] top-0 w-[2px] bg-orange-100 md:hidden" />

      <div className="relative grid gap-8 md:grid-cols-4 md:gap-5">

        {[
          {
            number: "01",
            title: "The Beginning",
            description:
              "Maju Idli began with one simple purpose — serving fresh and authentic South Indian food.",
          },
          {
            number: "02",
            title: "Growing With Love",
            description:
              "The love of our customers encouraged us to bring the Maju Idli experience to more neighbourhoods.",
          },
          {
            number: "03",
            title: "4+ Locations",
            description:
              "Today, Maju Idli serves customers across multiple locations while keeping the same familiar taste.",
          },
          {
            number: "04",
            title: "The Journey Continues",
            description:
              "With our newest Dharampeth outlet, we continue bringing authentic South Indian flavours closer to you.",
          },
        ].map((item, index) => (

          <motion.div
            key={item.number}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            className="relative flex gap-5 md:block"
          >

            {/* Timeline Circle */}

            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-4 border-[#FFF9F2] bg-[#0B6B37] text-sm font-bold text-white shadow-md md:mx-auto md:h-16 md:w-16"
            >
              {item.number}
            </motion.div>

            {/* Content */}

            <div className="pb-4 md:mt-6 md:text-center">

              <h3 className="text-lg font-bold text-[#0B6B37]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {item.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

    {/* Bottom Message */}

    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      className="mx-auto mt-10 max-w-3xl rounded-2xl border border-orange-100 bg-white px-6 py-5 text-center shadow-sm"
    >
      <p className="text-sm leading-7 text-gray-600">
        And we're just getting started —
        <span className="font-semibold text-[#0B6B37]">
          {" "}more flavours, more smiles and more Maju Idli experiences
        </span>{" "}
        are yet to come.
      </p>
    </motion.div>

  </div>

</section>

    </main>
  );
}