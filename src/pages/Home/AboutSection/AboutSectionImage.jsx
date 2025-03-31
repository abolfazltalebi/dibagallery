import React from "react";
import aboutSection from "@/assets/images/aboutSection.webp";
export default function AboutSectionImage() {
  return (
    <div className="flex items-center justify-center">
      <img loading="lazy" src={aboutSection} className="h-[450px] md:h-[550px]" alt="" />
    </div>
  );
}
