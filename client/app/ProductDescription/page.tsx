"use client"
import React, { useState } from 'react';
import Navbar from '../_layout/Navbar';
import Footer from '../_layout/Footer';

function ProductPage() {
  // Dynamic product data
  const product = {
    name: 'The Catcher in the Rye',
    brand: 'BRAND NAME',
    price: 450, // in INR
    description:
      'Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.',
    images: [
      'https://dummyimage.com/400x400',
      'https://dummyimage.com/200x200',
      'https://dummyimage.com/200x200',
      'https://dummyimage.com/200x200',
    ],
  };

  // State for image gallery
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Image gallery with small images */}
            <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
              <img alt="product" className="lg:w-full w-full h-96 object-cover rounded" src={mainImage} />
              <div className="flex space-x-2 mt-4">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`gallery ${idx}`}
                    className="w-20 h-20 object-cover rounded cursor-pointer border border-gray-300"
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* Product details */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>

              <p className="leading-relaxed">{product.description}</p>

              {/* Pricing and Add to Cart */}
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <span className="title-font font-medium text-2xl text-gray-900">₹{product.price}</span>
              </div>

              <div className="flex">
                <button className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProductPage;
