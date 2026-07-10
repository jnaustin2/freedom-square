import { motion } from "framer-motion";

const sequence = [
  "Keep learning.",
  "Keep asking.",
  "Keep growing.",
  "Keep building relationships.",
  "Keep putting principles into practice.",
];

export function FreedomRequiresSection() {
  return (
    <section className="py-24 md:py-32 bg-navy relative text-ivory overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #FAF7F0 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-serif text-white mb-8 leading-tight"
        >
          Inspiration is powerful. Continuity changes people.
        </motion.h2>

        <div className="space-y-4 text-lg text-ivory/80 leading-relaxed mb-10">
          <p>
            A seminar can introduce an idea. A book can deepen your understanding. A great speaker can inspire you to act. But lasting growth usually requires something more: a place to keep learning, asking questions, building relationships, and putting ideas into practice over time.
          </p>
          <p>
            That is what Freedom Square USA is designed to provide — a year-round home for your concern for liberty, a place to continue growing long after the event ends, the book closes, or the latest political controversy fades from view.
          </p>
        </div>

        <p className="font-serif italic text-gold text-lg mb-10">
          You do not have to keep starting over.
        </p>

        <div className="space-y-2 mb-6">
          {sequence.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="font-serif text-xl md:text-2xl text-white font-medium"
            >
              {line}
            </motion.p>
          ))}
        </div>
        <p className="font-serif text-xl md:text-2xl text-gold font-semibold">
          And do it in good company.
        </p>
      </div>
    </section>
  );
}
