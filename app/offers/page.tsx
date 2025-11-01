"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OffersPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const testimonials = [
    {
      text: "DataSense Analytics'in öngörücü modelleme hizmeti, belirsiz zamanlarda bize yol gösterdi ve piyasa değişimlerinin önünde olmamıza yardımcı oldu. Başarımız için vazgeçilmez bir müttefik.",
      author: "Candice Wu",
      position: "Direktör, Nexus Ventures"
    },
    {
      text: "Ekip profesyonel ve sonuç odaklı. Projemizi zamanında teslim ettiler ve beklentilerimizin ötesinde bir kalite sundular. Kesinlikle tavsiye ediyoruz.",
      author: "Michael Chen",
      position: "CEO, TechVision Inc."
    },
    {
      text: "Müşteri hizmetleri mükemmel, her adımda yanımızda oldular. İş süreçlerimizi optimize ettiler ve verimliliğimizi %40 artırdık.",
      author: "Sarah Johnson",
      position: "COO, Global Solutions"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('Form gönderildi:', formData);
    alert('Mesajınız başarıyla gönderildi!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white border-b">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sol Taraf - İstatistikler ve Testimonial */}
        <div className="lg:w-1/2 relative overflow-hidden bg-black text-white">
          <img 
            src="/images/light-leak-effect-black-background.jpg" 
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          
          <div className="relative z-10 p-8 lg:p-16 flex flex-col justify-between min-h-screen mt-20">
            {/* Üst Kısım - İstatistikler */}
            <div>
              <div className="mb-16">
                <h1 className="text-7xl lg:text-8xl font-bold mb-2">500+</h1>
                <p className="text-gray-300 text-lg">Müşteri</p>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-16">
                <div>
                  <h2 className="text-5xl font-bold mb-2 text-cyan-400">1000+</h2>
                  <p className="text-gray-300">Üretilen Makine</p>
                </div>
                <div>
                  <h2 className="text-5xl font-bold mb-2 text-cyan-400">1Milyon +</h2>
                  <p className="text-gray-300">Makinemiz ile Üretilen Ürün</p>
                </div>
                <div>
                  <h2 className="text-5xl font-bold mb-2 text-cyan-400">100+</h2>
                  <p className="text-gray-300">Global Müşteriler</p>
                </div>
                <div>
                  <h2 className="text-5xl font-bold mb-2 text-cyan-400">40+</h2>
                  <p className="text-gray-300">Deneyim</p>
                </div>
              </div>
            </div>

            {/* Alt Kısım - Testimonial */}
            <div className="bg-[#0b0c23] bg-opacity-50 backdrop-blur-sm rounded-2xl p-8">
              <div className="mb-6 min-h-[120px]">
                <p className="text-gray-200 text-lg leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonials[currentTestimonial].author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonials[currentTestimonial].author}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-gray-600 hover:border-cyan-400 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <span className="text-gray-400 mx-2">
                    {String(currentTestimonial + 1).padStart(2, '0')}/{String(testimonials.length).padStart(2, '0')}
                  </span>
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-gray-600 hover:border-cyan-400 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Taraf - İletişim Formu */}
        <div className="lg:w-1/2 bg-[#0b0c23] p-8 lg:p-16 flex items-center text-white">
          <div className="w-full max-w-xl mx-auto mt-20">
            <h2 className="text-5xl font-bold mb-4">Teklif Alın</h2>
            <p className=" mb-12 text-lg">
              Sorularınız mı var veya yardıma mı ihtiyacınız var? Bize ulaşın, ekibimiz size hızlıca geri dönüş yapacaktır.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  Ad <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  placeholder="Adınızı giriniz"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  E-posta <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-medium mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  placeholder="Mesajınızın konusu"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-2">
                  İleti
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                  placeholder="Mesajınızı buraya yazınız..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Mesaj Gönder
                <ChevronRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;