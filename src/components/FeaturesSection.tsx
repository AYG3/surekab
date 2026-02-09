import React from 'react';
import { Eye, UserCheck, Shield, FileCheck } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

/**
 * Key Features Grid Component
 * Displays core principles in 2x2 grid
 */
export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-7 h-7" />,
      title: 'Visibility Over Intervention',
      description: 'We prioritize transparency and real-time information over physical intervention. Your safety network stays informed, empowering better decisions.',
    },
    {
      icon: <UserCheck className="w-7 h-7" />,
      title: 'User-Controlled Safety',
      description: 'You decide when to activate tracking. No background surveillance, no hidden monitoring—just safety when you need it, privacy when you don\'t.',
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: 'System-Level Protection',
      description: 'Institutional dashboards give universities and organizations tools to monitor student safety at scale while respecting individual privacy.',
    },
    {
      icon: <FileCheck className="w-7 h-7" />,
      title: 'Evidence Matters',
      description: 'Verifiable, timestamped trip data creates accountability. Every journey is documented, providing crucial evidence when you need it most.',
    }
  ];

  return (
    <SectionWrapper className="py-20 px-6 bg-linear-to-br from-primary to-blue-900 text-white" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Built on Four <span className="text-accent">Core Principles</span>
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Every feature is designed with these fundamental values in mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
