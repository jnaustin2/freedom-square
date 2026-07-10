import { motion } from "framer-motion";
import { Calendar, Mic, BookOpen, MapPin } from "lucide-react";
import { JOIN_URL } from "@/data/siteContent";
import { Button } from "@/components/ui/button";

const blocks = [
  {
    Icon: Calendar,
    label: "Every Week",
    items: [
      "Weekly Freedom Forum",
      "Discussion prompts",
      "Member conversations in The Commons",
    ],
  },
  {
    Icon: Mic,
    label: "Twice Each Month",
    items: [
      "Guest Speaker Series",
      "New voices and perspectives",
      "Member Q&A and discussion",
    ],
  },
  {
    Icon: BookOpen,
    label: "Anytime",
    items: [
      "Liberty Library",
      "Available event replays",
      "Study guides and reference tools",
    ],
  },
  {
    Icon: MapPin,
    label: "Ongoing",
    items: [
      "Civic Action ideas",
      "Local engagement guidance",
      "Practical application",
    ],
  },
];

export function CommunityRhythmSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-[#DDD2BF]">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-serif text-deepNavy">
            How the Community Rhythm Works
          </h2>
          <p className="text-slate text-base mt-2">
            Membership isn't a static library — it's a consistent, structured community experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {blocks.map(({ Icon, label, items }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-[#DDD2BF] bg-ivory p-5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-navy/5 border border-navy/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-navy" strokeWidth={1.5} />
                </div>
                <span className="font-serif font-bold text-navy text-sm">{label}</span>
              </div>
              <ul className="space-y-1.5">
                {items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate">
                    <span className="text-gold mt-0.5 shrink-0 text-xs">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center border-t border-[#DDD2BF] pt-8">
          <p className="font-serif italic text-navy text-lg mb-5">
            There is always something meaningful to learn, discuss, or do.
          </p>
          <Button asChild size="lg" className="bg-mutedRed hover:bg-[#872E23] text-white rounded-none px-8 h-12 text-base font-semibold shadow-md">
            <a href={JOIN_URL}>Start My 2-Week Free Trial</a>
          </Button>
          <p className="text-sm text-slate/70 mt-3">
            Free for 2 weeks. Then $49/month.
          </p>
        </div>
      </div>
    </section>
  );
}
