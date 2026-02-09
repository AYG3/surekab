import React from 'react';

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconBgColor?: string;
  iconColor?: string;
}

/**
 * Reusable card component with consistent styling
 * Eliminates duplicate card markup across sections
 */
export const Card: React.FC<CardProps> = ({ 
  icon, 
  title, 
  description, 
  className = '',
  iconBgColor = 'bg-blue-50',
  iconColor = 'text-primary'
}) => {
  return (
    <div className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      {icon && (
        <div className={`${iconBgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
          <div className={iconColor}>{icon}</div>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
