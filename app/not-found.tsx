// /app/not-found.tsx
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0c23] text-white text-center px-6">
      {/* Illustration */}
      <div className="mb-8">
        <Image
          src="/images/9214833-removebg-preview.png" // buraya kendi görsel yolunu koy
          alt="404 Illustration"
          width={350}
          height={300}
          className="mx-auto"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Sayfa Bulunamadı</h1>

      {/* Description */}
      <p className="text-gray-400 max-w-md mb-8">
        Aradığınız sayfa mevcut değil ya da taşınmış olabilir. Ana sayfaya dönerek gezinmeye devam edebilirsiniz.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-6 py-3 rounded-lg"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
