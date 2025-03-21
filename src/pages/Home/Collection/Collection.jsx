import TitleSection from "../../../components/TitleSection";
import CollectionItems from "./CollectionItems";

export default function Collection() {
  return (
    <section className="container space-y-6">
        <TitleSection title={"collection"} caption={"Find all the jewellery you will need here."}/>
        <CollectionItems/>
    </section>
  )
}
