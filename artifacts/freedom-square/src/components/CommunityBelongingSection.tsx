import { motion } from "framer-motion";
import membersScreenshot from "@assets/members.png";

const groups = ["Families", "Churches", "Schools", "Neighborhoods", "Civic groups", "Businesses", "Local organizations"];

export function CommunityBelongingSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif text-deepNavy mb-5">
              Freedom grows in good company.
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-4">
              Freedom is sustained through people and the communities they build. Freedom Square helps citizens grow stronger individually while building the relationships that make constructive influence possible.
            </p>
            <p className="text-slate text-lg leading-relaxed mb-6">
              Many people care deeply about liberty but have few places where they can ask serious questions, think out loud, share what they are learning, and build relationships without every conversation becoming another political argument. Freedom Square offers a different kind of civic community.
            </p>
            <ul className="flex flex-wrap gap-2 mb-6">
              {groups.map((g, i) => (
                <li key={i} className="text-sm font-medium text-navy bg-parchment border border-gold/30 px-3 py-1.5">
                  {g}
                </li>
              ))}
            </ul>
            <p className="text-lg font-serif italic text-navy">
              You may join because of the teaching.{" "}
              <span className="font-semibold not-italic text-mutedRed">Over time, the relationships may become one of the most valuable reasons to stay.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-[#DDD2BF] shadow-lg overflow-hidden"
          >
            <img
              src={membersScreenshot}
              alt="Members connecting inside the Freedom Square USA community"
              className="w-full object-cover object-top block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
