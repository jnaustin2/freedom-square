import { motion } from "framer-motion";
import { JOIN_URL } from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import { Video, BookOpen, Users, Compass } from "lucide-react";
import communityScreenshot from "@assets/community-screenshot.png";

const cards = [
  {
    Icon: Video,
    title: "Live Teaching",
    copy: "Join regular live teaching with Shane Krauser focused on America's founding principles, the Constitution, the Declaration of Independence, and the responsibilities of self-government.",
  },
  {
    Icon: BookOpen,
    title: "The Liberty Library",
    copy: "Access recorded courses, founding document studies, reading resources, practical guides, and tools you can return to whenever you want to study more deeply.",
  },
  {
    Icon: Users,
    title: "The Commons",
    copy: "Participate in thoughtful member discussions, respond to prompts, ask questions, share reflections, and connect with citizens who care about liberty and civic responsibility.",
  },
  {
    Icon: Compass,
    title: "Civic Action",
    copy: "Receive simple next steps, local engagement guidance, and resources that help you move from concern to constructive participation in your family, church, school, town, organization, or community.",
  },
];

export function BenefitsSection() {
  return (
    <section id="whats-inside" className="py-16 md:py-24 bg-ivory scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">

        {/* Heading + intro */}
        <div className="mb-10 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif text-deepNavy mb-5">
            What's Inside Freedom Square
          </h2>
          <p className="text-slate text-lg leading-relaxed mb-3">
            Freedom Square is more than a library of videos. It is a living membership community with a steady rhythm of teaching, discussion, resources, and practical next steps.
          </p>
          <p className="text-slate text-lg leading-relaxed">
            As an Apprentice member, you will have a place to keep learning, ask questions, build relationships, and apply America's founding principles where you live.
          </p>
        </div>

        {/* 2×2 card grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {cards.map(({ Icon, title, copy }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-[#DDD2BF] p-7 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-parchment">
                <div className="w-9 h-9 bg-navy/5 border border-navy/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-navy" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy">{title}</h3>
              </div>
              <p className="text-slate text-base leading-relaxed">{copy}</p>
            </motion.div>
          ))}
        </div>

        {/* Platform Preview */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm font-sans uppercase tracking-widest text-slate/60 mb-4 text-center">
            A living community, not just a content library
          </p>
          <div className="border border-[#DDD2BF] shadow-lg overflow-hidden">
            <div className="bg-[#F2E8D6] border-b border-[#DDD2BF] px-4 py-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#DDD2BF]"></span>
              <span className="w-3 h-3 rounded-full bg-[#DDD2BF]"></span>
              <span className="w-3 h-3 rounded-full bg-[#DDD2BF]"></span>
              <div className="flex-1 ml-2 bg-white/60 border border-[#DDD2BF] rounded-sm px-3 py-0.5 text-xs text-slate/50 font-sans">
                freedomsquareusa.com
              </div>
            </div>
            <img
              src={communityScreenshot}
              alt="Inside the Freedom Square USA community platform"
              className="w-full object-cover object-top block"
            />
          </div>
        </motion.div>

        {/* Closing line + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-t border-[#DDD2BF] pt-8">
          <p className="text-lg font-serif italic text-navy">
            Freedom Square gives your concern for liberty a place to grow into understanding, relationships, and wise action.
          </p>
          <Button asChild size="lg" className="shrink-0 bg-mutedRed hover:bg-[#872E23] text-white rounded-none px-8 h-12 text-base font-semibold shadow-md">
            <a href={JOIN_URL}>Become an Apprentice Member</a>
          </Button>
        </div>

      </div>
    </section>
  );
}
