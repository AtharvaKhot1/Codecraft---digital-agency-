import Image from "next/image";
import React from "react";

import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const logos: { image: string }[] = [
  // {
  //   image: "/logo/logoipsum-248.svg",
  // },
  // {
  //   image: "/logo/logoipsum-245.svg",
  // },
  // {
  //   image: "/logo/logoipsum-225.svg",
  // },
  // {
  //   image: "/logo/logoipsum-248.svg",
  // },
  // {
  //   image: "/logo/logoipsum-249.svg",
  // },
  // {
  //   image: "/logo/stripelogo.png",
  // },
];

const Brands = () => {
  return (
    <div>
      <div className=" p-4   mx-auto relative z-10  w-full pt-30 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          We Want to  <br /> Help You Grow
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          Whether you&apos;re a small business just starting out or an established enterprise, our goal is to make digital marketing accessible and affordable for everyone. We believe every business deserves a chance to grow online, and we&apos;re here to support you every step of the way.
        </p>

        <div className="grid grid-cols-3  items-center justify-center  mx-auto md:w-3/5 cursor-pointer">
          {logos.map((logo, i) => (
            <div key={i} className="p-4 md:p-20">
              <Image
                priority
                src={logo.image}
                width={500}
                height={500}
                alt="logo"
                className="w-full h-auto max-w-full rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4  px-8  text-center text-white  ",
            font.className
          )}
        >
          &quot;We got rid of nearly a dozen different tools because of what
          codecraft does for us.&quot;
        </div> */}

        {/* <div className="items-center flex justify-center flex-col text-white">
          <Image
            src="/images/Logo codecraft.png"
            alt="logo"
            width={600}
            height={600}
            className="pt-2 xl:pt-0  w-10 xl:w-14 "
          />

          <div className=" text-center">
            <div className="text-sm  font-medium pt-4">Carlos Hernandez</div>
            <div className="text-sm">Marketing Director, Palium Software</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Brands;
