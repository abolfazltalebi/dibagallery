import arrow from "@/assets/images/icons/arrow.svg";
import line from "@/assets/images/icons/line.svg";
export default function TitleSection(props) {
  const { title, caption } = props;
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-4">
        <img src={arrow} alt="" />
        <img src={line} alt="" />
      </div>
      <h2 className="text-[#F3A60D] text-2xl md:text-4xl capitalize">
        {title}
      </h2>
      <p className="text-sm text-gray-600">{caption}</p>
    </div>
  );
}
