export default function CourseCard({ title, level, price, image, tags = [] }) {
  return (
    <div className="group rounded-xl border border-[#c8a45d]/30 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="h-40 w-full bg-gradient-to-br from-[#fff3d1] to-[#ffe9a8] flex items-center justify-center">
        <span className="text-[#a1792f] font-semibold">{image || "Preview"}</span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wide text-[#a1792f] bg-[#fff7e6] px-2 py-1 rounded">{level}</span>
          <span className="text-sm font-semibold text-[#6b4f1d]">Rp {price.toLocaleString("id-ID")}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-[#6b4f1d]">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs text-[#8f6a26] bg-[#fff3d1]/60 border border-[#c8a45d]/20 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
        <button className="mt-4 w-full rounded-md bg-[#c8a45d] px-4 py-2 text-white text-sm font-medium hover:bg-[#b89247] transition">
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
}
