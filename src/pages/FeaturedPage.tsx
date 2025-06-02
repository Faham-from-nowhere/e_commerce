import React from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ui/ProductCard';

const FeaturedPage: React.FC = () => {
  const { products } = useShop();

  // Get bestsellers (products with highest ratings)
  const bestsellers = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  // Get exclusive products (premium price range)
  const exclusiveProducts = products
    .filter(product => product.price >= 50000)
    .slice(0, 6);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Featured Products</h1>
          <p className="mt-4 text-xl text-gray-500">
            Discover our most popular and exclusive collections
          </p>
        </div>

        {/* Bestsellers Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Bestsellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Exclusive Products Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Exclusive Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exclusiveProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPage;