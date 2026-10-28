import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  Navigation,
  Phone,
  Send,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

import FranchiseSection from "../Components/FranchiseSection";


/* ==================================================
   BRANCH DATA
================================================== */

const branches = [
  {
    name: "Wadi",
    address:
      "House No. 37, Shankar Bhavan, Wadi T Point, Amravati Road, Wadi, Nagpur – 440023",
    map: "#",
  },
  {
    name: "Vasudev Nagar",
    address:
      "Food Kort No. 1, Plot No. 07, Royal Rudra Apartment, Vasudev Nagar, Hingna Road, Nagpur – 440016",
    map: "#",
  },
  {
    name: "Rajiv Nagar",
    address:
      "Shop No. 2, 3, Rajiv Nagar Bus Stop, Near HDFC Bank ATM, Besides Chaihub, Hingna Road, Nagpur – 441110",
    map: "#",
  },
  {
    name: "Dharampeth",
    address:
      "Shop No. 02, Plot No. 799, Beside LOC Cafe, Zenda Chowk, Dharampeth, Nagpur",
    map: "#",
    new: true,
  },
];


export default function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);

  };


  return (

    <main className="overflow-hidden bg-[#FFF9F2]">


      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative overflow-hidden py-16 md:py-20">

        {/* Background */}

        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-orange-200/30 blur-[110px]" />

        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-green-200/30 blur-[120px]" />


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

            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F36A16]">

              <MessageSquareText size={16} />

              Contact Maju Idli

            </span>


            <h1 className="mt-5 text-4xl font-bold leading-tight text-[#0B6B37] md:text-5xl">

              We'd Love To
              <span className="text-[#F36A16]">
                {" "}Hear From You.
              </span>

            </h1>


            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">

              Have a question, feedback or just want to tell
              us how much you loved your dosa? Drop us a
              message and we'll be happy to hear from you.

            </p>

          </motion.div>

        </div>

      </section>



      {/* ==================================================
          CONTACT + FORM
      ================================================== */}

      <section className="bg-white py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid overflow-hidden rounded-[32px] border border-orange-100 bg-[#FFF9F2] shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:grid-cols-[0.8fr_1.2fr]">


            {/* ==================================================
                LEFT
            ================================================== */}

            <div className="relative overflow-hidden bg-[#0B6B37] p-7 text-white md:p-10 lg:p-12">


              {/* Decorations */}

              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

              <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-white/10" />

              <div className="absolute right-10 top-20 h-20 w-20 rounded-full bg-[#F36A16]/20 blur-2xl" />


              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">

                  <UtensilsCrossed size={25} />

                </div>


                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-green-200">
                  Let's Talk
                </p>


                <h2 className="mt-3 text-3xl font-bold">
                  Something On
                  <br />
                  Your Mind?
                </h2>


                <p className="mt-5 max-w-sm text-sm leading-7 text-green-100">

                  Whether it's feedback, a question about our
                  menu or anything else — our team would love
                  to hear from you.

                </p>


                {/* CONTACT INFORMATION */}

                <div className="mt-10 space-y-6">


                  {/* PHONE */}

                  <a
                    href="tel:+919999999999"
                    className="group flex items-center gap-4"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 transition group-hover:bg-[#F36A16]">

                      <Phone size={19} />

                    </div>

                    <div>

                      <p className="text-xs text-green-200">
                        Call Us
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        +91 99999 99999
                      </p>

                    </div>

                  </a>


                  {/* EMAIL */}

                  <a
                    href="mailto:hello@majuidli.com"
                    className="group flex items-center gap-4"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 transition group-hover:bg-[#F36A16]">

                      <Mail size={19} />

                    </div>

                    <div>

                      <p className="text-xs text-green-200">
                        Email Us
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        hello@majuidli.com
                      </p>

                    </div>

                  </a>


                  {/* LOCATION */}

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">

                      <MapPin size={19} />

                    </div>

                    <div>

                      <p className="text-xs text-green-200">
                        Find Us
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        4 Locations Across Nagpur
                      </p>

                    </div>

                  </div>


                  {/* HOURS */}

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">

                      <Clock3 size={19} />

                    </div>

                    <div>

                      <p className="text-xs text-green-200">
                        Opening Hours
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        Contact your nearest branch
                      </p>

                    </div>

                  </div>

                </div>


                {/* LITTLE MESSAGE */}

                <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4">

                  <div className="flex gap-3">

                    <Sparkles
                      size={18}
                      className="mt-0.5 shrink-0 text-orange-300"
                    />

                    <p className="text-xs leading-6 text-green-100">
                      Your feedback helps us make every
                      Maju experience even better.
                    </p>

                  </div>

                </div>

              </div>

            </div>



            {/* ==================================================
                FORM
            ================================================== */}

            <div className="p-7 md:p-10 lg:p-12">

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F36A16]">
                Send A Message
              </span>

              <h2 className="mt-2 text-2xl font-bold text-[#0B6B37] md:text-3xl">
                How Can We Help?
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill in the details below and our team will
                get back to you.
              </p>


              {/* SUCCESS */}

              {submitted && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-[#0B6B37]"
                >

                  <CheckCircle2 size={20} />

                  Thanks! Your message is ready to be sent.

                </motion.div>

              )}


              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >


                {/* NAME + PHONE */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Your Name
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm outline-none transition focus:border-[#F36A16] focus:ring-2 focus:ring-orange-100"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>

                    <input
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm outline-none transition focus:border-[#F36A16] focus:ring-2 focus:ring-orange-100"
                    />

                  </div>

                </div>


                {/* EMAIL */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm outline-none transition focus:border-[#F36A16] focus:ring-2 focus:ring-orange-100"
                  />

                </div>


                {/* SUBJECT */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    What's This About?
                  </label>

                  <select
                    defaultValue=""
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm text-gray-600 outline-none transition focus:border-[#F36A16] focus:ring-2 focus:ring-orange-100"
                  >

                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="general">
                      General Enquiry
                    </option>

                    <option value="feedback">
                      Food Feedback
                    </option>

                    <option value="branch">
                      Branch Enquiry
                    </option>

                    <option value="complaint">
                      Something Went Wrong
                    </option>

                    <option value="other">
                      Something Else
                    </option>

                  </select>

                </div>


                {/* MESSAGE */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Your Message
                  </label>

                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#F36A16] focus:ring-2 focus:ring-orange-100"
                  />

                </div>


                {/* SUBMIT */}

                <motion.button
                  type="submit"
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#F36A16] px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-[#0B6B37]"
                >

                  Send Message

                  <Send
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </motion.button>

              </form>

            </div>

          </div>

        </div>

      </section>



      {/* ==================================================
          BRANCHES
      ================================================== */}

      <section className="py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">


          {/* HEADING */}

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
            className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >

            <div>

              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#0B6B37]">

                <MapPin size={15} />

                Visit Us

              </span>

              <h2 className="mt-4 text-3xl font-bold text-[#0B6B37] md:text-4xl">

                Find Your Nearest
                <span className="text-[#F36A16]">
                  {" "}Maju Idli
                </span>

              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600">
                Four locations, the same Maju taste.
                Pick the branch closest to you.
              </p>

            </div>

          </motion.div>



          {/* BRANCH CARDS */}

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {branches.map(
              (branch, index) => (

                <motion.div
                  key={branch.name}
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
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="group relative overflow-hidden rounded-[26px] border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl md:p-7"
                >

                  {/* NEW */}

                  {branch.new && (

                    <span className="absolute right-5 top-5 rounded-full bg-orange-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#F36A16]">
                      Newly Opened
                    </span>

                  )}


                  {/* ICON */}

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-[#0B6B37]">

                    <MapPin size={20} />

                  </div>


                  <h3 className="mt-5 text-xl font-bold text-[#0B6B37]">
                    {branch.name}
                  </h3>


                  <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                    {branch.address}
                  </p>


                  <a
                    href={branch.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F36A16] transition hover:text-[#0B6B37]"
                  >

                    <Navigation size={16} />

                    Get Directions

                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </a>


                  {/* Accent */}

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#F36A16] transition-all duration-500 group-hover:w-full" />

                </motion.div>

              )
            )}

          </div>

        </div>

      </section>

      <FranchiseSection />



      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="relative overflow-hidden rounded-[30px] bg-[#F36A16] px-7 py-10 text-center text-white md:px-12 md:py-12"
          >

            {/* Decoration */}

            <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full border border-white/20" />

            <div className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full border border-white/20" />


            <div className="relative">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-100">
                Hungry Already?
              </p>

              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                Your Next Maju Meal Is Waiting.
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-orange-50">
                Visit your nearest Maju Idli and enjoy
                fresh South Indian favourites.
              </p>


             <a
  href="/branches"
  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold !text-[#F36A16] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B6B37] hover:!text-white hover:shadow-lg"
>
  <span>Find A Branch</span>

  <ArrowRight
    size={16}
    strokeWidth={2.5}
  />
</a>

            </div>

          </motion.div>

        </div>

      </section>

    </main>

  );
}