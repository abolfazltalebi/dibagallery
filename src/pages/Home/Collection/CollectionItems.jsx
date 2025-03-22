import CollectionCard from "../../../components/CollectionCard";
import { collection } from "../../../Constant/Collection";
export default function CollectionItems() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {collection.map((Citem) => {
        return <CollectionCard key={Citem.id} {...Citem} />;
      })}
    </div>
  );
}
