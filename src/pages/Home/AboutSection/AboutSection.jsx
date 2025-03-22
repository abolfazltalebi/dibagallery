import ScrollAnimation from "../../../components/ScrollAnimation";
import TitleSection from "../../../components/TitleSection";
import AboutSectionCaption from "./AboutSectionCaption";
import AboutSectionImage from "./AboutSectionImage";

export default function AboutSection() {
  return (
    <section className="space-y-4 container">
      <ScrollAnimation
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TitleSection title={"about diba"} caption={"About diba gallery"} />
      </ScrollAnimation>
      <ScrollAnimation
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <AboutSectionCaption />
          <AboutSectionImage />
        </div>
      </ScrollAnimation>
    </section>
  );
}
