"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Ana Sayfa", href: "/" },
    { title: "Hakkımızda", href: "/about" },
    { title: "Ürünlerimiz", href: "/products" },
    { title: "Teklif", href: "/offers" },
    { title: "İletişim", href: "/contacts" },
    { title: "Referanslarımız", href: "/references" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "lg:backdrop-blur-none backdrop-blur-lg" : "backdrop-blur-none"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6 lg:py-7">
        {/* Logo */}
        <div
          className={`flex items-center gap-2 transition-colors duration-300 ${
            scrolled ? "lg:bg-blue-300 backdrop-blur-lg text-white rounded-lg px-5 py-3" : " text-black"
          }`}
        >
          <Image src={"/images/tkm225-300x50.png"} alt="tkm logo" width={300} height={50}/>
        </div>

        {/* Desktop Menü */}
        <nav
          className={`hidden lg:flex items-center gap-3 rounded-full px-5 py-3 border transition-all duration-300 ${
            scrolled
              ? "backdrop-blur-md bg-white/80 border-black/10 text-black shadow-sm"
              : "backdrop-blur-md bg-white/10 border-white/20 text-white"
          }`}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? scrolled
                      ? "bg-black text-white"
                      : "bg-white text-black"
                    : "hover:bg-white/20"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Mobil Menü Butonu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden focus:outline-none transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobil Menü */}
      {menuOpen && (
        <div
          className={`lg:hidden flex flex-col items-start gap-3 px-6 pb-5 transition-all duration-300 ${
            scrolled ? "bg-white/95 text-black" : "bg-black/70 text-white"
          }`}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`w-full px-4 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-white text-black"
                    : "hover:bg-white/20 transition"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
