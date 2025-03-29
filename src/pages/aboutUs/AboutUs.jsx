import ScrollAnimation from "../../components/ScrollAnimation";
import AboutUsCaptionOne from "./AboutUsCaptionOne";
import AboutUsCaptionTwo from "./AboutUsCaptionTwo";
import AboutUsImage from "./AboutUsImage";
export default function AboutUs() {
  return (
    <ScrollAnimation 
     initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <AboutUsImage />
      <AboutUsCaptionOne />
      <AboutUsCaptionTwo />
    </ScrollAnimation>
  );
}
