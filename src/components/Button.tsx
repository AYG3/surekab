import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

/**
 * Reusable button component with variants
 * Ensures consistent button styling and behavior
 */
export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  type = 'button',
  onClick,
  className = '',
  disabled = false,
  fullWidth = false
}) => {
  const baseStyles = 'px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-accent hover:bg-accent-dark text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95',
    secondary: 'bg-primary hover:bg-primary-dark text-white',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};
