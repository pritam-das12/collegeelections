
import { Vote, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';
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
              
              <a
  href="https://www.instagram.com/spiritofnitd?igsh=MW5xMjc4dzYwb3k3eg==" // replace with the actual link
  target="_blank" // opens in a new tab
  rel="noopener noreferrer" // security best practice
  className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors duration-200"
>
  <Instagram className="h-5 w-5" /> 
  
</a>
<p className="text-white py-2">Follow us on Instagram</p>

              
            </div>
          </div>

          {/* Quick Links */}
          

          {/* Important Dates */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Important Dates</h3>
            <div className="space-y-3">
              <div className="text-slate-400">
                <p className="font-medium text-white">Nomination Filing</p>
                <p className="text-sm">4th-7th August, 2025</p>
              </div>
              <div className="text-slate-400">
                <p className="font-medium text-white">Declaration of Candidates</p>
                <p className="text-sm">11th August, 2025</p>
              </div>
              <div className="text-slate-400">
                <p className="font-medium text-white">Voting Day</p>
                <p className="text-sm">20th August, 2025</p>
              </div>
              <div className="text-slate-400">
                <p className="font-medium text-white">Counting Day</p>
                <p className="text-sm">20th August, 2025</p>
              </div>
              <div className="text-slate-400">
                <p className="font-medium text-white">Result Declaration Day</p>
                <p className="text-sm">21st August, 2025</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:spiritofnitd@gmail.com" className="hover:underline">spiritofnitd@gmail.com</a>
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