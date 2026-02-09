import React from 'react';

interface InputProps {
  label?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

interface SelectProps {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
  required?: boolean;
  error?: string;
  className?: string;
}

/**
 * Reusable input component with validation states
 * Centralizes input styling and error handling
 */
export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error = '',
  className = ''
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
          {label} {required && <span className="text-accent">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 rounded-xl border ${
          error ? 'border-red-500' : 'border-gray-200'
        } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

/**
 * Reusable select component
 */
export const Select: React.FC<SelectProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  error = '',
  className = ''
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
          {label} {required && <span className="text-accent">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 rounded-xl border ${
          error ? 'border-red-500' : 'border-gray-200'
        } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-white`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : undefined}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${name}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
