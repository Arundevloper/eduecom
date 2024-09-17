import React from "react";
import { FiShoppingCart } from "react-icons/fi";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Centered Image */}
        <div className="flex justify-center">
          <a
            className="block relative rounded overflow-hidden"
            style={{ width: "256px", height: "255px" }}
          >
            <img
              alt={title}
              className="object-cover object-center w-full h-full block rounded-lg"
              src={image}
            />
          </a>
        </div>

        {/* Product Info */}
        <div className="mt-4 text-left">
          <h2 className="text-gray-900 title-font text-lg">{title}</h2>

          {/* Pricing Information */}
          <div className="mt-2 flex items-center">
            {/* Discount with Red Background and Rounded Corners */}
            <p className="bg-red-500 text-white text-sm font-medium mr-4 py-1 px-2 rounded-full">
              {((500 / (parseFloat(price) + 500)) * 100).toFixed(0)}% OFF
            </p>
            {/* Grey Price */}
            <p className="text-gray-600 text-2xl font-semibold mr-4">
              ₹{price}
            </p>
            {/* Original Price */}
            <p className="text-gray-400 line-through text-sm">
              ₹{(parseFloat(price) + 500).toFixed(2)}
            </p>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-6 w-full flex items-center justify-center bg-white text-purple-500 font-semibold py-2 px-4 rounded-lg border-2 border-purple-500 hover:bg-purple-500 hover:text-white transition-colors duration-300">
          <FiShoppingCart className="mr-2 text-xl" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
