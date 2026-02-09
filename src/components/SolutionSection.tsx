import React from 'react';
import { Play, Users, Route, Bell, FileText } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

/**
 * Solution Overview Section Component
 * 5-step journey showing how Safekab protects users
 */
export const SolutionSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: <Play className="w-6 h-6" />,
      title: 'Start Your Trip',
      description: 'Initiate trip tracking manually when you begin your journey—complete user control.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      icon: <Users className="w-6 h-6" />,
      title: 'Share with Trusted Contacts',
      description: 'Your selected family members or institution security team see your live journey.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '03',
      icon: <Route className="w-6 h-6" />,
      title: 'Smart Monitoring',
      description: 'AI-powered route tracking with automatic deviation detection and smart alerts.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      number: '04',
      icon: <Bell className="w-6 h-6" />,
      title: 'Emergency SOS',
      description: 'One-tap panic button instantly alerts your entire safety network with your location.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: '05',
      icon: <FileText className="w-6 h-6" />,
      title: 'Trip Evidence',
      description: 'Secure, verifiable journey records and logs for accountability and peace of mind.',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <SectionWrapper className="py-20 px-6 bg-white" id="solution">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            How Safekab <span className="text-accent">Protects Your Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, powerful 5-step system designed for African urban mobility
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12`}
            >
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-extrabold text-gray-100">{step.number}</span>
                  <div className={`bg-linear-to-br ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                    <div className="text-white">{step.icon}</div>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Visual representation */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className={`bg-linear-to-br ${step.color} opacity-10 absolute inset-0 rounded-3xl blur-2xl`}></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                    <div className="aspect-square bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center">
                      <div className={`bg-linear-to-br ${step.color} w-20 h-20 rounded-full flex items-center justify-center animate-pulse`}>
                        <div className="text-white scale-150">{step.icon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
