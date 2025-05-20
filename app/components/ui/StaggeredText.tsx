
// 1st step : split the words in individual letters , but preserve accessibililty
// step 2 : now import motion from framer motion and change the span to motion.span
// step 3 : now using named animation and controlling the state from parent we can add transition named staggeredChildren

// Problems faced :
// 1. not getting the space between the letters
// fix :
    // {text.split(" ").map((word, i) => (
    //             <span key={i} className="inline-block mr-2">
    //               {Array.from(word).map((char, j) => (
    //                 <motion.span
    //                   key={`${i}-${j}`}
    //                   className="inline-block"
    //                   variants={defaultAnimation}
    //                 >
    //                   {char}
    //                 </motion.span>
    //               ))}
    //               {/* Add actual space between words */}
    //               <span className="inline-block">&nbsp;</span>
    //             </span>
    //           ))}






"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type StaggeredTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
};

const defaultAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  transition : { duration: 0.1 },
};

export default function StaggeredText({
  text,
  el: Wrapper = "p",
  className,
  once,
}: StaggeredTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  return (
    <section className="container h-screen w-screen mx-auto">
      <div className="flex justify-center items-center top-16 h-full text-center">
        <h1 className="text-6xl md:text-8xl uppercase font-extrabold leading-tight">
          <Wrapper className={className}>
            <span className="sr-only">{text}</span>
            <motion.span
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ staggerChildren: 0.1 }}
              aria-hidden
            >
              {text.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-2">
                  {Array.from(word).map((char, j) => (
                    <motion.span
                      key={`${i}-${j}`}
                      className="inline-block"
                      variants={defaultAnimation}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {/* Add actual space between words */}
                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}

            </motion.span>
          </Wrapper>
        </h1>
      </div>
    </section>
  );
}


