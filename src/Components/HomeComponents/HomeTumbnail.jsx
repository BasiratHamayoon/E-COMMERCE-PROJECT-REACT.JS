import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import image from "../../assets/tumbnail-img/img.jpg";

const HomeTumbnail = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.6, triggerOnce: true }); // Fix

    return (
        <div ref={ref} className="relative w-full h-[80vh] overflow-hidden">
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
                className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"
            ></motion.div>

            {/* Content with Slide-Up Animation */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="relative z-10 flex flex-col justify-center items-center h-full lg:px-[300px] text-center"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="text-white text-3xl font-bold"
                >
                    Elevate Your Style with 2025’s Best Collection
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-white mt-3"
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
                    className="border-2 border-white text-white font-bold px-[20px] py-[8px] mt-5 transition-all hover:bg-white hover:text-black cursor-pointer"
                >
                    Shop Now
                </motion.button>
            </motion.div>
        </div>
    );
};

export default HomeTumbnail;
