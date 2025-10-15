"use client";

import React, { Suspense } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Navbar from "@/components/navbar";
import Image from "next/image";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} heightClass="h-[21rem]" widthClass="w-[34rem]" />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl ml-4 pl-4 text-xl md:text-7xl font-bold text-white font-sans -mt-20">
        Get to know CodeCraft
      </h2>
      <div className="mt-20 pl-4">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              priority={false}
              loading="lazy"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "SpaceHive",
    title: "Online events space booking platform",
    src: "/images/4.png",
    href: "https://space-hive.vercel.app/", // TODO: replace with your link
    content: <DummyContent />,
  },
  {
    category: "CodeCraft",
    title: "Free study material",
    src: "/images/two.jpg",
    href: "https://atharvakhot1.github.io/CodeCraft/", // TODO: replace with your link
    content: <DummyContent />,
  },
  {
    category: "Fitzy",
    title: "Online Fitness platform",
    src: "/images/three.png",
    href: "https://same-te2st92ipmf-latest.netlify.app/", // TODO: replace with your link
    content: <DummyContent />,
  },
  {
    category: "NismWALA",
    title: "Online course platform",
    src: "/images/one.png",
    href: "https://dribbble.com/shots/25855208-Nismwala-Online-Learning-Platform", // TODO: replace with your link
    content: <DummyContent />,
  },
  // {
  //   category: "Branding",
  //   title: "Complete Brand Identity",
  //   src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
  //   content: <DummyContent />,
  // },
  // {
  //   category: "Digital Marketing",
  //   title: "Social Media & SEO",
  //   src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
  //   content: <DummyContent />,
  // },
];

const LoadingFallback = () => (
  <div className="w-full h-full py-20 flex items-center justify-center">
    <div className="text-xl md:text-3xl font-bold text-neutral-200">
      Loading Featured Projects...
    </div>
  </div>
);

export default function FeaturedProjects() {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <Suspense fallback={<LoadingFallback />}>
          <AppleCardsCarouselDemo />
        </Suspense>
      </div>
    </div>
  );
}
