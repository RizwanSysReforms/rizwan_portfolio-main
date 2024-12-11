import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import technology from "../assets/technology.jpg"
const Hero = () => {
  const [text] = useTypewriter({
    words: ['Adnan Yousaf', 'Web Designer', 'Web Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  })
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>{text}</span><span className="text-[#915EFF]"><Cursor /></span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 max-[640px]:mt-5`}>
            I am a full stack Web Developer.I develop user friendly,<br className='sm:block hidden' />
            attractive & mobile responsive websites.
          </p>
        </div>
      </div>

      <span className="max-[640px]:hidden">
        <ComputersCanvas />
      </span>
      <div className="max-[640px]:flex hidden absolute top-80 h-[50%]">
        <img src={technology} alt="technology-img" className="w-full h-auto bg-cover" />
      </div>
    </section>
  );
};

export default Hero;
