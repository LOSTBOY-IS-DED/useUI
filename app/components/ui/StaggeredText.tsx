"use client";
import { motion } from "framer-motion";

type StaggeredTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
};

const defaultAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function StaggeredText({
  text,
  el: Wrapper = "p",
  className,
  once,
}: StaggeredTextProps) {
  return (
    <section className="container h-screen w-screen mx-auto">
      <div className="flex justify-center items-center top-16 h-full">
        <h1 className="text-8xl uppercase font-extrabold">
          <Wrapper className={className}>
            <span className="sr-only">
              {" "}
              // ain't able to see this visually only for screen readers
              {text}
            </span>
            <motion.span
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
              className="aria-hidden:"
            >
              {Array.from(text.replace(/ /g, "\u00A0")).map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={defaultAnimation}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </Wrapper>
        </h1>
      </div>
    </section>
  );
}

// 1st step : split the words in individual letters , but preserve accessibililty
// step 2 : now import motion from framer motion and change the span to motion.span
// step 3 : now using named animation and controlling the state from parent we can add transition named staggeredChildren

// Problems faced :
// 1. not getting the space between the letters
// fix :
// {text.split('').map(char =>
//                 <motion.span className="inline-block" variants={defaultAnimation} >
//                     {char}
//                 </motion.span>)}

// replaced this by [...text.replace(/ /g, '\u00A0')]
