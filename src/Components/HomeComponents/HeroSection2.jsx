import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import img1 from "../../assets/Hero2-imgs/img1.jpg";
import img2 from "../../assets/Hero2-imgs/img2.jpg";
import img3 from "../../assets/Hero2-imgs/img3.jpg";

const HeroSection2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.6 });

  const heroItems = [
    {
      id: 1,
      img: img1,
      title: "Let The Breeze In",
      description:
        "Bring freshness into your space with our elegantly designed products.",
    },
    {
      id: 2,
      img: img2,
      title: "Introducing Track",
      description: "Shop now and experience the perfect blend of elegance.",
    },
    {
      id: 3,
      img: img3,
      title: "The Curvy 90's Cheeky Jean",
      description: "Elevate your lifestyle with cutting-edge features.",
    },
  ];

  return (
    <div className="flex justify-center items-center my-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid lg:grid-cols-3 grid-cols-1 gap-10 justify-center items-center lg:w-[70%] w-[90%] m-auto"
      >
        {heroItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: item.id * 0.2 }}
            className="relative w-[280px] h-[500px] flex flex-col group overflow-hidden rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-all duration-500"
          >
            {/* Background Image */}
            <img
              src={item.img}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 opacity-80"></div>

            {/* Content */}
            <div className="absolute bottom-6 left-0 w-full text-center px-4">
              <h1 className="text-[20px] font-bold text-white">{item.title}</h1>
              <p className="text-[14px] text-gray-300 mt-2">{item.description}</p>

              {/* CTA Button on Hover */}
              <motion.button
                className="mt-4 px-5 py-2 text-sm font-semibold text-white border border-white rounded-full 
                opacity-0 group-hover:opacity-100 transition duration-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Now →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroSection2;
