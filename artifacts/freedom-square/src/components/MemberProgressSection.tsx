import { motion } from "framer-motion";

const progress = [
  "More grounded in America's founding principles",
  "More confident discussing freedom with clarity and respect",
  "More connected to people they trust",
  "Better able to separate serious civic questions from noise and outrage",
  "More prepared to take constructive action where they live",
];

export function MemberProgressSection() {
  return (
    <section className="py-20 md:py-28 bg-navy text-ivory relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #FAF7F0 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl font-serif text-white mb-6">
          What kind of citizen could you become?
        </h2>
        <p className="text-ivory/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          The value of Freedom Square is not measured only by how many events you attend or videos you watch. It is measured by growth. Over time, active members should become:
        </p>

        <ul className="space-y-3 mb-12 text-left max-w-lg mx-auto">
          {progress.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3"
            >
              <span className="text-gold shrink-0 mt-1">✦</span>
              <span className="text-ivory/90 text-base md:text-lg">{item}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-xl md:text-2xl text-gold leading-relaxed mb-6"
        >
          One conversation. One lesson. One relationship.<br />
          One constructive step at a time.
        </motion.div>

        <p className="font-serif text-lg md:text-xl text-white font-semibold">
          Keep becoming the kind of citizen freedom requires.
        </p>
      </div>
    </section>
  );
}
