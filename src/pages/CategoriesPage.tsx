import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const categories = [
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Fashionable and comfortable clothing for every occasion',
    image: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: ['Denim Jacket', 'Classic Oxford Shirt', 'Slim Fit Jeans']
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Cutting-edge gadgets and accessories for modern living',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: ['Wireless Gaming Mouse', 'Mechanical Keyboard', 'Wireless Noise-Cancelling Headphones']
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Complete your look with our premium accessories collection',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: ['Leather Wallet', 'Canvas Tote Bag']
  },
  {
    id: 'footwear',
    name: 'Footwear',
    description: 'Step up your style with our collection of trendy footwear',
    image: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: ['Running Shoes']
  },
  {
    id: 'bags',
    name: 'Bags',
    description: 'Stylish and functional bags for every need',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: ['Everyday Backpack', 'Canvas Tote Bag']
  }
];

const CategoriesPage: React.FC = () => {
  const { products } = useShop();

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Shop by Category</h1>
          <p className="mt-4 text-xl text-gray-500">
            Explore our wide range of categories to find exactly what you're looking for
          </p>
        </div>

        <div className="space-y-12">
          {categories.map(category => (
            <div key={category.id} className="border-b border-gray-200 pb-12 last:border-b-0">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div className="relative">
                  <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                </div>
                <div className="mt-6 lg:mt-0">
                  <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                  <p className="mt-3 text-lg text-gray-500">{category.description}</p>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900">Featured Products:</h3>
                    <ul className="mt-2 space-y-2">
                      {category.featured.map(item => (
                        <li key={item} className="text-gray-600">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to={`/shop?category=${category.id}`}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Shop {category.name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;