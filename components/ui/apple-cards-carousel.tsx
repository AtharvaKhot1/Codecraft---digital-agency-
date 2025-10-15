"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export const Card = ({
  card,
  index,
  layout,
  heightClass,
  widthClass,
}: {
  card: {
    category: string;
    title: string;
    src: string;
    content: React.ReactNode;
    href?: string;
  };
  index: number;
  layout: boolean;
  heightClass?: string;
  widthClass?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
            <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      onClick={() => {
        if (card.href) {
          window.open(card.href, "_blank", "noopener,noreferrer");
        }
      }}
      className={`relative ${heightClass ?? "h-[20rem]"} ${widthClass ?? "w-[28rem]"} shrink-0 overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800 ${
        layout ? "cursor-grab active:cursor-grabbing" : ""
      } ${card.href ? "cursor-pointer" : ""}`}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-2xl dark:bg-neutral-900"
      >
        <div
          style={{
            transform: "translateZ(75px)",
          }}
          className="space-y-2"
        >
          <p className="text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400">
            {card.category}
          </p>
          <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            {card.title}
          </p>
        </div>
      </div>
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900"
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="rounded-xl object-contain"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            transform: "translateZ(100px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 rounded-xl bg-black/50 backdrop-blur-sm"
        >
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-sm font-semibold uppercase">
                {card.category}
              </p>
              <p className="text-xl font-bold">{card.title}</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export const Carousel = ({
  items,
}: {
  items: React.ReactNode[];
}) => {
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        const scrollWidth = carousel.current.scrollWidth;
        const offsetWidth = carousel.current.offsetWidth;
        setWidth(scrollWidth - offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    return () => window.removeEventListener('resize', updateWidth);
  }, [items]);

  return (
    <motion.div
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
      className="cursor-grab overflow-hidden"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: width > 0 ? -width : -1000 }}
        dragElastic={0.1}
        dragMomentum={false}
        className="flex gap-4"
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{ 
          width: "max-content",
          minWidth: "100%"
        }}
      >
        {items}
      </motion.div>
    </motion.div>
  );
};