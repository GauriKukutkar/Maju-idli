import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Clock3,
  Gift,
  MapPin,
  PartyPopper,
  Sparkles,
  X,
} from "lucide-react";


/* ==================================================
   POPUP OFFERS
================================================== */

const popupOffers = [
  {
    id: 1,

    type: "offer",

    badge: "Special Offer",

    title: "Unlimited South Indian",
    highlight: "Food!",

    description:
      "Come hungry, leave happy! Enjoy your Maju favourites with our special unlimited food offer.",

    smallText: "Available for a limited time",

    buttonText: "View Offers",

    link: "/menu",

    emoji: "🍽️",
  },

  {
    id: 2,

    type: "opening",

    badge: "We're Now Open!",

    title: "Hello,",
    highlight: "Dharampeth!",

    description:
      "Your favourite Maju Idli flavours have arrived at Zenda Chowk, Dharampeth.",

    smallText: "Beside LOC Cafe, Zenda Chowk",

    buttonText: "Find New Branch",

    link: "/branches",

    emoji: "🎉",
  },
];


/* ==================================================
   COMPONENT
================================================== */

export default function OfferPopup() {

  const [showPopup, setShowPopup] =
    useState(false);

  const [currentOffer, setCurrentOffer] =
    useState(0);

  const [seconds, setSeconds] =
    useState(15);


  /* ==================================================
     SHOW POPUP AFTER 8 SECONDS
  ================================================== */

  useEffect(() => {

    /*
      Popup appears 8 seconds after every
      complete browser refresh.

      No sessionStorage or localStorage is used.
    */

    const timer = window.setTimeout(() => {

      setShowPopup(true);

      setSeconds(15);

    }, 8000);


    return () => {

      window.clearTimeout(timer);

    };

  }, []);


  /* ==================================================
     COUNTDOWN
  ================================================== */

  useEffect(() => {

    /*
      Don't start countdown until
      popup becomes visible.
    */

    if (!showPopup) {
      return;
    }


    const countdown = window.setInterval(() => {

      setSeconds((previous) => {

        if (previous <= 1) {

          window.clearInterval(countdown);

          return 0;

        }

        return previous - 1;

      });

    }, 1000);


    return () => {

      window.clearInterval(countdown);

    };

  }, [showPopup]);


  /* ==================================================
     CLOSE POPUP
  ================================================== */

  const closePopup = () => {

    /*
      Simply hide popup.

      Because nothing is stored in
      sessionStorage/localStorage,
      refreshing the browser will
      show it again after 8 seconds.
    */

    setShowPopup(false);

  };


  /* ==================================================
     NEXT OFFER
  ================================================== */

  const showNextOffer = () => {

    setCurrentOffer(
      (previous) =>
        (previous + 1) % popupOffers.length
    );

    /*
      Restart small countdown
      when switching offer.
    */

    setSeconds(15);

  };


  /* ==================================================
     CURRENT OFFER
  ================================================== */

  const offer =
    popupOffers[currentOffer];

  const isOpening =
    offer.type === "opening";


  /* ==================================================
     UI
  ================================================== */

  return (

    <AnimatePresence>

      {showPopup && (

        <motion.div

          initial={{
            opacity: 0,
            y: 70,
            scale: 0.94,
          }}

          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}

          exit={{
            opacity: 0,
            y: 40,
            scale: 0.96,
          }}

          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}

          className="
            fixed
            bottom-4
            left-4
            right-4
            z-[999]
            mx-auto
            max-w-[420px]

            sm:left-auto
            sm:right-6
            sm:mx-0

            lg:bottom-7
            lg:right-7
          "
        >

          {/* ==================================================
              POPUP CARD
          ================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[26px]
              border
              border-white/20
              bg-white
              shadow-[0_25px_80px_rgba(0,0,0,0.22)]
            "
          >


            {/* ==================================================
                TOP COLOURED AREA
            ================================================== */}

            <div
              className={`
                relative
                overflow-hidden
                px-6
                pb-7
                pt-6

                ${
                  isOpening
                    ? "bg-[#0B6B37]"
                    : "bg-[#F36A16]"
                }
              `}
            >


              {/* Decorative Circles */}

              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full border border-white/15" />

              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-white/10" />

              <div className="absolute -bottom-20 -left-12 h-40 w-40 rounded-full bg-white/10 blur-xl" />


              {/* ==================================================
                  CLOSE BUTTON
              ================================================== */}

              <button
                type="button"
                onClick={closePopup}
                aria-label="Close offer"
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-black/15
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300

                  hover:rotate-90
                  hover:bg-white
                  hover:text-[#0B6B37]
                "
              >

                <X size={18} />

              </button>


              {/* ==================================================
                  BADGE
              ================================================== */}

              <div className="relative z-10 flex items-center justify-between pr-11">

                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur">

                  {isOpening ? (

                    <PartyPopper size={14} />

                  ) : (

                    <Gift size={14} />

                  )}

                  {offer.badge}

                </span>

              </div>


              {/* ==================================================
                  MAIN CONTENT
              ================================================== */}

              <div className="relative z-10 mt-5 flex items-center gap-5">


                {/* EMOJI */}

                <motion.div

                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 3, -3, 0],
                  }}

                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}

                  className="
                    flex
                    h-[82px]
                    w-[82px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[24px]
                    bg-white
                    text-[42px]
                    shadow-xl
                  "
                >

                  {offer.emoji}

                </motion.div>


                {/* TITLE */}

                <div>

                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">

                    {isOpening
                      ? "Maju is getting closer"
                      : "Today's Maju Special"}

                  </p>


                  <h3 className="mt-1 text-[25px] font-black leading-[1.12] text-white">

                    {offer.title}

                    <br />

                    <span
                      className={
                        isOpening
                          ? "text-[#FFB17F]"
                          : "text-[#FFF1C7]"
                      }
                    >

                      {offer.highlight}

                    </span>

                  </h3>

                </div>

              </div>

            </div>



            {/* ==================================================
                WHITE CONTENT AREA
            ================================================== */}

            <div className="px-6 pb-5 pt-5">


              {/* DESCRIPTION */}

              <p className="text-sm leading-6 text-gray-600">

                {offer.description}

              </p>


              {/* ==================================================
                  SMALL INFORMATION BOX
              ================================================== */}

              <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#FFF8F1] px-3.5 py-2.5">

                {isOpening ? (

                  <MapPin
                    size={16}
                    className="shrink-0 text-[#F36A16]"
                  />

                ) : (

                  <Sparkles
                    size={16}
                    className="shrink-0 text-[#F36A16]"
                  />

                )}


                <p className="text-xs font-medium text-gray-600">

                  {offer.smallText}

                </p>

              </div>


              {/* ==================================================
                  BUTTONS
              ================================================== */}

              <div className="mt-5 flex items-center gap-3">


                {/* PRIMARY BUTTON */}

                <Link
                  to={offer.link}
                  onClick={closePopup}
                  className="
                    group
                    flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#0B6B37]
                    px-5
                    py-3
                    text-sm
                    font-bold
                    !text-white
                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-[#F36A16]
                  "
                >

                  {offer.buttonText}


                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </Link>


                {/* NEXT OFFER */}

                <button
                  type="button"
                  onClick={showNextOffer}
                  className="
                    shrink-0
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3
                    text-xs
                    font-semibold
                    text-gray-500
                    transition-all
                    duration-300

                    hover:border-[#F36A16]
                    hover:text-[#F36A16]
                  "
                >

                  Next

                </button>

              </div>


              {/* ==================================================
                  TIMER + DOTS
              ================================================== */}

              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">


                {/* TIMER */}

                <div className="flex items-center gap-1.5 text-[11px] text-gray-400">

                  <Clock3 size={13} />

                  {seconds > 0
                    ? `Special highlight • ${seconds}s`
                    : "Don't miss this ✨"}

                </div>


                {/* OFFER DOTS */}

                <div className="flex items-center gap-1.5">

                  {popupOffers.map((item, index) => (

                    <button
                      key={item.id}
                      type="button"

                      onClick={() => {

                        setCurrentOffer(index);

                        setSeconds(15);

                      }}

                      aria-label={`Show offer ${index + 1}`}

                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          currentOffer === index
                            ? "w-5 bg-[#F36A16]"
                            : "w-1.5 bg-gray-200 hover:bg-gray-300"
                        }
                      `}
                    />

                  ))}

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}