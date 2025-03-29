import ScrollAnimation from "../../../components/ScrollAnimation";
import TitleSection from "../../../components/TitleSection";
import CollectionItems from "./CollectionItems";

export default function Collection() {
  return (
    <section className="container space-y-6" id="collection">
      <ScrollAnimation
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TitleSection
          title={"collection"}
          caption={"Find all the jewellery you will need here."}
        />
      </ScrollAnimation>
      <ScrollAnimation
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CollectionItems />
      </ScrollAnimation>
    </section>
  );
}
