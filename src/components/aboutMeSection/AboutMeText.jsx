import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I'm Akila Liyanage, a motivated and energetic full stack web developer with hands-on 
      expertise in both frontend and backend technologies.  I enjoy utilizing React to create 
      dynamic user interfaces and frameworks such as Spring Boot, Node.js, and Flask for solid 
      backend solutions.  My experience encompasses the whole web development lifecycle, including 
      planning, requirement analysis, requirement gathering, and web design.  I am dedicated to 
      developing high-quality, scalable, and user-friendly online apps.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
