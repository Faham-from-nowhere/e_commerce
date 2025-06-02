import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import ProductCard from '../ui/ProductCard';

const FeaturedProducts: React.FC = () => {
  const { featuredProducts } = useShop();
  
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link to="/shop" className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;