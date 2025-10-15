import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
        title: "Website Design",
        description:
          "We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
        title: "E-commerce Store",
        description:
          "From small stores to large online retailers, we have the expertise to build a store that will help you grow your business.",
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
        title: "Authentication",
        description:
          "Secure authentication solutions for your website or app. We use the latest technology to keep your data safe.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
        title: "SEO (Search Engine Optimization)",
        description:
          "We help your website rank higher in search results, driving organic traffic to your business. Our strategies are designed to connect you with customers who are actively looking for your services.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600" /></div>,
        title: "Web Hosting & Security",
        description:
          "We provide fast, secure, and reliable hosting tailored for your website's needs. We manage the technical side, ensuring your site is always online and protected from threats.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
        title: "Support",
        description:
          "We offer support for all our clients. We are here to help you with any issues or questions you may have.",
     
      },
];
