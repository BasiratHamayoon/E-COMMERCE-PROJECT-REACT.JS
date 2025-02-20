import React from 'react'
import { fetchProducts } from '../Slices/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import loader from "../assets/Products-Fetching-Loader/loader.gif";
import { FaStar } from "react-icons/fa";
import { FaHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductDetail = () => {

  const dispatchProducts = useDispatch();
   const { id } = useParams();
  const { products, isLoading, message } = useSelector((state) => state.products);
  const product = products.find((item) => item.id === parseInt(id));
  console.log(product)

  if (isLoading) {
      return (
        <div className="flex justify-center items-center mt-[200px]">
          <img src={loader} alt="Loading..." />
        </div>
      );
    }
  
    if (message) {
      return <p>Error: {message}</p>;
    }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className='flex flex-col justify-center items-center py-[50px]'>
      <h1 className="text-[28px] font-bold font-sans text-center py-[2px]">Product Detail</h1>
      <span className="lg:w-[8%] w-[20%] bg-[#841414] h-[6px] rounded-md m-auto mb-[10px]"></span>
        <div className= 'lg:w-[60%] w-[85%] grid lg:grid-cols-2 justify-center items-center gap-8 shadow-lg'>
          <div className='flex justify-center items-center object-cover px-[20px] py-[20px]'>
            <img src={product?.image} alt={products.title} className='w-[220px] h-[260px]' />
          </div>
          <div className='flex flex-col justify-center  py-[20px] gap-4 px-[10px]'>
            <div className='flex juatify-between items-center gap-20 w-full'>
              <h1 className='font-sans font-bold lg:text-[22px] text-[18px]'>{product?.title}</h1>
              <span><FaHeart size={25}/></span>
            </div>
            <div className='flex gap-2 text-yellow-500'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
            <p className='text-gray-600 text-[14px]'>{product?.description}</p>
            <p className='text-[20px] font-bold text-[#841414]'>Price: ${product?.price}</p>
            <button className='bg-[#841414] text-white py-[7px] w-[60%] m-auto rounded-md
            transition-all hover:bg-black cursor-pointer'>Add To Cart</button>
          </div>
        </div>
    </motion.div>
  )
}

export default ProductDetail