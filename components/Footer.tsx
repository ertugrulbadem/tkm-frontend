// /components/Footer.tsx
"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b0c23] text-gray-300 pt-16 pb-8 px-6 md:px-20">
      {/* Üst Kısım */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-gray-700 pb-10">
        {/* Page Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Hızlı Linkler</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition">Ana Sayfa</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Hakkımızda</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Ürünler</Link></li>
            <li><Link href="/contacts" className="hover:text-white transition">İletişim</Link></li>
            <li><Link href="/offers" className="hover:text-white transition">Teklif</Link></li>
            <li><Link href="/references" className="hover:text-white transition">Referanslarımız</Link></li>
          </ul>
        </div>


        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Stay tuned for more updates
          </h3>
          <form className="flex items-center border-b border-gray-500 pb-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent text-white w-full outline-none placeholder-gray-400"
            />
            <button
              type="submit"
              className="ml-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-3 py-1 rounded-full flex items-center justify-center transition"
            >
              <ArrowRight size={18} />
            </button>
          </form>
          <p className="text-sm mt-2">
            By signing up, you agree to the{" "}
            <Link href="#" className="text-blue-400 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-8">
        {/* Sol Kısım Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={"/images/tkm225-300x50.png"} alt="Logo" width={300} height={300} />
          <div className="text-sm text-gray-400 mt-2">
            © 2025 <span className="text-yellow-400">TKM</span>. All Rights Reserved.
          </div>
        </div>

        {/* Orta Kısım Açıklama */}

        {/* Sosyal Medya */}
        <div className="flex gap-4">
          <Link href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition">
            <Facebook size={18} />
          </Link>
          <Link href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition">
            <Instagram size={18} />
          </Link>
          <Link href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition">
            <Twitter size={18} />
          </Link>
          <Link href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition">
            <Youtube size={18} />
          </Link>
        </div>
      </div>

      {/* Yukarı Çık Butonu */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-white text-black rounded-full p-5 hover:bg-gray-200 transition shadow-2xl border border-black"
      >
        ↑
      </button>
    </footer>
  );
}
