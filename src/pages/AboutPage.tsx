import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-red-500 to-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">About ShopWave</h1>
            <p className="mt-4 text-xl text-gray-600">
              Your trusted destination for quality products and exceptional shopping experience
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
                <p className="mt-4 text-gray-600">
                  Founded with a vision to provide high-quality products at competitive prices, ShopWave has grown from a small online store to a trusted e-commerce destination. We believe in making shopping simple, enjoyable, and accessible to everyone.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                <p className="mt-4 text-gray-600">
                  To deliver an exceptional shopping experience by offering carefully curated products, outstanding customer service, and a user-friendly platform that makes online shopping a breeze.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Our Values</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-gradient-to-br from-red-500 to-orange-400 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Quality First</h3>
                <p className="mt-2 text-gray-600 text-center">
                  We never compromise on quality, ensuring every product meets our high standards.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-gradient-to-br from-red-500 to-orange-400 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Customer Focus</h3>
                <p className="mt-2 text-gray-600 text-center">
                  Your satisfaction is our priority, with dedicated support and easy returns.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-gradient-to-br from-red-500 to-orange-400 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">Innovation</h3>
                <p className="mt-2 text-gray-600 text-center">
                  Constantly improving our platform and services to enhance your shopping experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;