import { useRef } from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
    {
        id: 1,
        title:"React Commerce",
        img:"https://img-c.udemycdn.com/course/750x422/5563780_a6c7_4.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic quas, quibusdam eveniet quidem praesentium eligendi blanditiis autem illum atque officiis fugiat eaque iure. Dicta consequatur ipsum nemo quisquam laborum.",
    },
    {
        id: 2,
        title:"Next.js Blog",
        img:"https://d2i72aaxtbe17r.cloudfront.net/wp-content/uploads/2023/08/16-8.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic quas, quibusdam eveniet quidem praesentium eligendi blanditiis autem illum atque officiis fugiat eaque iure. Dicta consequatur ipsum nemo quisquam laborum.",
    },
    {
        id: 3,
        title:"Vanilla JS App",
        img:"https://blog.openreplay.com/images/build-a-weather-app-with-vanilla-js/images/hero.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic quas, quibusdam eveniet quidem praesentium eligendi blanditiis autem illum atque officiis fugiat eaque iure. Dicta consequatur ipsum nemo quisquam laborum.",
    },
    {
        id: 4,
        title:"Music App",
        img:"https://assets.materialup.com/uploads/b8ed3d79-7f53-45da-8a27-9e496edeb09e/preview.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic quas, quibusdam eveniet quidem praesentium eligendi blanditiis autem illum atque officiis fugiat eaque iure. Dicta consequatur ipsum nemo quisquam laborum.",
    },
];

const Single = ({item}) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target:ref,
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>Sprawdź</button>
                </motion.div>
            </div>
        </div>
    </section>
};

const Portfolio =() => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target:ref,
    offset:["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress,{
    stiffness: 100,
    damping: 30,
  });


  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Moje projekty</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id}/>
        ))}
    </div>
  );
};

export default Portfolio;