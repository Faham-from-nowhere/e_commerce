import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateCartItemQuantity, subtotal, clearCart } = useShop();
  const navigate = useNavigate();
  
  // Calculate shipping fee (free above a certain amount)
  const shippingFee = subtotal > 75 ? 0 : 5.99;
  
  // Calculate total with shipping
  const total = subtotal + shippingFee;
  
  // If cart is empty, show empty state
  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="flex flex-col items-center">
          <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900">Your cart is empty</h1>
          <p className="mt-2 text-gray-600">Looks like you haven't added any products to your cart yet.</p>
          <Button 
            variant="primary" 
            className="mt-6"
            onClick={() => navigate('/shop')}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        
        <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          {/* Cart items */}
          <div className="lg:col-span-8">
            <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} className="py-6 flex">
                  {/* Product image */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  
                  {/* Product details */}
                  <div className="ml-4 flex-1 flex flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
                        </h3>
                        <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                      
                      {/* Color and size */}
                      <div className="mt-1 text-sm text-gray-500">
                        {item.selectedColor && (
                          <span className="mr-2">
                            Color: <span className="capitalize">{item.selectedColor}</span>
                          </span>
                        )}
                        {item.selectedSize && (
                          <span>
                            Size: {item.selectedSize}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1 flex items-end justify-between text-sm">
                      {/* Quantity selector */}
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          type="button"
                          className="p-1 text-gray-500 hover:text-gray-600"
                          onClick={() => updateCartItemQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                        >
                          <span className="sr-only">Decrease</span>
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <input
                          type="number"
                          className="w-10 text-center border-transparent focus:border-blue-500 focus:ring-0 text-sm"
                          value={item.quantity}
                          min="1"
                          onChange={(e) => updateCartItemQuantity(item.product.id, parseInt(e.target.value) || 1)}
                        />
                        <button
                          type="button"
                          className="p-1 text-gray-500 hover:text-gray-600"
                          onClick={() => updateCartItemQuantity(item.product.id, item.quantity + 1)}
                        >
                          <span className="sr-only">Increase</span>
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Remove button */}
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-700 flex items-center"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Actions */}
            <div className="mt-6 flex justify-between">
              <Button
                variant="outline"
                onClick={() => navigate('/shop')}
              >
                Continue Shopping
              </Button>
              
              <Button
                variant="outline"
                className="text-red-500 border-red-500 hover:bg-red-50"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="mt-10 lg:mt-0 lg:col-span-4">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
              
              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Shipping</p>
                  <p>{shippingFee === 0 ? 'Free' : `$${shippingFee.toFixed(2)}`}</p>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Tax</p>
                  <p>Calculated at checkout</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-medium text-gray-900">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button
                  variant="primary"
                  fullWidth
                  size="lg"
                  onClick={() => navigate('/checkout')}
                >
                  Proceed to Checkout
                </Button>
              </div>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>or</p>
                <button className="text-blue-600 font-medium hover:text-blue-500">
                  Continue Shopping
                </button>
              </div>
              
              {/* Payment methods */}
              <div className="mt-6 border-t border-gray-200 pt-4">
                <div className="flex justify-center space-x-2">
                  <svg className="h-6 w-10 text-gray-400" fill="currentColor" viewBox="0 0 36 24">
                    <rect width="36" height="24" rx="4" fill="#eeeeee" />
                    <path d="M10 13.2L11.2 11l1.1 2.2H10z" fill="#888888" />
                  </svg>
                  <svg className="h-6 w-10 text-gray-400" fill="currentColor" viewBox="0 0 36 24">
                    <rect width="36" height="24" rx="4" fill="#eeeeee" />
                    <path d="M18 15a2 2 0 100-4 2 2 0 000 4z" fill="#888888" />
                  </svg>
                  <svg className="h-6 w-10 text-gray-400" fill="currentColor" viewBox="0 0 36 24">
                    <rect width="36" height="24" rx="4" fill="#eeeeee" />
                    <path d="M12 12v-2h12v2H12zm0 2h12v2H12v-2z" fill="#888888" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;