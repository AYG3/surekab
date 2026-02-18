import React from 'react';
import { GraduationCap, Building, Moon } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

/**
 * Target Audience Section Component
 * Showcasing who the platform serves
 */
export const AudienceSection: React.FC = () => {
  const audiences = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Students',
      description: 'University commuters navigating daily trips and night travels with confidence and family peace of mind.',
      gradient: 'from-blue-500 to-indigo-600',
      stats: 'Primary Focus'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Institutions',
      description: 'Campus security and safety offices with comprehensive monitoring tools for duty of care.',
      gradient: 'from-purple-500 to-pink-600',
      stats: 'B2B Partner'
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: 'Night Commuters',
      description: 'Anyone traveling during high-risk hours across urban areas who needs that extra layer of safety.',
      gradient: 'from-orange-500 to-red-600',
      stats: 'Extended Reach'
    }
  ];

  return (
    <SectionWrapper className="py-20 px-6 bg-white" id="audience">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Who We're <span className="text-primary">Building For</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Echos is designed for the Nigerian mobility ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${audience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative p-8 space-y-6">
                {/* Icon */}
                <div className={`bg-linear-to-br ${audience.gradient} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <div className="text-white">{audience.icon}</div>
                </div>

                {/* Badge */}
                <div className="inline-block">
                  <span className={`bg-linear-to-r ${audience.gradient} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {audience.stats}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{audience.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{audience.description}</p>
                </div>

                {/* Visual element */}
                <div className="pt-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-linear-to-r ${audience.gradient} rounded-full group-hover:w-full w-0 transition-all duration-1000`}></div>
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
