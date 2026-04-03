import React from 'react'
import { motion } from 'framer-motion'

const Collections = () => {
  return (
    <div id='collections' className='pt-10 px-4 md:px-10 bg-black'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8'>
            <p className=' text-white text-[20px] md:text-xl opacity-60'>2026 Summer <br/> Collections</p>
            <div className=' text-white font-bold text-[50px] md:text-6xl lg:text-[80px] leading-tight md:leading-[1.05] max-w-[18ch]'>
              Who We Serve 
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 py-10 md:py-16'>
           
           <div className="relative group w-full ">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1}}
            >
            <img
                src="/car.webp"
                alt=""
                className="rounded-2xl w-full h-auto "
            />

            <div
              className="
                absolute inset-0 flex items-end justify-center 
                bg-black/40 rounded-2xl px-4
                
                opacity-100 translate-y-0   /* Mobile: always visible */
                
                md:opacity-0 md:translate-y-5 
                md:group-hover:opacity-100 md:group-hover:translate-y-0  /* Desktop hover */
                
                transition-all duration-300 ease-in-out
              "
            >
              <p className="text-white font-bold pb-6 text-[30px] md:text-xl lg:text-[30px] text-center">
                White Label T-Shirt for Global Retail Brands
              </p>
            </div>
            </motion.div>
            </div>
             <div className="relative group w-full">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2}}
            >
            <img
                src="/MNCs.jpg"
                alt=""
                className="rounded-2xl w-full h-auto"
            />

          <div
              className="
                absolute inset-0 flex items-end justify-center 
                bg-black/40 rounded-2xl px-4
                
                opacity-100 translate-y-0   /* Mobile: always visible */
                
                md:opacity-0 md:translate-y-5 
                md:group-hover:opacity-100 md:group-hover:translate-y-0  /* Desktop hover */
                
                transition-all duration-300 ease-in-out
              "
            >
              <p className="text-white font-bold pb-6 text-[30px] md:text-xl lg:text-[30px] text-center">
                Corporate T-Shirts for MNCs and Events
              </p>
            </div>
            </motion.div>
            </div>
            <div className="relative group w-full">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.4}}   
            >   
            <img
                src="/schools.jpg"
                alt=""
                className="rounded-2xl w-full h-auto"
            />

          <div
              className="
                absolute inset-0 flex items-end justify-center 
                bg-black/40 rounded-2xl px-4
                
                opacity-100 translate-y-0   /* Mobile: always visible */
                
                md:opacity-0 md:translate-y-5 
                md:group-hover:opacity-100 md:group-hover:translate-y-0  /* Desktop hover */
                
                transition-all duration-300 ease-in-out
              "
            >
              <p className="text-white font-bold pb-6 text-[30px] md:text-xl lg:text-[30px] text-center">
                 Bulk Institutional Clothing Supplier for Schools and Colleges
              </p>
            </div>
            
            </motion.div>
            </div>
            <div className="relative group w-full">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.6}}   
            >        
            <img
                src="/startups.jpg"
                alt=""
                className="rounded-2xl w-full h-auto object-fit-cover"
            />
             <div
              className="
                absolute inset-0 flex items-end justify-center 
                bg-black/40 rounded-2xl px-4
                
                opacity-100 translate-y-0   /* Mobile: always visible */
                
                md:opacity-0 md:translate-y-5 
                md:group-hover:opacity-100 md:group-hover:translate-y-0  /* Desktop hover */
                
                transition-all duration-300 ease-in-out
              "
            >
              <p className="text-white font-bold pb-6 text-[30px] md:text-xl lg:text-[30px] text-center">
                T-Shirts for Lifestyle & Startup Brands
              </p>
            </div>
         
            </motion.div>
           </div>
        </div>
    </div>
  )
}

export default Collections
