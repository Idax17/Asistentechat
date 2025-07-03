import React from 'react';
import { GraduationCap, Settings, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {

  const navigation = [
    { name: 'Biblioteca', href: '/' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">UNEG Assistant</h1>
            <p className="text-sm text-gray-600">Asistente Académico Inteligente</p>
          </div>
        </div>

        
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  location.pathname === item.href
                   ? 'bg-blue-100 text-blue-700 shadow-md'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                 }`}
                 >
                 {item.name}
              </Link>
              ))}
            </nav>

          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;