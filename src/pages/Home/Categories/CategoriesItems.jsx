import CategoriesCard from "../../../components/CategoriesCard";
import { categories } from "../../../Constant/Categories";

export default function CategoriesItems() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
      {categories.map((category) => {
        return <CategoriesCard key={category.id} {...category} />;
      })}
    </div>
  );
}
