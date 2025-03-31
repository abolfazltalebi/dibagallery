import { FaInstagram, FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import footerLogo from "@/assets/images/icons/footerLogo.svg";

export default function FooterTitle() {
  return (
    <div className="space-y-4 flex flex-col items-center my-6">
      <div>
        <img loading="lazy" src={footerLogo} alt="" />
      </div>
      <div className="flex items-center justify-center gap-4 group">
        <FaInstagram className="icon-footer" />
        <FaTelegram className="icon-footer" />
        <FaSquareXTwitter className="icon-footer" />
        <IoLogoYoutube className="icon-footer" />
      </div>
    </div>
  );
}
