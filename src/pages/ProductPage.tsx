import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { products, addToCart, isProductInCart } = useShop();
  
  const product = products.find(p => p.id === productId);
  
  // If product doesn't exist, show not found
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <p className="mt-2 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
        <Button 
          variant="primary" 
          className="mt-4"
          onClick={() => navigate('/shop')}
        >
          Continue Shopping
        </Button>
      </div>
    );
  }
  
  // Product details state
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [activeImage, setActiveImage] = useState(product.image);
  
  // Calculate the sale price if there's a discount
  const salePrice = product.discount 
    ? (product.price - (product.price * product.discount / 100))
    : null;
    
  // Handle Add to Cart
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };
  
  // Related products (in a real app, this would be more sophisticated)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product images */}
          <div className="lg:max-w-lg lg:self-start">
            <div className="rounded-lg overflow-hidden">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
            
            {/* Image thumbnails - would be more in a real app */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              <button
                className={`relative rounded-md overflow-hidden ${
                  activeImage === product.image ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveImage(product.image)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover"
                />
              </button>
              {/* Additional image spots */}
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="bg-gray-200 rounded-md aspect-w-1 aspect-h-1"></div>
              ))}
            </div>
          </div>
          
          {/* Product details */}
          <div className="mt-10 lg:mt-0 lg:ml-8">
            {/* Product info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              
              <div className="mt-3">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <Star
                        key={rating}
                        className={`h-5 w-5 ${
                          product.rating > rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-gray-500 text-sm">Based on reviews</p>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center">
                  {salePrice ? (
                    <>
                      <p className="text-3xl text-gray-900 font-bold">${salePrice.toFixed(2)}</p>
                      <p className="ml-3 text-lg text-gray-500 line-through">${product.price.toFixed(2)}</p>
                      <span className="ml-3 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded">
                        {product.discount}% OFF
                      </span>
                    </>
                  ) : (
                    <p className="text-3xl text-gray-900 font-bold">${product.price.toFixed(2)}</p>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                <h2 className="text-sm font-medium text-gray-900">Description</h2>
                <div className="mt-3 prose prose-sm text-gray-500">
                  <p>{product.description}</p>
                </div>
              </div>
              
              {/* Color selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-sm font-medium text-gray-900">Color</h2>
                  <div className="mt-2 flex space-x-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`relative h-8 w-8 rounded-full border ${
                          selectedColor === color
                            ? 'ring-2 ring-offset-2 ring-blue-500'
                            : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Color: ${color}`}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Size selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-sm font-medium text-gray-900">Size</h2>
                  <div className="mt-2 grid grid-cols-4 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`py-2 px-4 text-sm border rounded-md ${
                          selectedSize === size
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity selector */}
              <div className="mt-6">
                <h2 className="text-sm font-medium text-gray-900">Quantity</h2>
                <div className="mt-2 flex items-center border border-gray-300 rounded-md">
                  <button
                    type="button"
                    className="p-2 text-gray-500 hover:text-gray-600"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <span className="sr-only">Decrease</span>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    className="w-12 text-center border-transparent focus:border-blue-500 focus:ring-0"
                    value={quantity}
                    min="1"
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  />
                  <button
                    type="button"
                    className="p-2 text-gray-500 hover:text-gray-600"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <span className="sr-only">Increase</span>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Add to cart and favorite buttons */}
              <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleAddToCart}
                  disabled={isProductInCart(product.id)}
                  className="flex items-center justify-center"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  {isProductInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center justify-center"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </Button>
              </div>
              
              {/* Additional info */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="space-y-4">
                  <div className="flex">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="ml-2 text-sm text-gray-500">Free shipping on orders over $75</p>
                  </div>
                  <div className="flex">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="ml-2 text-sm text-gray-500">Free 30-day returns</p>
                  </div>
                  <div className="flex">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="ml-2 text-sm text-gray-500">1 year warranty included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related products section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">You may also like</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;