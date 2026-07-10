import { useState, useEffect } from "react";
import { JOIN_URL } from "@/data/siteContent";
import { Button } from "@/components/ui/button";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (approx 500px)
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md p-4 border-t border-parchment shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
      <Button asChild className="w-full bg-navy text-ivory rounded-none h-12 text-base font-semibold shadow-md">
        <a href={JOIN_URL}>Start My 2-Week Free Trial</a>
      </Button>
    </div>
  );
}
