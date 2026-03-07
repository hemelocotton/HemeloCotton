import React from 'react'
import { motion } from "framer-motion";

function Pattern  () {
  return (
    <div className='relative'>
       <div className='scroll-container opacity-20 text-[130px] md:text-[250px] lg:text-[450px]'>
            <div className='flex  text-white tracking-tighter'>
            <div>A</div>
            <div>B</div>
            <div>O</div>
            <div>U</div>
            <div>T</div>
            </div>
            <div className=' flex  text-white tracking-tighter '>
            <div>H</div>
            <div>E</div>
            <div>M</div>
            <div>E</div>
            <div>O</div>
            <div>L</div>
            <div>O</div>
            </div>
            <div className=' flex  text-white tracking-tighter '>
            <div>C</div>
            <div>O</div>
            <div>T</div>
            <div>T</div>
            <div>O</div>
            <div>N</div>
            </div>
             {/* continues loop */}
             <div className='flex  text-white tracking-tighter'>
            <div>A</div>
            <div>B</div>
            <div>O</div>
            <div>U</div>
            <div>T</div>
            </div>
            <div className=' flex  text-white tracking-tighter '>
            <div>H</div>
            <div>E</div>
            <div>M</div>
            <div>E</div>
            <div>O</div>
            <div>L</div>
            <div>O</div>
            </div>
            <div className=' flex  text-white tracking-tighter '>
            <div>C</div>
            <div>O</div>
            <div>T</div>
            <div>T</div>
            <div>O</div>
            <div>N</div>
            </div>
           
       </div>
       <div className='absolute inset-0 flex items-center justify-center z-10 gap-8 md:gap-16 lg:gap-48 px-4'>
        <motion.div
         initial={{opacity:0,x:-50}}
         whileInView={{opacity:1,x:20}}
         viewport={{once:true, amount:0.4}}  
         transition={{duration:0.5,delay:1}}
        className=''
        >
          <p className='text-white text-sm md:text-xl lg:text-25px] font-bold uppercase leading-relaxed text-left md:text-left tracking-wide w-full max-w-[80%] md:max-w-[450px] lg:max-w-[450px] line-clamp-3 md:line-clamp-4 sm:line-clamp-5 lg:line-clamp-4'>Hemelo Cotton is a trusted name in premium T-shirt manufacturing in India, offering reliable solutions for large-scale apparel production. We specialize in custom T-shirts, private label manufacturing, bulk orders, and corporate clothing. Partnered with leading brands and organizations across multiple countries, Hemelo Cotton delivers scalable production, consistent quality, and fully customizable knitted cotton apparel designed to meet global standards.</p>
        </motion.div>
        <motion.div
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:10}}
        viewport={{once:true, amount:1}}  
        transition={{duration:0.5,delay:0.5}}
        className='flex flex-col items-center justify-center '
        >
          <p className='text-white opacity-70 text-xs md:text-sm font-semibold uppercase leading-relaxed text-left md:text-left tracking-wide w-full max-w-[90%] md:max-w-[480px] lg:max-w-[500px]'>SUPIMA</p>
          <p className='text-white opacity-70 text-xs md:text-sm font-semibold uppercase leading-relaxed text-left md:text-left tracking-wide w-full max-w-[90%] md:max-w-[480px] lg:max-w-[500px]'>ORGANIC</p>
          <p className='text-white opacity-70 text-xs md:text-sm font-semibold uppercase leading-relaxed text-left md:text-left tracking-wide w-full max-w-[90%] md:max-w-[480px] lg:max-w-[500px]'>BAMBOO</p>
          <p className='text-white opacity-70 text-xs md:text-sm font-semibold uppercase leading-relaxed text-left md:text-left tracking-wide w-full max-w-[90%] md:max-w-[480px] lg:max-w-[500px]'>SUVIN</p>
        </motion.div>
       </div>
    </div>
  );
}

export default Pattern;
