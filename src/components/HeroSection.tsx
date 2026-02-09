import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Shield, ChevronRight } from 'lucide-react';
import { Button } from './Button';

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

/**
 * Hero Section Component
 * Main landing section with value proposition and CTA
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ onJoinWaitlist }) => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-orange-50 -z-10"></div>
      
      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 opacity-5 -z-10" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3A8A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 Launching Soon at Universities
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-gray-900">
                Journey Safety <br />
                <span className="text-primary">for Every Trip</span>
              </h1>
              
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Real-time trip monitoring, emergency alerts, and shared visibility for students 
                and commuters across Nigeria
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="primary" 
                onClick={onJoinWaitlist}
                className="group"
              >
                Join the Waitlist
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center gap-2 text-gray-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-purple-400 border-2 border-white"></div>
                  ))}
                </div>
                {/* <span className="text-sm font-medium">Join 500+ early adopters</span> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 text-sm text-gray-500"
            >
              <p className="font-semibold text-primary">Your Journey, Our Watch</p>
            </motion.div>
          </div>

          {/* Right column - Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <div className="relative">
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              
              {/* Main illustration card */}
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                {/* Mock app interface */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-linear-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Active Trip</p>
                        <p className="text-sm text-gray-500">To Campus</p>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                      LIVE
                    </div>
                  </div>

                  {/* Map preview */}
                  <div className="h-48 bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <MapPin className="w-12 h-12 text-accent animate-bounce" />
                    <div className="absolute top-4 right-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-full animate-ping"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md text-xs font-semibold">
                      📍 5 min away
                    </div>
                  </div>

                  {/* Status indicators */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 p-3 rounded-xl">
                      <p className="text-xs text-gray-600 mb-1">Watchers</p>
                      <p className="text-lg font-bold text-primary">3 active</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-xl">
                      <p className="text-xs text-gray-600 mb-1">Safety Score</p>
                      <p className="text-lg font-bold text-accent">98%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for blob animation */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};
