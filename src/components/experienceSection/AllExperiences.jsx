import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "UI/UX Designer & WordPress Developer Intern",
    company: "CodeSec Global",
    date: "2023 - 2024",
    responsibilities: [
      "Designing user interfaces and experiences for web applications.",
      "Developing and maintaining WordPress websites.",
      "Creating responsive designs that work across various devices.",
    ],
  },
  {
    job: "System Administrator Intern",
    company: "SMIB Bank",
    date: "2024 - 2025",
    responsibilities: [
      "Assisting in the management and maintenance of IT systems.",
      "Supporting the IT team in troubleshooting and resolving technical issues.",
      "Learning about network administration and system security.",
    ],
  },
  // {
  //   job: "Course Instructor",
  //   company: "Sprints",
  //   date: "2024 - Present",
  //   responsibilities: [
  //     "Teaching JavaScript, React and TailwindCSS.",
  //     "Participating in preparing course materials.",
  //     "Helping students through their way in learning web development technologies.",
  //   ],
  // },
];

0

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
