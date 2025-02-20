import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../Slices/favoriteSlice';
import loader from "../assets/Products-Fetching-Loader/loader.gif";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { addToCart } from '../Slices/CartSlice';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const dispatchProducts = useDispatch();
  const { id } = useParams();
  const { products, isLoading, message } = useSelector((state) => state.products);
  const favoriteProducts = useSelector((state) => state.favorite.favoriteProducts);
  const product = products.find((item) => item.id === parseInt(id));

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

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  // Adding to cart Function
  const handleCart = (product) => {
    dispatchProducts(addToCart(product));
    toast.success(`Product added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  // Favorite Handling
  const handleFavoriteProduct = (product) => {
    dispatchProducts(toggleFavorite(product));
  };

  const isFavorite = (isExistId) => {
    return favoriteProducts.some((item) => item.id === isExistId);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className='flex flex-col justify-center items-center py-[50px]'>
      <h1 className="text-[28px] font-bold font-sans text-center py-[2px]">Product Detail</h1>
      <span className="lg:w-[8%] w-[20%] bg-[#841414] h-[6px] rounded-md m-auto mb-[10px]"></span>
      <div className='lg:w-[60%] w-[85%] grid lg:grid-cols-2 justify-center items-center gap-8 shadow-lg'>
        <div className='flex justify-center items-center object-cover px-[20px] py-[20px]'>
          <img src={product?.image} alt={product.title} className='w-[220px] h-[260px]' />
        </div>
        <div className='flex flex-col justify-center py-[20px] gap-4 px-[10px]'>
          <div className='flex justify-between items-center gap-20 w-full'>
            <h1 className='font-sans font-bold lg:text-[22px] text-[18px]'>{product?.title}</h1>
            <span onClick={() => handleFavoriteProduct(product)} className='cursor-pointer'>
              {isFavorite(product.id) ? <FaHeart size={26} className='text-red-500' /> : <CiHeart size={26} />}
            </span>
          </div>
          <div className='flex gap-2 text-yellow-500'>
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <p className='text-gray-600 text-[14px]'>{product?.description}</p>
          <p className='text-[20px] font-bold text-[#841414]'>Price: ${product?.price}</p>
          <button
            className='bg-[#841414] text-white py-[7px] w-[60%] m-auto rounded-md transition-all hover:bg-black cursor-pointer'
            onClick={() => handleCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
