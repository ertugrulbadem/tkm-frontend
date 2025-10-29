// /app/contact/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [forlgata, setForlgata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForlgata({ ...forlgata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mesajınız gönderildi!");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white my-10">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-3">Bizimle iletişime geçin</h2>
        <p className="text-gray-500 mb-8">
          Yardıma mı ihtiyacınız var? Bizimle iletişime geçin, en kısa sürede dönüş yapalım.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full">
              <label className="text-sm text-gray-600 font-medium">Ad *</label>
              <input
                required
                type="text"
                name="firstName"
                value={forlgata.firstName}
                onChange={handleChange}
                placeholder="Adınızı girin"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="w-full">
              <label className="text-sm text-gray-600 font-medium">Soyad *</label>
              <input
                required
                type="text"
                name="lastName"
                value={forlgata.lastName}
                onChange={handleChange}
                placeholder="Soyadınızı girin"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600 font-medium">E-posta *</label>
            <input
              required
              type="email"
              name="email"
              value={forlgata.email}
              onChange={handleChange}
              placeholder="ornek@mail.com"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 font-medium">Konu *</label>
            <input
              required
              type="text"
              name="subject"
              value={forlgata.subject}
              onChange={handleChange}
              placeholder="Konu başlığı"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 font-medium">İleti *</label>
            <textarea
              required
              name="message"
              value={forlgata.message}
              onChange={handleChange}
              rows={5}
              placeholder="Mesajınızı yazın..."
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Gönder
          </button>
        </form>
      </div>

      {/* Right Side - Image and Description */}
      <div className="w-full lg:w-1/2 bg-gray-50 relative flex flex-col justify-end rounded-t-3xl lg:rounded-lg overflow-hidden min-h-[400px] lg:min-h-auto">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/engineer-cooperation-two-asian-male-female-technician-maintenance-inspect-relay-robot-system-with-tablet-laptop-control-quality-operate-process-work-heavy-industry-40-manufacturing-factory.jpg"
            alt="Contact illustration"
            fill
            priority
            className="object-cover object-center lg:object-left rounded-lg transition-all duration-300"
          />
        </div>

        {/* Logo (Top Left) */}
        <div className="absolute top-6 left-6 z-10">
          <Image
            src="/images/tkm225-300x50.png"
            alt="Logo"
            width={250}
            height={40}
            className="object-contain lg:block hidden"
          />
        </div>

        {/* Bottom Text */}
        <div className="relative bg-gradient-to-t from-black/80 to-transparent text-white p-6 sm:p-8 lg:p-12 mt-auto lg:pl-16">
          <h3 className="text-xl font-semibold mb-2">TKM</h3>
          <p className="text-sm lg:text-base max-w-lg">
            Fabrikalarınız için etkileyici çözümler üretiyoruz. Üretilge güçlü bir iz bırakmak için
            bizimle iletişime geçin.
          </p>
        </div>
      </div>
    </div>
  );
}
