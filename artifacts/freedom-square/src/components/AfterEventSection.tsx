import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function AfterEventSection() {
  const points = [
    "Keep learning",
    "Ask questions",
    "Build relationships",
    "Access helpful resources",
    "Take practical steps in your own community"
  ];

  return (
    <section className="py-20 bg-parchment relative overflow-hidden border-y border-[#D5C6A7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            
            <div className="md:col-span-3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-deepNavy">
                A Place to Keep Learning, Connecting, and Taking the Next Step
              </h2>
              
              <p className="text-xl text-navy font-medium">
                Freedom Square gives that inspiration a year-round home.
              </p>
              
              <div className="space-y-4 pt-4">
                <p className="text-lg text-slate">
                  You do not have to carry your concern alone. You do not have to let frustration become the final word. And you do not have to become another angry voice in the political noise to care deeply about your country.
                </p>
                <p className="text-lg text-slate">
                  Freedom Square is a place to deepen your understanding, build trusted relationships, and become more useful in the cause of liberty.
                </p>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white p-8 border border-[#D5C6A7] shadow-md relative">
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold opacity-20 -mt-2 -mr-2"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold opacity-20 -mb-2 -ml-2"></div>
                
                <ul className="space-y-4">
                  {points.map((point, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                      <span className="text-lg font-medium text-navy">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
