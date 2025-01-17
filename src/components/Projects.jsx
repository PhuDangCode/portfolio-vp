import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { PinContainer } from "./ui/3d-pin";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiFirebase, SiPostgresql, SiExpress, SiHtml5, SiCss3, SiJavascript, SiKotlin } from "react-icons/si";
import { FaPython, FaNodeJs, FaJava, FaDocker, FaBrain, FaGoogle } from "react-icons/fa";
import { BiLogoPostgresql, BiBot } from "react-icons/bi";

// Replace RiRaspberryPiFill with a suitable icon or custom SVG
import { MdHardware } from "react-icons/md"; // Example: generic hardware icon

const technologyIcons = {
  React: <RiReactjsLine className="text-blue-500 text-2xl" />,
  Tailwind: <RiTailwindCssFill className="text-teal-500 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-500 text-2xl" />,
  Firebase: <SiFirebase className="text-orange-500 text-2xl" />,
  Postgres: <SiPostgresql className="text-blue-600 text-2xl" />,
  Express: <SiExpress className="text-gray-400 text-2xl" />,
  HTML: <SiHtml5 className="text-orange-600 text-2xl" />,
  CSS: <SiCss3 className="text-blue-600 text-2xl" />,
  JavaScript: <SiJavascript className="text-yellow-400 text-2xl" />,
  Python: <FaPython className="text-green-600 text-2xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
  Java: <FaJava className="text-red-500 text-2xl" />,
  Docker: <FaDocker className="text-blue-500 text-2xl" />,
  Kotlin: <SiKotlin className="text-purple-600 text-2xl" />,
  "Raspberry Pi": <MdHardware className="text-red-500 text-2xl" />, // Replaced with a generic hardware icon
  Oop: <FaJava className="text-red-500 text-2xl" />,
  Workbench: <BiLogoPostgresql className="text-blue-600 text-2xl" />,
  Chainlit: <BiBot className="text-pink-500 text-2xl" />,
  "Google OAuth": <FaGoogle className="text-blue-400 text-2xl" />,
  "Google Cloud": <FaGoogle className="text-blue-400 text-2xl" />,
  OpenAI: <FaBrain className="text-purple-500 text-2xl" />,
  API: <FaGoogle className="text-blue-400 text-2xl" />,
  ExchangeRateAPI: <FaGoogle className="text-blue-400 text-2xl" />,
};



const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 row-gap-32">
        {PROJECTS.map((project, index) => (
          <PinContainer
            key={index}
            title={project.title}
            href={project.link} // Assuming your PROJECTS array contains a `link` field
            containerClassName="w-full h-full flex items-center justify-center"
          >
            <div className="flex flex-col items-center p-4 tracking-tight text-slate-100/50 w-[20rem] h-[25rem]">
              <h3 className="text-center pb-2 m-0 font-bold text-base text-slate-100">
                {project.title}
              </h3>
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="flex flex-1 w-full rounded-lg mb-4"
              />
              <div className="flex justify-between w-full mt-4">
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="technology-icon mr-2">
                      {technologyIcons[tech] || tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-blue-500 text-white text-xs font-bold"
                >
                  Explore
                </a>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default Projects;
