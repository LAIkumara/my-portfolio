import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaNode } from "react-icons/fa"; // Added FaNode
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import springbootI from '../../assets/icons/springboot.png';
import flaskI from '../../assets/icons/flask.png';
import fanativeI from '../../assets/icons/React-Native-Logo.png';

const skills = [
  // {
  //   skill: "HTML",
  //   icon: FaHtml5,
  // },
  // {
  //   skill: "CSS",
  //   icon: FaCss3Alt,
  // },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
  skill: "Node.js",
  icon: FaNode,
 },
  {
    skill: "Java",
    icon: FaJava, // Custom icon for Java   
  },
  {
    skill: "Spring Boot",
    icon: () => <img src={springbootI} alt="Spring Boot" 
    className="w-20 h-20" />, // Custom icon for Spring Boot
  },
  {
    skill: "Flask",
    icon: () => <img src={flaskI} alt="Flask" 
    className="w-20 h-20" />, // Custom icon for Flask 
  },
  {
    skill: "React Native",
    icon: () => <img src={fanativeI} alt="React Native"
    className="w-20 h-76px" />, // Custom icon for React Native
  },
  
  // {
  //   skill: "Redux",
  //   icon: SiRedux,
  // },
  // {
  //   skill: "NextJS",
  //   icon: SiNextdotjs,
  // },
  // {
  //   skill: "TypeScript",
  //   icon: SiTypescript,
  // },
  
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
