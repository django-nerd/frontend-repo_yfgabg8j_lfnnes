export default function Hero() {
  return (
    <section id="home" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c8a45d]/40 px-3 py-1 text-xs text-[#6b4f1d] mb-4">
            ✨ Belajar dari praktisi industri
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#6b4f1d] leading-tight">
            Tingkatkan Kariermu dengan Kursus Berkualitas ala ITERA
          </h1>
          <p className="mt-4 text-[#8f6a26] max-w-xl">
            Pilih kursus terbaik dengan kurikulum terstruktur, mentor berpengalaman, dan proyek nyata.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#courses" className="inline-flex items-center rounded-md bg-[#c8a45d] px-5 py-3 text-white font-medium hover:bg-[#b89247] transition">Jelajahi Kursus</a>
            <a href="#benefits" className="inline-flex items-center rounded-md border border-[#c8a45d]/50 px-5 py-3 text-[#6b4f1d] hover:bg-[#fff7e6] transition">Mengapa Kami?</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#fff3d1] via-white to-[#ffe9a8] border border-[#c8a45d]/30 shadow-sm" />
        </div>
      </div>
    </section>
  );
}
