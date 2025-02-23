import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoClose } from "react-icons/io5";
import { removeFromCart } from '../Slices/CartSlice';
import { motion } from 'framer-motion';
import cartIcon from '../assets/cart-favorite-icons/cart.gif'

const AddToCart = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const handleRemoveProduct = (product) => {
    dispatch(removeFromCart(product));
  };

  if (cartProducts.length === 0) {
    return (
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className='text-center text-[20px] text-gray-600 py-[100px]'
      >
        Cart Is Empty!
        <span className='m-auto flex justify-center items-center'><img src={cartIcon}  className='w-[28px] h-[28px]'/></span>
      </motion.p>
    );
  }

  //Total Price Calculation 
  const subtotal = cartProducts.reduce((total, product) => total + product.price, 0);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
      className="w-full py-5 flex-flex-col"
    >
      <h1 className="text-[28px] font-bold font-sans text-center py-[20px]">Your Cart</h1>
      
      <div className='flex px-[20px] flex-wrap'>
        <motion.table 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className='lg:w-[70%] w-[95%] m-auto table-auto text-center'
        >
          <thead>
            <tr className="bg-gray-200">
              <th className="lg:px-4 px-2 py-2">Product</th>
              <th className="lg:px-4 px-2 py-2">Title</th>
              <th className="lg:px-4 px-2 py-2">Quantity</th>
              <th className="lg:px-4 px-2 py-2">Price</th>
              <th className="lg:px-4 px-2 py-2">Remove</th> 
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product, index) => (
              <motion.tr 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <td className="px-4 py-2">
                  <img 
                    src={product?.image} 
                    alt={product?.title} 
                    className="lg:w-[100px] lg:h-[100px] object-cover mx-auto md:w-[70px] md:h-[70px] w-[40px] h-[40px] rounded-md"
                  />
                </td>
                <td className="lg:px-4 py-2">{product?.title}</td>
                <td className="lg:px-4 py-2">1</td> 
                <td className="lg:px-4 py-2">${product?.price}.00</td>
                <td className="lg:px-4 py-2">
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => handleRemoveProduct(product)}
                    className="cursor-pointer transition duration-200"
                  >
                    <IoClose size={24} />
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>

        {/* Subtotal & Checkout Button */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
          className='lg:w-[20%] lg:h-[200px] lg:mt-[150px] py-[20px] w-full flex flex-col justify-center items-center'
        >
          <div className='flex justify-between items-center gap-10 border-b'>
            <h1 className='text-[18px] font-bold'>SubTotal</h1>
            <h1 className='text-[18px]'>Price: ${subtotal.toFixed(2)}</h1>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className='bg-[#841414] py-[7px] px-[20px] text-white m-auto my-[30px] lg:w-full
            rounded-md cursor-pointer hover:bg-black transition-all'
          >
            Checkout
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AddToCart;
