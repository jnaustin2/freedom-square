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
              Serious constitutional education. Engaging teaching. Practical application.
            </h2>
            
            <div className="space-y-4 text-lg text-slate">
              <p>
                Shane Krauser leads regular teaching inside Freedom Square USA. As a trial attorney, constitutional law professor, and nationally recognized teacher of America's founding documents, Shane brings decades of experience helping citizens understand the principles of liberty and apply them to real questions and challenges. His teaching is substantive, energetic, approachable, and practical.
              </p>
              <p>
                Inside Freedom Square, members have the opportunity to keep learning with Shane throughout the year rather than encountering his teaching only at an occasional seminar or event. Members also hear from guest speakers and other thoughtful voices who bring valuable experience and perspective to questions of freedom, self-government, civic responsibility, constitutional understanding, leadership, and constructive local action.
              </p>
              <p className="font-serif italic text-navy text-base md:text-lg pt-2 border-t border-parchment">
                The purpose of learning is not merely to become better informed.{" "}
                <span className="font-semibold not-italic text-mutedRed">It is to become better prepared.</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
