import "./App.css";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useCycle,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState } from "react";
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
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
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
      duration: 1.3,
      // yoyo: 10, // số lần loot
      yoyo: Infinity, // số lần loot
    },
  },
};
const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    pathOffset: 1,
    strokeOpacity: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    strokeOpacity: 1,
    pathOffset: 0,
    transition: {
      duration: 2,
      // ease: "easeInOut",
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};
const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    backgroundColor: "red",
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    rotate: 360,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
        stiffness: 1400,
        damping: 100,
      },
    },
  },
};
const ItemComponent = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);
  return (
    <>
      <motion.div
        // style={{ width: "100px", height: "100px" }}
        variants={loaderVariants}
        animate={animation}
      >
        ItemComponent
      </motion.div>
      <motion.div
        style={{ backgroundColor: "red", width: "200px", height: "200px", x }}
      >
        12333122
      </motion.div>
      <div onClick={() => cycleAnimation()}>onClick</div>
    </>
  );
};
function App() {
  const [showTitle, setShowTitle] = useState(true);
  const control = useAnimation();
  setTimeout(() => {
    setShowTitle(false);
  }, 4000);
  return (
    <motion.div animate={{ marginTop: 100 }} className="App">
      <ItemComponent />
      <motion.h2
        style={{ backgroundColor: "red", width: "100px", height: "100px" }}
        animate={{ x: 1000, color: "yellow", rotateY: 180, opacity: 0.5 }}
      >
        Welcome to Pizza Joint123
      </motion.h2>
      {/* <motion.img
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
        alt=""
      /> */}
      <motion.svg
        // drag="x" // or 'y'
        drag // kéo thả nè
        dragConstraints={{
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }} // không được kéo quá phạm vi này
        dragElastic={2} //  cho phép kéo đi bất kỳ đâu nhưng khi bỏ ra nó vẫn quay lại chỗ cũ
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        width="61"
        height="50"
        viewBox="0 0 61 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variant={pathVariants}
          initial="hidden"
          animate="visible"
          d="M59.5815 11.1045C58.8818 10.2047 57.9821 9.70486 56.8824 9.60493L54.4831 9.31416V6.50582V4.50652C54.4831 2.30725 52.6837 0.507813 50.4844 0.507813H4.49871C2.29944 0.507695 0.5 2.30713 0.5 4.50652V6.50594V14.5035V36.4966C0.5 38.3022 1.71333 39.8375 3.36469 40.3295C3.31432 42.3518 4.84442 44.1074 6.89808 44.2941L53.0836 49.4925C53.1836 49.4925 53.3836 49.4925 53.4835 49.4925C55.4829 49.4925 57.2823 47.9929 57.4822 46.0936L60.4813 14.0036C60.5812 13.0038 60.2813 11.9041 59.5815 11.1045ZM2.49941 7.50559H52.4838V10.1048V13.5037H2.49941V7.50559ZM4.49871 2.50711H50.4843C51.584 2.50711 52.4837 3.40683 52.4837 4.50652V5.50617H2.49941V4.50652C2.49941 3.40683 3.39913 2.50711 4.49871 2.50711ZM2.49941 36.4965V15.503H52.4838V36.4965C52.4838 37.5961 51.5841 38.4959 50.4844 38.4959H4.59876H4.49883C3.39913 38.4959 2.49941 37.5961 2.49941 36.4965ZM58.4818 13.6036L55.4828 45.6936C55.3829 46.7933 54.3831 47.593 53.2835 47.4931L7.19787 42.2947C6.19822 42.1948 5.49836 41.395 5.39843 40.4953H50.4843C52.6836 40.4953 54.483 38.6958 54.483 36.4966V14.5034V11.2044L56.7823 11.4044C57.2822 11.4044 57.782 11.7043 58.0819 12.1041C58.3819 12.5039 58.5819 13.1038 58.4818 13.6036Z"
          fill="black"
        />
      </motion.svg>
      <motion.div
        style={{ width: "50px", height: "50px" }}
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 270, 270, 0], // or 0 200 200 0
          backgroundColor: "red",
        }}
        transition={{
          yoyo: Infinity,
          duration: 2,
        }}
      >
        ppp
      </motion.div>
      <AnimatePresence>
        {showTitle && <motion.h1 exit={{ y: -1000 }}>title 123</motion.h1>}
        {showTitle && (
          <motion.div
            variants={containerVariants}
            style={{ backgroundColor: "red", width: "50px", height: "50px" }}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            div123
          </motion.div>
        )}
      </AnimatePresence>

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
      <button
        onClick={() => {
          control.start({
            x: "100%",
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: {
              duration: 2,
              delay: 1,
              bounce: 5,
              type: "spring",
              // velocity: 40,
            },
          });
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "50%",
            transition: {
              duration: 1,
            },
          });
        }}
      >
        Move Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: {
              duration: 1,
            },
          });
        }}
      >
        Move Square
      </button>
      <motion.div
        animate={control}
        style={{ width: "200px", height: "200px", backgroundColor: "red" }}
      >
        fff
      </motion.div>
      <motion.button
        // transition={{
        //   layout: {
        //     duration: 1,
        //     type: "spring",
        //   },
        // }}
        // layout
        onAnimationComplete={() => console.log("123")}
        variants={buttonVariants}
        animate="visible"
        whileHover="hover"
        drag
        whileDrag={{
          scale: 5,
        }}
        whileTap={{
          scale: 3.9,
        }}
      >
        button 123456
      </motion.button>
      <motion.p whileHover={{ scale: 2.3, color: "red" }}>li1</motion.p>
    </motion.div>
  );
}

export default App;
