import { JOIN_URL } from "@/data/siteContent";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-navy text-ivory text-center">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-white">
          You care about freedom. You do not have to carry that concern alone.
        </h2>

        <div className="space-y-2 mb-10 font-serif text-lg md:text-xl text-ivory/90">
          <p>Keep learning.</p>
          <p>Build meaningful relationships.</p>
          <p>Grow in confidence.</p>
          <p>Become more useful where you live.</p>
          <p className="text-gold font-semibold pt-2">And do it in good company.</p>
        </div>

        <Button asChild size="lg" className="bg-gold hover:bg-yellow-600 text-navy rounded-none px-12 h-16 text-lg font-bold shadow-lg border-2 border-transparent hover:border-ivory/20">
          <a href={JOIN_URL}>Start My 2-Week Free Trial</a>
        </Button>
        <p className="text-sm text-ivory/60 mt-4">
          Free for 2 weeks. Then $49/month. Cancel anytime.
        </p>

        <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mt-14">
          Mastering Freedom in Good Company
        </p>
      </div>
    </section>
  );
}
