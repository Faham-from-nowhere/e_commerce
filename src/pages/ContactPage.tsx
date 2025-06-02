import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import Button from '../components/ui/Button';
import toast from 'react-hot-toast';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gradient-to-br from-red-500 to-orange-400 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-600">
              Have questions? We're here to help!
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-red-500" />
                  <a href="mailto:support@shopwave.com" className="ml-4 text-gray-600 hover:text-red-500">
                    support@shopwave.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-red-500" />
                  <span className="ml-4 text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-500" />
                  <span className="ml-4 text-gray-600">123 Commerce St, Shopping Mall, 10001</span>
                </div>
                <div className="flex items-center">
                  <Github className="h-6 w-6 text-red-500" />
                  <a 
                    href="https://github.com/shopwave" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-4 text-gray-600 hover:text-red-500"
                  >
                    ShopWave on GitHub
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                <div className="mt-4 space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <div>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                    className="bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;