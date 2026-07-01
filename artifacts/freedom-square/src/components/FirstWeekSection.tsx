import { motion } from "framer-motion";
import { siteData } from "@/data/siteContent";

export function FirstWeekSection() {
  return (
    <section id="first-week" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-deepNavy mb-6">
            You Will Know Where to Begin
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            You will not be left to wander through a new platform wondering what to do next. Your first steps inside Freedom Square will help you get oriented, meet the community, RSVP for a live event, and begin learning right away.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.firstWeekSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-ivory border border-parchment p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-navy text-gold flex items-center justify-center font-serif font-bold text-lg mb-4">
                {i + 1}
              </div>
              <p className="font-medium text-navy text-lg">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
