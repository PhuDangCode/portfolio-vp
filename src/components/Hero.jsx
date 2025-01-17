import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/3.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 relative text-white">
      <div className="flex flex-wrap container mx-auto px-8">
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pg-16 text-7xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Mai Nguyen Viet Phu
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-light text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section: Profile Picture */}
        <div className="w-full lg:w-1/2 lg:p-20">
          <div className="relative w-[450px] h-[450px] flex justify-center items-center mx-auto">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-pulse rounded-full"></div>

            {/* Profile Picture */}
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilepic}
              alt="Profile Picture"
              className="relative z-10 rounded-full object-cover border-[4px] border-white shadow-lg"
              style={{ width: "90%", height: "90%" }}
            />

            {/* Floating Decorative Elements */}
            <div className="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-r from-pink-300 to-purple-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-5 -right-5 w-12 h-12 bg-gradient-to-r from-yellow-300 to-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
