import aboutpage from "@/assets/images/aboutpage.webp";

export default function AboutUsImage() {
  return (
    <section className="space-y-6 my-6 container">
      <h2 className="text-center md:text-3xl font-bold">
        Diba Jewelry Gallery: A Timeless Expression of Elegance and
        Craftsmanship
      </h2>
      <img src={aboutpage} loading="lazy" className="rounded-4xl" alt="" />
    </section>
  );
}
