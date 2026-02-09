import React from 'react';
import { Lock, Heart, Handshake } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

/**
 * Trust & Credibility Section Component
 * Builds confidence in the platform
 */
export const TrustSection: React.FC = () => {
  const trustIndicators = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Privacy First',
      description: 'User-initiated tracking with minimal data retention. You control when we watch, and we never track without permission.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'African-Built',
      description: 'Designed specifically for Nigerian and African mobility contexts—understanding local challenges, routes, and safety concerns.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Institutional Partnerships',
      description: 'Working directly with universities to provide campus-wide safety infrastructure and institutional support.',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <SectionWrapper className="py-20 px-6 bg-gray-50" id="trust">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Safety You Can <span className="text-primary">Trust</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built on transparency, cultural understanding, and institutional collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustIndicators.map((indicator, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`bg-linear-to-br ${indicator.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <div className="text-white">{indicator.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{indicator.title}</h3>
              <p className="text-gray-600 leading-relaxed">{indicator.description}</p>
            </div>
          ))}
        </div>

        {/* Additional trust elements */}
        {/* <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-primary">500+</p>
              <p className="text-sm text-gray-600 mt-1">Early Adopters</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-primary">5+</p>
              <p className="text-sm text-gray-600 mt-1">Partner Universities</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-primary">99.9%</p>
              <p className="text-sm text-gray-600 mt-1">Uptime SLA</p>
            </div>
          </div>
        </div> */}
      </div>
    </SectionWrapper>
  );
};
