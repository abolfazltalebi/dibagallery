import HeroSection from "./HeroSection/HeroSection";
import Collection from "./Collection/Collection";
import AboutSection from "./AboutSection/AboutSection";
import Categories from "./Categories/Categories";
import UniqueCollection from "./UniqueCollection";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Collection/>
      <AboutSection/>
      <Categories/>
      <UniqueCollection/>
      <TrendingProducts/>
    </>
  );
}
