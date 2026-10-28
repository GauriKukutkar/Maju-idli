
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Store } from "lucide-react";

const branches = [
  {
    name: "Police Nagar",
    location: "Nagpur",
    number: "01",
  },
  {
    name: "Chichbhavan Main Road",
    location: "Nagpur",
    number: "02",
  },
];

export default function UpcomingBranches() {
  return (
    <section className="bg-[#FFF8F0] px-6 py-20 text-[#176B3A] md:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#D9FBE8] px-4 py-2 text-sm font-semibold text-[#176B3A]">
            <Store size={16} />
            Our Growing Presence
          </span>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            New Outlets,
            <br className="sm:hidden" />{" "}
            <span className="text-[#F36B13]">Coming Soon!</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#52647A] md:text-lg">
            Maju Idli is expanding to bring your favourite South Indian
            flavours closer to you. Look out for our upcoming locations!
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {branches.map((branch, index) => (
            <motion.article
              key={branch.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-[#176B3A]/10 bg-white p-7 shadow-[0_10px_30px_rgba(42,52,40,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(42,52,40,0.12)] md:p-9"
            >
              <span className="pointer-events-none absolute -right-2 -top-9 select-none text-[140px] font-black leading-none text-[#176B3A]/[0.045]">
                {branch.number}
              </span>

              <div className="relative flex items-center justify-between gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF0E2] text-[#F36B13]">
                  <MapPin size={25} />
                </span>

                <span className="rounded-full bg-[#D9FBE8] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#176B3A]">
                  Coming Soon
                </span>
              </div>

              <div className="relative mt-9">
                <p className="text-sm font-semibold text-[#F36B13]">
                  MAJU IDLI · NEW OUTLET
                </p>

                <h3 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
                  {branch.name}
                </h3>

                <p className="mt-3 flex items-center gap-2 text-sm text-[#52647A]">
                  <MapPin size={16} className="text-[#176B3A]" />
                  {branch.location}
                </p>
              </div>

              <div className="relative mt-8 flex items-center justify-between gap-4 border-t border-[#176B3A]/10 pt-5">
                <span className="text-sm text-[#52647A]">
                  Same authentic taste, a new location.
                </span>

                <ArrowUpRight
                  size={21}
                  className="shrink-0 text-[#F36B13] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
