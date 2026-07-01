import { siteData } from "@/data/siteContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-ivory scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deepNavy">
            Questions You May Be Asking
          </h2>
        </div>

        <div className="bg-white border border-parchment p-6 md:p-8 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {siteData.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-parchment last:border-0">
                <AccordionTrigger className="text-left font-serif text-lg text-navy hover:text-mutedRed py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
