import HeroSection from "./HeroSection/HeroSection";
import TitleSection from "../../components/TitleSection";
import Collection from "./Collection/Collection";
import AboutSection from "./AboutSection/AboutSection";
import Categories from "./Categories/Categories";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Collection/>
      <AboutSection/>
      <Categories/>
    </>
  );
}
