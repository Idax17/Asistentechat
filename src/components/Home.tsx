import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, ArrowRight, GraduationCap, FileText } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Contenido Completo',
      description: 'Información detallada de todas las materias de la carrera'
    },
    {
      icon: Users,
      title: 'Para Estudiantes',
      description: 'Diseñado por y para estudiantes de Ingeniería Informática'
    },
    {
      icon: Award,
      title: 'Calidad Académica',
      description: 'Contenido revisado y actualizado constantemente'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 p-6 rounded-full backdrop-blur-sm border border-white/20">
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Biblioteca de
              <span className="block text-yellow-300">Materias</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Toda la información de la carrera de Ingeniería Informática en un solo lugar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/subjects"
                className="group bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Explorar Materias</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/40 flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Manual de Usuario</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas para tu carrera
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Una plataforma completa diseñada para apoyar tu éxito académico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-100"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Accede a toda la información de las materias organizadas por semestre
          </p>
          <Link
            to="/subjects"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Ver Todas las Materias</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;