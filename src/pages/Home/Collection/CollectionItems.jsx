import collection1 from "@/assets/images/collection-1.webp";
import collection2 from "@/assets/images/collection-2.webp";
import collection3 from "@/assets/images/collection-3.webp";
import collection4 from "@/assets/images/collection-4.webp";
import CollectionCard from "../../../components/CollectionCard";
export default function CollectionItems() {
  const collection = [
    { id: 1, name: "ring", collectionImage: collection1 },
    { id: 2, name: "earings", collectionImage: collection2 },
    { id: 3, name: "necklace", collectionImage: collection3 },
    { id: 4, name: "bracelets", collectionImage: collection4 },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {
        collection.map((Citem)=>{
          return(
            <CollectionCard key={Citem.id} {...Citem}/>
          )
        })
      }
    </div>
  );
}
