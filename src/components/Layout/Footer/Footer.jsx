import React from "react";
import FooterColumn from "./FooterColumn";
import { FooterItems } from "../../../Constant/FooterItems";
import FooterTitle from "./FooterTitle";
export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6">
      <FooterTitle />
      <div className="container mx-auto grid grid-cols-2 sm:grid-col-4 md:grid-cols-5 gap-6">
        <FooterColumn title="Shop" items={FooterItems.shop} />
        <FooterColumn title="Who We Are" items={FooterItems.whoWeAre} />
        <FooterColumn
          title="Customer Service"
          items={FooterItems.customerService}
        />
        <FooterColumn title="Product Care" items={FooterItems.productCare} />
      </div>
    </footer>
  );
}
