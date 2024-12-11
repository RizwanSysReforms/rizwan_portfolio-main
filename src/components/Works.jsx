import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects as initialProjects } from "../constants"; 
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <a href={source_code_link} target="_blank" rel="noopener noreferrer">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full md:w-[calc(50% - 1rem)] lg:w-[calc(33.33% - 1rem)]"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="h-full w-full rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-semibold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <p key={`${name}-${tagIndex}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </a>
    </motion.div>
  );
};

const Works = () => {
  const [visibleProjects, setVisibleProjects] = useState(3); 
  const [projects, setProjects] = useState(initialProjects); 

  const loadMoreProjects = () => {
    setVisibleProjects(prevVisible => prevVisible + 3); 
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroSubText}  text-white-100`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to code
          repositories and live demos. They reflect my ability to solve complex
          problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      {/* Grid for displaying projects */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 h-full cursor-pointer opacity-100">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} className="opacity-100"/>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProjects < projects.length && (
        <div className="mt-5 flex justify-center">
          <button
            onClick={loadMoreProjects}
            className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group border border-[#915EFF] text-[#6330d1] hover:text-white"
          >
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#915EFF] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left transition-colors duration-300 ease-in-out">
              Load More
            </span>
          </button>
        </div>
      )}

    </>
  );
};

export default SectionWrapper(Works, "");
