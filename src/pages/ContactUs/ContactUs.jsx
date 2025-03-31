import React from "react";
import MapComponent from "../../components/MapComponent";
import ScrollAnimation from "../../components/ScrollAnimation";
import ContactUsCaption from "./ContactUsCaption";

export default function ContactUs() {
  return (
    <ScrollAnimation
      initial={{ opacity: 0, translateY: 100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 container">
        <MapComponent />
        <ContactUsCaption />
      </section>
    </ScrollAnimation>
  );
}
