import React, { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { Input, Select } from './Input';
import { Button } from './Button';

interface FormValues {
  fullName: string;
  email: string;
  university: string;
  userType: string;
  phone: string;
}

interface FormErrors {
  [key: string]: string;
}

/**
 * Custom hook for form validation
 * Centralizes validation logic for reusability
 */
const useFormValidation = (initialState: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'email':
        return !validateEmail(value) ? 'Please enter a valid email address' : '';
      case 'fullName':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'university':
        return value.trim().length === 0 ? 'Please select your institution' : '';
      case 'userType':
        return value.trim().length === 0 ? 'Please select your user type' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    Object.keys(values).forEach((key) => {
      if (['fullName', 'email', 'university', 'userType'].includes(key)) {
        const error = validateField(key, values[key as keyof FormValues]);
        if (error) newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { values, errors, handleChange, validateForm, setValues };
};

/**
 * Waitlist Form Component
 * Handles user registration with validation and localStorage persistence
 */
export const WaitlistSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { values, errors, handleChange, validateForm, setValues } = useFormValidation({
    fullName: '',
    email: '',
    university: '',
    userType: '',
    phone: ''
  });

  const universities = [
    { value: 'unilag', label: 'University of Lagos (UNILAG)' },
    { value: 'ui', label: 'University of Ibadan (UI)' },
    { value: 'unn', label: 'University of Nigeria, Nsukka (UNN)' },
    { value: 'oau', label: 'Obafemi Awolowo University (OAU)' },
    { value: 'abu', label: 'Ahmadu Bello University (ABU)' },
    { value: 'uniport', label: 'University of Port Harcourt (UNIPORT)' },
    { value: 'lasu', label: 'Lagos State University (LASU)' },
    { value: 'covenant', label: 'Covenant University' },
    { value: 'babcock', label: 'Babcock University' },
    { value: 'other', label: 'Other Institution' }
  ];

  const userTypes = [
    { value: 'student', label: 'Student' },
    { value: 'admin', label: 'University/Institution Admin' },
    { value: 'parent', label: 'Parent/Guardian' },
    { value: 'commuter', label: 'Regular Commuter' },
    { value: 'other', label: 'Other' }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Save to localStorage
    const existingData = JSON.parse(localStorage.getItem('echos_waitlist') || '[]');
    const newEntry = {
      ...values,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    existingData.push(newEntry);
    localStorage.setItem('echos_waitlist', JSON.stringify(existingData));

    setIsSubmitting(false);
    setSubmitted(true);

    // Log for development (can be replaced with actual API call)
    console.log('Waitlist submission:', newEntry);
  };

  if (submitted) {
    return (
      <SectionWrapper className="py-20 px-6 bg-linear-to-br from-green-50 to-emerald-50" id="waitlist">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-green-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              You're on the List! 🎉
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to the Echos early access community. We'll notify you as soon as we launch at your university.
            </p>
            <p className="text-sm text-gray-500">
              Registered as: <span className="font-semibold">{values.email}</span>
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setValues({
                  fullName: '',
                  email: '',
                  university: '',
                  userType: '',
                  phone: ''
                });
              }}
              className="mt-6 text-primary hover:text-primary-dark font-semibold underline"
            >
              Submit another entry
            </button>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper className="py-20 px-6 bg-linear-to-br from-blue-50 via-white to-orange-50" id="waitlist">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Be Among the First to Experience <br />
            <span className="text-accent">Safer Journeys</span>
          </h2>
          <p className="text-lg text-gray-600">
            Join our waitlist and get early access when we launch at your university
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              required
              error={errors.fullName}
            />

            <Input
              label="Email Address"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="john@university.edu"
              required
              error={errors.email}
            />

            <Select
              label="University/Institution"
              name="university"
              value={values.university}
              onChange={handleChange}
              options={universities}
              required
              error={errors.university}
            />

            <Select
              label="I am a..."
              name="userType"
              value={values.userType}
              onChange={handleChange}
              options={userTypes}
              required
              error={errors.userType}
            />

            <Input
              label="Phone Number (Optional)"
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="+234 800 000 0000"
            />

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
              className="mt-8"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Securing Your Spot...
                </>
              ) : (
                '🚀 Secure My Spot'
              )}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            🔒 We respect your privacy. No spam, just launch updates.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
