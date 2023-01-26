import React from 'react';
import Link from 'next/link';

const Checkout = ({ cart, addToCart, removeToCart, clearCart, subTotal }) => {
    return (
        <div className='container m-auto content-center'>
            <h3 className='p-6 self-center m-auto content-center text-center font-bold my-4 text-indigo-500 text-2xl'>Checkout</h3>
            <div className='m-auto my-3'>
                <form className="p-8 w-4/5">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Full Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone-no">
                                Enter Phone No
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone-no" type="text" placeholder="phone number" />
                        </div>
                        {/* address area */}
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Address">
                                Address
                            </label>
                            <textarea cols="30" rows="5" className="h-full appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Address" type="text" placeholder="address" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Password
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                City
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                State
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>New Mexico</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Zip
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                        </div>
                    </div>
                </form>
                {/* cart section */}
                <div className="sitebar  bg-pink-500 p-10 m-3 w-4/5">
                    <h3 className='text-center'>shoping cart</h3>
                    <ol className='list-decimal font-semibold'>
                        {Object.keys(cart).length == 0 && <div className='my-2'>cart is empty</div>}
                        {
                            Object.keys(cart).map((k) => {
                                return <li key={k}>
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
                                            {/* <span className='cursor-pointer' onClick={() => { removeToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}>-</span> */}
                                            <span className='cursor-pointer' onClick={() => { removeToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}>-</span>
                                            <span className='text-2xl'>{cart[k].qty}</span>
                                            <span className='cursor-pointer' onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}>+</span>
                                            {/* <span className='cursor-pointer' onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}>+</span> */}
                                        </div>
                                    </div>
                                </li>
                            })
                        }
                    </ol>
                    {/* <button onClick={clearCart} className="flex my-2 text-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">subTotal{subTotal}</button> */}
                    <p className='font-bold my-4 text-white p-2 bg-indigo-500 text-2xl'>
                        <span>Sub Total:  {subTotal}</span>
                    </p>
                </div>
                {/* make pament btn */}
                <div>
                    <button className="flex my-2 text-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">make pament</button>
            </div>
        </div>
        </div >
    );
};

export default Checkout;