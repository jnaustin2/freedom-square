import { motion } from "framer-motion";
import { siteData } from "@/data/siteContent";
import { CheckCircle } from "lucide-react";

export function AudienceSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deepNavy mb-6">
            Is Freedom Square for You?
          </h2>
          <p className="text-xl text-navy font-medium max-w-2xl mx-auto">
            Freedom Square USA is for community-minded Americans who are still hopeful enough to learn, serve, and act.
          </p>
        </div>

        <div className="bg-white border-2 border-[#D5C6A7] p-8 md:p-10 shadow-sm mb-12">
          <p className="text-lg text-slate font-medium mb-6">If you are:</p>
          <ul className="space-y-6">
            {siteData.audienceChecklist.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                <span className="text-lg text-slate">{item}</span>
              </motion.li>
            ))}
          </ul>
          <p className="text-xl font-serif text-navy font-semibold mt-8 pt-6 border-t border-parchment">
            If you are tired of the noise, yet still willing to do what freedom requires, you're in the right place.
          </p>
        </div>

        <div className="text-center">
          <p className="text-xl font-serif italic text-navy">
            You do not need to be an expert. You simply need to care about freedom, be willing to learn, and want to strengthen your ability to serve your family, community, and country well.
          </p>
        </div>
      </div>
    </section>
  );
}
