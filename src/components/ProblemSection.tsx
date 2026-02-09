import React from 'react';
import { Eye, AlertTriangle, FileQuestion, Building2 } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './Card';

/**
 * Problem Statement Section Component
 * Highlights key safety challenges in urban mobility
 */
export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'No Real-Time Journey Visibility',
      description: 'Families and institutions have no way to monitor trips as they happen, leaving everyone in the dark.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Weak Emergency Response',
      description: 'When emergencies occur, getting help to the right location quickly remains a critical challenge.'
    },
    {
      icon: <FileQuestion className="w-6 h-6" />,
      title: 'No Verifiable Trip Records',
      description: 'Without reliable trip evidence, accountability and resolution become nearly impossible.'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Limited Institutional Tools',
      description: 'Universities lack comprehensive systems to support student safety beyond campus grounds.'
    }
  ];

  return (
    <SectionWrapper className="py-20 px-6 bg-gray-50" id="problem">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Urban Mobility Shouldn't <br />
            <span className="text-primary">Mean Safety Risk</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every day, millions of Nigerians face preventable risks during their commutes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              iconBgColor="bg-red-50"
              iconColor="text-red-600"
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
