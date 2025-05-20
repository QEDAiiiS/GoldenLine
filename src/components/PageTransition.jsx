import React from "react";
import { motion } from "framer-motion";


export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} //start
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}


// * THAT IS A COMPONENT TO MAKE ANIMATION FOR ANY PAGE 
