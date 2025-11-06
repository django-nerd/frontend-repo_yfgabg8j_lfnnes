import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Dasar Pemrograman Python",
    level: "Beginner",
    price: 199000,
    image: "Python",
    tags: ["Logic", "Data Types", "Loops"],
  },
  {
    title: "UI/UX Design untuk Pemula",
    level: "Beginner",
    price: 229000,
    image: "UI/UX",
    tags: ["Figma", "Wireframe", "Prototype"],
  },
  {
    title: "Machine Learning Dasar",
    level: "Intermediate",
    price: 299000,
    image: "ML",
    tags: ["Numpy", "Pandas", "Sklearn"],
  },
  {
    title: "Web Development dengan React",
    level: "Intermediate",
    price: 279000,
    image: "React",
    tags: ["Components", "Hooks", "API"],
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#6b4f1d]">Kursus Pilihan</h2>
            <p className="text-[#8f6a26]">Materi terupdate sesuai kebutuhan industri</p>
          </div>
          <a href="#" className="text-sm text-[#8f6a26] hover:text-[#6b4f1d]">Lihat semua</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
