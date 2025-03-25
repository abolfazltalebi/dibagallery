import ScrollAnimation from "../../../components/ScrollAnimation";
import TitleSection from "../../../components/TitleSection";
import CategoriesItems from "./CategoriesItems";

export default function Categories() {
  return (
    <section className="container space-y-6">
      <ScrollAnimation
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TitleSection title={"categories"} caption={"Category diba gallery"} />
      </ScrollAnimation>
      <ScrollAnimation
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CategoriesItems />
      </ScrollAnimation>
    </section>
  );
}
