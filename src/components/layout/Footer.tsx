import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">ShopWave</h3>
            <p className="text-sm mb-4">
              Premium products for your everyday needs. Quality you can trust, prices you'll love.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=clothing" className="text-sm hover:text-white transition-colors">Clothing</Link></li>
              <li><Link to="/shop?category=accessories" className="text-sm hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/shop?category=electronics" className="text-sm hover:text-white transition-colors">Electronics</Link></li>
              <li><Link to="/shop?category=footwear" className="text-sm hover:text-white transition-colors">Footwear</Link></li>
              <li><Link to="/shop?category=sports" className="text-sm hover:text-white transition-colors">Sports</Link></li>
              <li><Link to="/shop?category=home" className="text-sm hover:text-white transition-colors">Home</Link></li>
            </ul>
          </div>
          
          {/* Customer Service Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-sm hover:text-white transition-colors">Shipping Information</Link></li>
              <li><Link to="/returns" className="text-sm hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/size-guide" className="text-sm hover:text-white transition-colors">Size Guide</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Commerce St, Shopping Mall, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:support@shopwave.com" className="text-sm hover:text-white transition-colors">
                  support@shopwave.com
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium text-white mb-2">Business Hours</h4>
              <p className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-sm">Sat: 10:00 AM - 4:00 PM</p>
              <p className="text-sm">Sun: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {currentYear} ShopWave. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><Link to="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/shipping" className="text-sm hover:text-white transition-colors">Shipping Info</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;