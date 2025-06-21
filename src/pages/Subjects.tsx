import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Clock, Users, GraduationCap } from 'lucide-react';
import { subjects, semesters } from '../data/subjects';
import SubjectCard from '../components/SubjectCard';
import SearchAndFilter from '../components/SearchAndFilter';
import StatisticsPanel from '../components/StatisticsPanel';

const Subjects = () => {
  const [expandedSemester, setExpandedSemester] = useState<number | null>(1);
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'semester' | 'list'>('semester');
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | null>(null);
  const [selectedWorkload, setSelectedWorkload] = useState<string | null>(null);

  // Filter subjects
  const filteredSubjects = useMemo(() => {
    return subjects.filter(subject => {
      const matchesSearch = searchTerm === '' || 
        subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subject.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSemester = selectedSemester === null || subject.semester === selectedSemester;
      const matchesType = selectedType === null || subject.type === selectedType;
      const matchesDifficulty = selectedDifficulty === null || subject.difficulty === selectedDifficulty;
      const matchesWorkload = selectedWorkload === null || subject.workload === selectedWorkload;

      return matchesSearch && matchesSemester && matchesType && matchesDifficulty && matchesWorkload;
    });
  }, [searchTerm, selectedSemester, selectedType, selectedDifficulty, selectedWorkload]);

  // Statistics
  const statistics = useMemo(() => {
    const totalSubjects = subjects.length;
    const totalCredits = subjects.reduce((sum, subject) => sum + subject.credits, 0);
    const averageDifficulty = subjects.reduce((sum, subject) => sum + subject.difficulty, 0) / subjects.length;
    
    const subjectsByType = subjects.reduce((acc, subject) => {
      acc[subject.type] = (acc[subject.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return { totalSubjects, totalCredits, averageDifficulty, subjectsByType };
  }, []);

  const toggleSemester = (semesterNumber: number) => {
    setExpandedSemester(expandedSemester === semesterNumber ? null : semesterNumber);
  };

  const toggleSubject = (subjectId: string) => {
    setExpandedSubject(expandedSubject === subjectId ? null : subjectId);
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-full shadow-lg">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Plan de Estudios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ingeniería Informática - Universidad Nacional Experimental de Guayana
          </p>
          
          {/* View Mode Toggle */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setViewMode('semester')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                viewMode === 'semester'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Vista por Semestres
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                viewMode === 'list'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Lista Completa
            </button>
          </div>
        </div>

        {/* Statistics Panel */}
        <StatisticsPanel {...statistics} />

        {/* Search and Filters */}
        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedSemester={selectedSemester}
          onSemesterChange={setSelectedSemester}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={setSelectedDifficulty}
          selectedWorkload={selectedWorkload}
          onWorkloadChange={setSelectedWorkload}
        />

        {/* Content */}
        {viewMode === 'semester' ? (
          /* Semester View */
          <div className="space-y-6">
            {semesters.map((semester) => {
              const semesterSubjects = filteredSubjects.filter(s => s.semester === semester.number);
              
              if (semesterSubjects.length === 0 && (selectedSemester !== null || searchTerm || selectedType || selectedDifficulty || selectedWorkload)) {
                return null;
              }

              return (
                <div
                  key={semester.number}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  {/* Semester Header */}
                  <button
                    onClick={() => toggleSemester(semester.number)}
                    className="w-full px-6 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-between text-white"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="bg-white/20 px-4 py-2 rounded-lg">
                        <span className="font-bold text-lg">{semester.number}</span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold">{semester.name}</h3>
                        <p className="text-blue-100 mt-1">{semester.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                          {semesterSubjects.length} materias
                        </span>
                        <p className="text-blue-100 text-sm mt-1">
                          {semester.totalCredits} créditos
                        </p>
                      </div>
                      {expandedSemester === semester.number ? (
                        <ChevronUp className="h-6 w-6" />
                      ) : (
                        <ChevronDown className="h-6 w-6" />
                      )}
                    </div>
                  </button>

                  {/* Semester Content */}
                  {expandedSemester === semester.number && (
                    <div className="p-6">
                      {/* Key Skills */}
                      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <h4 className="font-semibold text-blue-900 mb-2">Habilidades Clave del Semestre</h4>
                        <div className="flex flex-wrap gap-2">
                          {semester.keySkills.map((skill, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Subjects */}
                      <div className="space-y-4">
                        {semesterSubjects.map((subject) => (
                          <SubjectCard
                            key={subject.id}
                            subject={subject}
                            isExpanded={expandedSubject === subject.id}
                            onToggle={() => toggleSubject(subject.id)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <p className="text-gray-600">
                Mostrando {filteredSubjects.length} de {subjects.length} materias
              </p>
            </div>
            {filteredSubjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                isExpanded={expandedSubject === subject.id}
                onToggle={() => toggleSubject(subject.id)}
              />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredSubjects.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron materias
            </h3>
            <p className="text-gray-600">
              Intenta ajustar los filtros de búsqueda para encontrar las materias que buscas.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subjects;