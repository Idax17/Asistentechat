import { AcademicSubject, AcademicResource } from '../types';

export const academicSubjects: AcademicSubject[] = [
  { id: '1', name: 'Cálculo I', code: 'MAT-101', semester: 1, credits: 4, color: 'bg-blue-500' },
  { id: '2', name: 'Física I', code: 'FIS-101', semester: 1, credits: 4, color: 'bg-green-500' },
  { id: '3', name: 'Química General', code: 'QUI-101', semester: 1, credits: 3, color: 'bg-purple-500' },
  { id: '4', name: 'Programación I', code: 'INF-101', semester: 1, credits: 4, color: 'bg-orange-500' },
  { id: '5', name: 'Álgebra Lineal', code: 'MAT-102', semester: 2, credits: 3, color: 'bg-red-500' },
  { id: '6', name: 'Estadística', code: 'EST-101', semester: 3, credits: 3, color: 'bg-indigo-500' },
];

export const academicResources: AcademicResource[] = [
  {
    id: '1',
    title: 'Guía de Derivadas - Cálculo I',
    type: 'document',
    subject: 'Cálculo I',
    description: 'Guía completa con ejercicios resueltos de derivadas',
  },
  {
    id: '2',
    title: 'Guias practicas de Física',
    type: 'link',
    subject: 'Física I',
    description: 'Guias de estudio de física',
  },
  {
    id: '3',
    title: 'Ejercicios de Programación Basicos',
    type: 'exercise',
    subject: 'Programación I',
    description: 'Conjunto de ejercicios prácticos para principiantes',
  },
];

export const commonQuestions = [
  "¿Cómo puedo mejorar mis notas en matemáticas?",
  "¿Qué recursos tienes para Física I?",
  "Ayúdame con ejercicios de programación",
  "¿Cómo organizar mi tiempo de estudio?",
  "¿Qué técnicas de estudio recomiendas?",
  "Información sobre horarios de clases",
];

export const studyTips = [
  {
    title: "Técnica Pomodoro",
    description: "Estudia 25 minutos, descansa 5. Repite 4 veces y toma un descanso largo.",
    icon: "Clock"
  },
  {
    title: "Mapas Mentales",
    description: "Organiza la información visualmente para mejor comprensión y memorización.",
    icon: "Brain"
  },
  {
    title: "Estudio Activo",
    description: "Explica conceptos en voz alta, haz preguntas y resuelve problemas.",
    icon: "MessageSquare"
  },
  {
    title: "Ambiente de Estudio",
    description: "Mantén un espacio limpio, bien iluminado y libre de distracciones.",
    icon: "Home"
  }
];