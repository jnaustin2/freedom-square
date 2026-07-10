import { motion } from "framer-motion";

const MONTHLY_FOCUS = {
  label: "Monthly Focus",
  title: "July Focus: The United States Constitution",
  description:
    "Explore the structure, principles, history, and continuing responsibilities connected to America's founding charter of self-government. The Monthly Focus helps members go deeper together and creates a shared thread through teaching, discussion, resources, and practical application.",
};

export function MonthlyFocusSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-navy border-2 border-gold/50 px-8 py-10 md:px-12 text-center"
        >
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
            {MONTHLY_FOCUS.label}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mt-3 mb-4">
            {MONTHLY_FOCUS.title}
          </h3>
          <p className="text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            {MONTHLY_FOCUS.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
