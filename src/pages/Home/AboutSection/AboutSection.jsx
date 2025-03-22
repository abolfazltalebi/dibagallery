import TitleSection from "../../../components/TitleSection";
import AboutSectionCaption from "./AboutSectionCaption";
import AboutSectionImage from "./AboutSectionImage";

export default function AboutSection() {
  return (
    <section className="space-y-4 container">
      <TitleSection
        title={"about diba"}
        caption={"about diba gallery jewellery."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
        <AboutSectionCaption />
        <AboutSectionImage />
      </div>
    </section>
  );
}
