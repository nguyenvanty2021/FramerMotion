import "./App.css";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};
const buttonVariants = {
  visible: {
    x: [0, -20, 20, -20, 20, 0],
    transition: {
      delay: 2,
    },
  },
  hover: {
    // scale: 2.1,
    scale: [2, 2.2, 2, 2.2, 2, 2.2, 2],
    textShadow: "0px 0px 8px red",
    boxShadow: "0px 0px 8px red",
    transition: {
      yoyo: 10, // số lần loot
    },
  },
};
function App() {
  return (
    <motion.div animate={{ marginTop: 100 }} className="App">
      <motion.h2
        style={{ backgroundColor: "red", width: "100px", height: "100px" }}
        animate={{ x: 1000, color: "yellow", rotateY: 180, opacity: 0.5 }}
      >
        Welcome to Pizza Joint123
      </motion.h2>
      <motion.div
        variants={containerVariants}
        style={{ backgroundColor: "red", width: "50px", height: "50px" }}
        initial="hidden"
        animate="visible"
      >
        div123
      </motion.div>
      <motion.button
        animate={{ scale: 2.5, y: 100, opacity: 1 }}
        initial={{ y: -850, opacity: 0.25 }}
        transition={{
          delay: 0.5,
          duration: 1.25,
          type: "spring",
          stiffness: 90,
          // when: "beforeChildren",
        }}
      >
        Create Your Pizza
      </motion.button>
      <motion.button
        variants={buttonVariants}
        animate="visible"
        whileHover="hover"
      >
        123
      </motion.button>
      <motion.p whileHover={{ scale: 2.3, color: "red" }}>li1</motion.p>
    </motion.div>
  );
}

export default App;
