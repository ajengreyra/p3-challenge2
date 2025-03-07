"use client";
import Link from "next/link"; 

import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center py-20 bg-gray-100">
      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-600">
        <Image
          src="/profile.jpeg" // Ganti dengan URL atau path gambar kamu
          alt="Profile Picture"
          width={192}
          height={192}
          className="object-cover"
        />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold mt-6 text-gray-800">Ajeng Reyra Prameswari</h1>
      <p className="text-lg md:text-xl text-gray-600 mt-2">Mahasiswa Sistem Informasi</p>
      <p className="max-w-2xl text-gray-500 mt-4 px-6">
      Antusias dalam membangun aplikasi web yang ramah pengguna, skalabel, dengan fokus pada desain yang elegan dan antarmuka yang intuitif. Berpengalaman dalam teknologi web modern seperti React, Next.js, dan Tailwind CSS.
      </p>
      <div className="mt-6">
   <Link
      href="/contact"
      className="px-6 py-2 text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-300"
    >
    Hubungi Saya
    </Link>
    </div>
    </section>
  );
}
