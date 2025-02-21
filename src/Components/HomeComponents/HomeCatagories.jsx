import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import img1 from "../../assets/HomeCatagories-images/img1.jpg";
import img2 from "../../assets/HomeCatagories-images/img2.jpg";
import img3 from "../../assets/HomeCatagories-images/img3.jpg";

const HomeCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.6, triggerOnce: true });

  const catItems = [
    { id: 1, title: "Sneakers", img: img1 },
    { id: 2, title: "Accessories", img: img2 },
    { id: 3, title: "T-Shirts", img: img3 },
  ];

  return (
    <div ref={ref} className="flex flex-col justify-center items-center py-16">
      {/* Section Title with Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-black text-[30px] font-extrabold text-center relative mb-10"
      >
        Explore Our Top Categories
        <span className="block mx-auto mt-2 w-16 h-[4px] bg-red-600 rounded-full"></span>
      </motion.h2>

      <div className="grid lg:grid-cols-3 gap-8 lg:w-[70%] w-[90%]">
        {catItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative group transition-all duration-500 hover:scale-105 cursor-pointer rounded-lg overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={item.img}
              className="w-full h-[230px] object-cover rounded-lg"
              alt={item.title}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 opacity-100 group-hover:opacity-70 transition-opacity duration-500"></div>

            {/* Category Title with Hover Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-4 py-2 text-lg 
              font-bold border-2 border-white text-white rounded-md text-center group-hover:bg-white 
              group-hover:text-black transition-all duration-500"
            >
              {item.title}
            </motion.h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
