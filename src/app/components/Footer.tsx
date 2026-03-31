import { Link } from "react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Perfect Coaching Logo" 
                className="h-16 w-auto rounded-xl shadow-lg border border-gray-800" 
              />
            </div>
            <p className="text-sm text-gray-400">
              Premier coaching institute for Commerce students (Class 11th & 12th, CBSE)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sky-500">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-sky-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-gray-400 hover:text-sky-500 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-sky-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-sm text-gray-400 hover:text-sky-500 transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-sky-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-4 text-sky-500">Courses</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Class 11th Commerce</li>
              <li>Class 12th Commerce</li>
              <li>B.Com</li>
              <li>BBA</li>
              <li>MBA</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-sky-500">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-sky-500 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:7987895503" className="text-sm text-gray-400 hover:text-sky-500 transition-colors">
                    79878-95503
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-sky-500 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:perfectcoachings0@gmail.com" className="text-sm text-gray-400 hover:text-sky-500 transition-colors">
                    perfectcoachings0@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-sky-500 mt-1 flex-shrink-0" />
                <div>
                  <a href="https://share.google/wWs9dAG9ijMzuYVqX" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-sky-500 transition-colors">
                    Near Main Market<br />
                    Madhya Pradesh, India
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Perfect Coaching Classes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
