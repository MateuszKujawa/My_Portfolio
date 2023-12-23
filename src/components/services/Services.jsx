import { useRef } from "react";
import "./services.scss";
import {motion, useInView} from "framer-motion";

const variants = {
    initial: {
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y: 0,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};


const Services = () => {

  const ref = useRef();

  const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div 
        className="services" 
        initial="initial" 
        ref={ref}
        animate={isInView && "animate"}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>Zawsze stawiam na nowoczesność<br /> i minimalizm</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/programmerWork.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Unikatowe</motion.b> pomysły</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>Dla Twojej</motion.b> strony.</h1>
                <motion.button whileHover={{backgroundColor:"white", scale:0.95}}>CO ROBIĘ?</motion.button>
            </div>
        </motion.div>
        
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, alias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, at!</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, alias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, at!</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, alias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, at!</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, alias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, at!</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services