import React, { useState, useRef, useId, useEffect } from "react";
import aboutImg from "../assets/aboutme.jpg";
import left from "../assets/left.jpg";
import right from "../assets/right.jpg";
import football from "../assets/football.jpg";
import chineseChess from "../assets/chinesechess.jpg";
import baking from "../assets/donut.jpg";
import cocktail from "../assets/cocktail.jpg";
import programming from "../assets/programing.jpg";
import scholarship from "../assets/scholarship.jpg";
import presto from "../assets/presto.jpg";
import team from "../assets/vgufootball.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { Compare } from "./ui/compare";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { CardSpotlight } from "./ui/card-spotlight";
import { FaRegGem, FaPalette, FaFutbol, FaHashtag, FaMoneyBillWave, FaPlane, FaQuoteRight } from "react-icons/fa";
import { useOutsideClick } from "./hook/useOutsideClick";
import { lazy, Suspense } from "react";

// Lazy load the World component
const World = lazy(() => import("./ui/globe").then((m) => ({ default: m.World })));

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

 
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
 
const cards = [
  {
    description: "Field King",
    title: "Football",
    src: football,
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
        Football has been my passion since I first played at the age of 8.
        I enjoy the versatility of the game, whether it’s futsal, 7-a-side, or 11-a-side matches. <br /> <br />
        My preferred position is Central Defensive Midfielder or Fixo, 
        where I thrive on controlling the game and supporting my teammates.
        Playing with friends brings me joy, and it’s a great way to stay healthy and active while building teamwork.
      </p>
      
      );
    },
  },
  {
    description: "Strategy",
    title: "Chinese Chess",
    src: chineseChess,
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
      <p>
        Chinese Chess has been a beloved pastime of mine, one I enjoy playing with my grandpa, my uncle, and my friends.
        The game not only brings us closer together but also helps sharpen my strategic thinking and decision-making skills. <br /> <br />
        Whether it’s a casual match or a serious challenge, Chinese Chess is my way of relaxing while exercising my mind.
      </p>

      );
    },
  },
 
  {
    description: "Big Love Donut",
    title: "Baking Bread",
    src: baking,
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
      <p>
        Baking is one of my greatest passions, and I absolutely love exploring the art of creating delicious bread from around the world. 
        Donuts hold a special place in my heart, and perfecting them has become one of my favorite baking challenges. <br /> <br />
        The process of baking not only allows me to express creativity but also fills me with joy as I share my creations with others.
      </p>

      );
    },
  },
  {
    description: "Vibe Maker",
    title: "Cocktail and Chill",
    src: cocktail,
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
        Cocktail and Chill is my go-to way to unwind and enjoy life's simple pleasures.
        I love experimenting with different ingredients to craft unique and refreshing drinks that suit any mood. <br /> <br />
        Whether it’s mixing a classic cocktail or creating something new, the process is both relaxing and rewarding, making every sip a moment to savor.
      </p>
      
      );
    },
  },
  {
    description: "Code Wizard",
    title: "Programming",
    src: programming,
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
      <p>
        Programming is my ultimate passion, and I deeply love everything about Computer Science and technology.
        From AI, Data, and Blockchain to Web and App development, I enjoy diving into various fields and exploring their endless possibilities. <br /> <br />
        My main love lies in Software Engineering, where I thrive on creating efficient and innovative solutions. Coding is not just a skill for me—it’s a way to continuously learn, grow, and bring ideas to life.
      </p>

      );
    },
  },
];

const testimonials = [
  {
    quote: "Receiving the DAAD, WUS, and MERIT scholarships has been a proud milestone in my academic journey, reflecting my dedication to learning and growth.",
    name: "Scholarship Recipient",
    src: scholarship,
  },
  {
    quote: "As a core team member and IT developer for my university's club, I’ve helped create and manage digital solutions for our community.",
    name: "Core Team Member",
    src: team,
  },
  {
    quote: "Being part of the Presto Club in 2022/2023 was rewarding. Organizing university events in logistics taught me teamwork and event planning.",
    name: "Presto Club Member",
    src: presto,
  },
];



const GlobeDemo = () => {
  const globeConfig = {
    globeColor: "#1B1F3B", // A brighter blue shade
    showAtmosphere: true,
    atmosphereColor: "#3A4ED0", // Soft blue with a hint of violet for a striking atmosphere glow
    atmosphereAltitude: 0.25, // Enhance the height of the atmosphere glow
    emissive: "#1C47A6", // Deep blue for a subtle glowing effect
    emissiveIntensity: 0.3, // Increase emissive intensity
    shininess: 1.0, // Slightly shinier for a polished look
    arcTime: 1200, // Smooth out the arc animation timing
    arcLength: 0.8, // Slightly reduce arc length for cleaner arcs
    autoRotate: true,
    autoRotateSpeed: 0.7, // Slightly faster rotation for a dynamic effect
  };
  

  const sampleArcs = [
    { startLat: 37.7749, startLng: -122.4194, endLat: 40.7128, endLng: -74.006, color: "#ff0000", arcAlt: 0.2 },
    { startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, color: "#06b6d4", arcAlt: 0.2 },
    { startLat: 51.5074, startLng: -0.1278, endLat: 48.8566, endLng: 2.3522, color: "#00ff00", arcAlt: 0.2 },
    { startLat: 35.6895, startLng: 139.6917, endLat: 37.7749, endLng: -122.4194, color: "#0000ff", arcAlt: 0.2 },
    { startLat: -33.8688, startLng: 151.2093, endLat: -37.8136, endLng: 144.9631, color: "#ff00ff", arcAlt: 0.2 },
    { startLat: 55.7558, startLng: 37.6173, endLat: 39.9042, endLng: 116.4074, color: "#ffff00", arcAlt: 0.2 },
    { startLat: 52.5200, startLng: 13.4050, endLat: 41.9028, endLng: 12.4964, color: "#00ffff", arcAlt: 0.2 },
    { startLat: 34.0522, startLng: -118.2437, endLat: 49.2827, endLng: -123.1207, color: "#ff4500", arcAlt: 0.2 },
    { startLat: 19.0760, startLng: 72.8777, endLat: 13.7563, endLng: 100.5018, color: "#8a2be2", arcAlt: 0.2 },
    { startLat: 40.7128, startLng: -74.0060, endLat: 34.0522, endLng: -118.2437, color: "#ff6347", arcAlt: 0.2 },
    { startLat: 35.6895, startLng: 139.6917, endLat: 55.7558, endLng: 37.6173, color: "#4682b4", arcAlt: 0.2 },
    { startLat: 48.8566, startLng: 2.3522, endLat: 52.5200, endLng: 13.4050, color: "#daa520", arcAlt: 0.2 },
  ];

  return (
    <Suspense fallback={<div>Loading Globe...</div>}>
      <div className="w-full h-96 flex justify-center items-center text-white">
        <World globeConfig={globeConfig} data={sampleArcs} />
      </div>
    </Suspense>
  );
};

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-9">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-col items-center justify-center w-full -mt-16 mb-10">
      <TextGenerateEffect words={ABOUT_TEXT} duration={0.8} className="text-xl leading-relaxed" />
    </div>


    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 items-center">
    {/* First Component */}
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center py-6 px-4 max-w-xl text-white bg-transparent"
    >
      <CardSpotlight
        radius={300} // Adjust radius as needed
        color="#1E293B" // Spotlight color
        className="relative w-full p-6 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-white">Interesting Details</h2>
        <p className="text-gray-400 mt-4">
        <ul className="text-gray-300 mt-4 list-none pl-0 space-y-4">
            <li className="flex items-center">
              <FaRegGem className="text-blue-500 mr-3" size={20} />
              Zodiac: Aquarius
            </li>
            <li className="flex items-center">
              <FaPalette className="text-red-500 mr-3" size={20} />
              Favorite Color: Black and White
            </li>
            <li className="flex items-center">
              <FaFutbol className="text-green-500 mr-3" size={20} />
              Favorite Football Club: Manchester United
            </li>
            <li className="flex items-center">
              <FaHashtag className="text-yellow-500 mr-3" size={20} />
              Favorite Number: 77
            </li>
            <li className="flex items-center">
              <FaMoneyBillWave className="text-purple-500 mr-3" size={20} />
              Best Love: Money
            </li>
            <li className="flex items-center">
              <FaPlane className="text-pink-500 mr-3" size={20} />
              Dream Destination: Manchester
            </li>
            <li className="flex items-center">
              <FaQuoteRight className="text-cyan-500 mr-3" size={20} />
              Guiding Principle In Life: What does not kill me certainly makes me stronger.
            </li>
          </ul>
        </p>
      </CardSpotlight>
    </motion.div>

    {/* Second Component - Globe */}
    <motion.div
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center h-[50vh]"
    >
      <div className="w-full h-full max-w-4xl max-h-4xl flex justify-center items-center">
        <GlobeDemo />
      </div>
    </motion.div>

    {/* Third Component */}
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center py-6 px-4 max-w-xl text-white bg-transparent"
    >
      <div className="text-lg text-gray-400 w-full">
        <ExpandableCardDemo />
      </div>
    </motion.div>
  </div>





      {/* Additional sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-16">
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
          <Compare
            firstImage={left} // Use the imported 'left' image
            secondImage={right} // Use the imported 'right' image
            className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
            slideMode="hover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
