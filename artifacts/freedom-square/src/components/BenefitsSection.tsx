import { motion } from "framer-motion";
import { JOIN_URL } from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import { Video, Users, Mic, BookOpen, Compass } from "lucide-react";
import communityScreenshot from "@assets/community-screenshot.png";

const cards = [
  {
    Icon: Video,
    title: "Weekly Freedom Forum",
    tagline: "Learn together.",
    copy: "Join Shane Krauser and other members for regular live teaching and discussion focused on America's founding principles, the Constitution, the Declaration of Independence, self-government, and the responsibilities of citizenship.",
    accent: "#1E3A5F",
  },
  {
    Icon: Users,
    title: "The Commons",
    tagline: "Continue the conversation.",
    copy: "Learning shouldn't end when the live event does. Ask questions, respond to discussion prompts, share insights, and talk about what's happening in your community with members who understand why these ideas matter.",
    accent: "#A53A2A",
  },
  {
    Icon: Mic,
    title: "Guest Speaker Series",
    tagline: "Expand your perspective.",
    copy: "Hear from guest teachers, civic leaders, authors, organizers, and other thoughtful voices who deepen your understanding and expand your view of how citizens can make a constructive difference.",
    accent: "#A53A2A",
  },
  {
    Icon: BookOpen,
    title: "Liberty Library",
    tagline: "Go deeper anytime.",
    copy: "Return anytime to recorded teaching, founding-document studies, Constitution resources, study guides, recommended reading, event replays, and practical civic tools.",
    accent: "#1E3A5F",
  },
  {
    Icon: Compass,
    title: "Civic Action",
    tagline: "Put principles into practice.",
    copy: "Freedom matters where people actually live. Explore constructive next steps, local engagement ideas, and opportunities to become more effective in your family, church, school, neighborhood, organization, or community.",
    accent: "#1E3A5F",
  },
];

export function BenefitsSection() {
  return (
    <section id="whats-inside" className="py-16 md:py-24 bg-ivory scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">

        {/* Heading + intro */}
        <div className="mb-10 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif text-deepNavy mb-5">
            Your life inside Freedom Square.
          </h2>
          <p className="text-navy text-lg font-medium mb-3">
            A living community for learning, connection, and action.
          </p>
          <p className="text-slate text-lg leading-relaxed">
            Freedom Square is more than a collection of videos or occasional online events. It is an ongoing membership experience designed to help you keep learning, participate in meaningful conversations, build relationships, and put principles into practice.
          </p>
        </div>

        {/* card grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {cards.map(({ Icon, title, tagline, copy, accent }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-[#DDD2BF] p-7 shadow-sm flex flex-col"
              style={{ borderTop: `4px solid ${accent}` }}
            >
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-parchment">
                <div
                  className="w-9 h-9 flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}30` }}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} style={{ color: accent }} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy leading-tight">{title}</h3>
                  <p className="text-xs uppercase tracking-wide text-slate/60">{tagline}</p>
                </div>
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
            <a href={JOIN_URL}>Start My 2-Week Free Trial</a>
          </Button>
        </div>

      </div>
    </section>
  );
}
