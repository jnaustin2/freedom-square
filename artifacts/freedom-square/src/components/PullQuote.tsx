import { motion } from "framer-motion";

interface PullQuoteProps {
  quote: string;
  variant?: "light" | "dark";
}

export function PullQuote({ quote, variant = "light" }: PullQuoteProps) {
  const isLight = variant === "light";
  return (
    <div className={isLight ? "bg-ivory py-12" : "bg-navy py-12"}>
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex gap-4 items-start"
        >
          <div className={`w-1 self-stretch shrink-0 ${isLight ? "bg-gold" : "bg-gold/60"}`}></div>
          <p className={`font-serif italic text-xl md:text-2xl leading-relaxed ${isLight ? "text-navy" : "text-ivory"}`}>
            "{quote}"
          </p>
        </motion.div>
      </div>
    </div>
  );
}
