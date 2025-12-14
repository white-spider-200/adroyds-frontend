import { motion } from "framer-motion";

const slideSkew = {
  hidden: { opacity: 0, x: -100, skewX: 15 },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const SplitText = ({ children, className }) => (
  <motion.h2
    className={className}
    variants={slideSkew}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
  >
    {children}
  </motion.h2>
);
