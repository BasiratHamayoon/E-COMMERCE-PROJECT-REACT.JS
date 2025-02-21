import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image from "../../assets/tumbnail-img/img.jpg";
import { useNavigate } from "react-router-dom";

const HomeTumbnail = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.6, triggerOnce: true });
  const navigate = useNavigate();

  return (
    <div ref={ref} className="relative w-full h-[80vh] overflow-hidden flex justify-center items-center">
      {/* Background Image with Zoom-In Effect */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></motion.div>

      {/* Gradient Overlay with Smooth Fade-In */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"
      ></motion.div>

      {/* Content with Slide-Up Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="relative z-10 text-center px-6 sm:px-12 md:px-24 lg:px-36"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-white text-4xl md:text-5xl font-extrabold"
        >
          Elevate Your Style with 2025’s Best Collection
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-white mt-4 text-lg md:text-xl leading-relaxed"
        >
          Discover the latest trends in fashion and style. Our hand-picked collection
          features timeless elegance, modern aesthetics, and top-tier craftsmanship.
          Upgrade your wardrobe with pieces designed for comfort and confidence.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/Products")}
          className=" bg-red-600 text-white font-bold px-6 py-3 mt-6 
          rounded-full transition-all hover:bg-white hover:text-red-600 cursor-pointer"
        >
          Shop Now 
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HomeTumbnail;
