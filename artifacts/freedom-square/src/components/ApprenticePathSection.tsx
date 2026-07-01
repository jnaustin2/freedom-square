import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { JOIN_URL } from "@/data/siteContent";
import { Button } from "@/components/ui/button";

export function ApprenticePathSection() {
  const steps = [
    { num: "01", title: "Learn the Principles" },
    { num: "02", title: "Build Confidence" },
    { num: "03", title: "Take Your Next Step" }
  ];

  return (
    <section className="py-20 md:py-28 bg-parchment border-y border-[#D5C6A7]">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-deepNavy mb-8">
            The Apprentice Path
          </h2>

          <div className="text-lg text-slate text-left md:text-center space-y-6 max-w-3xl mx-auto">
            <p>
              Apprentice membership is the foundation of Freedom Square USA. It is for citizens who want to understand America's founding documents more deeply, strengthen their civic confidence, find principled community, and take simple constructive steps where they live.
            </p>
            <p>
              Apprentice members are citizens in formation — learning the principles, building relationships, and preparing to defend liberty with greater clarity, courage, and wisdom.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-0 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center w-full md:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-ivory border-2 border-gold/40 p-6 flex flex-col items-center justify-center text-center w-full md:w-52 h-44 shadow-sm flex-shrink-0"
              >
                <span className="text-gold font-serif text-2xl font-bold mb-2">{step.num}</span>
                <h3 className="font-serif text-lg font-bold text-navy leading-snug">{step.title}</h3>
              </motion.div>

              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
                  className="flex items-center justify-center text-gold md:mx-2 my-2 md:my-0"
                >
                  <ArrowRight className="hidden md:block" size={28} strokeWidth={1.5} />
                  <ArrowRight className="md:hidden rotate-90" size={24} strokeWidth={1.5} />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-mutedRed hover:bg-red-800 text-white rounded-none px-10 h-14 text-base font-semibold shadow-md">
            <a href={JOIN_URL}>Become an Apprentice Member</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
