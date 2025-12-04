import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Autosell",
    description:
      "My university research focuses on 'Intelligent Vehicle Damage Detection and Repair Recommendation' and employs machine learning, image processing, sentiment analysis, and social media mining to detect car damage from photos and recommend nearby repair shops based on review trends.",
    align: "left",
    image: "https://github.com/LAIkumara/my-portfolio/blob/main/public/images/website-img-6.png?raw=true",
    link: "https://github.com/LAIkumara/AutoXpert", // 👈 Updated
  },
  {
    name: "AutoExpert",
    description:
      "My university research focuses on 'Intelligent Vehicle Damage Detection and Repair Recommendation' and employs machine learning, image processing, sentiment analysis, and social media mining to detect car damage from photos and recommend nearby repair shops based on review trends.",
    align: "right",
    image: "https://github.com/LAIkumara/my-portfolio/blob/main/public/images/website-img-6.png?raw=true",
    link: "https://github.com/LAIkumara/AutoXpert", // 👈 Updated
  },
  {
    name: "Ecommerce microservices app",
    description:
      "This project shows how to build a microservices-based backend using Spring Boot 3.5.3 (Java 21), with services for Product, Inventory, and Order. Each service is created with Spring Web and Spring Data JPA, and it connects to a MySQL database. The frontend is a simple React JS interface with Axios for API calls.",
    align: "left",
    image: "https://github.com/LAIkumara/my-portfolio/blob/main/public/images/website-img-7.png?raw=true",
    link: "https://github.com/LAIkumara/ecommerce-microservices-app",
  },
  {
    name: "ScholerNet",
    description:
      "ScholerNet is a Learning Management System (LMS) built on the MERN stack and stylized with Tailwind CSS. It enables users to create and manage projects and assignments, assign supervisors to student projects, and track grades for both assignments and projects, thereby easing academic workflows and boosting overall learning management.",
    align: "right",
    image: "https://github.com/LAIkumara/my-portfolio/blob/main/public/images/website-img-8.png?raw=true",
    link: "https://github.com/LAIkumara/ScholerNet", // 👈 Add your actual GitHub/project link
  },
  {
    name: "UnityWeb",
    description:
      "UnityWeb is a social media website built using ReactJS that aims to create a smooth and responsive user experience. It allows users to share posts, connect with others, and interact with content in real time. The frontend is created using current React components, which ensures quick performance and dynamic interactions.",
    align: "left",
    image: "https://github.com/LAIkumara/my-portfolio/blob/main/public/images/website-img-9.png?raw=true",
    link: "https://github.com/LAIkumara/unityweb", // 👈 Add your actual GitHub/project link
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              description={project.description}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
