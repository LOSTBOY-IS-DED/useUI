"use client";

import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

export const RevealLinks: FC = () => {
  return (
    <section className="grid place-content-center gap-2 bg-black px-8 py-24 text-black">
      <FlipLink href="#">Aditi</FlipLink>
      <FlipLink href="#">Neha</FlipLink>
      <FlipLink href="#">Blair</FlipLink>
      <FlipLink href="#">Ishika</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  href: string;
  children: string; // since you're using `split("")`, children must be a string
}

const FlipLink: FC<FlipLinkProps> = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{ lineHeight: 0.75 }}
    >
      <div className="text-white">
        {children.split("").map((l, i) => (
          <motion.span
            key={`top-${i}`}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className=" text-white absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={`bottom-${i}`}
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
