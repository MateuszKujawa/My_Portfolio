import "./hero.scss";
import { motion } from "framer-motion";


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  }
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};


const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div 
        className="textContainer" 
        variants={textVariants} 
        initial="initial" 
        animate="animate"
        >
          <motion.h2 variants={ textVariants } >MATEUSZ KUJAWA</motion.h2>
          <motion.h1 variants={ textVariants } >Junior Frontend Developer</motion.h1>
          <motion.div variants={ textVariants } className="buttons">
            <motion.button variants={ textVariants }>Moje ostatnie projekty</motion.button>
            <motion.button variants={ textVariants }>Kontakt</motion.button>
          </motion.div>
          <motion.img variants={ textVariants } animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
        <motion.div 
        className="slidingTextContainer" 
        variants={sliderVariants} 
        initial="initial" 
        animate="animate">
          Junior Frontend Developer
        </motion.div>
        {/* <div className="imageContainer">
          <div className="radiusContainer">
            <img src="/justme.png" alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero