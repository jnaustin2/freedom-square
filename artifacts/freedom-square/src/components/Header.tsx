import { useState, useEffect } from "react";
import { siteData, JOIN_URL, LOGIN_URL } from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <>
      <header
        data-testid="header"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || menuOpen
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

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
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
              className="text-sm font-medium text-deepNavy hover:text-mutedRed transition-colors"
            >
              Log In
            </a>

            <Button asChild className="bg-mutedRed hover:bg-[#872E23] text-white rounded-none px-6 shadow-sm">
              <a href={JOIN_URL} className="font-semibold text-sm">
                Become an Apprentice Member
              </a>
            </Button>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden p-2 text-deepNavy"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-parchment bg-white/95 backdrop-blur-md">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {siteData.header.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-sm font-medium text-deepNavy hover:text-mutedRed border-b border-parchment/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={LOGIN_URL}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm font-medium text-deepNavy hover:text-mutedRed border-b border-parchment/60 transition-colors"
              >
                Log In
              </a>
              <div className="pt-3">
                <Button asChild className="w-full bg-mutedRed hover:bg-[#872E23] text-white rounded-none shadow-sm">
                  <a href={JOIN_URL} className="font-semibold text-sm">
                    Become an Apprentice Member
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
