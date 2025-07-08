export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  type?: 'text' | 'suggestion' | 'resource';
}

export interface AcademicResource {
  id: string;
  title: string;
  type: 'document' | 'video' | 'exercise' | 'link';
  subject: string;
  description: string;
  url?: string;
}

export interface StudySession {
  id: string;
  subject: string;
  duration: number;
  startTime: Date;
  completed: boolean;
}

export interface AcademicSubject {
  id: string;
  name: string;
  code: string;
  semester: number;
  credits: number;
  color: string;
}