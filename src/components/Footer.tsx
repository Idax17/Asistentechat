import React from 'react';
import { GraduationCap, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Logo and Info */}
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-xl shadow-lg">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">UNEG</h3>
              <p className="text-blue-200 font-semibold">Ing. Informática</p>
              <p className="text-gray-300 text-sm mt-1">
                Universidad Nacional Experimental de Guayana
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-300 mb-2">
              © 2025 Biblioteca de Materias - UNEG
            </p>
            <div className="flex items-center justify-center md:justify-end space-x-1 text-sm text-gray-400">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>para estudiantes</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;