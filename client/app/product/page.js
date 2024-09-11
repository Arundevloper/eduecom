// Product.js
import React from 'react';
import Navbar from '../_layout/Navbar';
import Footer from '../_layout/Footer';
const Product = () => {
  // Define the products data within the component
  const products = [
    {
      image: "https://dummyimage.com/420x260",
      category: "CATEGORY",
      title: "The Catalyzer",
      price: "16.00"
    },
    {
      image: "https://dummyimage.com/421x261",
      category: "CATEGORY",
      title: "Shooting Stars",
      price: "21.15"
    },
    {
      image: "https://dummyimage.com/422x262",
      category: "CATEGORY",
      title: "Neptune",
      price: "12.00"
    },
    {
      image: "https://dummyimage.com/423x263",
      category: "CATEGORY",
      title: "The 400 Blows",
      price: "18.40"
    },
    {
      image: "https://dummyimage.com/424x264",
      category: "CATEGORY",
      title: "The Catalyzer",
      price: "16.00"
    },
    {
      image: "https://dummyimage.com/425x265",
      category: "CATEGORY",
      title: "Shooting Stars",
      price: "21.15"
    },
    {
      image: "https://dummyimage.com/427x267",
      category: "CATEGORY",
      title: "Neptune",
      price: "12.00"
    },
    {
      image: "https://dummyimage.com/428x268",
      category: "CATEGORY",
      title: "The 400 Blows",
      price: "18.40"
    }
  ];

  return (
    <>
   
    <Navbar/>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt={product.title}
                  className="object-cover object-center w-full h-full block"
                  src={product.image}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.title}
                </h2>
                <p className="mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Product;
