import { motion } from "framer-motion";
import { JOIN_URL } from "@/data/siteContent";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      data-testid="hero"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-ivory"
    >
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-mutedRed text-sm font-semibold uppercase tracking-[0.2em] mb-3 block">
                Less political arguing. More capable citizens.
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-deepNavy leading-tight">
                Learn what freedom requires—and put it into practice.
              </h1>
            </div>

            <p className="text-lg md:text-xl text-slate leading-relaxed">
              Freedom Square USA is a year-round membership community where citizens study America's founding principles, learn from trusted teachers, build meaningful relationships, and become better prepared to strengthen liberty where they live.
            </p>

            <p className="text-base md:text-lg text-navy border-l-2 border-gold pl-4 py-1">
              If you are tired of the noise, yet still willing to do what freedom requires, you are not alone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button asChild size="lg" className="bg-mutedRed hover:bg-[#872E23] text-white rounded-none px-8 h-14 text-base font-semibold shadow-md">
                <a href={JOIN_URL}>Start My 2-Week Free Trial</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-navy text-navy hover:bg-parchment rounded-none h-14 text-base">
                <a href="#whats-inside">See What's Inside</a>
              </Button>
            </div>
            <p className="text-sm text-slate/70 -mt-1">
              Free for 2 weeks. Then $49/month. Cancel anytime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] shadow-xl border border-[#DDD2BF] overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1208659389?badge=0&autopause=0&player_id=0&app_id=58479"
                className="w-full h-full object-cover object-center"
                style={{ border: 0 }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Introducing Freedom Square USA"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-gold opacity-50 pointer-events-none"></div>
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-gold opacity-50 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
