import { motion } from "framer-motion";

export function CultureSection() {
  return (
    <section className="py-16 md:py-24 bg-navy text-ivory">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
              Our Culture
            </h2>
            <p className="text-ivory/75 leading-relaxed">
              Freedom Square USA is not for partisan fighting, personal attacks, contempt, conspiracy dumping, or outrage without responsibility. Members are welcome to arrive with questions, concerns, frustrations, and a desire for clearer direction. But the culture here invites people toward learning, maturity, courage, humility, and constructive action.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-2 border-gold/50 p-8 md:p-10 text-center"
          >
            <div className="space-y-4 font-serif text-lg md:text-xl text-ivory tracking-wide font-medium">
              <p>We take freedom seriously.</p>
              <p>We take people seriously.</p>
              <div className="w-12 h-px bg-gold/50 mx-auto"></div>
              <p className="text-gold pt-2">We are here to learn, build, and serve.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
