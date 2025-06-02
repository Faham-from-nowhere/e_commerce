import { Product } from '../types';

export const products: Product[] = [
  // Electronics - Mobile & Tablets
  {
    id: 'e1',
    name: 'iPhone 15 Pro',
    description: 'Latest iPhone with A17 Pro chip, 48MP camera system, and titanium design.',
    price: 134900,
    category: 'electronics',
    subcategory: 'mobiles',
    image: 'https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg',
    rating: 4.9,
    inStock: true,
    featured: true,
    colors: ['black', 'white', 'blue', 'natural']
  },
  {
    id: 'e2',
    name: 'Samsung Galaxy S23 Ultra',
    description: '200MP camera, S Pen functionality, and powerful Snapdragon processor.',
    price: 124999,
    category: 'electronics',
    subcategory: 'mobiles',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
    rating: 4.8,
    inStock: true,
    colors: ['phantom black', 'cream', 'green', 'lavender']
  },
  
  // Electronics - Laptops
  {
    id: 'e3',
    name: 'MacBook Air M2',
    description: 'Powerful M2 chip, all-day battery life, and stunning Retina display.',
    price: 114900,
    category: 'electronics',
    subcategory: 'laptops',
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
    rating: 4.9,
    inStock: true,
    featured: true,
    colors: ['space gray', 'silver', 'midnight']
  },
  
  // Smart Home
  {
    id: 'sh1',
    name: 'Smart Home Hub',
    description: 'Central control for all your smart home devices with voice control.',
    price: 15999,
    category: 'smart-home',
    image: 'https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg',
    rating: 4.7,
    inStock: true,
    featured: true,
    colors: ['white', 'black']
  },
  {
    id: 'sh2',
    name: 'Smart Security Camera',
    description: '1080p HD security camera with night vision and two-way audio.',
    price: 8999,
    category: 'smart-home',
    image: 'https://images.pexels.com/photos/371949/pexels-photo-371949.jpeg',
    rating: 4.6,
    inStock: true,
    colors: ['white', 'black']
  },
  
  // Fitness
  {
    id: 'f1',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring and GPS.',
    price: 24999,
    category: 'fitness',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    rating: 4.8,
    inStock: true,
    featured: true,
    colors: ['black', 'silver', 'rose gold']
  },
  {
    id: 'f2',
    name: 'Premium Yoga Mat',
    description: 'Extra thick, non-slip yoga mat for comfortable practice.',
    price: 2499,
    category: 'fitness',
    image: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg',
    rating: 4.7,
    inStock: true,
    colors: ['blue', 'purple', 'grey']
  },
  {
    id: 'f3',
    name: 'Adjustable Dumbbells Set',
    description: 'Space-saving adjustable dumbbells for home workouts.',
    price: 29999,
    category: 'fitness',
    image: 'https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg',
    rating: 4.9,
    inStock: true,
    featured: true
  },
  
  // Clothing
  {
    id: 'c1',
    name: 'Classic Denim Jacket',
    description: 'Timeless denim jacket with a comfortable fit and durable construction.',
    price: 4999,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1082526/pexels-photo-1082526.jpeg',
    rating: 4.7,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['blue', 'black']
  },
  {
    id: 'c2',
    name: 'Premium Cotton T-Shirt',
    description: 'Soft, breathable cotton t-shirt perfect for everyday wear.',
    price: 1499,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg',
    rating: 4.5,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['white', 'black', 'navy', 'grey']
  },
  {
    id: 'c3',
    name: 'Slim Fit Chinos',
    description: 'Modern fit chinos made from premium cotton blend.',
    price: 2999,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
    rating: 4.6,
    inStock: true,
    sizes: ['30', '32', '34', '36'],
    colors: ['khaki', 'navy', 'olive']
  },
  {
    id: 'c4',
    name: 'Floral Summer Dress',
    description: 'Light and breezy summer dress with beautiful floral print.',
    price: 3499,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg',
    rating: 4.8,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['blue', 'pink', 'yellow']
  },
  
  // Footwear
  {
    id: 'fw1',
    name: 'Classic Leather Sneakers',
    description: 'Versatile leather sneakers perfect for casual wear.',
    price: 5999,
    category: 'footwear',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    rating: 4.7,
    inStock: true,
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['white', 'black', 'brown']
  },
  {
    id: 'fw2',
    name: 'Running Performance Shoes',
    description: 'Lightweight running shoes with superior cushioning.',
    price: 7999,
    category: 'footwear',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    rating: 4.9,
    inStock: true,
    featured: true,
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['blue', 'black', 'grey']
  },
  {
    id: 'fw3',
    name: 'Formal Oxford Shoes',
    description: 'Classic Oxford shoes crafted from premium leather.',
    price: 8999,
    category: 'footwear',
    image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg',
    rating: 4.8,
    inStock: true,
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['black', 'brown']
  },
  
  // Bags
  {
    id: 'b1',
    name: 'Leather Tote Bag',
    description: 'Spacious tote bag made from genuine leather.',
    price: 6999,
    category: 'bags',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    rating: 4.7,
    inStock: true,
    colors: ['brown', 'black', 'tan']
  },
  {
    id: 'b2',
    name: 'Canvas Backpack',
    description: 'Durable canvas backpack with multiple compartments.',
    price: 3999,
    category: 'bags',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
    rating: 4.6,
    inStock: true,
    colors: ['navy', 'grey', 'olive']
  },
  {
    id: 'b3',
    name: 'Weekend Duffle Bag',
    description: 'Perfect travel companion with ample storage space.',
    price: 5999,
    category: 'bags',
    image: 'https://images.pexels.com/photos/2534961/pexels-photo-2534961.jpeg',
    rating: 4.8,
    inStock: true,
    colors: ['black', 'brown', 'navy']
  },
  
  // Accessories
  {
    id: 'a1',
    name: 'Premium Leather Wallet',
    description: 'Handcrafted genuine leather wallet with RFID protection.',
    price: 2999,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    rating: 4.7,
    inStock: true,
    colors: ['brown', 'black', 'tan']
  },
  {
    id: 'a2',
    name: 'Designer Sunglasses',
    description: 'UV protection sunglasses with polarized lenses.',
    price: 7999,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg',
    rating: 4.6,
    inStock: true,
    colors: ['black', 'tortoise', 'gold']
  },
  {
    id: 'a3',
    name: 'Premium Watch Collection',
    description: 'Elegant automatic watch with sapphire crystal.',
    price: 15999,
    category: 'accessories',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
    rating: 4.8,
    inStock: true,
    featured: true,
    colors: ['silver', 'gold', 'rose gold']
  },
  
  // Gaming
  {
    id: 'g1',
    name: 'PlayStation 5',
    description: 'Next-gen gaming console with 4K graphics and lightning-fast loading.',
    price: 49999,
    category: 'gaming',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    rating: 4.9,
    inStock: true,
    featured: true,
    colors: ['white']
  },
  {
    id: 'g2',
    name: 'Gaming Headset',
    description: '7.1 surround sound gaming headset with noise-cancelling mic.',
    price: 12999,
    category: 'gaming',
    image: 'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg',
    rating: 4.7,
    inStock: true,
    colors: ['black', 'white']
  }
];