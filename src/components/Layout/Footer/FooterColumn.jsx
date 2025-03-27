export default function FooterColumn(fColumn) {
  const { title, items } = fColumn;
  return (
    <div>
      <h3 className="font-bold text-lg mb-3">{title}</h3>
      <ul className="relative">
        {items.map((item, index) => (
          <li key={item.id} className="flex items-center gap-3 relative">
            <div className="w-2 h-2 bg-[#ffa41b] rounded-full relative">
              {index !== items.length - 1 && (
                <div className="absolute left-[3px] top-full w-[2px] h-7 bg-white"></div>
              )}
            </div>
            <a
              href={item.link}
              className="transition-all duration-300 hover:bg-[#ffa41b]  p-2 rounded-2xl text-sm sm:text-sm"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
