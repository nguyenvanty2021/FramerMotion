// import "./styles5.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

export default function AppV7() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="box"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 13,
        stiffness: 150,
        restDelta: 0.001,
      }}
    />
  );
}
