import React from 'react'
import { styles } from "../styles";
const Checkout = () => {
    return (
        <div className={`max-w-7xl mx-auto md:mt-5 flex flex-col items-start gap-2 max-[640px]:mt-5`}>
            {/* <h1 className={`${styles.heroSubText} text-white-100`}>Have a look</h1> */}
            <div className="max-[640px]:mt-2 flex gap-3">

                <a href="/resume.pdf" class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group" target="_blank" rel="noopener noreferrer">
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#915EFF] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-[#6330d1] transition-colors duration-300 ease-in-out group-hover:text-white">Resume</span>
                </a>


                <a href="https://api.whatsapp.com/send?phone=923408752827" target="_blank" rel="noopener noreferrer" class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-indigo-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">Hire Me</span>
                </a>

            </div>
        </div>
    )
}

export default Checkout
