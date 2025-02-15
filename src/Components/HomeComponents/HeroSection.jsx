import React from 'react'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from '../../assets/Hero-Section-Images/image1.png'
import img2 from '../../assets/Hero-Section-Images/image2.png'
import img3 from '../../assets/Hero-Section-Images/image3.png'

const images = [
  img1,
  img2,
  img3
];

const HeroSection = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Change image every 2 seconds
  
      return () => clearInterval(interval);
    }, []);
    return (
        <div className='lg:flex gap-0 justify-center items-center
         lg:w-[90%] m-auto bg-gray-100 lg:px-[80px] lg:h-[80vh] px-[10px] w-[100%]'>
            <div className=' lg:w-[70%] pt-[100px] lg:pt-[5px] z-10'>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                >
                    <motion.h1
                        className="text-[35px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                    >
                        Exclusive Offer
                    </motion.h1>

                    <motion.h1
                        className="font-sans font-bold text-[40px]"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                     >
                        Women's <a className="text-[#841414]">Collection</a>
                    </motion.h1>

                    <motion.h2
                        className="text-[#841414] text-[30px]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
                     >
                        UPTO 50% OFF
                    </motion.h2>

                    <motion.button
                        className="border-2 border-[#841414] px-[20px] text-[#841414] py-[5px] mt-[10px] font-bold 
                        hover:bg-[#841414] hover:text-white transition duration-300 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Shop Now
                    </motion.button>
                    </motion.div>
            </div>
            <div className="relative w-full h-screen flex justify-center items-center ml-[30px]">
           
                    <motion.img
                        src={images[currentIndex]}
                        alt="Hero"
                        className="lg:w-[50%] sm:w-[70%] md:w-[60%] inset-0 object-cover"
                        key={currentIndex} 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
            
            
        </div>
        </div>
      );
}

export default HeroSection
