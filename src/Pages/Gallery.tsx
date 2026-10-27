import { useState } from "react";
import { motion } from "framer-motion";

import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Heart,
  ImagePlus,
  MessageCircleHeart,
  Send,
  Sparkles,
  Star,
} from "lucide-react";
/* ==================================================
   IMPORT GALLERY IMAGES
================================================== */

import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";


/* ==================================================
   GALLERY DATA
================================================== */

const galleryImages = [
  {
    image: gallery1,
    title: "Morning at Maju",
    category: "Food",
  },
  {
    image: gallery2,
    title: "South Indian Comfort",
    category: "Food",
  },
  {
    image: gallery3,
    title: "Fresh From The Kitchen",
    category: "Kitchen",
  },
  {
    image: gallery4,
    title: "Maju Moments",
    category: "Restaurant",
  },
  {
    image: gallery5,
    title: "Coffee Conversations",
    category: "Moments",
  },
  {
    image: gallery6,
    title: "Good Food. Good Mood.",
    category: "Moments",
  },
];


/* ==================================================
   TESTIMONIALS
================================================== */

const testimonials = [
  {
    name: "Happy Customer",
    location: "Nagpur",
    review:
      "The idlis were super soft and the sambhar tasted fresh. A perfect place for a quick South Indian breakfast.",
    rating: 5,
  },
  {
    name: "Food Lover",
    location: "Dharampeth",
    review:
      "Crispy dosa, good chutney and filter coffee — simple food done really well.",
    rating: 5,
  },
  {
    name: "Regular Visitor",
    location: "Nagpur",
    review:
      "One of those places where you can come with family, order your favourites and just enjoy the food.",
    rating: 5,
  },
];


/* ==================================================
   COMPONENT
================================================== */

export default function Gallery() {

  const [testimonialIndex, setTestimonialIndex] =
    useState(0);

  const [selectedMood, setSelectedMood] =
    useState("");

  const [fileName, setFileName] =
    useState("");

  const currentTestimonial =
    testimonials[testimonialIndex];


  /* ==================================================
     TESTIMONIAL CONTROLS
  ================================================== */

  const nextTestimonial = () => {

    setTestimonialIndex((prev) =>
      prev === testimonials.length - 1
        ? 0
        : prev + 1
    );

  };


  const previousTestimonial = () => {

    setTestimonialIndex((prev) =>
      prev === 0
        ? testimonials.length - 1
        : prev - 1
    );

  };


  return (

    <main className="overflow-hidden bg-[#FFF9F2]">


      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative overflow-hidden py-16 md:py-20">

        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-orange-200/30 blur-[110px]" />

        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-green-200/30 blur-[110px]" />


        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">

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
          >

            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F36A16]">

              <Camera size={16} />

              Maju Moments

            </span>


            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight text-[#0B6B37] md:text-5xl">

              Good Food Creates
              <span className="text-[#F36A16]">
                {" "}Great Memories.
              </span>

            </h1>


            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">

              A little glimpse into the food, flavours,
              conversations and happy moments that make
              Maju Idli special.

            </p>


            <div className="mt-7 flex flex-wrap justify-center gap-3">

              <span className="rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
                🍽️ Fresh Food
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
                ☕ Coffee Moments
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
                💚 Happy People
              </span>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ==================================================
          GALLERY MOSAIC
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
          >

            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#F36A16]">
              Inside Maju
            </span>

            <h2 className="mt-2 text-3xl font-bold text-[#0B6B37] md:text-4xl">
              Fresh From Our Gallery
            </h2>

          </motion.div>


          {/* Gallery */}

          <div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-4">


            {galleryImages.map(
              (item, index) => (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className={`
                    group relative overflow-hidden
                    rounded-[24px]
                    ${
                      index === 0
                        ? "col-span-2 row-span-2"
                        : ""
                    }
                    ${
                      index === 3
                        ? "md:col-span-2"
                        : ""
                    }
                  `}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />


                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-70 transition group-hover:opacity-100" />


                  {/* Content */}

                  <div className="absolute bottom-0 left-0 p-5 text-white">

                    <p className="text-xs font-semibold uppercase tracking-wider text-orange-200">
                      {item.category}
                    </p>

                    <h3 className="mt-1 font-bold md:text-lg">
                      {item.title}
                    </h3>

                  </div>

                </motion.div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ==================================================
          TESTIMONIAL SECTION
      ================================================== */}

      <section className="relative py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">


            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#0B6B37]">

                <MessageCircleHeart size={16} />

                Customer Love

              </span>


              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#0B6B37] md:text-4xl">

                People Come For Food.
                <br />

                <span className="text-[#F36A16]">
                  Stay For The Experience.
                </span>

              </h2>


              <p className="mt-4 max-w-md leading-7 text-gray-600">

                Every plate has a story and every visit
                leaves us with another happy Maju memory.

              </p>


              {/* Controls */}

              <div className="mt-7 flex gap-3">

                <button
                  onClick={previousTestimonial}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-green-200 bg-white text-[#0B6B37] transition hover:bg-[#0B6B37] hover:text-white"
                >
                  <ChevronLeft size={19} />
                </button>


                <button
                  onClick={nextTestimonial}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B6B37] text-white transition hover:bg-[#F36A16]"
                >
                  <ChevronRight size={19} />
                </button>

              </div>

            </motion.div>


            {/* REVIEW */}

            <motion.div
              key={testimonialIndex}
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="rounded-[30px] bg-white p-7 shadow-xl md:p-10"
            >

              <div className="flex gap-1">

                {Array.from({
                  length: currentTestimonial.rating,
                }).map((_, index) => (

                  <Star
                    key={index}
                    size={19}
                    className="fill-[#F36A16] text-[#F36A16]"
                  />

                ))}

              </div>


              <p className="mt-6 text-lg leading-8 text-gray-700 md:text-xl">

                “{currentTestimonial.review}”

              </p>


              <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 font-bold text-[#0B6B37]">

                  {currentTestimonial.name.charAt(0)}

                </div>

                <div>

                  <p className="font-bold text-[#0B6B37]">
                    {currentTestimonial.name}
                  </p>

                  <p className="text-sm text-gray-400">
                    {currentTestimonial.location}
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ==================================================
          SHARE YOUR MAJU MOMENT
      ================================================== */}

      <section className="bg-white py-16 md:py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid overflow-hidden rounded-[32px] border border-orange-100 lg:grid-cols-[0.8fr_1.2fr]">


            {/* LEFT */}

            <div className="relative overflow-hidden bg-[#F36A16] p-8 text-white md:p-10 lg:p-12">

              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full border border-white/20" />

              <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-white/20" />


              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">

                  <Heart size={26} />

                </div>


                <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-orange-100">
                  Your Turn
                </p>


                <h2 className="mt-3 text-3xl font-bold md:text-4xl">

                  Share Your
                  <br />
                  Maju Moment!

                </h2>


                <p className="mt-5 max-w-md leading-7 text-orange-50">

                  Had an amazing dosa? Came for coffee
                  with your best friend? Took a food photo
                  before anyone could touch the plate?

                </p>


                <p className="mt-5 font-semibold">
                  We want to see it. 📸
                </p>


                <div className="mt-8 flex flex-wrap gap-2">

                  <span className="rounded-full bg-white/15 px-3 py-2 text-xs">
                    #MajuMoments
                  </span>

                  <span className="rounded-full bg-white/15 px-3 py-2 text-xs">
                    #MajuIdli
                  </span>

                  <span className="rounded-full bg-white/15 px-3 py-2 text-xs">
                    #FoodMemories
                  </span>

                </div>

              </div>

            </div>


            {/* FORM */}

            <div className="bg-[#FFF9F2] p-7 md:p-10 lg:p-12">

              <h3 className="text-2xl font-bold text-[#0B6B37]">
                What's Your Maju Story?
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Drop your favourite memory below.
              </p>


              <form
                className="mt-8 space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();

                  alert(
                    "Your Maju Moment is ready to be submitted!"
                  );
                }}
              >

                {/* NAME */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="What should we call you?"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 text-sm outline-none transition focus:border-[#F36A16]"
                  />

                </div>


                {/* MOOD */}

                <div>

                  <label className="mb-3 block text-sm font-semibold text-gray-700">
                    How was your Maju mood?
                  </label>


                  <div className="flex flex-wrap gap-2">

                    {[
                      "😍 Loved It",
                      "😋 Delicious",
                      "☕ Coffee Mood",
                      "🔥 Dosa Fan",
                    ].map((mood) => (

                      <button
                        key={mood}
                        type="button"
                        onClick={() =>
                          setSelectedMood(mood)
                        }
                        className={`
                          rounded-full border px-4 py-2
                          text-sm font-medium transition
                          ${
                            selectedMood === mood
                              ? "border-[#0B6B37] bg-[#0B6B37] text-white"
                              : "border-gray-200 bg-white text-gray-600 hover:border-[#F36A16]"
                          }
                        `}
                      >
                        {mood}
                      </button>

                    ))}

                  </div>

                </div>


                {/* STORY */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Tell Us The Story
                  </label>

                  <textarea
                    rows={4}
                    placeholder="That dosa disappeared in 2 minutes... 😄"
                    className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#F36A16]"
                  />

                </div>


                {/* IMAGE */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Add Your Favourite Photo
                  </label>


                  <label className="group flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-dashed border-orange-200 bg-white p-5 transition hover:border-[#F36A16]">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-[#F36A16]">

                      <ImagePlus size={21} />

                    </div>

                    <div>

                      <p className="text-sm font-semibold text-gray-700">
                        {fileName || "Upload your Maju memory"}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        JPG, PNG or WEBP
                      </p>

                    </div>


                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      className="hidden"
                      onChange={(event) => {

                        const file =
                          event.target.files?.[0];

                        if (file) {
                          setFileName(file.name);
                        }

                      }}
                    />

                  </label>

                </div>


                {/* SUBMIT */}

                <motion.button
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0B6B37] px-6 py-4 font-semibold text-white transition hover:bg-[#F36A16]"
                >

                  Share My Maju Moment

                  <Send size={17} />

                </motion.button>

              </form>

            </div>

          </div>

        </div>

      </section>

{/* ==================================================
    SOCIAL MEDIA
================================================== */}

<section className="relative overflow-hidden bg-[#FFF9F2] py-16 md:py-20">

  {/* Background Decoration */}

  <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-orange-200/30 blur-[100px]" />

  <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-green-200/30 blur-[110px]" />


  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* ================= HEADING ================= */}

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
      className="text-center"
    >

      <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F36A16]">

        <Sparkles size={15} />

        Stay Connected

      </span>


      <h2 className="mt-5 text-3xl font-bold text-[#0B6B37] md:text-4xl">

        Follow The Maju
        <span className="text-[#F36A16]">
          {" "}Food Journey
        </span>

      </h2>


      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600">

        Fresh food, new launches, restaurant moments and
        everything happening at Maju Idli — straight to your feed.

      </p>

    </motion.div>


    {/* ================= SOCIAL BOX ================= */}

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
        delay: 0.15,
      }}
      className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[30px] border border-orange-100 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)]"
    >

      <div className="grid md:grid-cols-2">


        {/* =========================================
            INSTAGRAM
        ========================================= */}

        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            backgroundColor: "#FFF7EF",
          }}
          className="group relative flex items-center gap-5 border-b border-orange-100 p-7 transition-all duration-300 md:border-b-0 md:border-r md:p-8"
        >

          {/* Icon */}

          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFF0E5]">

            <div className="relative h-7 w-7 rounded-[8px] border-[2.5px] border-[#F36A16]">

              <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#F36A16]" />

              <div className="absolute right-[4px] top-[4px] h-1.5 w-1.5 rounded-full bg-[#F36A16]" />

            </div>

          </div>


          {/* Content */}

          <div className="min-w-0 flex-1">

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
              Follow Our Moments
            </p>

            <h3 className="mt-1 text-xl font-bold text-[#0B6B37]">
              Instagram
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Food, reels & Maju moments
            </p>

          </div>


          {/* Arrow */}

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-200 text-[#F36A16] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#F36A16] group-hover:text-white">

            <span className="text-lg">
              →
            </span>

          </div>


          {/* Bottom Accent */}

          <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#F36A16] transition-all duration-500 group-hover:w-full" />

        </motion.a>


        {/* =========================================
            FACEBOOK
        ========================================= */}

        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            backgroundColor: "#F3FAF6",
          }}
          className="group relative flex items-center gap-5 p-7 transition-all duration-300 md:p-8"
        >

          {/* Icon */}

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-50">

            <span className="font-serif text-3xl font-bold text-[#0B6B37]">
              f
            </span>

          </div>


          {/* Content */}

          <div className="min-w-0 flex-1">

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
              Join Our Community
            </p>

            <h3 className="mt-1 text-xl font-bold text-[#0B6B37]">
              Facebook
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Updates, offers & stories
            </p>

          </div>


          {/* Arrow */}

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-200 text-[#0B6B37] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#0B6B37] group-hover:text-white">

            <span className="text-lg">
              →
            </span>

          </div>


          {/* Bottom Accent */}

          <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#0B6B37] transition-all duration-500 group-hover:w-full" />

        </motion.a>

      </div>


      {/* ================= BOTTOM STRIP ================= */}

      <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 bg-[#FFFCF8] px-7 py-4 sm:flex-row">

        <div className="flex items-center gap-2">

          <div className="flex -space-x-2">

            <div className="h-7 w-7 rounded-full border-2 border-white bg-orange-100" />

            <div className="h-7 w-7 rounded-full border-2 border-white bg-green-100" />

            <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#0B6B37] text-[10px] font-bold text-white">
              ♥
            </div>

          </div>

          <p className="text-xs text-gray-500">
            Join the Maju community
          </p>

        </div>


        <p className="text-xs font-semibold text-[#0B6B37]">
          #MajuIdli
          <span className="mx-2 text-orange-300">
            •
          </span>
          #MajuMoments
        </p>

      </div>

    </motion.div>

  </div>

</section>
    </main>
  );
}