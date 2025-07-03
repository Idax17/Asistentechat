import React, { useState } from 'react';
import Header from '../components/Header2';
import Sidebar from '../components/Sidebar';
import ChatInterface from '../components/ChatInterface';
import SubjectsView from '../components/SubjectsView';
import ResourcesView from '../components/ResourcesView';
import ScheduleView from '../components/ScheduleView';
import chatboxImg from '../data/chatboxis.png';
import { GraduationCap, Settings, User, ArrowRight , FileText} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('chat');

  // Función para descargar PDFs
  const downloadPDF = (fileName: string) => {
    // Ruta relativa a los PDFs en la carpeta public
    const pdfUrl = `/pdfs/${fileName}`;
    
    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'chat':
  return (
    <div className="p-6 bg-gray-50 min-h-full flex flex-col">
      {/* Encabezado con imagen del chatbot */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <img 
            src={chatboxImg} 
            alt="Asistente Virtual" 
            className="w-24 h-24 object-contain rounded-full border-4 border-white shadow-md"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Asistente Virtual</h2>
        <p className="text-gray-600">¿En qué puedo ayudarte hoy?</p>
      </div>

      {/* Contenedor del chat con espacio para la imagen */}
      <div className="flex-1 flex flex-col md:flex-row gap-6">
        {/* Panel de la interfaz de chat (toma todo el espacio disponible) */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <ChatInterface />
        </div>
        
        {/* Panel lateral con información del chatbot (solo visible en desktop) */}
        <div className="hidden md:block w-64 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex flex-col items-center text-center">
            <img 
              src={chatboxImg} 
              alt="Acerca del chatbot" 
              className="w-20 h-20 object-contain mb-3 rounded-full"
            />
            <h3 className="font-semibold text-gray-900">ChatBot UNEG</h3>
            <p className="text-sm text-gray-600 mt-2">
              Asistente virtual para estudiantes de la Universidad Nacional Experimental de Guayana 
            </p>
            <div className="mt-4 pt-3 border-t border-gray-100 w-full">
              <p className="text-xs font-medium text-gray-500">Capacidades:</p>
              <ul className="text-xs text-gray-600 mt-1 space-y-1">
                <li>• Consultas académicas</li>
                <li>• Horarios de clases</li>
                <li>• Material de estudio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
      case 'subjects':
        return <SubjectsView />;
      case 'resources':
        return <ResourcesView />;
        case 'homes':
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
      case 'schedule':
        return <ScheduleView />;
      case 'progress':
        return (
          <div className="p-6 bg-gray-50 min-h-full flex flex-col items-center justify-center">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Mi Progreso</h2>
              <p className="text-gray-600 mb-4">Verifica tus avances y mejoras</p>
              
              {/* Botón para descargar PDF */}
              <button
                onClick={() => downloadPDF('mi_progreso.pdf')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Descargar "Mi progreso"
              </button>
              
              {/* Puedes agregar más botones para otros PDFs si es necesario */}
              {/* <button
                onClick={() => downloadPDF('otro_archivo.pdf')}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors mt-4"
              >
                Descargar Otro Material
              </button> */}
            </div>
            
            {/* Imagen opcional */}
            <div className="max-w-xs">
              <img 
                src="/images/chatboxis.png" 
                alt="Avances del Alumno" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        );
      case 'Guia para tesis':
        return (
          <div className="p-6 bg-gray-50 min-h-full flex flex-col items-center justify-center">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Grupos de Estudio</h2>
              <p className="text-gray-600 mb-4">Material de apoyo para grupos</p>
              
              {/* Botón para descargar PDF */}
              <button
                onClick={() => downloadPDF('Pasos para una tesis Exitosa.pdf')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Descargar Material de Estudio
              </button>
            </div>
          </div>
        );
      default:
        return <ChatInterface />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-['Inter',sans-serif]">
      <Header />
      <div className="flex">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="flex-1">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;