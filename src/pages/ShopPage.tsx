import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ui/ProductCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

const ShopPage: React.FC = () => {
  const { products } = useShop();
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const categoryParam = searchParams.get('category');
  const searchQuery = searchParams.get('search')?.toLowerCase();
  
  // Get unique categories from products
  const categories = Array.from(new Set(products.map(p => p.category)));
  
  // Filter products based on selected criteria
  const filteredProducts = products.filter(product => {
    // If category is specified in URL params, use that instead of selected categories
    const matchesCategory = categoryParam 
      ? product.category === categoryParam 
      : selectedCategories.length === 0 || selectedCategories.includes(product.category);
      
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery) || 
      product.description?.toLowerCase().includes(searchQuery);
      
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {categoryParam ? `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} Products` : 'All Products'}
          </h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center text-gray-600 hover:text-gray-900"
          >
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-20">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <Filter className="h-5 w-5 text-gray-500" />
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCategories([...selectedCategories, category]);
                            } else {
                              setSelectedCategories(selectedCategories.filter(c => c !== category));
                            }
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-600 capitalize">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Price Range (₹)</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-24 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        min="0"
                      />
                      <span>to</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-24 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        min="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h2 className="text-lg font-medium text-gray-900">No products found</h2>
                <p className="mt-2 text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;