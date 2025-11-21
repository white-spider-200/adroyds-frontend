import { motion } from "framer-motion";

const text = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
  }),
};

const letter = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const SplitText = ({ children, className }) => {
  const words = children.split(" ");

  return (
    <motion.h2
      className={className}
      variants={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {words.map((word, i) => (
        <span className="mr-2 inline-block" key={i}>
          {word.split("").map((char, i2) => (
            <motion.span className="inline-block" variants={letter} key={i2}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
};
