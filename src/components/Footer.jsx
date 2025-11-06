export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-[#c8a45d]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-[#6b4f1d] font-semibold">Itera Courses</h4>
            <p className="text-[#8f6a26] text-sm mt-2">Platform belajar online dengan fokus pada keterampilan praktis dan proyek nyata.</p>
          </div>
          <div>
            <h4 className="text-[#6b4f1d] font-semibold">Tautan</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#courses" className="text-[#8f6a26] hover:text-[#6b4f1d]">Kursus</a></li>
              <li><a href="#benefits" className="text-[#8f6a26] hover:text-[#6b4f1d]">Fitur</a></li>
              <li><a href="#contact" className="text-[#8f6a26] hover:text-[#6b4f1d]">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#6b4f1d] font-semibold">Newsletter</h4>
            <p className="text-[#8f6a26] text-sm mt-2">Dapatkan info diskon dan kelas terbaru.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" placeholder="Email Anda" className="flex-1 rounded-md border border-[#c8a45d]/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c8a45d]"/>
              <button type="submit" className="rounded-md bg-[#c8a45d] px-4 py-2 text-white text-sm font-medium hover:bg-[#b89247]">Kirim</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#c8a45d]/20 text-center text-sm text-[#8f6a26]">
          © {new Date().getFullYear()} Itera Courses. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
