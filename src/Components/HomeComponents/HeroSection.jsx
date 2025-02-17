import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from '../../assets/Hero-Section-Images/img1.jpg';
import img2 from '../../assets/Hero-Section-Images/img2.jpg';
import img3 from '../../assets/Hero-Section-Images/img3.jpg';
import img4 from '../../assets/Hero-Section-Images/img4.jpg';
import img5 from '../../assets/Hero-Section-Images/img5.jpg';

const images = [img1, img2, img3, img4, img5];
const texts = [
  "Discover the latest fashion trends that suit your style and personality!",
  "Limited-time deals on exclusive collections. Grab yours before it's gone!",
  "Upgrade your wardrobe with our premium selections and timeless styles!",
  "New arrivals with trendy outfits to elevate your fashion game!",
  "Unmatched quality and unbeatable prices—shop now and save big!",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative flex justify-center items-center w-full h-[85vh] bg-gray-100 overflow-hidden'>
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className='absolute top-0 left-0 w-full h-full bg-cover bg-center'
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/90'></div>
      </AnimatePresence>
      
      <div className='relative z-10 text-center text-white p-5'>
        <AnimatePresence mode='wait'>
          <motion.h1
            key={currentIndex}
            className='text-[35px] font-bold'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {texts[currentIndex]}
          </motion.h1>
        </AnimatePresence>
        
        <motion.h2
          className='text-[#841414] text-[30px] mt-2'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          UPTO 50% OFF
        </motion.h2>
        
        <motion.button
          className='border-2 border-[#841414] px-[20px] text-[#841414] py-[5px] mt-[10px] font-bold 
          hover:bg-[#841414] hover:text-white transition duration-300 cursor-pointer'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
