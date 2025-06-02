import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  children, 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
    secondary: 'bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-500',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 focus-visible:ring-gray-400',
    ghost: 'bg-transparent hover:bg-gray-100 focus-visible:ring-gray-400'
  };
  
  const sizes = {
    sm: 'text-sm h-8 px-3 py-1',
    md: 'text-base h-10 px-4 py-2',
    lg: 'text-lg h-12 px-6 py-3'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;