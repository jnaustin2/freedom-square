import { motion } from "framer-motion";

export function BetterWaySection() {
  const cards = [
    { title: "Constitutional Clarity", delay: 0 },
    { title: "Constructive Relationships", delay: 0.1 },
    { title: "Practical Local Influence", delay: 0.2 }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-deepNavy mb-6">
            Not More Noise. A Place to Learn, Build, and Serve.
          </h2>
          <p className="text-lg text-slate max-w-3xl mx-auto">
            Freedom Square USA is not another place for partisan shouting, shallow commentary, or political venting. It is a principled membership community built around constitutional clarity, constructive relationships, and practical local influence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: card.delay }}
              className="bg-ivory border-2 border-parchment p-8 flex items-center justify-center text-center shadow-sm"
            >
              <h3 className="font-serif text-xl font-bold text-navy">{card.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="bg-parchment/30 border-l-4 border-navy p-8 md:p-10 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-navy leading-relaxed font-medium">
            Inside Freedom Square, members study America's founding documents, learn from trusted constitutional teachers, discuss serious ideas with civility, and encourage one another to apply founding principles wisely where they live. The goal is to understand more clearly, speak more confidently, and take constructive steps with wisdom and purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
