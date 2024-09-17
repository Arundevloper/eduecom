import React from "react";
import Navbar from "../_layout/Navbar";
import Footer from "../_layout/Footer";
import ProductCard from "../_components/productCard";

const Product: React.FC = () => {
  const products = [
    {
      image: "/product/product1.png",
      title: "Foil Magic - Animal Wisdom Tales | 4-8 years | DIY Activity Kit",
      price: "16.00",
    },
    {
      image: "/product/product2.png",
      title: "Shooting Stars - A Journey Through the Galaxy",
      price: "21.15",
    },
    {
      image: "https://dummyimage.com/422x262",
      title: "Neptune - Dive Deep into the Ocean",
      price: "12.00",
    },
    {
      image: "https://dummyimage.com/423x263",
      title: "The 400 Blows - A Cinematic Classic",
      price: "18.40",
    },
    {
      image: "https://dummyimage.com/424x264",
      title: "Foil Magic - Animal Wisdom Tales | 4-8 years | DIY Activity Kit",
      price: "16.00",
    },
    {
      image: "https://dummyimage.com/425x265",
      title: "Shooting Stars - A Journey Through the Galaxy",
      price: "21.15",
    },
    {
      image: "https://dummyimage.com/427x267",
      title: "Neptune - Dive Deep into the Ocean",
      price: "12.00",
    },
    {
      image: "https://dummyimage.com/428x268",
      title: "The 400 Blows - A Cinematic Classic",
      price: "18.40",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Product;
