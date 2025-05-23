import { Link } from "react-router-dom";

export default function ProductsCard(Pprops) {
  const { image, name, price } = Pprops;
  return (
    <Link to={"/"}>
      <div className=" backdrop-blur-md rounded-2xl p-3 space-y-6 transition-all duration-300 hover:-translate-y-1.5 group">
        <div>
          <img loading="lazy" src={image} className="rounded-2xl" loading="lazy" alt="" />
        </div>
        <div className="space-y-4">
          <h2 className="font-bold line-clamp-1 text">{name}</h2>
          <p className="text-xs text-justify break-all line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            repellendus, similique, impedit rerum quisquam excepturi hic aut
            sapiente eum animi fugiat asperiores atque ipsam, iusto saepe.
            Inventore minima quos doloribus!
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <button className="bg-[#F3A60D] p-2 rounded-xl capitalize text-xs w-full cursor-pointer transition-all duration-100 group-hover:bg-white group-hover:shadow group-hover:text-[#F3A60D]">
              view product
            </button>
            <span className="text-sm bg-white p-2 rounded-xl hidden sm:inline text-[#F3A60D]">{price}$</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
