import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and cutting-edge technology',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
    featured: ['iPhone 15 Pro', 'MacBook Air M2', 'Samsung Galaxy S23 Ultra']
  },
  {
    id: 'smart-home',
    name: 'Smart Home',
    description: 'Make your home smarter with connected devices',
    image: 'https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg',
    featured: ['Smart Home Hub', 'Smart Security Camera', 'Smart LED Bulbs']
  },
  {
    id: 'fitness',
    name: 'Fitness',
    description: 'Equipment and gear for your workout routine',
    image: 'https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg',
    featured: ['Smart Fitness Watch', 'Adjustable Dumbbells', 'Yoga Mat']
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Complete your style with premium accessories',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    featured: ['Premium Leather Wallet', 'Designer Sunglasses', 'Premium Watch']
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Level up your gaming experience',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    featured: ['PlayStation 5', 'Gaming Headset', 'Gaming Chair']
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Trendy clothing and accessories for every style',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg',
    featured: ['Designer Handbag', 'Premium Sneakers', 'Fashion Accessories']
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Explore our wide range of categories to find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <div className="h-64 bg-gray-200">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <p className="text-sm text-gray-200 mt-2">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;