import type { Course } from '../types/course';

export const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Curso de Diseño Web',
    description: 'Aprende desarrollo web desde cero hasta un nivel avanzado con las últimas tecnologías.',
    price: 199.99,
    duration: '40 horas',
    level: 'Intermedio',
    category: 'Desarrollo Web',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
    videoUrl: 'RfS_a70WYQ0',
    instructor: {
      name: 'Ana Martínez',
      bio: 'Desarrolladora Senior con 10 años de experiencia',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    learningObjectives: [
      'Dominar HTML5, CSS3 y JavaScript moderno',
      'Construir aplicaciones web con React y Node.js',
      'Implementar bases de datos SQL y NoSQL',
      'Desplegar aplicaciones en la nube'
    ],
    syllabus: [
      {
        title: 'Fundamentos del Desarrollo Web',
        lessons: [
          { title: 'Introducción a HTML5', duration: '2 horas' },
          { title: 'CSS3 Avanzado', duration: '3 horas' },
          { title: 'JavaScript Moderno', duration: '4 horas' }
        ]
      },
      {
        title: 'Frontend con React',
        lessons: [
          { title: 'Introducción a React', duration: '3 horas' },
          { title: 'Componentes y Props', duration: '2 horas' },
          { title: 'Estado y Ciclo de Vida', duration: '3 horas' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Curso de Diseño Gráfico y Branding',
    description: 'Domina el diseño gráfico y la creación de marca.',
    price: 249.99,
    duration: '50 horas',
    level: 'Avanzado',
    category: 'Diseño',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
    videoUrl: 'g4leN1p4PsM',
    instructor: {
      name: 'Carlos López',
      bio: 'PhD en Inteligencia Artificial',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    learningObjectives: [
      'Comprender los fundamentos del Machine Learning',
      'Implementar modelos de aprendizaje supervisado y no supervisado',
      'Analizar y visualizar datos con Python',
      'Desarrollar proyectos de IA prácticos'
    ],
    syllabus: [
      {
        title: 'Fundamentos de Python para Data Science',
        lessons: [
          { title: 'Python y NumPy', duration: '3 horas' },
          { title: 'Pandas para análisis de datos', duration: '4 horas' },
          { title: 'Visualización con Matplotlib', duration: '3 horas' }
        ]
      },
      {
        title: 'Machine Learning',
        lessons: [
          { title: 'Regresión y Clasificación', duration: '4 horas' },
          { title: 'Redes Neuronales', duration: '5 horas' },
          { title: 'Deep Learning', duration: '6 horas' }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Curso de Desarrollo y Diseño Web',
    description: 'Aprende a crear interfaces atractivas y funcionales para aplicaciones web y móviles.',
    price: 179.99,
    duration: '35 horas',
    level: 'Principiante',
    category: 'Desarrollo Web',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    videoUrl: 'bYOjmW-740M',
    instructor: {
      name: 'Laura García',
      bio: 'Diseñadora UX/UI Senior',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    learningObjectives: [
      'Dominar los principios del diseño UX/UI',
      'Crear prototipos interactivos',
      'Realizar pruebas de usabilidad',
      'Diseñar interfaces responsivas'
    ],
    syllabus: [
      {
        title: 'Fundamentos de UX',
        lessons: [
          { title: 'Investigación de usuarios', duration: '3 horas' },
          { title: 'Arquitectura de información', duration: '2 horas' },
          { title: 'Wireframing', duration: '3 horas' }
        ]
      },
      {
        title: 'Diseño UI',
        lessons: [
          { title: 'Principios de diseño visual', duration: '3 horas' },
          { title: 'Sistemas de diseño', duration: '4 horas' },
          { title: 'Prototipado con Figma', duration: '3 horas' }
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Curso de Programación Front-End',
    description: 'Crea aplicaciones web modernas con las últimas tecnologías front-end.',
    price: 229.99,
    duration: '45 horas',
    level: 'Intermedio',
    category: 'Desarrollo Web',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-native-original.svg',
    videoUrl: 'F5oI24smKMk',
    instructor: {
      name: 'David Rodríguez',
      bio: 'Experto en desarrollo móvil',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    learningObjectives: [
      'Desarrollar aplicaciones móviles con React Native',
      'Implementar interfaces nativas',
      'Gestionar el estado de la aplicación',
      'Publicar apps en las tiendas'
    ],
    syllabus: [
      {
        title: 'Fundamentos de React Native',
        lessons: [
          { title: 'Introducción a React Native', duration: '3 horas' },
          { title: 'Componentes nativos', duration: '4 horas' },
          { title: 'Navegación', duration: '3 horas' }
        ]
      },
      {
        title: 'Desarrollo Avanzado',
        lessons: [
          { title: 'APIs nativas', duration: '4 horas' },
          { title: 'Rendimiento', duration: '3 horas' },
          { title: 'Publicación', duration: '2 horas' }
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Curso de Marketing Digital',
    description: 'Aprende estrategias efectivas de marketing digital.',
    price: 299.99,
    duration: '60 horas',
    level: 'Avanzado',
    category: 'Marketing',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
    videoUrl: 'g4leN1p4PsM',
    instructor: {
      name: 'Elena Torres',
      bio: 'Consultora de Ciberseguridad',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
    learningObjectives: [
      'Implementar sistemas de seguridad robustos',
      'Detectar y prevenir amenazas',
      'Realizar auditorías de seguridad',
      'Gestionar incidentes de seguridad'
    ],
    syllabus: [
      {
        title: 'Fundamentos de Ciberseguridad',
        lessons: [
          { title: 'Principios de seguridad', duration: '4 horas' },
          { title: 'Criptografía', duration: '5 horas' },
          { title: 'Seguridad en redes', duration: '6 horas' }
        ]
      },
      {
        title: 'Seguridad Avanzada',
        lessons: [
          { title: 'Ethical Hacking', duration: '8 horas' },
          { title: 'Forense Digital', duration: '6 horas' },
          { title: 'Respuesta a Incidentes', duration: '5 horas' }
        ]
      }
    ]
  },
  {
    id: '6',
    title: 'Curso de Creación de Contenidos para Redes Sociales',
    description: 'Aprende a crear contenido efectivo para redes sociales.',
    price: 159.99,
    duration: '30 horas',
    level: 'Principiante',
    category: 'Marketing',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
    videoUrl: 'bYOjmW-740M',
    instructor: {
      name: 'Pablo Sánchez',
      bio: 'Especialista en Marketing Digital',
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg'
    },
    learningObjectives: [
      'Desarrollar estrategias de marketing digital',
      'Optimizar sitios web para SEO',
      'Gestionar campañas de publicidad online',
      'Analizar métricas y KPIs'
    ],
    syllabus: [
      {
        title: 'Fundamentos de Marketing Digital',
        lessons: [
          { title: 'Introducción al Marketing Digital', duration: '2 horas' },
          { title: 'Estrategia de Contenidos', duration: '3 horas' },
          { title: 'Redes Sociales', duration: '3 horas' }
        ]
      },
      {
        title: 'SEO y Analytics',
        lessons: [
          { title: 'Optimización On-page', duration: '3 horas' },
          { title: 'Optimización Off-page', duration: '2 horas' },
          { title: 'Google Analytics', duration: '2 horas' }
        ]
      }
    ]
  },
  {
    id: '7',
    title: 'Curso de Programación y Desarrollo Web',
    description: 'Aprende programación web desde cero.',
    price: 279.99,
    duration: '55 horas',
    level: 'Intermedio',
    category: 'Desarrollo Web',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    videoUrl: 'F5oI24smKMk',
    instructor: {
      name: 'María Jiménez',
      bio: 'Arquitecta de Soluciones AWS',
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg'
    },
    learningObjectives: [
      'Diseñar arquitecturas en la nube',
      'Implementar servicios de AWS',
      'Gestionar seguridad y costos',
      'Automatizar infraestructura'
    ],
    syllabus: [
      {
        title: 'Fundamentos de AWS',
        lessons: [
          { title: 'Introducción a AWS', duration: '4 horas' },
          { title: 'Servicios Principales', duration: '6 horas' },
          { title: 'Redes en AWS', duration: '5 horas' }
        ]
      },
      {
        title: 'Arquitectura en la Nube',
        lessons: [
          { title: 'Diseño de Soluciones', duration: '6 horas' },
          { title: 'Alta Disponibilidad', duration: '5 horas' },
          { title: 'Seguridad en AWS', duration: '4 horas' }
        ]
      }
    ]
  },
  {
    id: '8',
    title: 'Curso de Fundamentos de Inteligencia Artificial',
    description: 'Introducción a la inteligencia artificial y sus aplicaciones.',
    price: 289.99,
    duration: '48 horas',
    level: 'Avanzado',
    category: 'Inteligencia Artificial',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    videoUrl: 'dQw4w9WgXcQ',
    instructor: {
      name: 'Roberto Méndez',
      bio: 'Desarrollador Blockchain Senior',
      avatar: 'https://randomuser.me/api/portraits/men/8.jpg'
    },
    learningObjectives: [
      'Comprender la tecnología blockchain',
      'Desarrollar smart contracts',
      'Crear aplicaciones descentralizadas',
      'Implementar tokens y NFTs'
    ],
    syllabus: [
      {
        title: 'Fundamentos de Blockchain',
        lessons: [
          { title: 'Introducción a Blockchain', duration: '4 horas' },
          { title: 'Criptografía', duration: '5 horas' },
          { title: 'Redes Blockchain', duration: '4 horas' }
        ]
      },
      {
        title: 'Smart Contracts',
        lessons: [
          { title: 'Solidity', duration: '6 horas' },
          { title: 'Desarrollo de DApps', duration: '5 horas' },
          { title: 'Seguridad en Smart Contracts', duration: '4 horas' }
        ]
      }
    ]
  },
  {
    id: '9',
    title: 'Curso de Desarrollo de Aplicaciones Móviles',
    description: 'Aprende a crear aplicaciones móviles modernas.',
    price: 219.99,
    duration: '42 horas',
    level: 'Intermedio',
    category: 'Desarrollo Móvil',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
    videoUrl: 'dQw4w9WgXcQ',
    instructor: {
      name: 'Sara Vega',
      bio: 'Artista 3D y Animadora',
      avatar: 'https://randomuser.me/api/portraits/women/9.jpg'
    },
    learningObjectives: [
      'Dominar el modelado 3D',
      'Crear animaciones profesionales',
      'Aplicar texturas y materiales',
      'Renderizar escenas realistas'
    ],
    syllabus: [
      {
        title: 'Modelado 3D',
        lessons: [
          { title: 'Fundamentos de Modelado', duration: '4 horas' },
          { title: 'Escultura Digital', duration: '5 horas' },
          { title: 'Texturizado', duration: '4 horas' }
        ]
      },
      {
        title: 'Animación',
        lessons: [
          { title: 'Principios de Animación', duration: '4 horas' },
          { title: 'Rigging', duration: '3 horas' },
          { title: 'Renderizado', duration: '3 horas' }
        ]
      }
    ]
  },
  {
    id: '10',
    title: 'Curso de Transformación Digital para el Empleo',
    description: 'Aprende las habilidades necesarias para la era digital.',
    price: 259.99,
    duration: '52 horas',
    level: 'Principiante',
    category: 'Transformación Digital',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    videoUrl: 'dQw4w9WgXcQ',
    instructor: {
      name: 'Jorge Ruiz',
      bio: 'Ingeniero DevOps Senior',
      avatar: 'https://randomuser.me/api/portraits/men/10.jpg'
    },
    learningObjectives: [
      'Implementar CI/CD',
      'Gestionar contenedores con Docker',
      'Orquestar con Kubernetes',
      'Automatizar infraestructura'
    ],
    syllabus: [
      {
        title: 'Fundamentos DevOps',
        lessons: [
          { title: 'Introducción a DevOps', duration: '3 horas' },
          { title: 'Git y Control de Versiones', duration: '4 horas' },
          { title: 'CI/CD', duration: '5 horas' }
        ]
      },
      {
        title: 'Contenedores y Orquestación',
        lessons: [
          { title: 'Docker', duration: '6 horas' },
          { title: 'Kubernetes', duration: '7 horas' },
          { title: 'Monitorización', duration: '4 horas' }
        ]
      }
    ]
  }
]; 