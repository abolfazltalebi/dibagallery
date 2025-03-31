import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation";

export default function CategoriesCard(categories) {
  const { imageCategories, categoriesName } = categories;

  return (
    <ScrollAnimation
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Link to={`/categories/${categoriesName}`} className="space-y-5">
        <div>
          <img loading="lazy" src={imageCategories} alt="" />
        </div>
        <h3 className="font-bold capitalize text-center">{categoriesName}</h3>
      </Link>
    </ScrollAnimation>
  );
}
