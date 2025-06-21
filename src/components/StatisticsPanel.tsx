import React from 'react';
import { BookOpen, Clock, Users, Award, TrendingUp, Target } from 'lucide-react';

interface StatisticsPanelProps {
  totalSubjects: number;
  totalCredits: number;
  averageDifficulty: number;
  subjectsByType: Record<string, number>;
}

const StatisticsPanel: React.FC<StatisticsPanelProps> = ({
  totalSubjects,
  totalCredits,
  averageDifficulty,
  subjectsByType
}) => {
  const stats = [
    {
      icon: BookOpen,
      label: 'Total Materias',
      value: totalSubjects,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      label: 'Total Créditos',
      value: totalCredits,
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Target,
      label: 'Dificultad Promedio',
      value: `${averageDifficulty.toFixed(1)}/5`,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Award,
      label: 'Duración',
      value: '4 años',
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
        <TrendingUp className="h-6 w-6 text-blue-600" />
        <span>Estadísticas del Plan de Estudios</span>
      </h3>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bgColor} rounded-xl p-6 border border-gray-100`}>
            <div className="flex items-center space-x-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subject Distribution */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Distribución por Tipo</h4>
        <div className="space-y-3">
          {Object.entries(subjectsByType).map(([type, count]) => {
            const percentage = (count / totalSubjects) * 100;
            const getTypeColor = (type: string) => {
              switch (type) {
                case 'Básica': return 'bg-blue-500';
                case 'Profesional': return 'bg-green-500';
                case 'Electiva': return 'bg-purple-500';
                case 'Grado': return 'bg-orange-500';
                case 'Servicio': return 'bg-teal-500';
                case 'Práctica': return 'bg-pink-500';
                default: return 'bg-gray-500';
              }
            };

            return (
              <div key={type} className="flex items-center space-x-4">
                <div className="w-24 text-sm font-medium text-gray-700">{type}</div>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${getTypeColor(type)} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="w-16 text-sm text-gray-600 text-right">
                  {count} ({percentage.toFixed(1)}%)
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatisticsPanel;