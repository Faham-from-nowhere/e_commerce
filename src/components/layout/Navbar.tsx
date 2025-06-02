import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const { totalItems, user, logout } = useShop();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Reset search when opening
      setSearchQuery('');
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and main nav */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-blue-600">
                ShopWave
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition duration-150"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Right side icons */}
          <div className="flex items-center">
            <button 
              onClick={toggleSearch}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Link 
              to="/cart" 
              className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none relative"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-4 w-4 rounded-full bg-blue-600 text-white text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {user ? (
              <div className="ml-4 relative flex">
                <Link
                  to="/account"
                  className="flex items-center space-x-1 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                >
                  <User className="h-5 w-5" />
                  <span className="text-sm hidden md:inline">{user.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="text-sm text-gray-500 hover:text-gray-700 p-2"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <User className="h-5 w-5" />
              </Link>
            )}
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden ml-4">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-label="Main menu"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Search overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-16 px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Search products</h2>
              <button 
                onClick={toggleSearch}
                className="text-gray-400 hover:text-gray-500"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full p-3 pr-10 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button 
                type="submit"
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                aria-label="Submit search"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;