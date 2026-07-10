import { motion } from "framer-motion";

const questions = [
  "Where do I begin?",
  "Whom can I trust?",
  "What can I do that will actually make a meaningful difference?"
];

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-deepNavy leading-snug mb-6">
            You care about your country. What comes next?
          </h2>
          <div className="space-y-4 text-lg text-slate">
            <p>
              National arguments feel endless. Social media rewards outrage. Serious questions are often reduced to slogans, soundbites, and suspicion.
            </p>
            <p>
              And even after an inspiring seminar, Constitution class, webinar, or civic event, the momentum can fade. You go home encouraged — but without a place to keep learning, ask questions, build relationships, or decide what comes next.
            </p>
            <p className="font-medium text-navy">
              Freedom Square USA gives that momentum a year-round home.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {questions.map((question, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="bg-parchment border border-gold/30 px-5 py-4 md:flex-1 shadow-sm"
            >
              <p className="font-serif italic text-navy text-base">"{question}"</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center font-serif italic text-lg text-navy">
          Freedom Square was built for citizens asking questions like these.
        </p>
      </div>
    </section>
  );
}
