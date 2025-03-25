import ProductsCard from "../../../components/ProductsCard";
import { ProductsItems } from "../../../Constant/ProductsItems";

export default function TrendingProductItems() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {ProductsItems.map((pItem) => {
        return <ProductsCard key={pItem.id} {...pItem} />;
      })}
    </div>
  );
}
