import { Subject, Semester } from '../types/Subject';

export const subjects: Subject[] = [
  // Primer Semestre
  {
    id: 'cel-1',
    name: 'Comprensión y Expresión Lingüística',
    code: 'CEL',
    credits: 3,
    type: 'Básica',
    semester: 1,
    description: 'Desarrollo de habilidades comunicativas orales y escritas, fundamentales para el desempeño académico y profesional.',
    objectives: [
      'Desarrollar competencias comunicativas efectivas',
      'Mejorar la redacción técnica y académica',
      'Fortalecer la expresión oral y presentaciones',
      'Analizar textos técnicos y científicos'
    ],
    prerequisites: [],
    topics: [
      'Técnicas de redacción',
      'Comunicación oral',
      'Análisis de textos',
      'Presentaciones efectivas',
      'Escritura técnica'
    ],
    evaluation: { exams: 30, assignments: 40, projects: 20, participation: 10 },
    difficulty: 2,
    workload: 'Media',
    resources: {
      books: ['Manual de Redacción Científica', 'Comunicación Efectiva'],
      websites: ['RAE', 'Fundéu'],
      software: ['Microsoft Word', 'PowerPoint']
    },
    tips: [
      'Practica la escritura diariamente',
      'Lee textos técnicos regularmente',
      'Participa activamente en clase',
      'Solicita retroalimentación constante'
    ],
    relatedCareers: ['Todas las ingenierías', 'Comunicación', 'Educación']
  },
  {
    id: 'ocu-1',
    name: 'Orientación y Cultura Universitaria',
    code: 'OCU',
    credits: 2,
    type: 'Básica',
    semester: 1,
    description: 'Introducción a la vida universitaria, desarrollo de habilidades de estudio y conocimiento de la cultura institucional.',
    objectives: [
      'Adaptarse al ambiente universitario',
      'Conocer la estructura y servicios de la UNEG',
      'Desarrollar hábitos de estudio efectivos',
      'Fomentar valores universitarios'
    ],
    prerequisites: [],
    topics: [
      'Historia de la UNEG',
      'Servicios estudiantiles',
      'Técnicas de estudio',
      'Planificación académica',
      'Ética universitaria'
    ],
    evaluation: { exams: 20, assignments: 30, projects: 30, participation: 20 },
    difficulty: 1,
    workload: 'Baja',
    resources: {
      books: ['Manual del Estudiante UNEG', 'Técnicas de Estudio Universitario'],
      websites: ['Portal UNEG', 'Biblioteca Virtual'],
      software: ['Plataforma LMS']
    },
    tips: [
      'Participa en actividades extracurriculares',
      'Conoce todos los servicios disponibles',
      'Establece una rutina de estudio',
      'Conecta con compañeros y profesores'
    ],
    relatedCareers: ['Todas las carreras universitarias']
  },
  {
    id: 'tei-1',
    name: 'Técnicas de Estudio e Investigación',
    code: 'TEI',
    credits: 3,
    type: 'Básica',
    semester: 1,
    description: 'Desarrollo de metodologías de estudio y habilidades de investigación científica para el éxito académico.',
    objectives: [
      'Dominar técnicas de estudio efectivas',
      'Desarrollar habilidades de investigación',
      'Aprender metodología científica básica',
      'Gestionar información académica'
    ],
    prerequisites: [],
    topics: [
      'Métodos de estudio',
      'Investigación documental',
      'Metodología científica',
      'Gestión del tiempo',
      'Técnicas de memorización'
    ],
    evaluation: { exams: 25, assignments: 35, projects: 25, participation: 15 },
    difficulty: 2,
    workload: 'Media',
    resources: {
      books: ['Metodología de la Investigación', 'Técnicas de Estudio Efectivo'],
      websites: ['Google Scholar', 'ResearchGate'],
      software: ['Mendeley', 'Zotero']
    },
    tips: [
      'Experimenta con diferentes técnicas de estudio',
      'Mantén un horario de estudio consistente',
      'Usa herramientas de gestión de referencias',
      'Practica la síntesis de información'
    ],
    relatedCareers: ['Investigación', 'Académica', 'Todas las ingenierías']
  },
  {
    id: 'mat1-1',
    name: 'Matemática I',
    code: 'MAT1',
    credits: 4,
    type: 'Básica',
    semester: 1,
    description: 'Fundamentos del cálculo diferencial e integral, base matemática esencial para todas las materias de ingeniería.',
    objectives: [
      'Dominar conceptos de límites y continuidad',
      'Aplicar técnicas de derivación',
      'Resolver problemas de optimización',
      'Comprender aplicaciones del cálculo'
    ],
    prerequisites: [],
    topics: [
      'Límites y continuidad',
      'Derivadas y aplicaciones',
      'Integrales definidas e indefinidas',
      'Aplicaciones del cálculo',
      'Funciones trascendentes'
    ],
    evaluation: { exams: 60, assignments: 25, projects: 10, participation: 5 },
    difficulty: 4,
    workload: 'Alta',
    resources: {
      books: ['Cálculo de Stewart', 'Cálculo de Larson'],
      websites: ['Khan Academy', 'Wolfram Alpha'],
      software: ['GeoGebra', 'Mathematica', 'MATLAB']
    },
    tips: [
      'Practica problemas diariamente',
      'Forma grupos de estudio',
      'Usa software matemático para visualizar',
      'No dejes acumular dudas'
    ],
    relatedCareers: ['Ingeniería', 'Matemáticas', 'Física', 'Economía']
  },
  {
    id: 'qui-1',
    name: 'Química General',
    code: 'QUI',
    credits: 3,
    type: 'Básica',
    semester: 1,
    description: 'Principios fundamentales de la química, estructura atómica, enlaces químicos y reacciones básicas.',
    objectives: [
      'Comprender la estructura atómica',
      'Analizar enlaces químicos',
      'Balancear ecuaciones químicas',
      'Aplicar conceptos en ingeniería'
    ],
    prerequisites: [],
    topics: [
      'Estructura atómica',
      'Tabla periódica',
      'Enlaces químicos',
      'Reacciones químicas',
      'Estequiometría'
    ],
    evaluation: { exams: 50, assignments: 20, projects: 20, participation: 10 },
    difficulty: 3,
    workload: 'Media',
    resources: {
      books: ['Química General de Chang', 'Principios de Química'],
      websites: ['ChemSpider', 'PubChem'],
      software: ['ChemSketch', 'Avogadro']
    },
    tips: [
      'Relaciona conceptos con aplicaciones reales',
      'Practica cálculos estequiométricos',
      'Usa modelos moleculares',
      'Conecta con materiales de ingeniería'
    ],
    relatedCareers: ['Ingeniería Química', 'Materiales', 'Ambiental']
  },
  {
    id: 'fi-1',
    name: 'Fundamentos de la Informática',
    code: 'FI',
    credits: 3,
    type: 'Profesional',
    semester: 1,
    description: 'Introducción a los conceptos básicos de la informática, historia de la computación y panorama de la carrera.',
    objectives: [
      'Conocer la historia de la computación',
      'Comprender arquitecturas básicas',
      'Identificar áreas de la informática',
      'Desarrollar pensamiento computacional'
    ],
    prerequisites: [],
    topics: [
      'Historia de la computación',
      'Arquitectura de computadores',
      'Sistemas de numeración',
      'Áreas de la informática',
      'Ética en informática'
    ],
    evaluation: { exams: 40, assignments: 30, projects: 20, participation: 10 },
    difficulty: 2,
    workload: 'Media',
    resources: {
      books: ['Introducción a la Informática', 'Historia de la Computación'],
      websites: ['Computer History Museum', 'IEEE Computer Society'],
      software: ['Simuladores de arquitectura']
    },
    tips: [
      'Mantente actualizado con tendencias tecnológicas',
      'Explora diferentes áreas de la informática',
      'Participa en comunidades tech',
      'Desarrolla curiosidad por la tecnología'
    ],
    relatedCareers: ['Ingeniería Informática', 'Sistemas', 'Software']
  },
  {
    id: 'lc-1',
    name: 'Lógica Computacional',
    code: 'LC',
    credits: 3,
    type: 'Profesional',
    semester: 1,
    description: 'Fundamentos de lógica matemática aplicada a la computación, base para el razonamiento algorítmico.',
    objectives: [
      'Dominar lógica proposicional',
      'Aplicar lógica de predicados',
      'Desarrollar razonamiento lógico',
      'Conectar lógica con programación'
    ],
    prerequisites: [],
    topics: [
      'Lógica proposicional',
      'Lógica de predicados',
      'Métodos de demostración',
      'Conjuntos y relaciones',
      'Inducción matemática'
    ],
    evaluation: { exams: 50, assignments: 30, projects: 15, participation: 5 },
    difficulty: 4,
    workload: 'Alta',
    resources: {
      books: ['Lógica Matemática', 'Matemáticas Discretas'],
      websites: ['ProofWiki', 'Logic Matters'],
      software: ['Coq', 'Lean', 'Natural Deduction']
    },
    tips: [
      'Practica demostraciones formales',
      'Conecta conceptos con programación',
      'Usa diagramas de Venn',
      'Trabaja en grupos para discutir problemas'
    ],
    relatedCareers: ['Matemáticas', 'Filosofía', 'Inteligencia Artificial']
  }
];

export const semesters: Semester[] = [
  {
    number: 1,
    name: 'Primer Semestre',
    subjects: subjects.filter(s => s.semester === 1),
    totalCredits: 21,
    description: 'Semestre de adaptación universitaria y fundamentos básicos. Se enfoca en desarrollar habilidades de estudio, comunicación y bases matemáticas.',
    keySkills: ['Comunicación efectiva', 'Hábitos de estudio', 'Pensamiento lógico', 'Fundamentos matemáticos']
  },
  {
    number: 2,
    name: 'Segundo Semestre',
    subjects: [],
    totalCredits: 23,
    description: 'Continuación de fundamentos con introducción a la programación y conceptos más avanzados de matemáticas y física.',
    keySkills: ['Programación básica', 'Física aplicada', 'Álgebra lineal', 'Inglés técnico']
  },
  {
    number: 3,
    name: 'Tercer Semestre',
    subjects: [],
    totalCredits: 25,
    description: 'Profundización en programación y estructuras de datos, con bases sólidas en matemáticas y estadística.',
    keySkills: ['Estructuras de datos', 'Programación avanzada', 'Sistemas digitales', 'Análisis estadístico']
  },
  {
    number: 4,
    name: 'Cuarto Semestre',
    subjects: [],
    totalCredits: 25,
    description: 'Introducción a temas centrales de la carrera: algoritmos, bases de datos, arquitectura y ingeniería de software.',
    keySkills: ['Diseño de algoritmos', 'Bases de datos', 'Arquitectura de computadores', 'Ingeniería de software']
  },
  {
    number: 5,
    name: 'Quinto Semestre',
    subjects: [],
    totalCredits: 27,
    description: 'Semestre intensivo con materias core de la carrera: sistemas operativos, redes, y desarrollo web.',
    keySkills: ['Sistemas operativos', 'Redes de computadoras', 'Desarrollo web', 'Investigación de operaciones']
  },
  {
    number: 6,
    name: 'Sexto Semestre',
    subjects: [],
    totalCredits: 24,
    description: 'Especialización en áreas avanzadas con introducción al servicio comunitario y primera electiva.',
    keySkills: ['Compiladores', 'Inteligencia artificial', 'Seguridad informática', 'Gestión de proyectos']
  },
  {
    number: 7,
    name: 'Séptimo Semestre',
    subjects: [],
    totalCredits: 21,
    description: 'Preparación para la especialización con múltiples electivas y inicio del trabajo de grado.',
    keySkills: ['Auditoría de sistemas', 'Sistemas distribuidos', 'Minería de datos', 'Investigación aplicada']
  },
  {
    number: 8,
    name: 'Octavo Semestre',
    subjects: [],
    totalCredits: 18,
    description: 'Culminación de la carrera con trabajo de grado, pasantías y electivas de especialización.',
    keySkills: ['Investigación avanzada', 'Experiencia profesional', 'Especialización', 'Proyecto final']
  }
];