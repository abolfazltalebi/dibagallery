import ScrollAnimation from "../../../components/ScrollAnimation";
import TitleSection from "../../../components/TitleSection";
import TrendingProductItems from "./TrendingProductItems";
export default function TrendingProducts() {
  return (
    <section className="space-y-5 container">
      <ScrollAnimation
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TitleSection
          title={"trending products"}
          caption={"trending product diba gallery"}
        />
      </ScrollAnimation>
      <ScrollAnimation
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TrendingProductItems />
      </ScrollAnimation>
    </section>
  );
}
