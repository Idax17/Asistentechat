import React, { useState } from 'react';
import { FileText, Video, Link, BookOpen, Search, Filter, Download } from 'lucide-react';
import { academicResources, academicSubjects } from '../data/academicData';

const ResourcesView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <FileText className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'link':
        return <Link className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  const getResourceColor = (type: string) => {
    switch (type) {
      case 'document':
        return 'text-blue-600 bg-blue-100';
      case 'video':
        return 'text-red-600 bg-red-100';
      case 'link':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  // Recursos académicos con enlaces reales
  const realAcademicResources = [
    {
      id: '1',
      title: 'Cálculo Diferencial - Apuntes Completo',
      description: 'Documento con todos los temas de cálculo diferencial',
      subject: 'Cálculo I',
      type: 'document',
      url: 'https://www.math.cuhk.edu.hk/course_builder/1516/math1010c/calculus_notes.pdf',
      downloadUrl: 'https://www.math.cuhk.edu.hk/course_builder/1516/math1010c/calculus_notes.pdf'
    },
    {
      id: '2',
      title: 'Física Universitaria - Volumen 1',
      description: 'Libro completo de física universitaria',
      subject: 'Física I',
      type: 'document',
      url: 'https://www.fisica.unam.mx/personales/fisicavirtual/libros/Fisica_Universitaria_Vol1.pdf',
      downloadUrl: 'https://www.fisica.unam.mx/personales/fisicavirtual/libros/Fisica_Universitaria_Vol1.pdf'
    },
    {
      id: '3',
      title: 'Introducción a la Programación con Python',
      description: 'Video tutorial completo para principiantes',
      subject: 'Programación I',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
      downloadUrl: null
    },
    {
      id: '4',
      title: 'Álgebra Lineal - MIT OpenCourseWare',
      description: 'Curso completo de álgebra lineal del MIT',
      subject: 'Álgebra Lineal',
      type: 'link',
      url: 'https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/',
      downloadUrl: null
    },
    {
      id: '5',
      title: 'Ejercicios Resueltos de Química General',
      description: 'Colección de problemas con soluciones',
      subject: 'Química General',
      type: 'document',
      url: 'https://web.ua.es/es/giem/wp-content/uploads/sites/17/2018/05/ejercicios-resueltos-quimica-general.pdf',
      downloadUrl: 'https://web.ua.es/es/giem/wp-content/uploads/sites/17/2018/05/ejercicios-resueltos-quimica-general.pdf'
    },
    {
      id: '6',
      title: 'Estructuras de Datos - CS50',
      description: 'Clase magistral sobre estructuras de datos',
      subject: 'Programación I',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=3uGchQbk7g8',
      downloadUrl: null
    }
  ];

  const filteredResources = realAcademicResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || resource.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const handleResourceClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDownload = (url: string | null, title: string) => {
    if (!url) return;
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Recursos Académicos</h2>
          <p className="text-gray-600">Encuentra materiales de estudio, guías y recursos para tus materias</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar recursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                aria-label="Filtrar por materia"
              >
                <option value="all">Todas las materias</option>
                {academicSubjects.map(subject => (
                  <option key={subject.id} value={subject.name}>{subject.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Documentos</h3>
            <p className="text-2xl font-bold text-blue-600">
              {realAcademicResources.filter(r => r.type === 'document').length}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Video className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Videos</h3>
            <p className="text-2xl font-bold text-red-600">
              {realAcademicResources.filter(r => r.type === 'video').length}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Link className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Enlaces</h3>
            <p className="text-2xl font-bold text-green-600">
              {realAcademicResources.filter(r => r.type === 'link').length}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Ejercicios</h3>
            <p className="text-2xl font-bold text-purple-600">
              {realAcademicResources.filter(r => r.type === 'document' && r.title.includes('Ejercicios')).length}
            </p>
          </div>
        </div>

        {/* Resources List */}
        <div className="space-y-4">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${getResourceColor(resource.type)}`}>
                    {getResourceIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{resource.title}</h3>
                    <p className="text-gray-600 mb-2">{resource.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded">{resource.subject}</span>
                      <span className="capitalize">{resource.type}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {resource.downloadUrl && (
                    <button 
                      onClick={() => handleDownload(resource.downloadUrl, resource.title)}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Descargar"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                  )}
                  <button 
                    onClick={() => handleResourceClick(resource.url)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Ver Recurso
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron recursos</h3>
            <p className="text-gray-600">Intenta ajustar tus filtros de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesView;