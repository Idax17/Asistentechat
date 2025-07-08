import React, { useState } from 'react';
import { FileText, Video, Link, BookOpen, Search, Filter, Download } from 'lucide-react';

// Definición de tipos para TypeScript
type ResourceType = 'document' | 'video' | 'playlist' | 'link';

interface AcademicResource {
  id: string;
  title: string;
  description: string;
  subject: string;
  type: ResourceType;
  url: string;
  thumbnail?: string;
  duration?: string;
  author?: string;
  videoCount?: number;
  downloadUrl?: string | null;
}

interface Subject {
  id: string;
  name: string;
}

const ResourcesView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedResource, setSelectedResource] = useState<AcademicResource | null>(null);

  // Datos de materias académicas
  const academicSubjects: Subject[] = [
    { id: '1', name: 'Cálculo I' },
    { id: '2', name: 'Álgebra Lineal' },
    { id: '3', name: 'Programación' },
    { id: '4', name: 'Física I' },
    { id: '5', name: 'Química General' }
  ];

  const academicResources: Record<string, AcademicResource[]> = {
  mathematics: [
    {
      id: 'math1',
      title: 'Cálculo Diferencial - Curso Completo',
      description: 'Curso desde cero con ejemplos prácticos',
      subject: 'Cálculo I',
      type: 'playlist',
      url: 'https://www.youtube.com/watch?v=ZSYQ13iMbYA',
      thumbnail: 'https://i.ytimg.com/vi/9QeJBkrHlxA/hqdefault.jpg',
      videoCount: 45,
      author: 'El Físico Gamer'
    },
    {
      id: 'math2',
      title: 'Álgebra Lineal desde Cero',
      description: 'Fundamentos con aplicaciones prácticas',
      subject: 'Álgebra Lineal',
      type: 'playlist',
      url: 'https://www.youtube.com/playlist?list=PLIb_io8a5NB2DddFf-PwvZDCOUNT1GZoA',
      videoCount: 28,
      author: 'Ingeniería Para Todos'
    }
  ],
  programming: [
    {
      id: 'prog1',
      title: 'Python para Principiantes',
      description: 'Curso completo desde cero',
      subject: 'Programación',
      type: 'playlist',
      url: 'https://www.youtube.com/playlist?list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS',
      videoCount: 58,
      author: 'Píldoras Informáticas'
    },
    {
      id: 'prog2',
      title: 'Algoritmos y Estructuras de Datos',
      description: 'Explicación detallada en español',
      subject: 'Programación',
      type: 'playlist',
      url: 'https://www.youtube.com/watch?v=aLh6tP07RrI&list=PLO3R5XK6X_ThZXV4HAK66Ja80aQsFqxeq',
      videoCount: 15,
      author: 'Alvaro Hergenreder'
    }
  ],
  physics: [
  {
    id: 'phy1',
    title: 'Física Universitaria - Curso Completo',
    description: 'Desde mecánica clásica hasta termodinámica',
    subject: 'Física I',
    type: 'playlist',
    url: 'https://www.youtube.com/watch?v=nSYCcJESDrU',
    videoCount: 72,
    author: 'Física con Juan'
  },
  {
    id: 'phy3',
    title: 'Electromagnetismo',
    description: 'Teoría y aplicaciones prácticas',
    subject: 'Física II',
    type: 'playlist',
    url: 'https://www.youtube.com/watch?v=_lrWIogPNFo',
    videoCount: 28,
    author: 'Física con Christian Rodríguez'
  },
],

};

  // Aplanar todos los recursos para búsqueda y filtrado
  const allResources = Object.values(academicResources).flat();

  // Funciones auxiliares
  const getResourceIcon = (type: ResourceType) => {
    switch (type) {
      case 'document': return <FileText className="h-5 w-5" />;
      case 'video': return <Video className="h-5 w-5" />;
      case 'playlist': return <Video className="h-5 w-5" />;
      case 'link': return <Link className="h-5 w-5" />;
      default: return <BookOpen className="h-5 w-5" />;
    }
  };

  const getResourceColor = (type: ResourceType) => {
    switch (type) {
      case 'document': return 'text-blue-600 bg-blue-100';
      case 'video': 
      case 'playlist': return 'text-red-600 bg-red-100';
      case 'link': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredResources = allResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || resource.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const handleResourceClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDownload = (url: string | null | undefined, title: string) => {
    if (!url) return;
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getResourceCountByType = (type: ResourceType) => {
    return allResources.filter(r => r.type === type).length;
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
              {getResourceCountByType('document')}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Video className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Videos</h3>
            <p className="text-2xl font-bold text-red-600">
              {getResourceCountByType('video') + getResourceCountByType('playlist')}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Link className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Enlaces</h3>
            <p className="text-2xl font-bold text-green-600">
              {getResourceCountByType('link')}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Ejercicios</h3>
            <p className="text-2xl font-bold text-purple-600">
              {allResources.filter(r => r.title.includes('Ejercicios')).length}
            </p>
          </div>
        </div>

        {/* Resources List */}
        <div className="space-y-4">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                <div className="flex items-start space-x-4 w-full">
                  <div className={`p-3 rounded-lg ${getResourceColor(resource.type)}`}>
                    {getResourceIcon(resource.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{resource.title}</h3>
                    <p className="text-gray-600 mb-2">{resource.description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded">{resource.subject}</span>
                      <span className="capitalize">{resource.type}</span>
                      {resource.author && (
                        <span className="bg-gray-100 px-2 py-1 rounded">Por: {resource.author}</span>
                      )}
                      {resource.duration && (
                        <span className="bg-gray-100 px-2 py-1 rounded">Duración: {resource.duration}</span>
                      )}
                      {resource.videoCount && (
                        <span className="bg-gray-100 px-2 py-1 rounded">{resource.videoCount} videos</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-shrink-0 gap-2 w-full md:w-auto">
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
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1"
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

        {/* Modal para recursos */}
        {selectedResource && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-lg font-bold">{selectedResource.title}</h3>
                <button 
                  onClick={() => setSelectedResource(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
              
              <div className="p-4">
                {selectedResource.type === 'video' || selectedResource.type === 'playlist' ? (
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src={`https://www.youtube.com/embed/${
                        selectedResource.url.includes('list') 
                          ? `?list=${selectedResource.url.split('list=')[1]}`
                          : selectedResource.url.split('v=')[1]
                      }`}
                      className="w-full h-96"
                      allowFullScreen
                      title={selectedResource.title}
                    />
                  </div>
                ) : (
                  <iframe 
                    src={selectedResource.url} 
                    className="w-full h-96" 
                    frameBorder="0"
                    title={selectedResource.title}
                  />
                )}
                
                <div className="mt-4">
                  <a 
                    href={selectedResource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    {selectedResource.type === 'document' ? 'Descargar PDF' : 'Ver en YouTube'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesView;