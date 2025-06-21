export interface Subject {
  id: string;
  name: string;
  code: string;
  credits: number;
  type: 'Básica' | 'Profesional' | 'Electiva' | 'Grado' | 'Servicio' | 'Práctica';
  semester: number;
  description: string;
  objectives: string[];
  prerequisites: string[];
  topics: string[];
  evaluation: {
    exams: number;
    assignments: number;
    projects: number;
    participation: number;
  };
  difficulty: 1 | 2 | 3 | 4 | 5;
  workload: 'Baja' | 'Media' | 'Alta' | 'Muy Alta';
  professor?: string;
  schedule?: string;
  resources: {
    books: string[];
    websites: string[];
    software: string[];
  };
  tips: string[];
  relatedCareers: string[];
}

export interface Semester {
  number: number;
  name: string;
  subjects: Subject[];
  totalCredits: number;
  description: string;
  keySkills: string[];
}