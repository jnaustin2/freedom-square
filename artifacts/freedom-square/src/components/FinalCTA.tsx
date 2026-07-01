import { JOIN_URL } from "@/data/siteContent";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-navy text-ivory text-center">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-white">
          Freedom Is Preserved by Citizens Who Are Willing to Learn and Act
        </h2>

        <p className="text-lg md:text-xl text-ivory/80 leading-relaxed mb-12 max-w-3xl mx-auto">
          If you still believe America's founding principles matter, you do not have to carry that responsibility alone. Freedom Square USA gives you a place to learn, connect, and become more useful in the cause of liberty. This is a community for citizens who are tired of the noise, yet still willing to do what freedom requires. We believe that America's best days are ahead, and you can be part of making that future a reality.
        </p>

        <Button asChild size="lg" className="bg-gold hover:bg-yellow-600 text-navy rounded-none px-12 h-16 text-lg font-bold shadow-lg border-2 border-transparent hover:border-ivory/20">
          <a href={JOIN_URL}>Become an Apprentice Member</a>
        </Button>
      </div>
    </section>
  );
}
