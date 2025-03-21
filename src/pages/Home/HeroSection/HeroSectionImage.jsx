import herosection from "@/assets/images/herosection.webp";

export default function HeroSectionImage() {
  return (
    <div className="flex items-center justify-center">
      <img src={herosection} className="h-[450px] md:h-[550px]" alt="" />
    </div>
  );
}
