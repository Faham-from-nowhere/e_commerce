import React, { useState } from 'react';
import Button from '../ui/Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the newsletter signup
    setIsSubmitted(true);
  };
  
  return (
    <section className="py-12 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Subscribe to our newsletter
          </h2>
          <p className="mt-3 text-xl text-blue-100 max-w-2xl mx-auto">
            Get the latest updates, sales, and special offers delivered directly to your inbox.
          </p>
          
          <div className="mt-8 max-w-md mx-auto">
            {isSubmitted ? (
              <div className="bg-white bg-opacity-10 rounded-lg py-4 px-6 text-lg text-white">
                Thanks for subscribing! Check your email for a confirmation.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="sm:flex">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-amber-500 hover:bg-amber-600 focus:ring-amber-500"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            )}
          </div>
          
          <p className="mt-3 text-sm text-blue-100">
            We care about your data. Read our{' '}
            <a href="/privacy" className="font-medium text-white underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;