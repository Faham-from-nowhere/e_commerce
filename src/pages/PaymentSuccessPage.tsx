import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const PaymentSuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Ah! So you want to pay for our cup of coffee! Thanks a lot, it's very much appreciated.
        </h1>
        
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <img
            src="https://raw.githubusercontent.com/Faham-from-nowhere/images/main/qr.png"
            alt="Payment QR Code"
            className="w-64 h-64 mx-auto"
          />
        </div>

        <Button
          variant="primary"
          onClick={() => navigate('/')}
          className="mt-4"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;