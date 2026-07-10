import { motion } from "framer-motion";
import { JOIN_URL } from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import { Compass, Users, Video, Search, CheckCircle2 } from "lucide-react";

const steps = [
  { Icon: Compass, title: "Get Oriented", copy: "Start in the Welcome Center. Learn how the community works and complete your first steps." },
  { Icon: Users, title: "Meet the Community", copy: "Introduce yourself. Visit The Commons. Begin joining conversations." },
  { Icon: Video, title: "Join In", copy: "Attend available live programming and participate in discussions." },
  { Icon: Search, title: "Explore", copy: "Browse the Liberty Library, event replays, study resources, and Civic Action materials." },
  { Icon: CheckCircle2, title: "Decide", copy: "Experience Freedom Square before your paid membership begins." },
];

export function OfferSection() {
  return (
    <section id="apprentice" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-deepNavy mb-5">
            Experience Freedom Square free for 2 weeks.
          </h2>
          <p className="text-slate text-lg leading-relaxed">
            Apprentice membership is the foundation of Freedom Square USA. It is for citizens who want to deepen their understanding, grow in civic confidence, find principled community, and become better prepared to preserve freedom where they live. Your free trial gives you an opportunity to experience the community for yourself.
          </p>
        </motion.div>

        {/* 5-step first two weeks path */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate/60 text-center mb-6">
            Your First Two Weeks in Freedom Square
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map(({ Icon, title, copy }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-ivory border border-[#DDD2BF] p-5 flex flex-col items-center text-center gap-2"
              >
                <span className="text-gold font-serif text-sm font-bold">0{i + 1}</span>
                <Icon className="w-5 h-5 text-navy" strokeWidth={1.5} />
                <h3 className="font-serif text-sm font-bold text-navy">{title}</h3>
                <p className="text-slate text-xs leading-relaxed">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Membership card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-2 border-gold overflow-hidden shadow-xl mb-14"
        >
          <div className="bg-navy px-8 py-10 md:px-12 text-center border-b-4 border-gold">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Apprentice Membership
            </p>
            <p className="text-4xl md:text-5xl font-serif text-ivory font-bold mb-2">
              $49<span className="text-xl font-sans font-normal">/month</span>
            </p>
            <p className="text-ivory/80">
              after your free 2-week trial. Cancel anytime.
            </p>
          </div>

          <div className="bg-ivory px-8 py-10 md:px-12 text-center space-y-6">
            <Button asChild size="lg" className="w-full sm:w-auto bg-mutedRed hover:bg-[#872E23] text-white rounded-none px-12 h-14 text-lg font-semibold shadow-md">
              <a href={JOIN_URL}>Start My 2-Week Free Trial</a>
            </Button>
            <p className="text-sm text-slate italic">
              Free for 2 weeks. Then $49/month. Cancel anytime.
            </p>
          </div>
        </motion.div>

        {/* Value clarification */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-[#DDD2BF] pt-10 max-w-2xl mx-auto text-center"
        >
          <h3 className="font-serif text-xl text-deepNavy mb-4">
            Why a year-round community?
          </h3>
          <p className="text-slate leading-relaxed mb-4">
            A seminar can inspire you for a day. A book can teach you an important idea. A video can answer a question. Freedom Square gives you something different: an ongoing place to keep learning, trusted teachers to keep learning from, people to keep growing alongside, resources to return to, conversations that continue, and encouragement to put principles into practice where you live.
          </p>
          <p className="font-serif italic text-navy text-lg">
            Freedom Square is not simply something to watch.{" "}
            <span className="font-semibold not-italic text-mutedRed">It is a community to participate in.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
