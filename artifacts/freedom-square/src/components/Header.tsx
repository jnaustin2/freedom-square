import { useState, useEffect } from "react";
import { siteData, JOIN_URL, LOGIN_URL } from "@/data/siteContent";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-testid="header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-parchment py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-serif font-bold text-xl md:text-2xl text-deepNavy">
            {siteData.header.wordmark}
          </span>
          <span className="hidden md:block text-xs font-medium text-slate uppercase tracking-wider mt-0.5">
            {siteData.header.tagline}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {siteData.header.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-deepNavy hover:text-mutedRed transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={LOGIN_URL}
            className="hidden md:inline text-sm font-medium text-deepNavy hover:text-mutedRed transition-colors"
          >
            Log In
          </a>

          <Button asChild className="bg-mutedRed hover:bg-[#872E23] text-white rounded-none px-6 shadow-sm">
            <a href={JOIN_URL} className="font-semibold text-sm">
              <span className="hidden md:inline">Become an Apprentice Member</span>
              <span className="md:hidden">Join</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
