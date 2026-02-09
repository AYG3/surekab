import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Reusable section wrapper with fade-in animation on scroll
 * Optimizes animation performance with useInView hook
 */
export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', id = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};
