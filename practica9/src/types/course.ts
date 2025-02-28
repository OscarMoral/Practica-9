export interface Lesson {
  title: string;
  duration: string;
  videoUrl?: string;
}

export interface Module {
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  category: string;
  image: string;
  videoUrl: string;
  instructor: {
    name: string;
    bio: string;
    avatar: string;
  };
  learningObjectives: string[];
  syllabus: Module[];
  rating?: number;
  reviews?: {
    id: string;
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  enrolled?: number;
  isPurchased?: boolean;
} 