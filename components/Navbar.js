import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';

const Navbar = ({ cart, addToCart, removeToCart, clearCart, subTotal }) => {
    // console.log(cart, addToCart, removeToCart, clearCart, subTotal);

    // const [count, setCount] = useState(1);
    // const incrementCount = () => {
    //     setCount(count + 1);
    //   };
    // const decrementCount = () => {
    //     setCount(count - 1);
    // }

    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    const ref = useRef();

    return (
        <div>
            <header className="text-gray-600 bg-slate-50 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={"/"}>
                        <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">Tailblocks</span>
                        </span>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link href={"/tshirts"}>
                            <span className="mr-5 hover:text-gray-900">T-shirt</span>
                        </Link>
                        <Link href={"/hoodies"}>
                            <span className="mr-5 hover:text-gray-900">Hoodies</span>
                        </Link>
                        <Link href={"/mugs"}>
                            <span className="mr-5 hover:text-gray-900">Mugs</span>
                        </Link>
                        <Link href={"/stickers"}>
                            <span className="mr-5 hover:text-gray-900">Stikers</span>
                        </Link>
                    </nav>
                    <div>
                        <span onClick={toggleCart} className="cursor-pointer inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                            <BsFillCartPlusFill className='md:text-3xl' />
                        </span>
                    </div>
                    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button> */}

                    <div ref={ref} className="w-72 sitebar absolute top-0 right-0 bg-pink-500 p-10 transition-transform translate-x-full transform h-full">
                        <h3 className='text-center'>shoping cart</h3>
                        <span
                            onClick={toggleCart}
                            className='absolute cursor-pointer top-0 right-2 text-2xl'>X</span>
                        <ol className='list-decimal font-semibold'>
                            {Object.keys(cart).length ==0 && <div className='my-2'>cart is empty</div>}
                            {
                                Object.keys(cart).map((k) => { return <li key={k}>
                                    <div className='item my-5 flex'>
                                        <div className="w-2/3  font-semibold">
                                            {cart[k].name}
                                        </div>
                                        <div 
                                        className='flex 
                                        font-semibold 
                                        justify-center 
                                        items-center 
                                        w-1/3'>
                                            {/* <span onClick={decrementCount} className='text-2xl cursor-pointer'>-</span> */}
                                            <span className='cursor-pointer' onClick={()=> {removeToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}>-</span>
                                            <span className='text-2xl'>{cart[k].qty}</span>
                                            <span className='cursor-pointer' onClick={()=> {addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}}>
                                                +
                                            </span>
                                            {/* <span onClick={incrementCount} className='text-2xl cursor-pointer'>+</span> */}
                                        </div>
                                    </div>
                                </li> })
                            }
                        </ol>
                        <button class="flex text-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Check Out</button>
                        <button onClick={clearCart} class="flex my-2 text-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Clear Cart</button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;