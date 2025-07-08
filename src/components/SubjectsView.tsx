import React from 'react';
import { BookOpen, Clock, Award, TrendingUp } from 'lucide-react';
import { academicSubjects } from '../data/academicData';

const SubjectsView: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Mis Materias
          </h2>
          <p className="text-gray-600">
            Gestiona tus materias y revisa tu progreso académico
          </p>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard 
            icon={<BookOpen className="h-6 w-6 text-blue-600" />}
            title="Materias Activas"
            value="6"
            color="blue"
          />
          
          <StatCard 
            icon={<Award className="h-6 w-6 text-green-600" />}
            title="Promedio General"
            value="16.8"
            color="green"
          />
          
          <StatCard 
            icon={<Clock className="h-6 w-6 text-purple-600" />}
            title="Horas de Estudio"
            value="24h"
            color="purple"
          />
          
          <StatCard 
            icon={<TrendingUp className="h-6 w-6 text-orange-600" />}
            title="Créditos"
            value="21"
            color="orange"
          />
        </section>

        {/* Subjects Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicSubjects.map((subject) => (
            <SubjectCard 
              key={subject.id} 
              subject={subject} 
            />
          ))}
        </section>
      </div>
    </div>
  );
};

// Stat Card Component
interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, color }) => {
  const colorClasses = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    purple: 'bg-purple-100',
    orange: 'bg-orange-100'
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center">
        <div className={`${colorClasses[color]} p-3 rounded-lg`}>
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

// Subject Card Component
interface SubjectCardProps {
  subject: {
    id: string;
    name: string;
    code: string;
    credits: number;
    color: string;
  };
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Subject Header */}
      <div className={`h-2 ${subject.color}`} />
      
      <div className="p-6">
        {/* Title Section */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {subject.name}
            </h3>
            <p className="text-sm text-gray-600">
              {subject.code}
            </p>
          </div>
          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
            {subject.credits} créditos
          </span>
        </div>

        {/* Progress Section */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Progreso</span>
            <span className="text-sm font-medium text-gray-900">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${subject.color} opacity-80`} 
              style={{ width: '75%' }} 
            />
          </div>

          {/* Grade Section */}
          <div className="flex justify-between items-center pt-2">
            <span className="text-sm text-gray-600">Nota Actual</span>
            <span className="text-sm font-bold text-green-600">17.2</span>
          </div>
        </div>

        {/* Actions Section */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-50 text-blue-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
              Ver Recursos
            </button>
            <button className="flex-1 bg-gray-50 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Horarios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectsView;