import Bdesktop from '@/assets/images/banners/banner_desktop.webp';
import Bmobile from '@/assets/images/banners/banner_mobile.webp';
export default function UniqueCollection() {
  return (
    <section className="container">
      <div className="md:inline hidden">
        <img src={Bdesktop} alt="banner desktop" />
      </div>
      <div className=" md:hidden">
        <img src={Bmobile} alt="banner mobile" />
      </div>
    </section>
  );
}
