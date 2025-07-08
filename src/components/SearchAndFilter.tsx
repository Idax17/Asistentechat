import React, { useState } from 'react';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedSemester: number | null;
  onSemesterChange: (semester: number | null) => void;
  selectedType: string | null;
  onTypeChange: (type: string | null) => void;
  selectedDifficulty: number | null;
  onDifficultyChange: (difficulty: number | null) => void;
  selectedWorkload: string | null;
  onWorkloadChange: (workload: string | null) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchTerm,
  onSearchChange,
  selectedSemester,
  onSemesterChange,
  selectedType,
  onTypeChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedWorkload,
  onWorkloadChange
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const types = ['Básica', 'Profesional', 'Electiva', 'Grado', 'Servicio', 'Práctica'];
  const workloads = ['Baja', 'Media', 'Alta', 'Muy Alta'];
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const clearFilters = () => {
    onSearchChange('');
    onSemesterChange(null);
    onTypeChange(null);
    onDifficultyChange(null);
    onWorkloadChange(null);
  };

  const hasActiveFilters = selectedSemester || selectedType || selectedDifficulty || selectedWorkload || searchTerm;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar materias por nombre, código o descripción..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span>Filtros Avanzados</span>
          {hasActiveFilters && (
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              Activos
            </span>
          )}
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <X className="h-4 w-4" />
            <span>Limpiar Filtros</span>
          </button>
        )}
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Semester Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Semestre
              </label>
              <select
                value={selectedSemester || ''}
                onChange={(e) => onSemesterChange(e.target.value ? parseInt(e.target.value) : null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label='semestre'
              >
                <option value="">Todos los semestres</option>
                {semesters.map(semester => (
                  <option key={semester} value={semester}>
                    Semestre {semester}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Materia
              </label>
              <select
                value={selectedType || ''}
                onChange={(e) => onTypeChange(e.target.value || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label='tipo-materia'
              >
                <option value="">Todos los tipos</option>
                {types.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dificultad
              </label>
              <select
                value={selectedDifficulty || ''}
                onChange={(e) => onDifficultyChange(e.target.value ? parseInt(e.target.value) : null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label='dificultad'
              >
                <option value="">Cualquier dificultad</option>
                <option value="1">⭐ Muy Fácil</option>
                <option value="2">⭐⭐ Fácil</option>
                <option value="3">⭐⭐⭐ Moderada</option>
                <option value="4">⭐⭐⭐⭐ Difícil</option>
                <option value="5">⭐⭐⭐⭐⭐ Muy Difícil</option>
              </select>
            </div>

            {/* Workload Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Carga de Trabajo
              </label>
              <select
                value={selectedWorkload || ''}
                onChange={(e) => onWorkloadChange(e.target.value || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label='carga'
              >
                <option value="">Cualquier carga</option>
                {workloads.map(workload => (
                  <option key={workload} value={workload}>
                    {workload}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;