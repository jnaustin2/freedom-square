import { motion } from "framer-motion";
import { BookOpen, Shield, Scale, MapPin, Users } from "lucide-react";

const pillars = [
  { label: "Knowledge",       Icon: BookOpen },
  { label: "Character",       Icon: Shield   },
  { label: "Responsibility",  Icon: Scale    },
  { label: "Local Influence", Icon: MapPin   },
  { label: "Good Company",    Icon: Users    },
];

const threeCards = [
  "Constitutional Clarity",
  "Constructive Relationships",
  "Practical Local Influence",
];

export function FreedomRequiresSection() {
  return (
    <section className="py-20 md:py-28 bg-navy relative text-ivory overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #FAF7F0 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-serif text-white mb-4">
            Freedom Requires More Than Concern
          </h2>
          <p className="text-lg text-parchment/80 italic">
            Concern is a beginning. But freedom requires more.
          </p>
        </div>

        {/* Five pillars */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {pillars.map(({ label, Icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-gold/40 bg-deepNavy/50 px-6 py-5 flex flex-col items-center gap-2 hover:border-gold/70 transition-colors w-32 md:w-36"
            >
              <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
              <span className="font-serif text-sm md:text-base font-medium tracking-wide text-parchment text-center leading-snug">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-10 grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <p className="text-white/80 text-lg leading-relaxed">
              Freedom Square USA helps citizens strengthen relationships, build habits, and learn the principles needed to preserve freedom in real life — in families, churches, schools, neighborhoods, civic groups, businesses, and local communities.
            </p>
            <p className="text-gold font-medium font-serif">
              This is not about passive consumption. It is about becoming the kind of citizen freedom requires.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 space-y-3">
            <p className="text-parchment/70 text-xs uppercase tracking-widest mb-4">
              Built around
            </p>
            {threeCards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-gold text-sm shrink-0">✦</span>
                <span className="font-serif text-parchment font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
