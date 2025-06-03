import { motion } from "framer-motion";
import React from "react";

export default function ArrayElement({ value, style, animateProps }) {
  return (
    <motion.div
      className="array-element"
      style={{
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc",
        margin: 2,
        ...style,
      }}
      animate={animateProps}
      transition={{ duration: 0.5 }}
    >
      <p>{value}</p>
    </motion.div>
  );
}
