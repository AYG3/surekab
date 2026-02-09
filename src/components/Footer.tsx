import React from 'react';
import { Shield, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

/**
 * Footer Component
 * Navigation, social links, and legal information
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#careers' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' }
    ],
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Solutions', href: '#solution' },
      { label: 'For Universities', href: '#audience' }
    ]
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/safekab', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/safekab', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/safekab', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Safekab</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Journey safety infrastructure for Africa. Real-time monitoring, emergency response, and peace of mind for every trip.
            </p>
            <p className="text-sm text-gray-500 italic">
              "Your Journey, Our Watch"
            </p>
            
            {/* Contact */}
            <div className="mt-6 flex items-center gap-2 text-gray-400 hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
              <a href="mailto:hello@safekab.com" className="hover:underline">
                hello@safekab.com
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-bold text-lg mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} Safekab. All rights reserved.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-accent p-3 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
