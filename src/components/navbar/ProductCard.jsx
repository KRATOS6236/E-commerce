import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, title }) => {
  return (
    <div className="relative group overflow-hidden">
      <div className="w-full h-[500px] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
          <Link to="/men" className="px-6 py-2 bg-white text-black font-semibold hover:bg-black transition-colors hover:text-white">
            Shop Men
          </Link>
          <Link to="/women" className="px-6 py-2 bg-white text-black font-semibold hover:bg-black  transition-colors hover:text-white">
            Shop Women
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 