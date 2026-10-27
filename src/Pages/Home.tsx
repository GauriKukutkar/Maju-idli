import { ArrowRight, MapPin, Star, Sparkles, } from "lucide-react";
import { motion, useScroll, useSpring, } from "framer-motion";
import { Link } from "react-router-dom";
import foodimage from "../assets/food.png"
import dosa from "../assets/Idli.jpeg"
import idli from "../assets/Dosa_3.jpeg";
import uttapam from "../assets/Uttpam.jpeg"
import dharampethImage from "../assets/Store3.jpeg"
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";



export default function Home() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  {/* ================= SIGNATURE DISHES ================= */}

const dishes = [
  {
    title: "Masala Dosa",
    image: dosa,
    price: "₹149",
    tag: "Best Seller",
  },
  {
    title: "Special Idli",
    image: idli,
    price: "₹99",
    tag: "Popular",
  },
  {
    title: "Cheese Uttapam",
    image: uttapam,
    price: "₹179",
    tag: "Chef's Choice",
  },
];

  return (
    <main className="overflow-hidden bg-[#FFF9F2]">

      {/* ================= Scroll Progress ================= */}

      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[9999] h-1 w-full origin-left bg-[#F36A16]"
      />

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        {/* Background Blur */}

        <div className="absolute left-[-180px] top-10 h-[420px] w-[420px] rounded-full bg-orange-200/30 blur-[140px]" />

        <div className="absolute right-[-150px] top-[-60px] h-[450px] w-[450px] rounded-full bg-green-200/20 blur-[160px]" />

        <div className="absolute bottom-0 left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-orange-100/30 blur-[120px]" />

        <div className="mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-16 lg:px-8">

          <div className="grid w-full items-center gap-20 lg:grid-cols-2">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: .8 }}
            >

              {/* Badge */}

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .1 }}
                className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-5 py-3 text-sm font-semibold text-[#F36A16]"
              >
                <Sparkles size={16} />

                Healthy Bites. Tasty Delights.
              </motion.div>

              {/* Heading */}

              <motion.h1
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .25 }}
                className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-[#0B6B37] md:text-6xl lg:text-7xl"
              >
                Authentic
                <br />
                South Indian
                <br />
                Food
              </motion.h1>

              {/* Description */}

              <motion.p
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .45 }}
                className="mt-8 max-w-xl text-lg leading-8 text-gray-600"
              >
                Experience freshly steamed idlis,
                crispy dosas, authentic filter coffee,
                and traditional South Indian delicacies
                crafted with premium ingredients and
                served with warmth across every Maju Idli branch.
              </motion.p>

             {/* Buttons */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.65 }}
  className="mt-10 flex flex-wrap gap-5"
>
  {/* Explore Menu */}

  <Link to="/menu">
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="group flex items-center gap-3 rounded-full bg-[#F36A16] px-8 py-4 font-semibold text-white shadow-xl transition"
    >
      Explore Menu

      <motion.div
        whileHover={{
          x: 4,
        }}
      >
        <ArrowRight size={18} />
      </motion.div>
    </motion.button>
  </Link>

  {/* Find Branch */}

  <Link to="/branches">
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="flex items-center gap-3 rounded-full border-2 border-[#0B6B37] px-8 py-4 font-semibold text-[#0B6B37] transition hover:bg-[#0B6B37] hover:text-white"
    >
      <MapPin size={18} />

      Find Branch
    </motion.button>
  </Link>
</motion.div>

              {/* Stats */}

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .8 }}
                className="mt-14 grid gap-5 sm:grid-cols-3"
              >

                <motion.div
                  whileHover={{
                    y: -8
                  }}
                  className="rounded-3xl bg-white p-6 shadow-xl"
                >
                  <h3 className="text-4xl font-black text-[#0B6B37]">
                    4+
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Branches
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -8
                  }}
                  className="rounded-3xl bg-white p-6 shadow-xl"
                >
                  <div className="flex items-center gap-2">

                    <Star
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <h3 className="text-4xl font-black text-[#0B6B37]">
                      4.9
                    </h3>

                  </div>

                  <p className="mt-2 text-gray-500">
                    Customer Rating
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -8
                  }}
                  className="rounded-3xl bg-white p-6 shadow-xl"
                >
                  <h3 className="text-4xl font-black text-[#0B6B37]">
                    100%
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Fresh Ingredients
                  </p>
                </motion.div>

              </motion.div>

            </motion.div>

            {/* RIGHT STARTS HERE */}

                     <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="relative flex items-center justify-center py-10"
>
  {/* Background Glow */}
  <div className="absolute h-[620px] w-[620px] rounded-full bg-orange-100 blur-3xl opacity-60" />

  {/* Decorative Ring */}
  <div className="absolute h-[520px] w-[520px] rounded-full border-[18px] border-orange-100" />

  {/* Floating Leaf */}
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    }}
    className="absolute top-10 right-10 h-6 w-6 rounded-full bg-[#0B6B37]"
  />

  {/* Floating Dot */}
  <motion.div
    animate={{ y: [0, 12, 0] }}
    transition={{
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
    }}
    className="absolute bottom-16 left-12 h-5 w-5 rounded-full bg-[#F36A16]"
  />

  {/* Image Card */}
  <motion.div
    animate={{
      y: [0, -12, 0],
      rotate: [-2, 2, -2],
    }}
    transition={{
      repeat: Infinity,
      duration: 7,
      ease: "easeInOut",
    }}
    className="relative z-10 overflow-hidden rounded-[40px] bg-white p-5 shadow-[0_35px_70px_rgba(0,0,0,.18)]"
  >
    <img
      src={foodimage}
      alt="South Indian Food"
      className="h-[430px] w-[430px] rounded-[28px] object-cover"
    />
  </motion.div>

  {/* Coffee Card */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    }}
    className="absolute left-[-40px] top-10 z-20 rounded-3xl bg-white px-6 py-5 shadow-xl"
  >
    <p className="text-xs uppercase tracking-widest text-gray-400">
      Signature
    </p>

    <h4 className="mt-1 text-xl font-bold text-[#0B6B37]">
      ☕ Filter Coffee
    </h4>

    <p className="mt-1 text-sm text-gray-500">
      Freshly Brewed
    </p>
  </motion.div>

  {/* Rating Card */}
  <motion.div
    animate={{ x: [0, 8, 0] }}
    transition={{
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
    }}
    className="absolute right-[-30px] top-24 z-20 rounded-3xl bg-[#0B6B37] px-6 py-5 text-white shadow-2xl"
  >
    <div className="flex items-center gap-2">
      <Star
        size={18}
        className="fill-yellow-400 text-yellow-400"
      />

      <span className="font-bold">4.9 Rating</span>
    </div>

    <p className="mt-2 text-sm text-green-100">
      Loved by Customers
    </p>
  </motion.div>

  {/* Fresh Card */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut",
    }}
    className="absolute bottom-6 right-[-20px] z-20 rounded-3xl bg-white px-6 py-5 shadow-xl"
  >
    <p className="text-xs uppercase tracking-widest text-gray-400">
      Fresh Daily
    </p>

    <h4 className="mt-1 text-xl font-bold text-[#0B6B37]">
      🥥 Coconut Chutney
    </h4>

    <p className="mt-1 text-sm text-gray-500">
      Made Every Morning
    </p>
  </motion.div>
</motion.div>

          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">

  <div className="absolute -left-24 top-20 h-60 w-60 rounded-full bg-orange-100 blur-[120px]" />

  <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-green-100 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* Heading */}

    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

      <div>

        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F36A16]">
          Our Specials
        </span>

        <h2 className="mt-4 text-3xl font-bold text-[#0B6B37] md:text-5xl">
          Signature Dishes
        </h2>

        <p className="mt-3 max-w-lg text-gray-600">
          Freshly prepared with authentic South Indian recipes,
          premium ingredients and traditional flavours.
        </p>

      </div>

      <Link
        to="/menu"
        className="group flex items-center gap-2 rounded-full border-2 border-[#F36A16] px-6 py-3 font-semibold text-[#F36A16] transition hover:bg-[#F36A16] hover:text-white"
      >
        View Full Menu

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </Link>

    </div>

    {/* Cards */}

    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {dishes.map((dish, index) => (

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: .2,
          }}
          transition={{
            duration: .5,
            delay: index * .15,
          }}
          whileHover={{
            y: -10,
          }}
          className="group overflow-hidden rounded-[28px] bg-[#FFF9F2] shadow-lg transition"
        >

          <div className="relative overflow-hidden">

            <img
              src={dish.image}
              alt={dish.title}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <span className="absolute left-5 top-5 rounded-full bg-[#F36A16] px-4 py-2 text-xs font-semibold text-white">
              {dish.tag}
            </span>

          </div>

          <div className="p-6">

            <div className="flex items-center justify-between">

              <h3 className="text-2xl font-bold text-[#0B6B37]">
                {dish.title}
              </h3>

              <span className="text-xl font-bold text-[#F36A16]">
                {dish.price}
              </span>

            </div>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Prepared fresh every day using authentic South Indian
              recipes and traditional flavours.
            </p>

            <Link
              to="/menu"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0B6B37] transition hover:text-[#F36A16]"
            >
              Explore Dish

              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Link>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= WHY CHOOSE US ================= */}

<section className="bg-[#FFF9F2] py-20">

  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mx-auto max-w-2xl text-center">

      <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#0B6B37]">
        Why Maju Idli
      </span>

      <h2 className="mt-5 text-3xl font-bold text-[#0B6B37] md:text-5xl">
        More Than Just Delicious Food
      </h2>

      <p className="mt-4 text-gray-600">
        Every meal is prepared with fresh ingredients,
        authentic recipes and traditional South Indian
        flavours that keep customers coming back.
      </p>

    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          icon: "🌿",
          title: "Fresh Ingredients",
          desc: "Prepared daily using premium quality ingredients.",
        },
        {
          icon: "🥥",
          title: "Authentic Recipes",
          desc: "Traditional South Indian flavours in every bite.",
        },
        {
          icon: "☕",
          title: "Filter Coffee",
          desc: "Freshly brewed authentic South Indian coffee.",
        },
        {
          icon: "🏪",
          title: "4+ Branches",
          desc: "Serving authentic taste across multiple locations.",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{
            opacity:0,
            y:40
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            delay:index*.15
          }}
          whileHover={{
            y:-8
          }}
          className="rounded-3xl bg-white p-8 text-center shadow-lg transition"
        >

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF4E8] text-4xl">
            {item.icon}
          </div>

          <h3 className="mt-6 text-xl font-bold text-[#0B6B37]">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            {item.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= NEW BRANCH ================= */}

<section className="bg-white py-20">

  <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">

    {/* Left */}

    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
    >

      <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F36A16]">
        🎉 Newly Opened
      </span>

      <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0B6B37]">
        Now Serving
        <br />
        Dharampeth
      </h2>

      <p className="mt-5 max-w-lg leading-8 text-gray-600">
        We are delighted to welcome you to our newest
        Maju Idli outlet. Enjoy authentic South Indian
        flavours, freshly prepared every day in a warm
        and welcoming atmosphere.
      </p>

      <div className="mt-8 rounded-3xl border border-orange-100 bg-[#FFF9F2] p-6">

        <h4 className="font-semibold text-[#0B6B37]">
          📍 Address
        </h4>

        <p className="mt-3 leading-7 text-gray-600">
          Shop No. 02, Plot No. 799
          <br />
          Beside LOC Cafe,
          <br />
          Zenda Chowk,
          <br />
          Dharampeth, Nagpur
        </p>

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <Link
          to="/branches"
          className="rounded-full bg-[#F36A16] px-7 py-4 font-semibold text-white transition hover:bg-[#0B6B37]"
        >
          View All Branches
        </Link>

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-[#0B6B37] px-7 py-4 font-semibold text-[#0B6B37] transition hover:bg-[#0B6B37] hover:text-white"
        >
          Get Directions
        </a>

      </div>

    </motion.div>

    {/* Right */}

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="relative"
    >

      <div className="absolute -left-6 -top-6 h-full w-full rounded-[36px] bg-[#FFE9D5]" />

      <img
        src={dharampethImage}
        alt="Maju Idli Dharampeth Branch"
        className="relative h-[520px] w-full rounded-[36px] object-cover shadow-2xl"
      />

      <div className="absolute bottom-6 left-6 rounded-2xl bg-white px-6 py-5 shadow-xl">

        <p className="text-sm text-gray-500">
          New Outlet
        </p>

        <h4 className="mt-1 text-xl font-bold text-[#0B6B37]">
          Dharampeth
        </h4>

      </div>

    </motion.div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="relative overflow-hidden bg-[#0B6B37] py-24">

  {/* Background Blur */}

  <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px]" />

  <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
    >

      <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-orange-300">
        Visit Us Today
      </span>

      <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
        Taste the Authentic
        <br />
        Flavours of South India
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
        From freshly steamed idlis to crispy dosas and authentic
        filter coffee, every dish is prepared with traditional
        recipes and premium ingredients.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-5">

        <Link
          to="/menu"
          className="rounded-full bg-[#F36A16] px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          Explore Menu
        </Link>

        <Link
          to="/branches"
          className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0B6B37]"
        >
          Visit Our Branches
        </Link>

      </div>

    </motion.div>

  </div>

</section>

{/* ================= FOOD GALLERY ================= */}

<section className="bg-[#FFF9F2] py-20">

  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

      <div>

        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#F36A16]">
          Follow Us
        </span>

        <h2 className="mt-4 text-3xl font-bold text-[#0B6B37] md:text-5xl">
          Fresh From Maju Idli
        </h2>

        <p className="mt-3 max-w-xl text-gray-600">
          A glimpse of authentic flavours, happy customers and
          freshly prepared South Indian delicacies.
        </p>

      </div>

      <a
        href="https://www.instagram.com/majuidli/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border-2 border-[#F36A16] px-6 py-3 font-semibold text-[#F36A16] transition hover:bg-[#F36A16] hover:text-white"
      >
        Follow on Instagram →
      </a>

    </div>

    <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3">

      {[
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
      ].map((image, index) => (

        <motion.div
          key={index}
          initial={{
            opacity:0,
            scale:.9
          }}
          whileInView={{
            opacity:1,
            scale:1
          }}
          viewport={{
            once:true
          }}
          transition={{
            delay:index*.08
          }}
          whileHover={{
            y:-8
          }}
          className="group overflow-hidden rounded-[28px] shadow-lg"
        >

          <img
            src={image}
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
          />

        </motion.div>

      ))}

    </div>

  </div>

</section>


    </main>
  );
}