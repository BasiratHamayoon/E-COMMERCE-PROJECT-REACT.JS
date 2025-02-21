import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/Hero-Section-Images/img1.jpg";
import img2 from "../../assets/Hero-Section-Images/img2.jpg";
import img3 from "../../assets/Hero-Section-Images/img3.jpg";
import img4 from "../../assets/Hero-Section-Images/img4.jpg";
import img5 from "../../assets/Hero-Section-Images/img5.jpg";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full h-screen overflow-hidden z-0">
      {/* Background Image with Smooth Transition */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-[90vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 h-[90vh]"></div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Animated Heading */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentIndex}
            className="text-[40px] md:text-[50px] font-extrabold leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {texts[currentIndex]}
          </motion.h1>
        </AnimatePresence>

        {/* Offer Banner */}
        <motion.h2
          className="text-red-600 text-[30px] md:text-[35px] font-bold uppercase mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          UPTO 50% OFF
        </motion.h2>

        {/* CTA Button */}
        <motion.button
          className="mt-6 px-8 py-3 text-lg font-semibold text-white 
          rounded-full hover:bg-red-600 hover:text-red-600 hover:border-none hover:bg-white transition duration-300 cursor-pointer shadow-lg bg-red-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("Products")}
        >
          Shop Now
        </motion.button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute mt-[400px] flex space-x-2">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-red-600" : "bg-gray-400"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
