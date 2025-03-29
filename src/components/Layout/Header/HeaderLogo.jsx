import headerLogo from "@/assets/images/icons/headerlogo.svg";
export default function HeaderLogo() {
  return (
    <div className="flex items-center gap-1">
      <img src={headerLogo} alt="" />
    </div>
  );
}
