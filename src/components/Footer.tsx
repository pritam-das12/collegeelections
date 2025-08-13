import React from 'react';
import { Vote, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Vote className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">
                Gymkhana <span className="text-blue-400">Elections</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Empowering students to shape their college experience through democratic participation and leadership.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Candidates', 'Manifesto', 'About Us', 'Contact', 'Voting Guidelines', 'Election Results'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Dates */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Important Dates</h3>
            <div className="space-y-3">
              <div className="text-slate-400">
                <p className="font-medium text-white">Nomination Filing</p>
                <p className="text-sm">March 1-5, 2025</p>
              </div>
              <div className="text-slate-400">
                <p className="font-medium text-white">Campaign Period</p>
                <p className="text-sm">March 6-15, 2025</p>
              </div>
              <div className="text-slate-400">
                <p className="font-medium text-white">Voting Day</p>
                <p className="text-sm">March 20, 2025</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-sm">gymkhana@college.edu</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-sm">+91 12345 67890</span>
              </div>
              <div className="flex items-start space-x-3 text-slate-400">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-sm">
                  Student Activity Center<br />
                  Room 201, Main Building
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2025 College Gymkhana Elections. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Election Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};