import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
const Tech = () => {
  return (
    <>
      {/* This div will be hidden on mobile devices */}
      <div className='hidden md:flex flex-row flex-wrap justify-center gap-10 '>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      {/* This div will be shown only on mobile devices */}
      <div className="max-[767px]:flex flex-col hidden">
        <p className={`${styles.heroSubText} text-center text-white-100`}>
          Latest technologies
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Technology Stack
        </h2>
        <div className="grid gap-y-4 max-[767px]:grid-cols-4 max-[640px]:grid-cols-3 max-[480px]:grid-cols-2 justify-items-center items-center pt-8">
          {technologies.map((technology) => (
            <div key={technology.name} className="w-20 h-20">
              <img src={technology.icon} alt="" className="h-full w-full bg-cover" />
            </div>
          ))}
        </div>

      </div>

    </>
  );
};

export default SectionWrapper(Tech, "");
