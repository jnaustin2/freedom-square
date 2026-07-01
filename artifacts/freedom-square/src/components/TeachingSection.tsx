import { motion } from "framer-motion";
import shanePhoto from "@assets/shane-krauser.jpeg";

export function TeachingSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-[#D5C6A7]">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 relative"
          >
            <div className="aspect-[3/4] bg-parchment p-2 shadow-md border border-[#D5C6A7] max-w-sm mx-auto md:ml-0 md:mr-auto">
              <div className="w-full h-full border border-gold/30 relative bg-white">
                <img 
                  src={shanePhoto} 
                  alt="Shane Krauser - Constitutional Teacher and Trial Attorney" 
                  className="w-full h-full object-cover object-top"
                />
                {/* Fallback pattern if image doesn't load */}
                <div className="absolute inset-0 bg-parchment/50 -z-10 flex items-center justify-center">
                   <span className="font-serif text-navy font-bold text-xl opacity-50">Shane Krauser</span>
                </div>
              </div>
              <div className="absolute -bottom-4 right-8 bg-navy text-gold font-serif text-sm px-4 py-2 shadow-sm border border-gold/20">
                Shane Krauser
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-deepNavy leading-tight">
              Learn From Trusted Constitutional Teachers
            </h2>
            
            <div className="space-y-4 text-lg text-slate">
              <p>
                Freedom Square USA gives members access to serious, engaging constitutional education led by Shane Krauser and other thoughtful voices. Shane brings credibility, energy, and experience to this work. His background as a trial attorney, constitutional law professor, and nationally recognized teacher of America's founding documents helps make the learning inside Freedom Square both substantive and practical.
              </p>
              <p>
                But Freedom Square is not built around personality alone. It is built around principles: freedom, self-government, civic responsibility, and lawful local action. Members learn from trusted teachers so they can better understand, explain, and apply the principles of liberty where they live.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
