export function Footer() {
  return (
    <footer className="bg-deepNavy py-12 text-center md:text-left text-ivory/60 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-serif font-bold text-xl text-ivory">Freedom Square USA</span>
            <span className="text-sm font-medium text-gold uppercase tracking-wider">
              Mastering Freedom in Good Company
            </span>
          </div>

          <div className="text-sm">
            &copy; 2026 Freedom Square USA. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-ivory transition-colors">Contact</a>
            <a href="#" className="hover:text-ivory transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ivory transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
