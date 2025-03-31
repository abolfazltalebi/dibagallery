import arrow from "@/assets/images/icons/arrow.svg";
import line from "@/assets/images/icons/line.svg";
export default function TitleSection(props) {
  const { title, caption } = props;
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-4">
        <img loading="lazy" src={arrow} alt="" />
        <img loading="lazy" src={line} alt="" />
      </div>
      <h2 className="text-[#E58411] font-medium text-2xl md:text-4xl capitalize">
        {title}
      </h2>
      <p className="text-sm text-gray-300">{caption}</p>
    </div>
  );
}
