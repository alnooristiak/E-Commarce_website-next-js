import Link from 'next/link';
import React from 'react';
import connectDb from "@/middleware/mongoose"
import Product from '@/models/Product';
import mongoose from "mongoose";

const Tshirts = ({products}) => {
    return (
        <div className=''>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                        {/* ============== */}
                        <Link
                            href={"/product/bname"}
                            className="lg:w-1/5 md:w-1/2 p-4 w-full m-1" >
                            <div>
                                <span className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        src="/tshirt.jpeg"
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block" />
                                </span>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                    <p className="mt-1">$16.00</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    await mongoose.connect(process.env.MONGO_URI)
    return handler(req, res);
    let products = await Product.find()
    res.status(200).json({ products })
    return {
        props: {products}, 
    }
}


export default Tshirts;