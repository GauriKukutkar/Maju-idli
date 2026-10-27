import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

/* ==================================================
   TYPES
================================================== */

type MenuItem = {
  name: string;
  price: string;
  note?: string;
};

type MenuSection = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  items: MenuItem[];
};

/* ==================================================
   CATEGORY NAVIGATION
================================================== */

const categories = [
  { name: "All", id: "menu-start" },
  { name: "Idli", id: "idli" },
  { name: "Dosa", id: "dosa" },
  { name: "Uttapam", id: "uttapam" },
  { name: "Pav Bhaji", id: "pav-bhaji" },
  { name: "Biryani", id: "biryani" },
  { name: "Chinese", id: "chinese" },
  { name: "French Fries", id: "french-fries" },
  { name: "Snacks & Meals", id: "snacks-meals" },
  { name: "Rice", id: "rice" },
  { name: "Paratha", id: "paratha" },
  { name: "Samosa", id: "samosa" },
  { name: "Beverages", id: "beverages" },
  { name: "Combos", id: "combos" },
];

/* ==================================================
   MENU DATA
================================================== */

const menuSections: MenuSection[] = [
  {
    id: "idli",
    title: "Idli",
    subtitle: "Soft, fresh & comforting",
    emoji: "🍚",
    items: [
      {
        name: "Idli Sambhar",
        price: "₹30 / ₹49",
        note: "1 pc / 2 pcs",
      },
      {
        name: "Vada Sambhar",
        price: "₹40 / ₹69",
        note: "1 pc / 2 pcs",
      },
      {
        name: "Idli Vada Mix",
        price: "₹59",
      },
      {
        name: "Upma",
        price: "₹35 / ₹59",
        note: "Half / Full",
      },
      {
        name: "Ghee Podi Idli",
        price: "₹99",
      },
      {
        name: "Fry Idli",
        price: "₹99",
      },
      {
        name: "Masala Idli",
        price: "₹99",
      },
    ],
  },

  {
    id: "dosa",
    title: "Dosa",
    subtitle: "Crispy South Indian favourites",
    emoji: "🥞",
    items: [
      {
        name: "Plain Dosa",
        price: "₹69",
      },
      {
        name: "Mini Masala Dosa",
        price: "₹79",
      },
      {
        name: "Masala Dosa",
        price: "₹99",
      },
      {
        name: "Butter Masala Dosa",
        price: "₹130",
      },
      {
        name: "Cheese Masala Dosa",
        price: "₹140",
      },
      {
        name: "Paneer Masala Dosa",
        price: "₹140",
      },
      {
        name: "Benne Masala Dosa",
        price: "₹140",
      },
      {
        name: "Mysore Masala Dosa",
        price: "₹160",
      },
      {
        name: "Cheese Mysore Masala Dosa",
        price: "₹180",
      },
      {
        name: "Spring Cut Dosa",
        price: "₹160",
      },
      {
        name: "Cheese Spring Cut Dosa",
        price: "₹180",
      },
    ],
  },

  {
    id: "uttapam",
    title: "Uttapam",
    subtitle: "Thick, soft & loaded with flavour",
    emoji: "🫓",
    items: [
      {
        name: "Onion Uttapam",
        price: "₹120",
      },
      {
        name: "Tomato Uttapam",
        price: "₹120",
      },
      {
        name: "Onion + Tomato Uttapam",
        price: "₹150",
      },
      {
        name: "Mix Veg Uttapam",
        price: "₹160",
      },
      {
        name: "Paneer Mix Uttapam",
        price: "₹180",
      },
    ],
  },

  {
    id: "pav-bhaji",
    title: "Pav Bhaji",
    subtitle: "Rich, buttery & satisfying",
    emoji: "🍞",
    items: [
      {
        name: "Pav Bhaji",
        price: "₹120",
      },
      {
        name: "Cheese Pav Bhaji",
        price: "₹140",
      },
      {
        name: "Paneer Pav Bhaji",
        price: "₹140",
      },
      {
        name: "Veg Pulao",
        price: "₹120",
      },
      {
        name: "Cheese Pulao",
        price: "₹150",
      },
      {
        name: "Paneer Pulao",
        price: "₹150",
      },
    ],
  },

  {
    id: "biryani",
    title: "Biryani",
    subtitle: "Flavourful rice favourites",
    emoji: "🍛",
    items: [
      {
        name: "Veg Biryani",
        price: "₹90 / ₹150",
        note: "Half / Full",
      },
      {
        name: "Paneer Biryani",
        price: "₹99 / ₹160",
        note: "Half / Full",
      },
      {
        name: "Veg Fried Rice",
        price: "₹80 / ₹120",
        note: "Half / Full",
      },
      {
        name: "Schezwan Fried Rice",
        price: "₹88 / ₹160",
        note: "Half / Full",
      },
      {
        name: "Paneer Fried Rice",
        price: "₹110 / ₹180",
        note: "Half / Full",
      },
      {
        name: "Paneer Schezwan Fried Rice",
        price: "₹130 / ₹199",
        note: "Half / Full",
      },
    ],
  },

  {
    id: "chinese",
    title: "Chinese",
    subtitle: "Spicy & flavour-packed favourites",
    emoji: "🥢",
    items: [
      {
        name: "Veg Manchurian",
        price: "₹90 / ₹150",
        note: "Half / Full",
      },
      {
        name: "Chilly Paneer",
        price: "₹99 / ₹170",
        note: "Half / Full",
      },
      {
        name: "Paneer 65",
        price: "₹110 / ₹180",
        note: "Half / Full",
      },
      {
        name: "Veg 65",
        price: "₹99 / ₹170",
        note: "Half / Full",
      },
    ],
  },

  {
    id: "french-fries",
    title: "French Fries",
    subtitle: "Crispy snacks for every mood",
    emoji: "🍟",
    items: [
      {
        name: "Salted French Fries",
        price: "₹99",
      },
      {
        name: "Masala French Fries",
        price: "₹110",
      },
      {
        name: "Peri Peri French Fries",
        price: "₹120",
      },
    ],
  },

  {
    id: "snacks-meals",
    title: "Snacks & Meals",
    subtitle: "Hearty favourites beyond South India",
    emoji: "🍽️",
    items: [
      {
        name: "Chole Bhature",
        price: "₹140",
      },
      {
        name: "Chole Poori",
        price: "₹99",
      },
      {
        name: "Poori Aloo Bhaji",
        price: "₹99",
      },
    ],
  },

  {
    id: "rice",
    title: "Rice",
    subtitle: "Simple, comforting rice bowls",
    emoji: "🍚",
    items: [
      {
        name: "Chhole Rice",
        price: "₹120",
      },
      {
        name: "Lemon Rice",
        price: "₹120",
      },
      {
        name: "Curd Rice",
        price: "₹120",
      },
    ],
  },

  {
    id: "paratha",
    title: "Paratha",
    subtitle: "Fresh & filling Indian favourites",
    emoji: "🫓",
    items: [
      {
        name: "Aloo Paratha",
        price: "₹99",
      },
      {
        name: "Gobhi Paratha",
        price: "₹99",
      },
      {
        name: "Paneer Paratha",
        price: "₹120",
      },
      {
        name: "Mix Veg Paratha",
        price: "₹130",
      },
    ],
  },

  {
    id: "samosa",
    title: "Samosa",
    subtitle: "Classic snacks with a Maju twist",
    emoji: "🥟",
    items: [
      {
        name: "Samosa",
        price: "₹25 / ₹40",
        note: "Half / Full",
      },
      {
        name: "Sambhar Samosa",
        price: "₹35 / ₹60",
        note: "Half / Full",
      },
      {
        name: "Dahi Samosa",
        price: "₹40 / ₹70",
        note: "Half / Full",
      },
      {
        name: "Chhola Samosa",
        price: "₹40 / ₹70",
        note: "Half / Full",
      },
    ],
  },

  {
    id: "beverages",
    title: "Beverages",
    subtitle: "The perfect finish to your meal",
    emoji: "☕",
    items: [
      {
        name: "Coffee",
        price: "₹30",
      },
      {
        name: "Lassi",
        price: "₹40",
      },
    ],
  },
];

/* ==================================================
   MENU COMPONENT
================================================== */

export default function Menu() {
  const [activeCategory, setActiveCategory] =
    useState("menu-start");

  /* ==================================================
     SCROLL TO CATEGORY
  ================================================== */

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);

    const element = document.getElementById(id);

    if (!element) return;

    const offset = 165;

    const position =
      element.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  /* ==================================================
     DETECT ACTIVE CATEGORY
  ================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 190;

      let current = "menu-start";

      menuSections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element && element.offsetTop <= scrollPosition) {
          current = section.id;
        }
      });

      const comboElement =
        document.getElementById("combos");

      if (
        comboElement &&
        comboElement.offsetTop <= scrollPosition
      ) {
        current = "combos";
      }

      setActiveCategory(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <main className="overflow-visible bg-[#FFF9F2]">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative overflow-hidden border-b border-orange-100 py-16 md:py-20">

        {/* Decorations */}

        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-orange-200/30 blur-[100px]" />

        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-green-200/30 blur-[100px]" />

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

            {/* Badge */}

            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F36A16]">

              <UtensilsCrossed size={16} />

              Our Menu

            </span>

            {/* Heading */}

            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight text-[#0B6B37] md:text-5xl">

              Authentic Flavours,
              <span className="text-[#F36A16]">
                {" "}Made Fresh.
              </span>

            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">

              From comforting idlis and crispy dosas
              to hearty meals, snacks and refreshing
              beverages — there's something delicious
              waiting for everyone.

            </p>

            {/* Info */}

            <div className="mt-7 flex flex-wrap justify-center gap-3">

              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">

                <Sparkles
                  size={16}
                  className="text-[#F36A16]"
                />

                Freshly Prepared

              </div>

              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">

                <Coffee
                  size={16}
                  className="text-[#0B6B37]"
                />

                South Indian Favourites

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ==================================================
          STICKY CATEGORY NAVIGATION
      ================================================== */}

      <section className="sticky top-20 z-30 border-b border-orange-100 bg-[#FFF9F2]/95 py-4 shadow-sm backdrop-blur-md">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div
            className="
              flex gap-3 overflow-x-auto pb-1
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >

            {categories.map((category) => {
              const isActive =
                activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    scrollToCategory(category.id)
                  }
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`
                    shrink-0 rounded-full border
                    px-5 py-2.5 text-sm
                    font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "border-[#0B6B37] bg-[#0B6B37] text-white shadow-md"
                        : "border-orange-100 bg-white text-gray-600 hover:border-[#F36A16] hover:text-[#F36A16]"
                    }
                  `}
                >
                  {category.name}
                </motion.button>
              );
            })}

          </div>

        </div>

      </section>

      {/* ==================================================
          MENU
      ================================================== */}

      <section
        id="menu-start"
        className="scroll-mt-44 py-14 md:py-16"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Intro */}

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
            className="flex flex-col justify-between gap-4 border-b border-orange-100 pb-7 md:flex-row md:items-end"
          >

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#F36A16]">
                Explore The Menu
              </span>

              <h2 className="mt-2 text-3xl font-bold text-[#0B6B37]">
                What's Your Favourite?
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Browse our selection of South Indian
              favourites, meals, snacks and beverages
              available across Maju Idli branches.
            </p>

          </motion.div>

          {/* ==================================================
              MENU SECTIONS
          ================================================== */}

          <div className="mt-4">

            {menuSections.map(
              (section, sectionIndex) => (

                <motion.div
                  id={section.id}
                  key={section.id}
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
                    amount: 0.05,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="scroll-mt-44 border-b border-orange-100 py-12 last:border-none"
                >

                  {/* Category Heading */}

                  <div className="mb-7 flex items-center gap-4">

                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-2xl"
                    >
                      {section.emoji}
                    </motion.div>

                    <div>

                      <h3 className="text-2xl font-bold text-[#0B6B37]">
                        {section.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {section.subtitle}
                      </p>

                    </div>

                  </div>

                  {/* Items */}

                  <div className="grid gap-x-14 md:grid-cols-2">

                    {section.items.map(
                      (item, index) => (

                        <motion.div
                          key={`${section.id}-${item.name}`}
                          initial={{
                            opacity: 0,
                            x:
                              index % 2 === 0
                                ? -10
                                : 10,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.35,
                            delay:
                              Math.min(index, 4) *
                              0.04,
                          }}
                          className="group flex items-start justify-between gap-5 border-b border-dashed border-gray-200 py-5"
                        >

                          <div>

                            <h4 className="font-semibold text-gray-800 transition-colors duration-300 group-hover:text-[#0B6B37]">
                              {item.name}
                            </h4>

                            {item.note && (

                              <p className="mt-1 text-xs text-gray-400">
                                {item.note}
                              </p>

                            )}

                          </div>

                          <span className="shrink-0 font-bold text-[#F36A16]">
                            {item.price}
                          </span>

                        </motion.div>

                      )
                    )}

                  </div>

                  {/* Section number decoration */}

                  <div className="mt-5 text-right text-xs font-semibold uppercase tracking-widest text-gray-300">
                    Menu{" "}
                    {String(
                      sectionIndex + 1
                    ).padStart(2, "0")}
                  </div>

                </motion.div>

              )
            )}

          </div>

          {/* ==================================================
              COMBOS
          ================================================== */}

          <motion.div
            id="combos"
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
            className="scroll-mt-44 pt-12"
          >

            <div className="relative overflow-hidden rounded-[30px] bg-[#0B6B37] p-7 md:p-10">

              {/* Decorations */}

              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#F36A16]/20 blur-3xl" />

              <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

              <div className="relative">

                <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-orange-200">
                  Special Offers
                </span>

                <div className="mt-4 flex flex-col justify-between gap-3 md:flex-row md:items-end">

                  <div>

                    <h3 className="text-3xl font-bold text-white">
                      Maju Combos
                    </h3>

                    <p className="mt-2 text-sm text-green-100">
                      More flavour. More value.
                    </p>

                  </div>

                  <p className="text-sm text-green-100">
                    Special combo prices
                  </p>

                </div>

                {/* Combo Items */}

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                  {[
                    {
                      name: "Unlimited",
                      mrp: "—",
                      offer: "₹249",
                    },
                    {
                      name: "Combo 1",
                      mrp: "₹184",
                      offer: "₹149",
                    },
                    {
                      name: "Combo 2",
                      mrp: "₹105",
                      offer: "₹89",
                    },
                    {
                      name: "Combo 3",
                      mrp: "₹249",
                      offer: "₹210",
                    },
                  ].map((combo) => (

                    <motion.div
                      key={combo.name}
                      whileHover={{
                        y: -5,
                      }}
                      className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm transition"
                    >

                      <p className="font-bold text-white">
                        {combo.name}
                      </p>

                      <div className="mt-5 flex items-end justify-between gap-3">

                        <div>

                          <p className="text-xs uppercase tracking-wider text-green-200">
                            MRP
                          </p>

                          <p className="mt-1 text-sm text-green-100 line-through">
                            {combo.mrp}
                          </p>

                        </div>

                        <div className="text-right">

                          <p className="text-xs uppercase tracking-wider text-orange-200">
                            Offer
                          </p>

                          <p className="mt-1 text-2xl font-bold text-white">
                            {combo.offer}
                          </p>

                        </div>

                      </div>

                    </motion.div>

                  ))}

                </div>

              </div>

            </div>

          </motion.div>

          {/* ==================================================
              EXTRA
          ================================================== */}

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-center text-sm">

            <span className="rounded-full bg-white px-4 py-2 text-gray-600 shadow-sm">
              Extra Chhole / Bhature ₹40
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-gray-600 shadow-sm">
              Extra Poori ₹20 / pc
            </span>

          </div>

          {/* ==================================================
              NOTE
          ================================================== */}

          <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-6 text-gray-400">
            Menu items, availability and prices may
            change from time to time. Please confirm
            current availability at your nearest
            Maju Idli branch.
          </p>

        </div>

      </section>

    </main>
  );
}