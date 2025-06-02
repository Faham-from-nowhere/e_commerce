import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../../types';
import Button from './Button';
import { useShop } from '../../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, isProductInCart } = useShop();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  // Calculate the sale price if there's a discount
  const salePrice = product.discount 
    ? (product.price - (product.price * product.discount / 100)).toFixed(2) 
    : null;
  
  // Format price in Indian Rupees
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  return (
    <div className="group relative">
      <div className="overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 group-hover:shadow-md">
        <Link to={`/product/${product.id}`} className="block relative">
          <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          {/* Badge overlays */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.new && (
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
            )}
            {product.discount && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {product.discount}% OFF
              </span>
            )}
          </div>
          
          {/* Quick add button - appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button
              variant="primary"
              size="sm"
              onClick={handleAddToCart}
              disabled={isProductInCart(product.id)}
              className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0"
            >
              {isProductInCart(product.id) ? 'Added to Cart' : 'Quick Add'}
            </Button>
          </div>
        </Link>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-gray-900 truncate">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </h3>
              <div className="mt-1 flex items-center">
                <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                <span className="ml-1 text-xs text-gray-500">{product.rating}</span>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex flex-col items-end">
                {salePrice ? (
                  <>
                    <span className="text-sm font-medium text-gray-900">{formatPrice(Number(salePrice))}</span>
                    <span className="text-xs text-gray-500 line-through">{formatPrice(product.price)}</span>
                  </>
                ) : (
                  <span className="text-sm font-medium text-gray-900">{formatPrice(product.price)}</span>
                )}
              </div>
            </div>
          </div>
          
          {/* Available colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-3 flex items-center gap-1">
              {product.colors.map(color => (
                <div 
                  key={color} 
                  className="h-3 w-3 rounded-full border border-gray-300" 
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;