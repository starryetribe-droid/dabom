import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Inline SVG Logo Component
const DabomLogo = ({ className }: { className?: string }) => (
  <img src="/dabom-logo-symbol.png" className={className} alt="다봄 로고" />
);

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Background is always white
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md border-b border-white/20 py-4 transition-all duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <DabomLogo className="h-10 w-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-sm" />
            <span className="text-2xl font-extrabold tracking-tight text-primary-dark">다봄</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8">
              {[
                { name: '서비스 소개', href: '#features' },
                { name: '임상 효과', href: '#trust' },
                { name: '전문가', href: '#expertise' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-primary-dark font-bold transition-colors text-[15px] hover:underline underline-offset-4 decoration-2 decoration-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="h-4 w-px bg-gray-300 mx-2"></div>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-none bg-primary-dark text-white font-bold text-sm hover:bg-primary transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-primary-dark"
            >
              도입 문의
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-dark p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100 animate-fade-up">
          <div className="flex flex-col px-6 py-8 space-y-6">
            {[
              { name: '서비스 소개', href: '#features' },
              { name: '임상 효과', href: '#trust' },
              { name: '전문가', href: '#expertise' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-gray-800 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-gray-100 w-full my-2"></div>
            <a
              href="#contact"
              className="text-center w-full px-6 py-4 rounded-none bg-primary-dark text-white font-bold shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              도입 문의하기
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;