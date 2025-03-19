import herosection from "@/assets/images/herosection.webp";
export default function Home() {
  return (
    <section className="">
      <div className="container grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-4">
        <div className="flex items-center justify-center">
          <img src={herosection} className="h-[450px] md:h-[550px]" alt="" />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-medium">
            Simple & Elegant
          </h2>
          <p className="text-gray-600 text-sm leading-normal">
            Exquisite adornments for every occasion, Crafted with precision and
            passion. Elegance and glamour in every design, Indulge in luxury,
            make every moment sublime.
          </p>
          <button className="px-8 py-3 rounded-[50px_50px_50px_0px] bg-[#FFF4E9] text-sm capitalize">
            shop collection
          </button>
        </div>
      </div>
    </section>
  );
}
