import React from "react";
import HeroSectionImage from "./HeroSectionImage";
import HeroSectionCaption from "./HeroSectionCaption";
import ScrollAnimation from "../../../components/ScrollAnimation";

export default function HeroSection() {
  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-4">
      <ScrollAnimation
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroSectionImage />
      </ScrollAnimation>
      <ScrollAnimation
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroSectionCaption />
      </ScrollAnimation>
    </section>
  );
}
