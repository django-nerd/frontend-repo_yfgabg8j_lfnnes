import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#c8a45d]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-[#c8a45d]" aria-hidden />
          <span className="font-semibold text-lg tracking-tight text-[#6b4f1d]">Itera Courses</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm text-[#6b4f1d] hover:text-[#8f6a26] transition">Beranda</a>
          <a href="#courses" className="text-sm text-[#6b4f1d] hover:text-[#8f6a26] transition">Kursus</a>
          <a href="#contact" className="text-sm text-[#6b4f1d] hover:text-[#8f6a26] transition">Kontak</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-md border border-[#c8a45d]/40 px-3 py-2 text-sm text-[#6b4f1d] hover:bg-[#fff7e6] transition">
            <ShoppingCart size={18} />
            <span>Keranjang</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-[#c8a45d] px-3 py-2 text-sm font-medium text-white hover:bg-[#b89247] transition">
            <User size={18} />
            <span>Masuk</span>
          </button>
        </div>
      </div>
    </header>
  );
}
