import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoClose } from "react-icons/io5";
import { removeFromCart } from '../Slices/CartSlice';

const AddToCart = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveProduct = (product) => {
    dispatch(removeFromCart(product));
  }

  if (cartProducts.length === 0) {
    return <p className='text-center mt-[200px] text-[20px] text-gray-600'>Cart Is Empty!</p>;
  }

  //Total Price Calculation 
  const subtotal = cartProducts.reduce((total, product) => total + product.price, 0);


  return (
    <div className="w-full py-5 flex-flex-col">
     <h1 className="text-[28px] font-bold font-sans text-center py-[20px]">Your Cart</h1>
      <div className='flex px-[20px] flex-wrap'>
      <table className='lg:w-[70%] w-[95%] m-auto table-auto text-center'>
        <thead>
          <tr className="bg-gray-200">
            <th className="lg:px-4 px-2 py-2">Product</th>
            <th className="lg:px-4 px-2 py-2">Title</th>
            <th className="lg:px-4 px-2 py-2">Quantity</th>
            <th className="lg:px-4 px-2 py-2">Price</th>
            <th className="lg:px-4 px-2 py-2">Remove</th> {/* New Column */}
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product, index) => (
            <tr key={index} className="">
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
                <button
                  onClick={() => handleRemoveProduct(product)}
                  className="cursor-pointer transition duration-200"
                >
                  <IoClose size={24} />
                </button>
              </td> {/* Cross Icon */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='lg:w-[20%] lg:h-[200px] lg:mt-[150px] py-[20px] w-full flex flex-col justify-center items-center'>
        <div className='flex justify-between items-center gap-10 border-b'>
          <h1 className='text-[18px] font-bold'>SubTotal</h1>
          <h1 className='text-[18px]'>Price: ${subtotal.toFixed(2)}</h1>
        </div>
        <button className='bg-[#841414] py-[7px] px-[20px] text-white m-auto my-[30px] lg:w-full
        rounded-md cursor-pointer hover:bg-black transition-all'>Checkout</button>
      </div>
      </div>
    </div>
  );
};

export default AddToCart;