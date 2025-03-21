import React from "react";
import HeroSectionImage from "./HeroSectionImage";
import HeroSectionCaption from "./HeroSectionCaption";

export default function HeroSection() {
  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-4">
      <HeroSectionImage />
      <HeroSectionCaption />
    </section>
  );
}
