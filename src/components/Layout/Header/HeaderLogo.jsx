import headerLogo from "@/assets/images/icons/headerLogo.svg";
export default function HeaderLogo() {
  return (
    <div className="flex items-center gap-1">
      <img loading="lazy" src={headerLogo} alt="" />
    </div>
  );
}
