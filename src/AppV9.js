import * as React from "react";

import { motion, useTime, useTransform } from "framer-motion";

// import "./styles7.css";

export const AppV9 = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <div className="example-container">
      <motion.div style={{ rotate }} />
    </div>
  );
};
