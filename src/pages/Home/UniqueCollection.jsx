import Bdesktop from '@/assets/images/banners/banner_desktop.webp';
import Bmobile from '@/assets/images/banners/banner_mobile.webp';
import { Link } from 'react-router-dom';
export default function UniqueCollection() {
  return (
    <section className="container">
      <Link className="md:inline hidden">
        <img loading="lazy" src={Bdesktop} alt="banner desktop" />
      </Link>
      <Link className=" md:hidden">
        <img loading="lazy" src={Bmobile} alt="banner mobile" />
      </Link>
    </section>
  );
}
