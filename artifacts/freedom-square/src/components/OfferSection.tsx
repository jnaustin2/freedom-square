import { motion } from "framer-motion";
import { JOIN_URL } from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  "Weekly live events with Shane Krauser",
  "Twice-monthly Freedom Forums with guest speakers",
  "Liberty Library resources",
  "Member discussions in The Commons",
  "Prompts and conversation starters throughout the week",
  "Event replays when available",
  "Simple civic action steps",
  "Practical local engagement guidance",
  "Encouragement from a principled community"
];

const steps = [
  "Learn the Principles",
  "Build Relationships",
  "Defend Liberty"
];

export function OfferSection() {
  return (
    <section id="apprentice" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">

        {/* Apprentice Path intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-deepNavy mb-6">
            The Apprentice Path
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate text-lg leading-relaxed">
            <p>
              Apprentice membership is the foundation of Freedom Square USA. It is for citizens who want to understand America's founding documents more deeply, strengthen their civic confidence, find principled community, and take simple constructive steps where they live.
            </p>
            <p className="border-l-2 border-gold pl-6 font-serif italic text-navy text-base md:text-lg">
              Apprentice members are citizens in formation — learning the principles, building relationships, and preparing to defend liberty with greater clarity, courage, and wisdom.
            </p>
          </div>
        </motion.div>

        {/* 3-step path */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-0 mb-12">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center w-full md:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="bg-ivory border border-[#DDD2BF] px-6 py-4 flex flex-col items-center text-center w-full md:w-44 shadow-sm flex-shrink-0"
              >
                <span className="text-gold font-serif text-lg font-bold mb-1">0{i + 1}</span>
                <span className="font-serif text-sm font-semibold text-navy leading-snug">{step}</span>
              </motion.div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block text-gold mx-2 shrink-0" size={22} strokeWidth={1.5} />
              )}
              {i < steps.length - 1 && (
                <ArrowRight className="md:hidden rotate-90 text-gold my-2 shrink-0" size={20} strokeWidth={1.5} />
              )}
            </div>
          ))}
        </div>

        {/* Membership card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-2 border-gold overflow-hidden shadow-xl"
        >
          <div className="bg-navy px-8 py-10 md:px-12 text-center border-b-4 border-gold">
            <h2 className="text-2xl md:text-3xl font-serif text-ivory mb-3">
              Become an Apprentice Member
            </h2>
            <p className="text-lg text-gold font-medium mb-4">
              Learn the principles of liberty and strengthen your civic confidence.
            </p>
            <p className="text-ivory/80 max-w-xl mx-auto">
              Apprentice membership is for citizens who want to understand America's founding documents more deeply, build principled relationships, and take constructive steps where they live.
            </p>
          </div>

          <div className="bg-ivory px-8 py-10 md:px-12">
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-mutedRed shrink-0 mt-0.5" />
                  <span className="text-slate text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-center space-y-5 border-t border-[#DDD2BF] pt-8">
              <div className="text-5xl font-serif font-bold text-navy">
                $49<span className="text-xl text-slate font-sans font-normal">/month</span>
              </div>
              <Button asChild size="lg" className="w-full sm:w-auto bg-mutedRed hover:bg-[#872E23] text-white rounded-none px-12 h-14 text-lg font-semibold shadow-md">
                <a href={JOIN_URL}>Become an Apprentice Member</a>
              </Button>
              <p className="text-sm text-slate italic">
                After joining, you will be welcomed into the community and guided through your first steps.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
