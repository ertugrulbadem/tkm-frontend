import { Building2, Factory, Users, BarChart3 } from "lucide-react";

export default function CompanyOverview() {
  const stats = [
    {
      title: "Yılların Tecrübesi",
      value: "43",
      description: "1982 yılından beridir endüstriyel üretim ve teknoloji alanında liderliğimizi sürdürüyoruz.",
      icon: Building2,
    },
    {
      title: "Mutlu Müşteriler",
      value: "50+",
      description:
        "50’den fazla ülkede projelerimizi başarıyla tamamladık ve müşterilerimizin güvenini kazandık.",
      icon: Factory,
    },
    {
      title: "Toplam Çalışan",
      value: "100+",
      description:
        "Projelerimizde doğrudan ve dolaylı olarak görev alan 100’den fazla yetkin çalışanımız bulunuyor",
      icon: Users,
    },
    {
      title: "Yenilikçi Çözümler",
      value: "200+",
      description: "200’den fazla projede uyguladığımız yenilikçi makine çözümleriyle fabrikaların geleceğini inşa ediyoruz.",
      icon: BarChart3,
    },
  ];

  return (
    <section
      className="w-full px-10 py-20 bg-[#062b3b]"
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
        borderRadius: "12px",
      }}
    >
      {/* Top Text Section */}
      <div className="max-w-3xl mb-14">
        <h2 className="md:text-5xl text-2xl font-bold leading-tight text-white mb-6">
          Başarılarımız ve Gücümüz
        </h2>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-wrap justify-between items-stretch gap-6">
        {stats.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <div
              key={i}
              className="relative overflow-hidden bg-white text-black w-full sm:w-[48%] lg:w-[23%] p-8 flex flex-col justify-between shadow-sm rounded-xl border border-blue-900"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
              }}
            >
              <div>
                <p className="font-semibold text-lg mb-4">{item.title}</p>
                <div className="flex items-center justify-between">
                  <IconComponent className="w-10 h-10 text-blue-800" />
                  <p className="text-5xl font-bold">{item.value}</p>
                </div>
              </div>
              <p className="text-sm mt-6 opacity-80 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
