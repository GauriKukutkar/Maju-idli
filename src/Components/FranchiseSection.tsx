
import { motion } from "framer-motion";
import { Phone, ArrowUpRight, Store } from "lucide-react";

const contacts = ["+91 96239 10069", "+91 9067335408"];

export default function FranchiseSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8F0] px-6 py-20 text-[#176B3A] md:px-12 lg:py-24">
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#FF6B0B]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B0B]/25 bg-white px-4 py-2 text-sm font-semibold text-[#F36B13]">
            <Store size={17} />
            Franchise Opportunities
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Bring the Taste
            <br />
            of <span className="text-[#F36B13]">Maju Idli</span>
            <br />
            to Your City.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#52647A] md:text-lg">
            Love great food and have a vision for business? Explore a
            franchise opportunity with Maju Idli and help bring authentic
            South Indian flavours to more customers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Authentic South Indian Food", "Growing Brand"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#176B3A]/15 bg-white px-4 py-2 text-sm font-medium text-[#176B3A]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-3xl border border-[#176B3A]/10 bg-white p-6 shadow-[0_12px_35px_rgba(42,52,40,0.08)] md:p-9"
        >
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#F36B13]">
            Let’s Grow Together
          </span>

          <h3 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Start Your Franchise Journey
          </h3>

          <p className="mt-4 text-sm leading-7 text-[#52647A] md:text-base">
            Get in touch with our team to discuss franchise opportunities
            and take the first step towards your business journey.
          </p>

          <div className="mt-7 space-y-4">
            {contacts.map((number) => (
              <a
                key={number}
                href={`tel:${number.replace(/\s/g, "")}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-[#176B3A]/10 bg-[#FFF8F0] p-4 transition hover:border-[#FF6B0B]/50 hover:bg-[#FFF0E2]"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#176B3A]/10 text-[#176B3A]">
                    <Phone size={19} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xs text-[#52647A]">
                      Franchise Enquiries
                    </span>
                    <span className="mt-1 block font-bold text-[#176B3A]">
                      {number}
                    </span>
                  </span>
                </span>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-[#F36B13] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-[#52647A]">
            Your next business opportunity starts here.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
