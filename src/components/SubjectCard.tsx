/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Subject } from '../types/Subject';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Target, 
  CheckCircle,
  AlertCircle,
  Lightbulb,
  ExternalLink
} from 'lucide-react';

interface SubjectCardProps {
  subject: Subject;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, isExpanded = false, onToggle }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'resources' | 'tips'>('overview');

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Básica': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Profesional': return 'bg-green-100 text-green-800 border-green-200';
      case 'Electiva': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Grado': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Servicio': return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Práctica': return 'bg-pink-100 text-pink-800 border-pink-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty <= 2) return 'text-green-600';
    if (difficulty <= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getWorkloadColor = (workload: string) => {
    switch (workload) {
      case 'Baja': return 'text-green-600 bg-green-50';
      case 'Media': return 'text-yellow-600 bg-yellow-50';
      case 'Alta': return 'text-orange-600 bg-orange-50';
      case 'Muy Alta': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < count ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div 
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {subject.name}
              </h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(subject.type)}`}>
                {subject.type}
              </span>
            </div>
            <p className="text-gray-600 mb-3">{subject.description}</p>
          </div>
          {onToggle && (
            <button className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors">
              {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          )}
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <BookOpen className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Código</p>
              <p className="font-semibold">{subject.code}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="bg-green-100 p-2 rounded-lg">
              <Clock className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Créditos</p>
              <p className="font-semibold">{subject.credits}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Dificultad</p>
              <div className="flex items-center space-x-1">
                {renderStars(subject.difficulty)}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Users className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Carga</p>
              <span className={`px-2 py-1 rounded-md text-xs font-medium ${getWorkloadColor(subject.workload)}`}>
                {subject.workload}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-gray-100">
          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            {[
              { id: 'overview', label: 'Resumen', icon: Target },
              { id: 'content', label: 'Contenido', icon: BookOpen },
              { id: 'resources', label: 'Recursos', icon: ExternalLink },
              { id: 'tips', label: 'Consejos', icon: Lightbulb }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Objectives */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    <span>Objetivos</span>
                  </h4>
                  <ul className="space-y-2">
                    {subject.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prerequisites */}
                {subject.prerequisites.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Prerrequisitos</h4>
                    <div className="flex flex-wrap gap-2">
                      {subject.prerequisites.map((prereq, index) => (
                        <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                          {prereq}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Evaluation */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Evaluación</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">{subject.evaluation.exams}%</p>
                      <p className="text-sm text-gray-600">Exámenes</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">{subject.evaluation.assignments}%</p>
                      <p className="text-sm text-gray-600">Tareas</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">{subject.evaluation.projects}%</p>
                      <p className="text-sm text-gray-600">Proyectos</p>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <p className="text-2xl font-bold text-orange-600">{subject.evaluation.participation}%</p>
                      <p className="text-sm text-gray-600">Participación</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'content' && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Temas del Curso</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {subject.topics.map((topic, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-6">
                {/* Books */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Libros Recomendados</h4>
                  <ul className="space-y-2">
                    {subject.resources.books.map((book, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700">{book}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Websites */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Sitios Web Útiles</h4>
                  <ul className="space-y-2">
                    {subject.resources.websites.map((website, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <ExternalLink className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">{website}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Software */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Software Requerido</h4>
                  <div className="flex flex-wrap gap-2">
                    {subject.resources.software.map((software, index) => (
                      <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {software}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tips' && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Consejos para el Éxito</h4>
                <div className="space-y-3">
                  {subject.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                      <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectCard;