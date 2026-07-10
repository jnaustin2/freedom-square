import { motion } from "framer-motion";
import { BookOpen, MessageCircle, Users, MapPin } from "lucide-react";

const outcomes = [
  {
    Icon: BookOpen,
    title: "Understand the Principles More Clearly",
    copy: "Go deeper than slogans and isolated facts. Build a stronger understanding of the Constitution, the Declaration of Independence, liberty, rights, responsibility, and self-government.",
  },
  {
    Icon: MessageCircle,
    title: "Speak With Greater Confidence",
    copy: "Become better prepared to explain the principles of freedom, ask better questions, disagree honorably, and participate in serious conversations with clarity and courage.",
  },
  {
    Icon: Users,
    title: "Find People You Can Learn With",
    copy: "Build relationships with citizens who understand why these ideas matter and want to continue learning, growing, and serving alongside others.",
  },
  {
    Icon: MapPin,
    title: "Become More Useful Where You Live",
    copy: "Strengthen your ability to contribute in your family, church, school, neighborhood, civic organization, business, or local community.",
  },
];

export function MemberTransformationSection() {
  return (
    <section className="py-16 md:py-24 bg-parchment/40">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-deepNavy mb-5">
            Grow into a more capable citizen.
          </h2>
          <p className="text-slate text-lg leading-relaxed">
            Caring about freedom is a beginning. Freedom Square helps you turn that concern into greater understanding, stronger relationships, growing civic confidence, and wiser action.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {outcomes.map(({ Icon, title, copy }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-[#DDD2BF] p-7 shadow-sm flex flex-col"
            >
              <div className="w-9 h-9 flex items-center justify-center shrink-0 bg-navy/5 border border-navy/10 mb-4">
                <Icon className="w-4 h-4 text-navy" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy mb-2">{title}</h3>
              <p className="text-slate text-base leading-relaxed">{copy}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-lg md:text-xl font-serif italic text-navy">
          The goal is not simply to know more about freedom.{" "}
          <span className="font-semibold not-italic text-mutedRed">It is to become better prepared to preserve it.</span>
        </p>
      </div>
    </section>
  );
}
