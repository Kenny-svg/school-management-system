import { Subject } from '../types';

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: 'CS101',
    name: 'Introduction to Computer Science',
    department: 'Computer Science',
    description: 'An introductory course to the fundamental concepts of computer science.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: 'MA201',
    name: 'Calculus I',
    department: 'Mathematics',
    description: 'A first course in differential and integral calculus.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: 'PH301',
    name: 'Quantum Physics',
    department: 'Physics',
    description: 'An advanced course covering the principles of quantum mechanics.',
    createdAt: new Date().toISOString(),
  },
];