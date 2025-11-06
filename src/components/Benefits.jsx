import { ShieldCheck, GraduationCap, Clock, Wallet } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Kurikulum Terstruktur",
    desc: "Belajar step-by-step dari dasar hingga mahir."
  },
  {
    icon: ShieldCheck,
    title: "Sertifikat Resmi",
    desc: "Dapatkan sertifikat sebagai bukti kompetensi."
  },
  {
    icon: Clock,
    title: "Akses Seumur Hidup",
    desc: "Belajar kapan saja tanpa batasan waktu."
  },
  {
    icon: Wallet,
    title: "Harga Terjangkau",
    desc: "Investasi terbaik untuk karier masa depan."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-[#fffaf0] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#6b4f1d] mb-8">Mengapa Memilih Kami?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-[#c8a45d]/30 bg-white p-5 shadow-sm">
              <div className="w-10 h-10 rounded-md bg-[#fff3d1] flex items-center justify-center text-[#a1792f] mb-3">
                <Icon size={20} />
              </div>
              <h3 className="text-[#6b4f1d] font-semibold">{title}</h3>
              <p className="text-[#8f6a26] text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
