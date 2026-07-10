import { motion } from "framer-motion";
import { Video, Mic, BookMarked, MessagesSquare } from "lucide-react";
import theCommonsScreenshot from "@assets/the-commons.png";

const cards = [
  {
    Icon: Video,
    label: "This Week's Freedom Forum",
    title: "Weekly Freedom Forum",
    copy: "Live teaching and discussion with Shane Krauser on America's founding principles, held every week.",
  },
  {
    Icon: Mic,
    label: "Guest Speaker Series",
    title: "New Voices, Twice Monthly",
    copy: "Members hear from guest teachers, civic leaders, and thoughtful voices who bring fresh perspective to the conversation.",
  },
  {
    Icon: BookMarked,
    label: "Monthly Focus",
    title: "The United States Constitution",
    copy: "This month, members are studying the structure, history, and continuing responsibilities of the Constitution together.",
  },
  {
    Icon: MessagesSquare,
    label: "Inside The Commons",
    title: "Member Conversations",
    copy: "Members ask questions, share reflections, and talk through what's happening in their own communities.",
  },
];

export function ProofOfLifeSection() {
  return (
    <section className="py-16 md:py-24 bg-parchment/40">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-deepNavy mb-5">
            See what's happening inside Freedom Square.
          </h2>
          <p className="text-slate text-lg leading-relaxed">
            Freedom Square USA is a growing community with active teaching, live events, member conversations, and educational resources.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {cards.map(({ Icon, label, title, copy }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-[#DDD2BF] p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4 text-mutedRed" strokeWidth={1.5} />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate/60">{label}</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-navy mb-2">{title}</h3>
              <p className="text-slate text-sm leading-relaxed">{copy}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-[#DDD2BF] shadow-lg overflow-hidden mb-10"
        >
          <div className="bg-[#F2E8D6] border-b border-[#DDD2BF] px-4 py-2 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#DDD2BF]"></span>
            <span className="w-3 h-3 rounded-full bg-[#DDD2BF]"></span>
            <span className="w-3 h-3 rounded-full bg-[#DDD2BF]"></span>
            <div className="flex-1 ml-2 bg-white/60 border border-[#DDD2BF] rounded-sm px-3 py-0.5 text-xs text-slate/50 font-sans">
              freedomsquareusa.com
            </div>
          </div>
          <img
            src={theCommonsScreenshot}
            alt="A live look inside the Freedom Square USA community"
            className="w-full object-cover object-top block"
          />
        </motion.div>

        <p className="text-center text-lg font-serif italic text-navy">
          Freedom Square is not an idea waiting to begin.{" "}
          <span className="font-semibold not-italic text-mutedRed">It is a community already taking shape — and there is room for you in it.</span>
        </p>
      </div>
    </section>
  );
}
